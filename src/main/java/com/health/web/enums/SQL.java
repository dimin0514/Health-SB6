package com.health.web.enums;

public enum SQL {
	CREATE_CENTER, DROP_CENTER, TRUNCATE_CENTER,
	CREATE_ROUTINE, DROP_ROUTINE, TRUNCATE_ROUTINE,
	CREATE_ARTICLE, DROP_ARTICLE, TRUNCATE_ARTICLE;
	
	@Override
	public String toString() {
		String result = "";
		switch (this) {
		case CREATE_CENTER:
			result = "CREATE TABLE CENTER("
					+ "CSEQ INT AUTO_INCREMENT PRIMARY KEY,"
					+ "CNAME VARCHAR(100),"
					+ "CADDR VARCHAR(200),"
					+ "CPHONE VARCHAR(100),"
					+ "CSCORE VARCHAR(100))";
			break;
		case DROP_CENTER : 
			result = "DROP TABLE USERS";
			break;
		case TRUNCATE_CENTER : 
			result = "TRUNCATE TABLE USERS";
			break;
		}
		return result;
	}
}
