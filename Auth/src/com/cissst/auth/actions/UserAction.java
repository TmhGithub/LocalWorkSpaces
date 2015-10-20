package com.cissst.auth.actions;

import java.io.IOException;

import org.apache.struts2.ServletActionContext;

import com.cissst.auth.service.IUserService;
import com.cissst.auth.vo.TbUser;
import com.opensymphony.xwork2.ActionSupport;

public class UserAction extends ActionSupport{
	
	private TbUser user;
	
	private IUserService serivce; 
	
	public String login(){
		System.out.println("######");
		user = serivce.login(user);
		
		String json = "";
		
		if(user == null){
			json = "{\"status\":0,\"msg\":\"用户名或密码错误！\"}";
		}else{
			json = "{\"status\":1}";
//			System.out.println(user.getTbRole().getRoleName());
			ServletActionContext.getRequest().getSession().setAttribute("user", user);
		}
		try {
			ServletActionContext.getResponse().setCharacterEncoding("UTF-8");
			ServletActionContext.getResponse().getWriter().write(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return NONE;
	}
	
	public String home(){
		return "home";
	}
	public TbUser getUser() {
		return user;
	}

	public void setUser(TbUser user) {
		this.user = user;
	}

	public IUserService getSerivce() {
		return serivce;
	}

	public void setSerivce(IUserService serivce) {
		this.serivce = serivce;
	}
	
}
