package com.health.web.routine;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@Lazy
public class Routine {
	private String userid, ename, gender, part, parta, partb, partc, partd, parte, link;
	private double muscle, fat;
	private int rweight, career, division;
}
