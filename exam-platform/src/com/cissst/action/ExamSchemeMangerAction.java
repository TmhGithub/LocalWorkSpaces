package com.cissst.action;
import com.cissst.service.ExamSchemeMangerService;
import com.opensymphony.xwork2.ActionSupport;
/**
 * @模块名称：ExamSchemeMangerAction(考试方案管理)
 * @开发人名称：
 * @功          能：
 * @开发时间：
 */
public class ExamSchemeMangerAction  extends ActionSupport{

	private static final long serialVersionUID = 1L;
	private ExamSchemeMangerService examSchemeMangerService;
	
	public ExamSchemeMangerService getExamSchemeMangerService() {
		return examSchemeMangerService;
	}

	public void setExamSchemeMangerService(
			ExamSchemeMangerService examSchemeMangerService) {
		this.examSchemeMangerService = examSchemeMangerService;
	}

	
}
