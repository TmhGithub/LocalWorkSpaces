package com.cissst.auth.service.impl;

import java.util.List;

import com.cissst.auth.dao.IActionDao;
import com.cissst.auth.service.IActionService;

public class ActionServiceImpl implements IActionService {

	private IActionDao  actionDao;
	
	public List getAll() {
		return actionDao.listAll();
	}

	public IActionDao getActionDao() {
		return actionDao;
	}

	public void setActionDao(IActionDao actionDao) {
		this.actionDao = actionDao;
	}

	
}
