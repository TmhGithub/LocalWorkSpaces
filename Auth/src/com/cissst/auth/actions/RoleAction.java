package com.cissst.auth.actions;

import com.cissst.auth.service.IRoleService;
import com.cissst.auth.vo.TbActions;
import com.cissst.auth.vo.TbRole;
import com.cissst.auth.vo.TbRoleAction;
import com.opensymphony.xwork2.ActionSupport;

import java.io.IOException;
import java.util.*;

import org.apache.struts2.ServletActionContext;
public class RoleAction extends ActionSupport{
	
	private IRoleService roleService;

    private String rid;
    
    private String ids;
	
	public String listAll(){
		System.out.println("$$$$$$$$$$$$$$$");
		List<TbRole> ls = roleService.getAll();
		//取到所有角色，并拼接json字符串
		String json = "[";
		
		for (TbRole role : ls) {
			json+="{\"id\":\""+role.getUuid()+"\",\"pId\":\"0\",\"name\":\""+role.getRoleName()+"\"},";
		}
		if(json.length()>1){
			json = json.substring(0,json.length()-1);
		}
		json += "]";
		System.out.println(json);//测试
		//把json字符串输出出去
		try {
			ServletActionContext.getResponse().setCharacterEncoding("UTF-8");
			ServletActionContext.getResponse().getWriter().write(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return NONE;
	}
	
	public String getActionsByRoleId(){
		System.out.println("@@@@@@@@@@@@@@");
		TbRole role = roleService.findById(Integer.parseInt(rid));
		//得到这个角色拥有的所有权限
		Set<TbRoleAction> set = role.getTbRoleActions(); 
		//通过中间表（角色权限表）得到角色所对应的权限
		String json = "[";
		
		for (TbRoleAction tbRoleAction : set) {
			json += "{\"id\":\""+tbRoleAction.getTbActions().getUuid()+"\"},";
		}
		if(json.length()>1){
			json = json.substring(0,json.length()-1);
		}
		json += "]";
		System.out.println(json);//测试
		try {
			ServletActionContext.getResponse().setCharacterEncoding("UTF-8");
			ServletActionContext.getResponse().getWriter().write(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return NONE;
	}
	
	@SuppressWarnings("unchecked")
	public String saveRoleActions(){
		//得到这个角色
		TbRole role = roleService.findById(Integer.parseInt(rid));
		//因为角色和权限是通过中间表来体现一对多关系的，所以先要在角色里面删除角色权限这个set集合
		roleService.delete(role.getTbRoleActions());
		//然后清除这个集合，并添加新的集合，对应的角色的权限就是新的了
		role.getTbRoleActions().clear();
		//解析传过来的字符串（包含权限的id）
		String idsArr[] = ids.split(",");
		for (String id : idsArr) {
			TbRoleAction ra = new TbRoleAction();
			TbActions action = new TbActions();
			action.setUuid(Integer.parseInt(id));
			
			ra.setTbActions(action);
			ra.setTbRole(role);
			role.getTbRoleActions().add(ra);
		}
		roleService.update(role);
		//给前台传递一个状态标志，成功还是失败
		try {
			ServletActionContext.getResponse().setCharacterEncoding("UTF-8");
			ServletActionContext.getResponse().getWriter().write("{\"status\":\"1\"}");
		} catch (IOException e) {
			e.printStackTrace();
		}
		return NONE;
	}

	public IRoleService getRoleService() {
		return roleService;
	}

	public void setRoleService(IRoleService roleService) {
		this.roleService = roleService;
	}

	public String getRid() {
		return rid;
	}

	public void setRid(String rid) {
		this.rid = rid;
	}

	public String getIds() {
		return ids;
	}

	public void setIds(String ids) {
		this.ids = ids;
	}
	
	
}
