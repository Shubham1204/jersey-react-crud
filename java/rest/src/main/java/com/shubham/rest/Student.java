package com.shubham.rest;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Student {

	
	private int sid;
	private String name;
	private String email;
	
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "Student [sid=" + sid + ", name=" + name + ", email=" + email + "]";
	}
	
	
	
}
