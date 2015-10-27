package com.cissst.action;

import com.cissst.service.ExamPlanMangerService;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @模块名称：ExamPlanMangerAction(考试计划管理)
 * @开发人名称：
 * @功          能：
 * @开发时间：
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
