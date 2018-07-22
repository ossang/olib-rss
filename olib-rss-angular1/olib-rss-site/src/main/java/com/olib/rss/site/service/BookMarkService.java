package com.olib.rss.site.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.olib.rss.site.dao.BookMarkDao;
import com.olib.rss.site.model.BookMark;
import com.olib.rss.site.util.OlibJsonUtil;

@Service
public class BookMarkService {

	@Autowired
	private BookMarkDao dao;
	
	public void save(BookMark bookMark){
		dao.save(bookMark);
	}
	
	public void delete(int id){
		dao.delete(id);
	}
	
	public String save(String jsonData){
		String data = OlibJsonUtil.getJsonData(jsonData, "jsonData").toString();
		String url = OlibJsonUtil.getJsonData(data, "url").toString();
		String name = OlibJsonUtil.getJsonData(data, "name").toString();
		dao.save(new BookMark(name,url));
		return url;
	}
	
	public List<BookMark> load(){
		return dao.findAll();
	}
	
	public BookMark getBookMarkById(int id){
		return dao.findOne(id);
	}
}
