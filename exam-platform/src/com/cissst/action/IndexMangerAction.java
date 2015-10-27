package com.cissst.action;

import com.cissst.service.IndexMangerService;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @模块名称：IndexMangerAction(首页管理,该首先包括学生端的首页模块和查询模块)
 * @开发人名称：
 * @功          能：
 * @开发时间：
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

