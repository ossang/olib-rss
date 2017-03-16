package com.olib.rss.site.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.olib.rss.site.core.model.FeedItem;
import com.olib.rss.site.core.service.RssService;
import com.olib.rss.site.model.BookMark;
import com.olib.rss.site.service.BookMarkService;

@Controller
public class RssController {
	
	@Autowired
	private BookMarkService bookMarkService;

	@Autowired
	private RssService rssService;
	
	@ResponseBody
	@RequestMapping(value="/bookmark",method=RequestMethod.GET)
	public List<BookMark> loadBookmark(){
		return bookMarkService.load();
	}
	
	@ResponseBody
	@RequestMapping(value="/bookmark",method=RequestMethod.POST)
	public List<FeedItem> saveBookmark(
			@RequestBody String jsonData){
		
		String url = bookMarkService.save(jsonData);
		return rssService.getFeedItems(url);
	}
	
	@ResponseBody
	@RequestMapping(value="/bookmark/{id}",method=RequestMethod.DELETE)
	public boolean deleteBookmark(
			@PathVariable(value = "id") int id){
		
		bookMarkService.delete(id);
		return true;
	}
	
	@ResponseBody
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public List<FeedItem> getRss(
			@PathVariable(value = "id") int id){
		
		String url = bookMarkService.getBookMarkById(id).getUrl();
		return rssService.getFeedItems(url);
	}
	
	
	
}
