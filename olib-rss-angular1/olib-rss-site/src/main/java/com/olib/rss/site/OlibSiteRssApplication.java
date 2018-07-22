package com.olib.rss.site;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.olib.*")
public class OlibSiteRssApplication {

	public static void main(String[] args) {
		SpringApplication.run(OlibSiteRssApplication.class, args);
	}
}
