package com.health.web.post;

import java.util.Arrays;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.health.web.pxy.Trunk;
import com.health.web.user.User;
import com.health.web.user.UserMapper;

@RestController
@RequestMapping("/follows")
public class FollowCtrl {
@Autowired User user;
@Autowired UserMapper userMapper;
@Autowired FollowMapper followMapper;
@Autowired Trunk<Object> trunk;

	//팔로우 요청 
		@PostMapping("/follow/{userno}")
		public Map<?,?> follow(@RequestBody User user, @PathVariable int userno) {
			Supplier<User> s= ()-> userMapper.infoUserByUserNo(userno); // 내가 팔로우 하고자 하는 사람의 모든 정보? 필요없는것 같음
			User toUser2 = s.get();  // 내가 팔로우 하고자 하는 사람의 모든 정보? 필요없는것 같음
			
			int fromUser = user.getUserno(); //내 정보 팔로워 하는 사람 (로그인한 사람 유저 넘버)
			int toUser = userno; //팔로워 당하는 사람 
			Follow follow = new Follow();
			follow.setFollowing(fromUser); // 팔로워 하는 사람 정보 
			follow.setFollower(toUser); //팔로워 당하는 사람  
			
			Consumer<Follow> c = t -> followMapper.follow(t);
			c.accept(follow);
			trunk.put(Arrays.asList("msg"), Arrays.asList("success"));
			return trunk.get();
		}
		
			
			
		//언팔로우 요청
		@PostMapping("/unfollow/{userno}")
		public Map<?,?> unfollow(@RequestBody User user, @PathVariable int userno) {
			
			Supplier<User> s= ()-> userMapper.infoUserByUserNo(userno); // 내가 팔로우 하고자 하는 사람의 모든 정보? 필요없는것 같음
			User toUser2 = s.get();  // 내가 팔로우 하고자 하는 사람의 모든 정보? 필요없는것 같음

			int fromUser = user.getUserno(); //내 정보 팔로워 하는 사람 (로그인한 사람 유저 넘버)
			int toUser = userno; //언팔로워 당하는 사람 
			Follow follow = new Follow();
			follow.setFollowing(fromUser); // 팔로워 하는 사람 정보 
			follow.setFollower(toUser); //팔로워 당하는 사람  
			
			Consumer<Follow> c = t -> followMapper.unfollow(t); //언팔로우 sql 가게...
			c.accept(follow);
			trunk.put(Arrays.asList("msg"), Arrays.asList("success"));
			return trunk.get();
		}

}
