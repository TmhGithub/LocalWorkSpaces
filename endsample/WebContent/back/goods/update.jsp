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

<c:if test="${param['submitFlag']=='update' }">
	<jsp:useBean id="updateGm" class="cn.javass.web.endsample.back.goods.vo.GoodsModel" scope="request"></jsp:useBean>
	<jsp:setProperty property="*" name="updateGm"/>
	<jsp:forward page="/back/goods"></jsp:forward>
</c:if>


<form action="/endsample/back/goods/update.jsp" method="post">
	<input type="hidden" name="submitFlag" value="update">
	<table width="60%" align="center">
		<tr>	
			<td colspan="5" align="center">商品修改</td>
		</tr>
		<tr>	
			<td>商品编号</td>
			<td><input type="text" name="uuid" value="${updateModel.uuid }"></td>
		</tr>
		<tr>	
			<td>商品名称</td>
			<td><input type="text" name="name" value="${updateModel.name }"></td>
		</tr>
		<tr>	
			<td>商品描述</td>
			<td><input type="text" name="description"  value="${updateModel.description }"></td>
		</tr>
		<tr>	
			<td>商品价格</td>
			<td><input type="text" name="price"  value="${updateModel.price }"></td>
		</tr>
		<tr>	
			<td colspan="5" align="center"><input type="submit" value="保存"></td>
		</tr>
	</table>
</form>	


</body>
</html>