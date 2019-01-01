package com.olib.rss.favorite.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.olib.rss.favorite.model.OlibRssFavorite;
import com.olib.rss.favorite.repository.OlibRssFavoriteRepository;

@Service
public class OlibRssFavoriteService {

	@Autowired
	private OlibRssFavoriteRepository dao;
	
	public OlibRssFavorite save(OlibRssFavorite rss) {
		return this.dao.save(rss);
	}
	
	public Optional<List<OlibRssFavorite>> load() {
		return Optional.ofNullable(this.dao.findAll());
	}
	
	public void delete(int id) {
		this.dao.deleteById(id);
	}
}
