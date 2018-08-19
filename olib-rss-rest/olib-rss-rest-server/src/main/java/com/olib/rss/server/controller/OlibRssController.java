package com.olib.rss.server.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.olib.rss.bookmark.service.BookMarkService;
import com.olib.rss.collector.service.RssCollectorService;
import com.olib.rss.core.controller.AbstractOlibRestController;
import com.olib.rss.core.model.FeedItem;
import com.olib.rss.core.service.RssService;

@RestController
@RequestMapping(value="/api/rss",produces = MediaType.APPLICATION_JSON_VALUE )
public class OlibRssController extends AbstractOlibRestController<FeedItem>{
	
	@Autowired
	private RssService rssService;
	
	@Autowired
	private BookMarkService bookmarkService;
	
	@Autowired
	private RssCollectorService collectorService;
	
	@GetMapping(value="/{bookmarkId}")
	public ResponseEntity<List<FeedItem>> getRssItemList(
			@PathVariable(value = "bookmarkId") int bookmarkId
			){
		
		Optional<List<FeedItem>> optFeedList = rssService.getFeedItems(
				bookmarkService.getBookMarkById(bookmarkId).getUrl());
		
		if(optFeedList.isPresent()){
			return responseOkList(optFeedList.get());
		}else{
			return responseNotFoundList();
		}
	}
	
	@GetMapping(value="/collect")
	public ResponseEntity<FeedItem> collectRss(){
		
		boolean isSuccess = collectorService.collectRss();
		if(isSuccess) {
			return responseOk();
		}else {
			return responseNotFound();
		}
	}
	
}
