package com.health.web.user;
import java.net.IDN;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.health.web.pxy.Proxy;
public class UserProxy extends Proxy{
//	@Autowired User user;
	
	public User makerUser() {
		String userid = "", name ="", age = "", gender = "";
		List<String> idE = Arrays.asList("a","b","c","d","e","f","g"
				,"h","i","j","k","l","n","m","o","p"
				,"q","r","s","t","u","v","w","x","y","z");
		List<String> idN = Arrays.asList("0","1","2","3","4","5","6","7","8","9");
		List<String> FN = Arrays.asList("김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "서", "신", "권", "황", "안",
                "송", "류", "전", "홍", "고", "문", "양", "손", "배", "조", "백", "허", "유", "남", "심", "노", "정", "하", "곽", "성", "차", "주",
                "우", "구", "신", "임", "나", "전", "민", "유", "진", "지", "엄", "채", "원", "천", "방", "공", "강", "현", "함", "변", "염", "양",
                "변", "여", "추", "노", "도", "소", "신", "석", "선", "설", "마", "길", "주", "연", "방", "위", "표", "명", "기", "반", "왕", "금",
                "옥", "육", "인", "맹", "제", "모", "장", "남", "탁", "국", "여", "진", "어", "은", "편", "구", "용");
		List<String> LN = Arrays.asList("가", "강", "건", "경", "고", "관", "광", "구", "규", "근", "기", "길", "나", "남", "노", "누", "다",
                "단", "달", "담", "대", "덕", "도", "동", "두", "라", "래", "로", "루", "리", "마", "만", "명", "무", "문", "미", "민", "바", "박",
                "백", "범", "별", "병", "보", "빛", "사", "산", "상", "새", "서", "석", "선", "설", "섭", "성", "세", "소", "솔", "수", "숙", "순",
                "숭", "슬", "승", "시", "신", "아", "안", "애", "엄", "여", "연", "영", "예", "오", "옥", "완", "요", "용", "우", "원", "월", "위",
                "유", "윤", "율", "으", "은", "의", "이", "익", "인", "일", "잎", "자", "잔", "장", "재", "전", "정", "제", "조", "종", "주", "준",
                "중", "지", "진", "찬", "창", "채", "천", "철", "초", "춘", "충", "치", "탐", "태", "택", "판", "하", "한", "해", "혁", "현", "형",
                "혜", "호", "홍", "화", "환", "회", "효", "훈", "휘", "희", "운", "모", "배", "부", "림", "봉", "혼", "황", "량", "린", "을", "비",
                "솜", "공", "면", "탁", "온", "디", "항", "후", "려", "균", "묵", "송", "욱", "휴", "언", "령", "섬", "들", "견", "추", "걸", "삼",
                "열", "웅", "분", "변", "양", "출", "타", "흥", "겸", "곤", "번", "식", "란", "더", "손", "술", "훔", "반", "빈", "실", "직", "흠",
                "흔", "악", "람", "뜸", "권", "복", "심", "헌", "엽", "학", "개", "롱", "평", "늘", "늬", "랑", "얀", "향", "울", "련");
		List<String> genders = Arrays.asList("male","female");
		
		String fid = "" , lid = "";
		Collections.shuffle(LN);
		Collections.shuffle(FN);
		Collections.shuffle(genders);
		for(int i=0 ;i <= 2; i++) {
			Collections.shuffle(idE);
			fid += idE.get(0); 
		}
		for(int i=0; i<=2;i++) {
			Collections.shuffle(idN);
			lid += idN.get(0);
		}
//		for(int i =0; i <= 2; i++) {
//			Collections.shuffle(idN);
//			passwd += idN.get(0);
//		}
		name = FN.get(0) + LN.get(0) + LN.get(1);
		User user = new User();
		user.setUserid(fid + lid);
		user.setPasswd("1");
		user.setUname(name);
		user.setGender(genders.get(0));
		user.setAge(userAge());
		user.setHeight(userHeight());
		user.setWeight(userWeight());
		user.setFat(userFat());
		user.setMuscle(userMuscle());
		user.setCareer(integer(userCareer()));
		user.setDivision(integer(userDivision()));
		return user;
	}
	public String userAge() {
		return String.valueOf((int)(Math.random()*(50-20))+20);
	}
	public String userHeight() {
		return String.valueOf((int)(Math.random()*(190-150))+150);
	}
	public String userWeight() {
		return String.valueOf((int)(Math.random()*(100-40))+40);
	}
	public String userFat() {
		return String.valueOf((int)(Math.random()*(14-30))+30);
	}
	public String userMuscle() {
		return String.valueOf((int)(Math.random()*(10-28))+29);
	}
	public String userDivision() {
		return String.valueOf((int)(Math.random() * 5));
	}
	public String userCareer() {
		List<String> careers = Arrays.asList("1","2","3","5","6","7");
		Collections.shuffle(careers);
		return careers.get(0);
	}
}
