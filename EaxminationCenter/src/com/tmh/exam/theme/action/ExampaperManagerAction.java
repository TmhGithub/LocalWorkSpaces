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
	//����
	public String save()throws Exception{
		//    ����
		return super.execute();
	}
	//ɾ��
	public String delete() throws Exception{
		//    ����
		return super.execute();
	}
	//�޸�
	public String update() throws Exception{
		//    ����
		return super.execute();
	}
	//��ѯ
	public String query() throws Exception{
		//    ����
		return super.execute();
	}
	public ExamThemeService getEts() {
		return ets;
	}

	public void setEts(ExamThemeService ets) {
		this.ets = ets;
	}
}
