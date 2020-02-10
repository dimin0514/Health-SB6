package com.health.web.recipe;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
@Lazy
public class Recipe {
	private String fname, fimg, ingredients, fcontent ,link;
	private int recipeno;
}
