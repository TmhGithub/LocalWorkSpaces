package com.cissst.dao;

import java.util.List;
/**
 * @模块名称：SysMangerDao(系统管理模块接口)：
 * 本接口定义类最基本的操作方法，程序员根据自己的模块功能可以扩展本接口，扩展时注意通用性，
 * 不要定义具体的业务操作对象，具体的业务操作对象在业务逻辑层定义
 * @开发人名称：
 * @功          能：
 * @开发时间：
 */
 
public interface SysMangerDao {
	/**
	 * 存储对象
	 * @param object
	 */
	public void save(Object object);
	/**
	 * 删除对象
	 * @param object
	 */
	public void delete(Object object);
	/**
	 * 更新对象
	 * @param object
	 */
	public void update(Object object);
	/**
	 * 查询数据
	 * @param HQL
	 * @return
	 */
	public List<?>findList(String HQL);
	/**
	 * 分页查询数据
	 * @param startPage
	 * @param pageSize
	 * @param HQL
	 * @return
	 */
	public List<?>findWithPage(int startPage,int pageSize,String HQL);
	/**
	 * 查询一条记录，根据ID
	 * @param object
	 * @param id
	 * @return Object
	 * 本法发和下边的的方法效果是一样的都是查询一条记录，两者可选其一
	 */
	public Object getByOne(Object object,int id);
	
	/**
	 * 查询一条记录，根据Hql
	 * @param object
	 * @param id
	 * @return Object
	 */
	public Object findByHQL(String HQL);
	
}
