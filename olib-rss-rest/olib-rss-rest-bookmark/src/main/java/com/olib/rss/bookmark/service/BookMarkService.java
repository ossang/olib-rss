package com.olib.rss.bookmark.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.olib.rss.bookmark.model.BookMark;
import com.olib.rss.bookmark.repository.BookMarkRepository;

@Service
public class BookMarkService {

	@Autowired
	private BookMarkRepository dao;
	
	public BookMark update(BookMark bookMark){
		Optional<BookMark> optBookMark = dao.findById((bookMark.getId()));
		
		if(optBookMark.isPresent()) {
			optBookMark.get().setName(bookMark.getName());
			optBookMark.get().setUrl(bookMark.getUrl());
			return save(optBookMark.get());
		}
		return save(bookMark);
	}
	
	public BookMark save(BookMark bookMark){
		return dao.save(bookMark);
	}
	
	public void delete(int id){
		dao.deleteById(id);
	}
	
	public Optional<List<BookMark>> load(){
		return Optional.ofNullable(dao.findAll());
	}
	
	public Optional<BookMark> getBookMarkById(int id){
		return dao.findById((id));
	}
}
