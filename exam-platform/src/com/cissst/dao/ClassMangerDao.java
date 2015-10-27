package com.cissst.dao;

import java.util.List;



/**
 * @ģ�����ƣ�ClassMangerDao(�༶ѧ������ģ��ӿ�)
 * ���ӿڶ�����������Ĳ�������������Ա�����Լ���ģ�鹦�ܿ�����չ���ӿڣ���չʱע��ͨ���ԣ�
 * ��Ҫ��������ҵ��������󣬾����ҵ�����������ҵ���߼��㶨��
 * @���������ƣ�
 * @��          �ܣ�
 * @����ʱ�䣺
 */
public interface ClassMangerDao{
	/**
	 * �洢����
	 * @param object
	 */
	public void save(Object object);
	/**
	 * ɾ������
	 * @param object
	 */
	public void delete(Object object);
	/**
	 * ���¶���
	 * @param object
	 */
	public void update(Object object);
	/**
	 * ��ѯ����
	 * @param HQL
	 * @return
	 */
	public List<?>findList(String HQL);
	/**
	 * ��ҳ��ѯ����
	 * @param startPage
	 * @param pageSize
	 * @param HQL
	 * @return
	 */
	public Iterable<?>findWithPage(int startPage,int pageSize,String HQL);
	/**
	 * ��ѯһ����¼������Hql
	 * @param object
	 * @param id
	 * @return Object
	 */
	public Object findByHQL(String HQL);
	/**
	 * ��ѯһ����¼������ID
	 * @param object
	 * @param id
	 * @return Object
	 */
	public Object getByOne(Object object,int id);
	
}