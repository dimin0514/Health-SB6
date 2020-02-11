package com.health.web.post;


import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.health.web.pxy.Trunk;
import com.health.web.user.User;

@RestController
@RequestMapping("/likes")
public class LikesCtrl {
	@Autowired User user;

	@Autowired LikesMapper likesMapper;
	@Autowired Trunk<Object> trunk;
	
	@PutMapping("/create")
	public Map<?,?> createLike(@RequestBody Likes param) {
		System.out.println("하트 클릭시 넘어온 좋아요 관련 정보" +param.getPostno()+param.getUserno());
		Likes likes = new Likes();
		likes.setPostno(param.getPostno());
		likes.setUserno(param.getUserno());
		Consumer<Likes> c = t-> likesMapper.create(t);
		c.accept(param);
		
		trunk.put(Arrays.asList("msg"),Arrays.asList("success"));
		
		return trunk.get();
		
	}
	@GetMapping("/read/{postno}/{userno}")
	public int read(@PathVariable int postno, @PathVariable int userno){
		System.out.println(postno+"유저넘버:"+ userno);
		Likes likes = new Likes();
		likes.setPostno(postno);
		likes.setUserno(userno);
		
		Function<Likes,Integer> f = c-> likesMapper.read(likes);
		f.apply(likes);
		System.out.println("하트 읽기 들어옴 갯수는?"+f.apply(likes)+likes.toString());
	
		return f.apply(likes);
	}
	
	@DeleteMapping("/delete/{postno}")
	public  Map<?,?> deleteLike(@PathVariable int postno, @RequestBody Likes param) {
		Consumer<Likes> c = t-> likesMapper.delete(param);
		c.accept(param);

		trunk.put(Arrays.asList("msg"),Arrays.asList("success"));
		return trunk.get();
	}
}
