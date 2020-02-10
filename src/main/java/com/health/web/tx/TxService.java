package com.health.web.tx;

import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.health.web.center.Center;
import com.health.web.pxy.CrawlingProxy;
import com.health.web.user.User;
import com.health.web.user.UserMapper;
import com.health.web.user.UserProxy;

@Service
public class TxService {
	@Autowired CrawlingProxy crawler;
	@Autowired Center center;
	@Autowired UserMapper userMapper;
	
	@Transactional
	public void centerCrawling() {
		crawler.insertCrawling();
	}
	@Transactional
	public void insertUser(User param) {
		UserProxy userProxy = new UserProxy();
		User u = new User();
		Consumer<User> consumer = t -> userMapper.insertDummy(t);
		for(int i=0; i <100; i++) {
			u = userProxy.makerUser();
			consumer.accept(u);
		}
	}
}
