package com.olib.rss.site.ui;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RssUiController {

	@RequestMapping(value="/main")
	public String agentUiMain(){
		return "/rssui/rssui_main";
	}
}
