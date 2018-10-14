package com.olib.rss.upload.enums;

public enum FilePathType {

	ROOT_PATH("./upload"),
	IMG_PATH (ROOT_PATH.path+"/img")
	;
	
	private String path;
	
	private FilePathType(String path) {
		this.path = path;
	}
	
	public String toString() {
		return this.path;
	}
}
