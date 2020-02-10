package com.health.web.tx;

import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.health.web.pxy.CrawlingProxy;
import com.health.web.pxy.Trunk;
import com.health.web.user.User;
import com.health.web.user.UserProxy;
import com.health.web.util.Printer;

@RestController
@RequestMapping("/tx")
public class TxController {
	
	@Autowired CrawlingProxy crawler;
	@Autowired TxService txService;
//	@Autowired UserProxy userProxy;
	@Autowired Trunk<Object> trunk; @Autowired Printer printer;
	
	@GetMapping("/crawling/center")
	public Map<?,?> centerCrawling(){
		printer.accept("헬스센터 크롤링 진입");
		txService.centerCrawling();
		trunk.clear();
		trunk.put("msg", "success");
		return trunk.get();
	}
	@GetMapping("/")
	public Map<?,?> insertDummy(){
		printer.accept("더미값 넣기");
		UserProxy userProxy = new UserProxy();
		txService.insertUser(userProxy.makerUser());
		trunk.put("msg", "success");
		return trunk.get();
	}
}
