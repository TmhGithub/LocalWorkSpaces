package com.kriss.review.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.kriss.review.dao.BusinfoDAO;
import com.kriss.review.util.PageBean;

public class BusInfo extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	        this.doPost(request, response);
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String stype = request.getParameter("stype");
		String keys = request.getParameter("keys");
		
		
		PageBean  pb =new PageBean();
		
		String pageNo = request.getParameter("pageNo");
		if(pageNo!=null){
			pb.setPageNo(Integer.parseInt(pageNo));
		}
			
		if(keys!=null)
			keys=keys.trim();
        
		BusinfoDAO  dao =new BusinfoDAO();
		
	    dao.findBus(stype, keys,pb);
		
		
		request.setAttribute("pb",pb);
		
		request.setAttribute("stype",stype);
		request.setAttribute("keys",keys);
		
		request.getRequestDispatcher("result.jsp").forward(request, response);
	}

}
