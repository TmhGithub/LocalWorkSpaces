package com.cissst.auth.service.impl;

import java.util.Collection;
import java.util.List;

import com.cissst.auth.dao.IRoleDao;
import com.cissst.auth.service.IRoleService;
import com.cissst.auth.vo.TbRole;

public class RoleServiceImpl implements IRoleService {

	private IRoleDao roleDao;
	
	
	public List getAll() {
		return roleDao.listAll();
	}
	
	public TbRole findById(int rid) {
		// TODO Auto-generated method stub
		return roleDao.findById(rid);
	}
	
	public void update(TbRole role) {
		roleDao.update(role);
	}
	
	public void delete(Collection entis) {
		roleDao.delete( entis);
	}
	
	public IRoleDao getRoleDao() {
		return roleDao;
	}

	public void setRoleDao(IRoleDao roleDao) {
		this.roleDao = roleDao;
	}

	




	


}
