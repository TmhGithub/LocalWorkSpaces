package com.cissst.iService;

import com.cissst.dao.IndexMangerDao;
import com.cissst.service.IndexMangerService;

/**
 * @ģ�����ƣ�IndexMangerService(��ҳ����ģ��ӿ�ʵ����)
 * @���������ƣ�
 * @����ʱ�䣺
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
