package com.tmh.exam.theme.action;

import com.opensymphony.xwork2.ActionSupport;
import com.tmh.exam.theme.iservice.ExamThemeService;

public class ExampaperManagerAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	
	private ExamThemeService ets;
	
	@Override
	public String execute() throws Exception {
		
		return super.execute();
	}
	//新增
	public String save()throws Exception{
		//    处理
		return super.execute();
	}
	//删除
	public String delete() throws Exception{
		//    处理
		return super.execute();
	}
	//修改
	public String update() throws Exception{
		//    处理
		return super.execute();
	}
	//查询
	public String query() throws Exception{
		//    处理
		return super.execute();
	}
	public ExamThemeService getEts() {
		return ets;
	}

	public void setEts(ExamThemeService ets) {
		this.ets = ets;
	}
}
