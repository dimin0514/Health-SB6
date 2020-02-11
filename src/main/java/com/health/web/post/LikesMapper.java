package com.health.web.post;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface LikesMapper {
		public void create(Likes param);

		public int read(Likes likes);
		
		public void delete(Likes param);
	

}
