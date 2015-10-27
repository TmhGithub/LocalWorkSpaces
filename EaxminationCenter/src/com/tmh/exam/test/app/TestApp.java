package com.tmh.exam.test.app;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.tmh.exam.theme.daoimpl.ExamThemeDaoImpl;
import com.tmh.exam.vo.Theme;

public class TestApp {

	public static void main(String[] args) {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		ExamThemeDaoImpl etdi = (ExamThemeDaoImpl)ctx.getBean("examThemeDao");
		etdi.save(new Theme());
	}

}
