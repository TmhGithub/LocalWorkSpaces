package com.cissst.action;
import com.cissst.service.SysMangerService;
import com.opensymphony.xwork2.ActionSupport;
/**
 * @模块名称：SysMangerAction(系统管理)
 * @开发人名称：
 * @功          能：
 * @开发时间：
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
