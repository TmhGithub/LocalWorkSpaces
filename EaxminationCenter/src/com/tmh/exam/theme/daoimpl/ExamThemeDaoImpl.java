package com.tmh.exam.theme.daoimpl;

import org.hibernate.SessionFactory;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.transaction.PlatformTransactionManager;

import com.tmh.exam.comm.daoimpl.ExamDaoImpl;
import com.tmh.exam.theme.idao.ExamThemeDao;

public class ExamThemeDaoImpl extends ExamDaoImpl implements ExamThemeDao{
	
	private SessionFactory sessionFactory;
	private PlatformTransactionManager ptransactionManager;
	private HibernateTemplate hibernateTemplate;
	
	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	public void setPtransactionManager(
			PlatformTransactionManager ptransactionManager) {
		this.ptransactionManager = ptransactionManager;
	}

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public PlatformTransactionManager getPtransactionManager() {
		return ptransactionManager;
	}
	
	
}
