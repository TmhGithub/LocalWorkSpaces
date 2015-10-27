<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

	<table width="70%" align="center">
		<tr>	
			<td colspan="5" align="center">待购商品列表</td>
		</tr>
		<tr>
			<td>商品名称</td>
			<td>商品描述</td>
			<td>商品价格</td>
			<td>操作</td>
		</tr>
				
<c:forEach items="${viewCart }" var="gm">		
		<tr>
			<td><img src="${pageContext.request.contextPath }/common/images/logo.gif" width="200" height="100"></td>
			<td>${gm.name }</td>
			<td>${gm.description }</td>
			<td>${gm.price }</td>
			<td colspan=2><a href="">删除</a></td>
		</tr>
		<tr>	
			<td colspan="5" align="center"><hr></td>
		</tr>
</c:forEach>		
	</table>
</body>
</html>