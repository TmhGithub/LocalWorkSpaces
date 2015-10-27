package com.cissst.iDao;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.cissst.dao.ClassMangerDao;

/**
 * @模块名称：ClassMangerDao(班级学生管理模块接口)
 * @开发人名称：
 * @功          能：
 * @开发时间：
 */
public class IClassMangerDao  extends HibernateDaoSupport implements ClassMangerDao{
	
	public void save(Object entity) {
		super.getHibernateTemplate().save(entity);
		super.getHibernateTemplate().flush();
		super.getHibernateTemplate().clear();
	}

	public void update(Object entity) {
		super.getHibernateTemplate().update(entity);
		super.getHibernateTemplate().flush();
		super.getHibernateTemplate().clear();
	}

	public void delete(Object entity) {
		super.getHibernateTemplate().delete(entity);
		super.getHibernateTemplate().flush();
		super.getHibernateTemplate().clear();
	}

	public Object getByOne(Object entity, int id) {
		return getSession().get(entity.getClass(), id);
	}
	public Object findByHQL(final String HQL) {
		return super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
			public Object doInHibernate(Session session) throws HibernateException,
					SQLException {
				return session.createQuery(HQL).uniqueResult();
			}
		});
		
	}

	public List<?> findList(final String HQL) {
		List<?> list=super.getHibernateTemplate().executeFind(new HibernateCallback<Object>() {
			public Object doInHibernate(Session session) throws HibernateException,
					SQLException {
				return session.createQuery(HQL).list();
			}
		});
		return list;
	}

	public List<?> findWithPage(final int startPage, final int pageSize, final String HQL) {
		List<?> list=super.getHibernateTemplate().executeFind(new HibernateCallback<Object>() {
			public Object doInHibernate(Session session) throws HibernateException,
					SQLException {
				return session.createQuery(HQL).setFirstResult(startPage).setMaxResults(pageSize).list();
			}
		});
		return list;
	}
		
}
