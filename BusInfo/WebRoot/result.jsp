<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'result.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    

	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<script>
 function goPage(page){
 
   if(page==0){
     alert("当前已经是第一页");
     return ;
   }else if(page=='${pb.allPages+1}'){
      alert("当前已经最后一页"); 
      return ;
   }
   document.getElementById("pageNo").value=page;
   document.getElementById("fm").submit();
 }

</script>
  </head>
  
  <body>
  <h3>共有${pb.allRecs}条查询结果</h3>
  <hr>
  
  <form action="BusInfo" method="post" id="fm">
     <input type="hidden" name="stype" value="${stype }"/>
     <input type="hidden" name="keys" value="${keys }"/>
     <input type="hidden" name="pageNo" value="${pb.pageNo }" id="pageNo"/>
  </form>
  
  <table width ="100%" border=1>
      <tr>
         <th>线路</th>
         <th>运营时间</th>
         <th>运营区间</th>
         <th>公交类型</th>
         <th>途径站点</th>
      </tr>
      
      <c:forEach items="${pb.data}" var="vo">
        <tr>
         <td>${vo.busNO }</td>
         <td>${vo.startTime}~${vo.endTime}</td>
         <td>${vo.startPoint}~${vo.endPoint}</td>
         <td>${vo.busType}</td>
         <td>${vo.goStops}</td>
      	</tr>
      </c:forEach>
      
  </table>
  
  <table width="100%">
     <tr> <td>
     <a href="javascript:goPage(1)" >首页</a>
     <a href="javascript:goPage(${pb.pageNo-1})" >上一页</a>
     <a href="javascript:goPage(${pb.pageNo+1})" >下一页</a>
     <a href="javascript:goPage(${pb.allPages})" >尾页</a>
     
     
     共 ${pb.allPages } 页  当前第${pb.pageNo } 页  总 ${pb.allRecs }条记录
     </td></tr>
  </table>
  </body>
</html>
