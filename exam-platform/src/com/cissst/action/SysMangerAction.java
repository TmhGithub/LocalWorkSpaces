package com.cissst.action;
import com.cissst.service.SysMangerService;
import com.opensymphony.xwork2.ActionSupport;
/**
 * @ģ�����ƣ�SysMangerAction(ϵͳ����)
 * @���������ƣ�
 * @��          �ܣ�
 * @����ʱ�䣺
 */
 
public class SysMangerAction extends ActionSupport {
	
	private static final long serialVersionUID = 1L;
	private SysMangerService sysMangerService;
	
	
	public SysMangerService getSysMangerService() {
		return sysMangerService;
	}

	public void setSysMangerService(SysMangerService sysMangerService) {
		this.sysMangerService = sysMangerService;
	}

}
