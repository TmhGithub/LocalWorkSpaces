package com.tmh.service.userService;

public class UserService {
	
	public String validateUser(String name){
		String msg = "";
		//�൱��һ�������ݿ�ȡ�����ģ���̨��֤
		if("tmg".equals(name)){
			msg = "���ź����������Ѿ���ռ�ã�";
		}else{
			msg = "��ϲ,�����ֿ��ã�";
		}
		return msg;
	}
	
	public String saveUser(UserBean user){
		System.out.println("����Ϊ��"+user.getName());
		System.out.println("����Ϊ��"+user.getAge());
		return "��ȡ�ɹ��ˣ�";
	}
}
