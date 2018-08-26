package com.olib.rss.collector.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RssCollectHistory {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id; 
	
	private String name;
	private String url;
	private String collectDate;
	private int collectCount;
	
	public RssCollectHistory() {}
	public RssCollectHistory(
			String name, 
			String url, 
			String collectDate, 
			int collectCount) {
		this.name = name;
		this.url = url;
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
