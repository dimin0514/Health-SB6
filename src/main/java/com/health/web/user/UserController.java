package com.health.web.user;
import java.util.Arrays;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.health.web.pxy.Trunk;
import com.health.web.util.Printer;


@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired User user;  @Autowired UserService userService; 
	@Autowired Printer printer; @Autowired Trunk<Object> trunk;  
   
	
	//create
	@PostMapping("/join")
	public Map<?,?> signUp(@RequestBody User param) {
		printer.accept("회원가입 정보  ::" +param);
		userService.userJoin(param);
		trunk.put("msg", "success");
		return trunk.get();
	}
	//read
	@PostMapping("/login")
	public Map<?, ?> signIn(@RequestBody User param){
		printer.accept("ajax에서 넘어온 아이디 & 비번 :" +"\n"+param.getUserid() +'\n'+ param.getPasswd());
		trunk.clear();
		trunk.put(Arrays.asList("msg","user"),Arrays.asList("success",userService.userLogin(param)));
		return trunk.get();
	}
	//read
	@GetMapping("/exist/{userid}")
	public Map<?,?> dupleCheck(@PathVariable String userid){
		trunk.clear();
		trunk.put("msg", userService.useridDuple(userid));
		return trunk.get();
	}
	//update
	@PutMapping("/{userid}")
	public User makeRoutine(@RequestBody User param) {
		return userService.createRoutine(param);
	}
}
