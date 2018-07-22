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
		BookMark oldBookMark = dao.findOne(bookMark.getId());
		
		if(oldBookMark != null){
			oldBookMark.setName(bookMark.getName());
			oldBookMark.setUrl(bookMark.getUrl());
			return save(oldBookMark);
		}else{
			return save(bookMark);
		}
	}
	
	public BookMark save(BookMark bookMark){
		return dao.save(bookMark);
	}
	
	public void delete(int id){
		dao.delete(id);
	}
	
	public Optional<List<BookMark>> load(){
		return Optional.ofNullable(dao.findAll());
	}
	
	public BookMark getBookMarkById(int id){
		return dao.findOne(id);
	}
}
