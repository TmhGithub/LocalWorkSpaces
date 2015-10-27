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

	<table width="40%" align="center">
		<tr>	
			<td colspan="5" align="center">商品列表
			&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="${pageContext.request.contextPath }/portal/goods?submitFlag=viewCart">查看我的购物车</a>
			</td>
		</tr>
<c:forEach items="${goodsViewList }" var="gm">		
		<tr>
			<td><img src="${pageContext.request.contextPath }/common/images/logo.gif" width="200" height="100"></td>
			<td>
				<table>
					<tr>
						<td>商品名称</td>
						<td>${gm.name }</td>
					</tr>
					<tr>
						<td>商品描述</td>
						<td>${gm.description }</td>
					</tr>
					<tr>
						<td>商品价格</td>
						<td>${gm.price }</td>
					</tr>
					<tr>
						<td colspan=2><a href="${pageContext.request.contextPath }/portal/goods?submitFlag=toCart&uuid=${gm.uuid}">加入购物车</a></td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>	
			<td colspan="5" align="center"><hr></td>
		</tr>
</c:forEach>		
	</table>
</form>	
</body>
</html>