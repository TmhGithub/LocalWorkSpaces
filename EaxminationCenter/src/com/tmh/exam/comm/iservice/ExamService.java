package com.tmh.exam.comm.iservice;

import java.util.Collection;
import org.hibernate.criterion.DetachedCriteria;

public interface ExamService {
	/**
	 * ����
	 * @param <T>
	 * @param t
	 * @return
	 */
	public<T> boolean save(T t);
	/**
	 * ɾ��
	 * @param <T>
	 * @param t
	 * @return
	 */
	public<T> boolean delete(T t);
	/**
	 * �޸�
	 * @param <T>
	 * @param t
	 * @return
	 */
	public<T> boolean update(T t);
	/**
	 * �õ�һ������
	 * @param <T>
	 * @param cls
	 * @param id
	 * @return
	 */
	public<T> T getSingle(Class<T> cls,Integer id);
	/**
	 * �õ�����
	 * @param <T>
	 * @return
	 */
	public<T> int getAllCount();
	/**
	 * �������õ�����
	 * @param <T>
	 * @param dc
	 * @return
	 */
	public<T> int getCriteriaCount(DetachedCriteria dc);
	/**
	 * �õ����ж��󼯺�
	 * @param <T>
	 * @param firstRecord
	 * @param maxRecords
	 * @return
	 */
	public<T> Collection<T> getAll(Object exampleEntity,int firstRecord,int maxRecords);
	/**
	 * �������õ����󼯺�
	 * @param <T>
	 * @param dc
	 * @param firstRecord
	 * @param maxRecords
	 * @return
	 */
	public<T> Collection<T> getCriteria(DetachedCriteria dc,int firstRecord,int maxRecords);
}
