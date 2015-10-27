package com.cissst.iService;

import com.cissst.dao.ClassMangerDao;
import com.cissst.service.ClassMangerService;


/**
 * @模块名称：ClassMangerService(班级学生管理模块接口实现类)
 * @开发人名称：
 * @开发时间：
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
