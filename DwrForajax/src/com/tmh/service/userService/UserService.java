package com.tmh.service.userService;

public class UserService {
	
	public String validateUser(String name){
		String msg = "";
		//相当于一个从数据库取出来的，后台验证
		if("tmg".equals(name)){
			msg = "很遗憾，此名字已经被占用！";
		}else{
			msg = "恭喜,此名字可用！";
		}
		return msg;
	}
	
	public String saveUser(UserBean user){
		System.out.println("姓名为："+user.getName());
		System.out.println("年龄为："+user.getAge());
		return "读取成功了！";
	}
}
