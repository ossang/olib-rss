package com.olib.rss.server.scheduler;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.olib.rss.collector.service.RssCollectorService;

@Component
public class OlibRssScheduler {

	@Autowired
	private RssCollectorService collectorService;
	
	@Scheduled(cron = "0 0/5 * * * ?")
	public void collectRssSchedule() {
		System.out.println(String.format("[%s][%s]",
				LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")),
				collectorService.collectRss()));
	}
}
