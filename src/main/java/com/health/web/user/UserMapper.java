package com.health.web.user;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.health.web.center.Center;

@Repository
public interface UserMapper {
	public void signUp(User param);
	public User login(User param);
	public int existId(String userid);
	public void insetMap(Center param);
	public void makeRoutine(User param);
	public User selectUpdatedUser(User param);
	public User infoUserByUserNo(int userno);
	public void insertDummy(User param);
 }
