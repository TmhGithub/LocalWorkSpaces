package com.tmh.exam.theme.serviceimpl;

import com.tmh.exam.comm.serviceimpl.ExamServiceImpl;
import com.tmh.exam.theme.idao.ExamThemeDao;
import com.tmh.exam.theme.iservice.ExamThemeService;

public class ExamThemeServiceImpl extends ExamServiceImpl implements ExamThemeService{
	
	private ExamThemeDao etd;

	public ExamThemeDao getEtd() {
		return etd;
	}

	public void setEtd(ExamThemeDao etd) {
		this.etd = etd;
	}
	
}
