package com.olib.rss.server.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.olib.rss.bookmark.model.BookMark;
import com.olib.rss.bookmark.service.BookMarkService;
import com.olib.rss.core.model.FeedItem;
import com.olib.rss.core.service.RssService;

@Service
public class RssSummaryService {

	@Autowired
	private BookMarkService bookmarkService;
	
	@Autowired
	private RssService rssService;
	
	public Optional<List<FeedItem>> getSummaryList() {
		Optional<List<BookMark>> bookmarkList = bookmarkService.load();
		if(bookmarkList.isPresent()) {
			List<FeedItem> feedList = new ArrayList<>();
			
			bookmarkList.get().stream()
				.map(BookMark::getUrl)
				.map(url-> rssService.getFeedItems(url))
				.filter(list -> list.isPresent())
				.forEach(list-> feedList.addAll(list.get()));
			
			return Optional.of(feedList);
		}
		return Optional.empty();
	}
}
