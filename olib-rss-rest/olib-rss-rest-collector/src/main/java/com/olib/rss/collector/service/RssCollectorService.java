package com.olib.rss.collector.service;

import java.net.URL;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.olib.rss.bookmark.model.BookMark;
import com.olib.rss.bookmark.service.BookMarkService;
import com.olib.rss.collector.model.RssCollectHistory;
import com.olib.rss.collector.model.RssItem;
import com.olib.rss.collector.model.RssItemLatest;
import com.olib.rss.collector.repository.RssCollectHistoryRepository;
import com.olib.rss.collector.repository.RssItemLatestRepository;
import com.olib.rss.collector.repository.RssItemRepository;
import com.sun.syndication.feed.synd.SyndEntryImpl;
import com.sun.syndication.feed.synd.SyndFeed;
import com.sun.syndication.io.SyndFeedInput;
import com.sun.syndication.io.XmlReader;

@Service
public class RssCollectorService {

	@Autowired
	private BookMarkService bookMarkService;
	
	@Autowired
	private RssItemRepository rssItemDao;
	
	@Autowired
	private RssItemLatestRepository rssItemLatestDao;
	
	@Autowired
	private RssCollectHistoryRepository historyDao;
	
	private static final String DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
	private static SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
	
	private String convertDateString(Date date){
		if(date == null) return null;
		return sdf.format(date);
	}
	
	private static LocalDateTime parseStringToDate(String date) {
		return LocalDateTime.parse(date, DateTimeFormatter.ofPattern(DATE_FORMAT));

	}
	
	public boolean collectRss() {
		try {
			Optional<List<BookMark>> optBookMark = bookMarkService.load();
			if(optBookMark.isPresent()) {
				List<String> urlList = optBookMark.get().stream().map(BookMark::getUrl).collect(Collectors.toList());
				saveRssItem(urlList);
			}
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	private void saveRssItem(List<String> urlList){
		 urlList.stream()
		 	.map(url -> getRssItemList(url))
		 	.filter(rssItem -> rssItem.isPresent())
		 	.map(rssItem -> rssItem.get())
		 	.filter(rssItemList -> isLatestData(rssItemList))
		 	.forEach(rssItemList->{
		 		saveRssItemLatest(rssItemList);
		 		saveRssCollectHistory(rssItemList);
		 		rssItemDao.save(rssItemList);
		 	});
	}
	
	private void saveRssCollectHistory(List<RssItem> rssItemList) {
		if(rssItemList == null || rssItemList.size() == 0) return;
		
		RssCollectHistory history = new RssCollectHistory();
		history.setCollectCount(rssItemList.size());
		history.setCollectDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern(DATE_FORMAT)));
		history.setName(rssItemList.get(0).getName());
		history.setUrl(rssItemList.get(0).getUrl());
		historyDao.save(history);
	}
	
	private void saveRssItemLatest(List<RssItem> rssItemList) {
		if(rssItemList == null || rssItemList.size() == 0) return;
		
		RssItemLatest latestData = rssItemLatestDao.findByUrl(rssItemList.get(0).getUrl());
		if(latestData == null) {
			latestData = new RssItemLatest();
		}
 		latestData.setCollectCount(rssItemList.size());
 		latestData.setCollectDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern(DATE_FORMAT)));
 		latestData.setName(rssItemList.get(0).getName());
 		latestData.setLastBuildDate(rssItemList.get(0).getLastBuildDate());
 		latestData.setUrl(rssItemList.get(0).getUrl());
 		
 		rssItemLatestDao.save(latestData);
	}
	
	private boolean isLatestData(List<RssItem> rssItemList) {
		if(rssItemList == null) return false;
		if(rssItemList.size() > 0) {
			RssItemLatest latestData = rssItemLatestDao.findByUrl(rssItemList.get(0).getUrl());
			if(latestData == null) return true;
			LocalDateTime updateDate = parseStringToDate(latestData.getLastBuildDate());
			LocalDateTime compareDate = parseStringToDate(rssItemList.get(0).getLastBuildDate());
			return updateDate.isBefore(compareDate);
		}
		return false;
	}
	
	private Optional<List<RssItem>> getRssItemList(String url){
		try {
			SyndFeed syndFeed = new SyndFeedInput().build(new XmlReader(new URL(url)));
			List<SyndEntryImpl> feedList = syndFeed.getEntries();
			return Optional.ofNullable(feedList.stream()
				.map(feed -> new RssItem(
						syndFeed.getTitle(), 
						url, 
						convertDateString(syndFeed.getPublishedDate()),
						feed.getTitle(), 
						feed.getLink(), 
						feed.getDescription().getValue(), 
						convertDateString(feed.getPublishedDate())))
				.collect(Collectors.toList()));
			
		} catch (Exception e) {
			return Optional.empty();
		}
	}
}
