package com.cissst.auth.util;

import java.io.IOException;
import java.util.Set;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cissst.auth.vo.TbActions;
import com.cissst.auth.vo.TbRoleAction;
import com.cissst.auth.vo.TbUser;

public class SercurityFilter implements Filter {

	public void doFilter(ServletRequest req, ServletResponse rsp,
			FilterChain fc) throws IOException, ServletException {
	   HttpServletRequest  request =(HttpServletRequest)req;
	   HttpServletResponse  response =(HttpServletResponse)rsp;
	 
	   String uri = request.getRequestURI();
	   
	   if(isNeedCheck(uri)){
		    
		   TbUser user = (TbUser)request.getSession().getAttribute("user");
		   
		   if(user!=null){
			   Set<TbRoleAction>  set = user.getTbRole().getTbRoleActions();
			   boolean isPassed = false;
			   for (TbRoleAction tbRoleAction : set) {
				   TbActions  action = tbRoleAction.getTbActions();
				   String path =  action.getActionPath();
				   if(path!=null){
					   if(uri.endsWith(path)){
						   isPassed = true;
						   break;
					   }
				   }
			   }
			   
			   if(isPassed){
				   fc.doFilter(request, response);
			   }else{
				   response.sendRedirect("noright.jsp"); 
			   }
		   }else{
			   response.sendRedirect("relog.jsp"); 
		   }
	   }else{
		   fc.doFilter(request, response);
	   }
	   

	}

	public boolean isNeedCheck(String uri){
		//   /Auth/login_user.action
		if(uri.endsWith("login_user.action")||uri.endsWith("logout_user.action")){
			return false;
		}else{
			return true;
		}
		
	}
	
	public void init(FilterConfig arg0) throws ServletException {
	

	}
	
	public void destroy() {
		

	}

}
