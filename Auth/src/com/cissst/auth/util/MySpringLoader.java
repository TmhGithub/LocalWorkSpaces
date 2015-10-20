package com.cissst.auth.util;

import java.util.List;

import javax.servlet.ServletContextEvent;

import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.web.context.ContextLoader;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;

public class MySpringLoader extends ContextLoaderListener{

	
	public void contextInitialized(ServletContextEvent event) {
	     super.contextInitialized(event);
	     ContextLoader loader= getContextLoader();
	     WebApplicationContext wac = loader.getCurrentWebApplicationContext();
	     
	     HibernateTemplate temp = (HibernateTemplate)wac.getBean("hibernateTemplate");

	     List ls = temp.find("from TbActions");
	     event.getServletContext().setAttribute("auths", ls );
	     System.out.println(  event.getServletContext()+"#######"+temp);
	}
}
