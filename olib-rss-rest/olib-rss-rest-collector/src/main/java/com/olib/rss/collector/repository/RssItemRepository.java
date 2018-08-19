package com.olib.rss.collector.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.olib.rss.collector.model.RssItem;

public interface RssItemRepository extends JpaRepository<RssItem, Long> {

}
