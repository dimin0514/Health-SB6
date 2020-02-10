package com.health.web.post;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
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

import com.health.web.pxy.PageProxy;
import com.health.web.pxy.ProxyMap;
import com.health.web.pxy.Trunk;

@RestController
@RequestMapping("/reply")
public class ReplyCtrl {
	@Autowired ReplyMapper replyMapper;
	@Autowired Trunk<Object> trunk;
	@Autowired ProxyMap map;
	@Autowired PageProxy pager;
	@Autowired List<Reply> list;
	
	@PostMapping("/create")
	public Map<?,?> insert(@RequestBody Reply param){
		System.out.println("댓글쓰기 들어옴"+ param.getContent());
		Consumer<Reply> c = t -> replyMapper.create(t);
		c.accept(param);
		trunk.put(Arrays.asList("msg"),Arrays.asList("SUCCESS"));
		return trunk.get();
	}

	@GetMapping("/list/{postno}")
	public List<Reply> list(@PathVariable int postno){
		System.out.println("댓글리스트 들어옴"+postno);
		Supplier<List<Reply>> s= ()-> replyMapper.list(postno);
		return s.get(); 
	}
	
	@GetMapping("/infiniteList/{currPage}/{postno}")
	public Map<?,?> infiniteList(@PathVariable("pageSize") String pageSize, @PathVariable("currPage") String currPage, @PathVariable int postno){
		System.out.println("댓글리스트 들어옴"+postno);
		list.clear();
		pager.setPageSize(10);
		pager.setCurrPage(Integer.parseInt(currPage));
		pager.setBlockSize(5);
		Supplier<Integer> s1 =()->  replyMapper.countReply(postno);
		pager.setRowCount(s1.get());
		Supplier<List<Reply>> s2= ()-> replyMapper.infiniteList(pager);
		map.accept(Arrays.asList("reply","pxy"), Arrays.asList(s2.get(), pager));
		return map.get();
	}
	

	@PutMapping("/update/{commentno}")
	public Map<?,?> update(@PathVariable int commentno, @RequestBody Reply param) {
		System.out.println("수정 댓글번호" + param.getContent());
		Consumer<Reply> c = t -> replyMapper.update(param);
		c.accept(param);
		trunk.put(Arrays.asList("msg"), Arrays.asList("success"));
		return trunk.get();
	}
	
	@DeleteMapping("/delete/{commentno}")
	public Map<?,?> deleteBrd(@PathVariable int commentno){
		System.out.println("삭제 들어옴 삭제번호는 " +commentno);
		Consumer<Integer> c = t-> replyMapper.delete(commentno);
		c.accept(commentno);
		trunk.put(Arrays.asList("msg"), Arrays.asList("success"));
		return trunk.get();
	}
}
