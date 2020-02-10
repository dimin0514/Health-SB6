package com.health.web.recipe;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.health.web.pxy.Box;
import com.health.web.pxy.CrawlingProxy;
import com.health.web.pxy.PageProxy;
import com.health.web.pxy.Proxy;
import com.health.web.pxy.Trunk;
import com.health.web.util.Printer;

@RestController
@RequestMapping("/recipe")
public class RecipeCtrl extends Proxy{
	@Autowired RecipeMapper recipeMapper;
	@Autowired Recipe recipe;
	@Autowired Trunk<Object> trunk; @Autowired Box<Object> box;
	@Autowired CrawlingProxy crawler; @Autowired PageProxy pager; @Autowired Printer printer;
	
	@GetMapping("/crawl")
	public Map<?,?> insertNameAndImg(){
		crawler.insertRecipeCrawling();
		trunk.clear();
		trunk.put("msg", "success");
		return trunk.get();
	}
	@GetMapping("/info/{currPage}")
	public Map<?, ?> recipeInfo(@PathVariable int currPage){
		printer.accept("현재 페이지 ::" + currPage);
		Function<PageProxy, String> function = t -> recipeMapper.countRecipe(pager);
		function.apply(pager);
		
		printer.accept("총 레시피 카운트 :::" +function.apply(pager));
		int blockSize = 5 , pageSize = 9;
		pager.setBlockSize(blockSize);
		pager.setPageSize(pageSize);
		pager.setCurrPage(currPage);
		pager.setRowCount(integer(function.apply(pager)));
		pager.paging();
		
		Function<PageProxy ,ArrayList<Recipe>> f = t-> recipeMapper.totalRecipe(pager);
		printer.accept("디비에서 꺼내온 값 :::" + f.apply(pager) +"\n"+"사이즈 : "+f.apply(pager).size());
		
		ArrayList<Recipe> list = f.apply(pager);
		printer.accept("리스트 담은 사이즈 :::" + list.size());
		
		trunk.put(Arrays.asList("pagination","recipe"),Arrays.asList(pager,list));
		printer.accept("보내는 값"+"\n"+trunk.get());
		
		return trunk.get();
	}
}
