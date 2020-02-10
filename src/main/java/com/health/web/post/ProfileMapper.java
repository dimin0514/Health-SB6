package com.health.web.post;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface ProfileMapper {
	public void insertUserImg(Profile profile);
	public void deleteUserImg(int userno);
	public List<Profile> selectedProfile(int userno);
	public void updateProfile(Profile param);
}
