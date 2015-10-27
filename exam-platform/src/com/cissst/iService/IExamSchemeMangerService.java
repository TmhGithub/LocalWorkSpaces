package com.cissst.iService;

import com.cissst.dao.ExamSchemeMangerDao;
import com.cissst.service.ExamSchemeMangerService;

/**
 * @模块名称：ExamSchemeMangerService(考试方案管理模块接口实现类)
 * @开发人名称：
 * @开发时间：
 */
public class IExamSchemeMangerService implements ExamSchemeMangerService{
	private  ExamSchemeMangerDao  examSchemeMangerDao;	
	public ExamSchemeMangerDao getExamSchemeMangerDao() {
		return examSchemeMangerDao;
	}

	public void setExamSchemeMangerDao(ExamSchemeMangerDao examSchemeMangerDao) {
		this.examSchemeMangerDao = examSchemeMangerDao;
	}

}
