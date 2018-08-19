package com.olib.rss.collector.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.olib.rss.core.model.FeedItem;

@Entity
public class RssItem {

	@Id
	@GeneratedValue
	private long id; 
	
	private String name;
	private String url;
	private String lastBuildDate;
	
	private String title;
	private String link;
	
	@Column(columnDefinition="TEXT")
	private String description;
	private String pubDate;
	
	public RssItem() {
		
	}

	public RssItem(
			String name, String url, String lastBuildDate, 
			String title, String link, String description,String pubDate) {
		
		this.name = name;
		this.url = url;
		this.lastBuildDate = lastBuildDate;
		this.title = title;
		this.link = link;
		this.description = description;
		this.pubDate = pubDate;
	}

	public RssItem(
			String name, String url, String lastBuildDate,
			FeedItem feedItem) {

		this.name = name;
		this.url = url;
		this.lastBuildDate = lastBuildDate;
		this.title = feedItem.getTitle();
		this.link = feedItem.getLink();
		this.description = feedItem.getDescription();
		this.pubDate = feedItem.getPubDate();
		
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPubDate() {
		return pubDate;
	}

	public void setPubDate(String pubDate) {
		this.pubDate = pubDate;
	}
	
}
