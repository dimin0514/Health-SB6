package com.health.web.recipe;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.health.web.pxy.PageProxy;

@Repository
public interface RecipeMapper {
	public void insertRecipe(Recipe param);
	public ArrayList<Recipe> totalRecipe(PageProxy param);
	public String countRecipe(PageProxy param);
}
