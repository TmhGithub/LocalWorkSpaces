package com.cissst.iService;

import com.cissst.dao.ExamSchemeMangerDao;
import com.cissst.service.ExamSchemeMangerService;

/**
 * @ģ�����ƣ�ExamSchemeMangerService(���Է�������ģ��ӿ�ʵ����)
 * @���������ƣ�
 * @����ʱ�䣺
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
