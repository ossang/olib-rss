package com.olib.rss.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@ComponentScan({"com.olib.*"})
@EnableJpaRepositories(basePackages ={
		"com.olib.rss.bookmark.repository",
		"com.olib.security.jwt.repository",
		"com.olib.rss.collector.repository"})
@EntityScan(basePackages ={
		"com.olib.rss.bookmark.model",
		"com.olib.security.jwt.model",
		"com.olib.rss.collector.model"})
@EnableTransactionManagement
@EnableScheduling
public class OlibRssServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(OlibRssServerApplication.class, args);
	}
}
