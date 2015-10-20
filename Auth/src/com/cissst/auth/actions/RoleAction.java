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
		//ȡ�����н�ɫ����ƴ��json�ַ���
		String json = "[";
		
		for (TbRole role : ls) {
			json+="{\"id\":\""+role.getUuid()+"\",\"pId\":\"0\",\"name\":\""+role.getRoleName()+"\"},";
		}
		if(json.length()>1){
			json = json.substring(0,json.length()-1);
		}
		json += "]";
		System.out.println(json);//����
		//��json�ַ��������ȥ
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
		//�õ������ɫӵ�е�����Ȩ��
		Set<TbRoleAction> set = role.getTbRoleActions(); 
		//ͨ���м����ɫȨ�ޱ��õ���ɫ����Ӧ��Ȩ��
		String json = "[";
		
		for (TbRoleAction tbRoleAction : set) {
			json += "{\"id\":\""+tbRoleAction.getTbActions().getUuid()+"\"},";
		}
		if(json.length()>1){
			json = json.substring(0,json.length()-1);
		}
		json += "]";
		System.out.println(json);//����
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
		//�õ������ɫ
		TbRole role = roleService.findById(Integer.parseInt(rid));
		//��Ϊ��ɫ��Ȩ����ͨ���м��������һ�Զ��ϵ�ģ�������Ҫ�ڽ�ɫ����ɾ����ɫȨ�����set����
		roleService.delete(role.getTbRoleActions());
		//Ȼ�����������ϣ�������µļ��ϣ���Ӧ�Ľ�ɫ��Ȩ�޾����µ���
		role.getTbRoleActions().clear();
		//�������������ַ���������Ȩ�޵�id��
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
		//��ǰ̨����һ��״̬��־���ɹ�����ʧ��
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
