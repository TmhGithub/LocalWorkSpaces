package com.cissst.iService;

import com.cissst.dao.ExamPlanMangerDao;
import com.cissst.service.ExamPlanMangerService;


/**
 * @ģ�����ƣ�ExamPlanMangerService(���Լƻ�����ģ��ӿ�ʵ����)
 * @���������ƣ�
 * @����ʱ�䣺
 */
public class IExamPlanMangerService implements ExamPlanMangerService{
	private  ExamPlanMangerDao  examPlanMangerDao;
	public ExamPlanMangerDao getExamPlanMangerDao() {
		return examPlanMangerDao;
	}

	public void setExamPlanMangerDao(ExamPlanMangerDao examPlanMangerDao) {
		this.examPlanMangerDao = examPlanMangerDao;
	}
	

}
