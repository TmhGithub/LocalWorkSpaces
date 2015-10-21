package com.kriss.review.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class EncodingFilter implements Filter {

	String encoding;
	
	
	public String getEncoding() {
		return encoding;
	}

	public void setEncoding(String encoding) {
		this.encoding = encoding;
	}

	public void destroy() {
	   System.out.println("¹ýÂËÆ÷±»Ïú»Ù");

	}

	public void doFilter(ServletRequest sr, ServletResponse sp,
			FilterChain fc) throws IOException, ServletException {
		sr.setCharacterEncoding("UTF-8");
		fc.doFilter(sr, sp);
	}

	public void init(FilterConfig fc) throws ServletException {
		encoding =  fc.getInitParameter("enc");
		if(encoding==null)
			encoding = "UTF-8";
		System.out.println("±àÂë"+encoding);
	}

}
