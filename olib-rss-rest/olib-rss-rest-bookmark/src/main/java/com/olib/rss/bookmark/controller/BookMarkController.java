package com.olib.rss.bookmark.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.olib.rss.bookmark.model.BookMark;
import com.olib.rss.bookmark.service.BookMarkService;
import com.olib.rss.core.controller.AbstractOlibRestController;
import com.olib.rss.core.service.RssService;

@RestController
@RequestMapping(value="/api/rss/bookmark")
public class BookMarkController extends AbstractOlibRestController<BookMark>{
	
	@Autowired
	private BookMarkService bookMarkService;

	@Autowired
	private RssService rssService;
	
	@GetMapping(value="")
	public ResponseEntity<List<BookMark>> getBookmark(){
		Optional<List<BookMark>> optList = bookMarkService.load();
		
		if(optList.isPresent()){
			return responseOkList(optList.get());
		}else{
			return responseNotFoundList();
		}
	}
	
	@PostMapping(value="")
	public ResponseEntity<BookMark> postBookmark(
			@RequestBody BookMark bookMark
			){
		
		boolean isValidUrl = rssService.isValidUrl(bookMark.getUrl());
		
		if(isValidUrl){
			return responseOk(bookMarkService.save(bookMark));
		}else{
			return responseNotFound();
		}
		
	}
	
	@PutMapping(value="")
	public ResponseEntity<BookMark> putBookmark(
			@RequestBody BookMark bookMark
			){
		
		boolean isValidUrl = rssService.isValidUrl(bookMark.getUrl());
		
		if(isValidUrl){
			return responseOk(bookMarkService.update(bookMark));
		}else{
			return responseNotFound();
		}
		
	}

	@DeleteMapping(value="/{id}")
	public ResponseEntity<Void> deleteBookmark(
			@PathVariable(value = "id") int id
			){
		
		bookMarkService.delete(id);
		return responseOkVoid();
	}
	
}
