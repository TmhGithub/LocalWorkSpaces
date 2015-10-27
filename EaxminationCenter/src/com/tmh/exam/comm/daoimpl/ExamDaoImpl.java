package com.tmh.exam.comm.daoimpl;

import java.sql.SQLException;
import java.util.Collection;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projections;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.tmh.exam.comm.idao.ExamDao;

public class ExamDaoImpl implements ExamDao{
	
	private SessionFactory sessionFactory;
	private PlatformTransactionManager ptransactionManager;
	private HibernateTemplate hibernateTemplate;
	
	public <T> boolean delete(T t) {
		//用Transaction和session去获得操纵数据的HibernateTemplate模板
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		TransactionStatus status = ptransactionManager.getTransaction(def);
		//这里就可以用hibernateTemplate去操纵sql语句了
		boolean flag = true; 
		try {
			hibernateTemplate.delete(t);
		} catch (DataAccessException e) {
			flag = false;
			ptransactionManager.rollback(status);
			e.printStackTrace();
		}finally{
			ptransactionManager.commit(status);
		}
		return flag;
	}

	@SuppressWarnings("unchecked")
	public <T> Collection<T> getAll(Object exampleEntity,int firstRecord, int maxRecords) {	
		return hibernateTemplate.findByExample(exampleEntity, firstRecord, maxRecords);
	}

	public <T> int getAllCount() {
		return hibernateTemplate.getMaxResults();
	}

	@SuppressWarnings("unchecked")
	public <T> Collection<T> getCriteria(DetachedCriteria dc, int firstRecord,
			int maxRecords) {
		return hibernateTemplate.findByCriteria(dc, firstRecord, maxRecords);
	}

	@SuppressWarnings("unchecked")
	public <T> int getCriteriaCount(final DetachedCriteria dc) {
		return hibernateTemplate.execute(new HibernateCallback(){
			public Object doInHibernate(Session session)
					throws HibernateException, SQLException {
				Criteria criteria = dc.getExecutableCriteria(session);
				int count = Integer.parseInt((criteria.setProjection(Projections.rowCount()).uniqueResult()).toString());
				criteria.setProjection(null);
				return count;
			}
			
		});
	}

	public <T> T getSingle(Class<T> cls, Integer id) {
		return hibernateTemplate.get(cls, id);
	}

	public <T> boolean save(T t) {
		//用Transaction和session去获得操纵数据的HibernateTemplate模板
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		TransactionStatus status = ptransactionManager.getTransaction(def);
		boolean flag = true; 
		System.out.println("保存");//测试
		try {
			hibernateTemplate.saveOrUpdate(t);
		} catch (DataAccessException e) {
			flag = false;
			ptransactionManager.rollback(status);
			e.printStackTrace();
		}finally{
			ptransactionManager.commit(status);
		}
		return flag;
	}

	public <T> boolean update(T t) {
		//用Transaction和session去获得操纵数据的HibernateTemplate模板
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		TransactionStatus status = ptransactionManager.getTransaction(def);
		boolean flag = true; 
		try {
			hibernateTemplate.update(t);
		} catch (DataAccessException e) {
			flag = false;
			ptransactionManager.rollback(status);
			e.printStackTrace();
		}finally{
			ptransactionManager.commit(status);
		}
		return flag;
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

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}
	
}
