package com.cissst.service;

public class UserService {

	public String validateUserName(String username){
		if("www".equals(username)){
			return "��ռ��";
		}else{
			return "δռ��";
		}
	}
	
	public User saveUser(User user){
		System.out.println("uname:"+user.getUname());
		System.out.println("age:"+user.getAge());
		System.out.println("birth:"+user.getBirth());
		user.setUname("�������ӹ���:"+user.getUname());
		
		return user;
	}
}
