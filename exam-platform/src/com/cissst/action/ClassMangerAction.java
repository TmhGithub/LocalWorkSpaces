package com.cissst.action;
import com.cissst.service.ClassMangerService;
import com.opensymphony.xwork2.ActionSupport;
/**
 * @模块名称：ClassMangerAction(班级学生管理)
 * @开发人名称：
 * @功          能：
 * @开发时间：
 */
public class ClassMangerAction extends ActionSupport {
	

	private static final long serialVersionUID = 1L;
	
	
	private ClassMangerService classMangerService;
	
	
	
	
	public ClassMangerService getClassMangerService() {
		return classMangerService;
	}
	public void setClassMangerService(ClassMangerService classMangerService) {
		this.classMangerService = classMangerService;
	}
    
}
