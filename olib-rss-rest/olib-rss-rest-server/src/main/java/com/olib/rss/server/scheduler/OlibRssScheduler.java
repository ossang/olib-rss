package com.olib.rss.server.scheduler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.olib.rss.collector.service.RssCollectorService;

@Component
public class OlibRssScheduler {

	@Autowired
	private RssCollectorService collectorService;
	
	@Scheduled(cron = "*/10 * * * * ?")
	public void collectRssSchedule() {
		collectorService.collectRss();
	}
}
