package com.health.web.user;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Lazy
@Component
public class User {
	private String userid, passwd, uname, age, gender, height, weight, fat, muscle;
	private int career,division, userno;
}
