package com.cissst.dao;

import java.util.List;
/**
 * @ģ�����ƣ�SysMangerDao(ϵͳ����ģ��ӿ�)��
 * ���ӿڶ�����������Ĳ�������������Ա�����Լ���ģ�鹦�ܿ�����չ���ӿڣ���չʱע��ͨ���ԣ�
 * ��Ҫ��������ҵ��������󣬾����ҵ�����������ҵ���߼��㶨��
 * @���������ƣ�
 * @��          �ܣ�
 * @����ʱ�䣺
 */
 
public interface SysMangerDao {
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
	public List<?>findWithPage(int startPage,int pageSize,String HQL);
	/**
	 * ��ѯһ����¼������ID
	 * @param object
	 * @param id
	 * @return Object
	 * ���������±ߵĵķ���Ч����һ���Ķ��ǲ�ѯһ����¼�����߿�ѡ��һ
	 */
	public Object getByOne(Object object,int id);
	
	/**
	 * ��ѯһ����¼������Hql
	 * @param object
	 * @param id
	 * @return Object
	 */
	public Object findByHQL(String HQL);
	
}
