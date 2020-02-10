package com.health.web.post;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface FollowMapper {
		//팔로우 하기
	public void follow(Follow follow);
		
		//언팔로우 하기
	public void unfollow(Follow follow);
		
		//팔로우 유무
	public int isFollow(Follow follow);
		
		//팔로우 리스트 조회
	public List<Follow> selectActiveUserList(int following);
		
		//팔로워 리스트 조회
	public List<Follow> selectPassiveUserList(int follower);
		
		//탈퇴시 팔로우삭제
	public void deleteUserAllFollow(int follow);
}
