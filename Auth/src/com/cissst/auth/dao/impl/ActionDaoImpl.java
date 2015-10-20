package com.cissst.auth.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.cissst.auth.dao.IActionDao;

public class ActionDaoImpl extends HibernateDaoSupport implements IActionDao{

	public List listAll() {
		return this.getHibernateTemplate().find("from TbActions");
	}
 
}
