package com.health.web;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class Test {
	public static void main(String[] args) {
		Random r = new Random();
//		String fheight = String.valueOf(r.nextInt(999)+1);
//		String lheight = String.valueOf(r.nextInt(9));
//		String result = String.format("%3d.%dcm",fheight,lheight);
//		System.out.println(result);
		
		String y,m= "";
        y=String.valueOf(r.nextInt(110)+1909);
        List<String> month= Arrays.asList("01","02","03","04","05","06","07","08","09","10","11","12");
        Collections.shuffle(month);
        m= month.get(0);
        System.out.println(y+m);
        String height = "";
        String rheight = String.valueOf((int)(Math.random()*(190-150))+150);
        height += rheight;
        System.out.println(height);
        String weight = String.valueOf((int)(Math.random()*(100-40))+40);
        System.out.println(weight);
        String fat =  String.valueOf((int)(Math.random()*(0-28))+29);
        System.out.println(fat);
        String muscle = String.valueOf((int)(Math.random()*(10-28))+29);
        System.out.println(muscle);
        String age = String.valueOf((int)(Math.random()*(50-20))+20);
        System.out.println(age);
//        List<String> careers = Arrays.asList("1","2","3","4","5","6","7");
//		List<String>career = careers.stream().reduce("4").collect(Collectors.toList());
//        System.out.println(career);
	}
}
