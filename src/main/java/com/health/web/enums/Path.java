package com.health.web.enums;

public enum Path {
UPLOAD_PATH, CRAWLING_TARGET;
	
	@Override
	public String toString() {
		String result = "";
		switch (this) {
		case UPLOAD_PATH:
			result = "C:\\Users\\lovep\\STS-4.4.2\\workspace\\project-healthup";
			break;
		case CRAWLING_TARGET:
			break;
		}
		return result;
	}
}
