package com.cissst.iService;

import com.cissst.dao.SysMangerDao;
import com.cissst.service.SysMangerService;

/**
 * @ģ�����ƣ�SysMangerService(ϵͳ����ģ��ӿ�ʵ����)
 * @���������ƣ�
 * @����ʱ�䣺
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
