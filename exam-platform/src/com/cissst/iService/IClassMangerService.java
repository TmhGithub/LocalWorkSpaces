package com.cissst.iService;

import com.cissst.dao.ClassMangerDao;
import com.cissst.service.ClassMangerService;


/**
 * @ģ�����ƣ�ClassMangerService(�༶ѧ������ģ��ӿ�ʵ����)
 * @���������ƣ�
 * @����ʱ�䣺
 */
public class IClassMangerService  implements ClassMangerService{

	private  ClassMangerDao  classMangerDao;
	public ClassMangerDao getClassMangerDao() {
		return classMangerDao;
	}
	public void setClassMangerDao(ClassMangerDao classMangerDao) {
		this.classMangerDao = classMangerDao;
	}
	
}
