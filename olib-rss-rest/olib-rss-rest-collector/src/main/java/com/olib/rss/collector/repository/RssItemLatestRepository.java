package com.olib.rss.collector.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.olib.rss.collector.model.RssItemLatest;

public interface RssItemLatestRepository extends JpaRepository<RssItemLatest, Integer> {

	public RssItemLatest findByUrl(String url);
}
