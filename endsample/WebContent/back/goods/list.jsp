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

	<table width="60%" align="center">
		<tr>	
			<td colspan="5" align="center">商品列表</td>
		</tr>
		<tr>	
			<td>商品编号</td>
			<td>商品名称</td>
			<td>商品描述</td>
			<td>商品价格</td>
			<td>操作</td>
		</tr>
<c:forEach items="${listValue}" var="gm">
	<tr>	
			<td>${gm.uuid }</td>
			<td>${gm.name }</td>
			<td>${gm.description }</td>
			<td>${gm.price }</td>
			<td><a href='${pageContext.servletContext.contextPath }/back/goods?submitFlag=toUpdate&uuid=${gm.uuid }'>修改</a></td>
		</tr>
</c:forEach>		
		
		
		<tr>	
			<td colspan="5" align="center">
				<input type="button" value="转到新增" onclick="window.location.href='/endsample/back/goods/add.jsp'">
				<input type="button" value="转到查询" onclick="window.location.href='/endsample/back/goods/query.jsp'">	
			</td>
		</tr>
	</table>
</body>
</html>