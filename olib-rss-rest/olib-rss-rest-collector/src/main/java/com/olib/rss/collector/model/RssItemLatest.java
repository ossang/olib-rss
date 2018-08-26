package com.olib.rss.collector.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RssItemLatest {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id; 
	
	private String name;
	private String url;
	private String lastBuildDate;
	private String collectDate;
	private int collectCount;
	
	public RssItemLatest() {}
	public RssItemLatest(RssItem rssItem, String collectDate,int collectCount) {
		this.name = rssItem.getName();
		this.url = rssItem.getUrl();
		this.lastBuildDate = rssItem.getLastBuildDate();
		this.collectDate = collectDate;
		this.collectCount = collectCount;
	}
	
	public RssItemLatest(
			String name, 
			String url, 
			String lastBuildDate, 
			String collectDate,
			int collectCount) {
		
		this.name = name;
		this.url = url;
		this.lastBuildDate = lastBuildDate;
		this.collectDate = collectDate;
		this.collectCount = collectCount;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getLastBuildDate() {
		return lastBuildDate;
	}

	public void setLastBuildDate(String lastBuildDate) {
		this.lastBuildDate = lastBuildDate;
	}

	public String getCollectDate() {
		return collectDate;
	}

	public void setCollectDate(String collectDate) {
		this.collectDate = collectDate;
	}

	public int getCollectCount() {
		return collectCount;
	}

	public void setCollectCount(int collectCount) {
		this.collectCount = collectCount;
	}

}
