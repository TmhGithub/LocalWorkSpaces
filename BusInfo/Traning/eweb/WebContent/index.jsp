<%@ page contentType="text/html; charset=UTF-8" session="true" import="java.util.*" %>

<%

 if(request.getHeader("accept-language").startsWith("zh-CN")) 
	request.getRequestDispatcher("topmenu.do?_locale=zh_CN").forward(request,response);
 else if(request.getHeader("accept-language").startsWith("zh-TW")) 
	request.getRequestDispatcher("topmenu.do?_locale=zh_TW").forward(request,response);
 else if(request.getHeader("accept-language").startsWith("en-US")) 
		request.getRequestDispatcher("topmenu.do?_locale=en_US").forward(request,response);
 else
		request.getRequestDispatcher("topmenu.do?_locale=zh_CN").forward(request,response);

%>