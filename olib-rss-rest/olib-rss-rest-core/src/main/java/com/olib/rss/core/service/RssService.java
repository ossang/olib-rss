package com.olib.rss.core.service;


import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.olib.rss.core.model.FeedItem;
import com.sun.syndication.feed.synd.SyndEntryImpl;
import com.sun.syndication.feed.synd.SyndFeed;
import com.sun.syndication.io.SyndFeedInput;
import com.sun.syndication.io.XmlReader;

@Service
public class RssService {
	private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
	
	private String convertDateString(Date date){
		if(date == null) return null;
		return sdf.format(date);
	}
	
	public boolean isValidUrl(String url){
		Optional<List<FeedItem>> optItems = getFeedItems(url);
		if(optItems.isPresent()){
			return true;
		}
		return false;
	}
	
	public Optional<List<FeedItem>> getFeedItems(String url){
		try{
			Optional<SyndFeed> optFeed = Optional.ofNullable(new SyndFeedInput().build(new XmlReader(new URL(url))));
			
			if(optFeed.isPresent()){
				List<SyndEntryImpl> feedList = optFeed.get().getEntries();
				
				return Optional.ofNullable(feedList.stream()
						.map(feed-> new FeedItem(
								feed.getTitle(),
								feed.getLink(),
								feed.getDescription().getValue(),
								convertDateString(feed.getPublishedDate())
								))
						.collect(Collectors.toList()));
				
			}else{
				return Optional.empty();
			}
			
		}catch(Exception e){
			return Optional.empty();
		}
	}
	
}
