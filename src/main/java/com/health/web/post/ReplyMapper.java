package com.health.web.post;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.health.web.pxy.PageProxy;

@Repository
public interface ReplyMapper {
	// 댓글 목록
    public List<Reply> list(int postno);
    public List<Reply> infiniteList(PageProxy pager);
    
    // 댓글 입력
    public void create(Reply param);
    // 댓글 수정
    public void update(Reply param);
    // 댓글 삭제
    public void delete(int commentno);
	//댓글수
	public int countReply(int postno);
}
