package com.cissst.auth.actions;

import java.io.IOException;
import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.cissst.auth.service.IActionService;
import com.cissst.auth.vo.TbActions;
import com.opensymphony.xwork2.ActionSupport;

public class AcAction extends ActionSupport{
	
	private IActionService actionService; 
	
	public IActionService getActionService() {
		return actionService;
	}
	public void setActionService(IActionService actionService) {
		this.actionService = actionService;
	}

	public String listAll() {
		System.out.println("*****************");
		List<TbActions> ls = actionService.getAll();
		
		String json = "[";
		
		for (TbActions action : ls) {
			json+="{\"id\":\""+action.getUuid()+"\",\"pId\":\""+(action.getFather()==null?"0":action.getFather().getUuid())+"\",\"name\":\""+action.getActionName()+"\"},";
		}
		if(json.length()>1){
			json = json.substring(0,json.length()-1);
		}
		json += "]";
		System.out.println(json);
		try {
			ServletActionContext.getResponse().setCharacterEncoding("UTF-8");
			ServletActionContext.getResponse().getWriter().write(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return NONE;
	}
	
}
