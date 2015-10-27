package com.tmh.exam.comm.iservice;

import java.util.Collection;
import org.hibernate.criterion.DetachedCriteria;

public interface ExamService {
	/**
	 * 新增
	 * @param <T>
	 * @param t
	 * @return
	 */
	public<T> boolean save(T t);
	/**
	 * 删除
	 * @param <T>
	 * @param t
	 * @return
	 */
	public<T> boolean delete(T t);
	/**
	 * 修改
	 * @param <T>
	 * @param t
	 * @return
	 */
	public<T> boolean update(T t);
	/**
	 * 得到一个对象
	 * @param <T>
	 * @param cls
	 * @param id
	 * @return
	 */
	public<T> T getSingle(Class<T> cls,Integer id);
	/**
	 * 得到总数
	 * @param <T>
	 * @return
	 */
	public<T> int getAllCount();
	/**
	 * 按条件得到总数
	 * @param <T>
	 * @param dc
	 * @return
	 */
	public<T> int getCriteriaCount(DetachedCriteria dc);
	/**
	 * 得到所有对象集合
	 * @param <T>
	 * @param firstRecord
	 * @param maxRecords
	 * @return
	 */
	public<T> Collection<T> getAll(Object exampleEntity,int firstRecord,int maxRecords);
	/**
	 * 按条件得到对象集合
	 * @param <T>
	 * @param dc
	 * @param firstRecord
	 * @param maxRecords
	 * @return
	 */
	public<T> Collection<T> getCriteria(DetachedCriteria dc,int firstRecord,int maxRecords);
}
