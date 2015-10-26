package com.cissst.service;

public class UserService {

	public String validateUserName(String username){
		if("www".equals(username)){
			return "已占用";
		}else{
			return "未占用";
		}
	}
	
	public User saveUser(User user){
		System.out.println("uname:"+user.getUname());
		System.out.println("age:"+user.getAge());
		System.out.println("birth:"+user.getBirth());
		user.setUname("服务器加工后:"+user.getUname());
		
		return user;
	}
}
