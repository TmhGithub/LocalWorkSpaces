package com.cissst.action;
import com.cissst.service.ExamSchemeMangerService;
import com.opensymphony.xwork2.ActionSupport;
/**
 * @ģ�����ƣ�ExamSchemeMangerAction(���Է�������)
 * @���������ƣ�
 * @��          �ܣ�
 * @����ʱ�䣺
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
