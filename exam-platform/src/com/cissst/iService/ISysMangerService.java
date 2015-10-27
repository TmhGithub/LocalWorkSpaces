package com.cissst.iService;

import com.cissst.dao.SysMangerDao;
import com.cissst.service.SysMangerService;

/**
 * @模块名称：SysMangerService(系统管理模块接口实现类)
 * @开发人名称：
 * @开发时间：
 */
public class ISysMangerService implements SysMangerService{
	private  SysMangerDao  sysMangerDao;
	public SysMangerDao getSysMangerDao() {
		return sysMangerDao;
	}
	public void setSysMangerDao(SysMangerDao sysMangerDao) {
		this.sysMangerDao = sysMangerDao;
	}	
}
