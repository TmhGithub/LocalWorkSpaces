package com.cissst.iService;

import com.cissst.dao.IndexMangerDao;
import com.cissst.service.IndexMangerService;

/**
 * @模块名称：IndexMangerService(首页管理模块接口实现类)
 * @开发人名称：
 * @开发时间：
 */
public class IIndexMangerService implements IndexMangerService{

	private  IndexMangerDao  indexMangerDao;

	public IndexMangerDao getIndexMangerDao() {
		return indexMangerDao;
	}

	public void setIndexMangerDao(IndexMangerDao indexMangerDao) {
		this.indexMangerDao = indexMangerDao;
	}
	
}
