package com.cissst.auth.dao.impl;

import java.sql.SQLException;
import java.util.Collection;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.cissst.auth.dao.IRoleDao;
import com.cissst.auth.vo.TbRole;

public class RoleDaoImpl extends HibernateDaoSupport implements IRoleDao {

	public List listAll() {
		return this.getHibernateTemplate().find("from TbRole");
	}

	public TbRole findById(final int rid) {
		return this.getHibernateTemplate().execute(new HibernateCallback<TbRole>(){
			public TbRole doInHibernate(Session session)
					throws HibernateException, SQLException {
				TbRole  tr = (TbRole)session.createQuery("from TbRole where uuid = "+rid).uniqueResult();
				return tr;
			}
		});
	}

	public void update(TbRole role) {
		this.getHibernateTemplate().update(role);
	}

	public void delete(Collection entis) {
		this.getHibernateTemplate().deleteAll(entis);
	}

	
}
