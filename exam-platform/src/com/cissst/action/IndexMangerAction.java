package com.cissst.action;

import com.cissst.service.IndexMangerService;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @ģ�����ƣ�IndexMangerAction(��ҳ����,�����Ȱ���ѧ���˵���ҳģ��Ͳ�ѯģ��)
 * @���������ƣ�
 * @��          �ܣ�
 * @����ʱ�䣺
 */
public class IndexMangerAction  extends ActionSupport{

	private static final long serialVersionUID = 1L;
	private IndexMangerService  indexMangerService;
	public IndexMangerService getIndexMangerService() {
		return indexMangerService;
	}
	public void setIndexMangerService(IndexMangerService indexMangerService) {
		this.indexMangerService = indexMangerService;
	}

	
}

