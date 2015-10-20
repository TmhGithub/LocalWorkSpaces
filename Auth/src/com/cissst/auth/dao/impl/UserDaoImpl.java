package com.cissst.auth.dao.impl;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.cissst.auth.dao.IUserDao;
import com.cissst.auth.vo.TbUser;

public class UserDaoImpl extends HibernateDaoSupport implements IUserDao {

	public void save(TbUser user) {
	    this.getHibernateTemplate().save(user);	
	}

	public TbUser login(TbUser user) {	
		List ls = this.getHibernateTemplate().findByExample(user);
        
		if(ls.size()==1){
			user = (TbUser)ls.get(0);
			return user;
		}else{
		    return null;
		}
	}

}
