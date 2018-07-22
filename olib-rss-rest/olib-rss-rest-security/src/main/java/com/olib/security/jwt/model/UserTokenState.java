package com.olib.security.jwt.model;

import java.util.List;

public class UserTokenState {
    private String accessToken;
    private String userName;
    private Long expiresIn;
    private List<Authority> authorityList;

    public UserTokenState() {
        this.accessToken = null;
        this.expiresIn = null;
        this.authorityList = null;
    }
    

    public UserTokenState(
    		String accessToken,
    		String userName,
    		long expiresIn,
    		List<Authority> authorityList
    		) {
        this.accessToken = accessToken;
        this.userName = userName;
        this.expiresIn = expiresIn;
        this.authorityList = authorityList;
    }
    public UserTokenState(
    		String accessToken, 
    		long expiresIn
    		) {
    	this.accessToken = accessToken;
    	this.expiresIn = expiresIn;
    }


	public String getAccessToken() {
		return accessToken;
	}


	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public Long getExpiresIn() {
		return expiresIn;
	}


	public void setExpiresIn(Long expiresIn) {
		this.expiresIn = expiresIn;
	}


	public List<Authority> getAuthorityList() {
		return authorityList;
	}


	public void setAuthorityList(List<Authority> authorityList) {
		this.authorityList = authorityList;
	}

}