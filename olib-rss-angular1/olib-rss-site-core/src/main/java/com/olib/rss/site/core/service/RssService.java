package com.olib.rss.site.core.service;


import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.olib.rss.site.core.model.FeedItem;
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
	
	public List<FeedItem> getFeedItems(String url){
		ArrayList<FeedItem> feeds = new ArrayList<>();
		try{
			URL feedUrl = new URL(url);
		
			SyndFeedInput input = new SyndFeedInput();
			SyndFeed feed = input.build(new XmlReader(feedUrl));
		
			if(feed == null) return null;
			List<SyndEntryImpl> list = feed.getEntries();
			list.forEach(a -> feeds.add(new FeedItem(
						a.getTitle(),
						a.getLink(),
						a.getDescription().getValue(),
						convertDateString(a.getPublishedDate())
						))); 
		}catch(Exception e){
			return null;
		}
		
		return feeds;
	}
	
}
