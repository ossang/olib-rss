package com.olib.security.jwt.model;

public enum AuthorityType {
	ROLE_USER	("ROLE_USER"),
	ROLE_ADMIN	("ROLE_ADMIN");

	private String authority;
	
	AuthorityType(String authority){
		this.authority = authority;
	}
	public String getAuthority(){
		return this.authority;
	}
}
