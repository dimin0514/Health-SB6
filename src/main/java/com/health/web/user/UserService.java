package com.health.web.user;

import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired UserMapper userMapper;
	@Autowired User user;
	public void userJoin(User param) {
		Consumer<User> consumer = t -> userMapper.signUp(param);
		consumer.accept(param);
	}
	public User userLogin(User param) {
		 Function<User, User> function  = t -> userMapper.login(t);
		 function.apply(param);
		return function.apply(param);
	}
	public String useridDuple(String userid) {
		String result = "";
		Function<String, Integer> function = t -> userMapper.existId(t);
		result = (function.apply(userid) != 0) ?  "YES": "NO"; 
		return result;
	}
	public User createRoutine(User param) {
		Consumer<User> consumer = t -> userMapper.makeRoutine(t);
		consumer.accept(param);
		Function<User, User> function = t -> userMapper.selectUpdatedUser(param);
		return function.apply(param);
	}
}
