package com.cissst.action;
import com.cissst.service.ClassMangerService;
import com.opensymphony.xwork2.ActionSupport;
/**
 * @ģ�����ƣ�ClassMangerAction(�༶ѧ������)
 * @���������ƣ�
 * @��          �ܣ�
 * @����ʱ�䣺
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
