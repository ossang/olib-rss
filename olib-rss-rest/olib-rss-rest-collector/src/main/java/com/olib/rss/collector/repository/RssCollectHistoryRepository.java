package com.olib.rss.collector.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.olib.rss.collector.model.RssCollectHistory;

public interface RssCollectHistoryRepository extends JpaRepository<RssCollectHistory, Long>{

}
