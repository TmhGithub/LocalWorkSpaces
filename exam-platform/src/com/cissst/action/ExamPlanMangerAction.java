package com.cissst.action;

import com.cissst.service.ExamPlanMangerService;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @ģ�����ƣ�ExamPlanMangerAction(���Լƻ�����)
 * @���������ƣ�
 * @��          �ܣ�
 * @����ʱ�䣺
 */
public class ExamPlanMangerAction extends ActionSupport {


	private static final long serialVersionUID = 1L;
	
	private ExamPlanMangerService examPlanMangerService;
	
	
	public ExamPlanMangerService getExamPlanMangerService() {
		return examPlanMangerService;
	}

	public void setExamPlanMangerService(ExamPlanMangerService examPlanMangerService) {
		this.examPlanMangerService = examPlanMangerService;
	}
}
