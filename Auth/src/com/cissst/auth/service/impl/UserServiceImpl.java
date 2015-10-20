package com.cissst.auth.service.impl;

import com.cissst.auth.dao.IUserDao;
import com.cissst.auth.service.IUserService;
import com.cissst.auth.vo.TbUser;

public class UserServiceImpl implements IUserService{

	private IUserDao dao ;
	
	
	public void save(TbUser user) {
		
		
	}

	public IUserDao getDao() {
		return dao;
	}

	public void setDao(IUserDao dao) {
		this.dao = dao;
	}

	public TbUser login(TbUser user) {
	
		return dao.login(user);
	}
	
	

}
