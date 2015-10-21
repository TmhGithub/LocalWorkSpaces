<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>  
   
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
 <script type="text/javascript">
   function checkForm(f){
      if(f.keys.value==''){
         alert('请输入关键字');
         return false;
      }
   }
 
 </script>
  </head>
  
  <body>
  <br>
  
  <br>
  <br>
  <br>
  <form action="BusInfo" method="post" onsubmit="return checkForm(this)">
     <table width="700" align="center">
     <tr>
       <td align="center">
          公交查询: <input type="radio" name="stype" value="byNo"  checked/>按路线 
           <input type="radio" name="stype" value="byStop"/>按站点
           <input type="text" name="keys" style="width:400px;height:25px;line-height:25px"/>
           <input type="submit" value="搜索" />
       </td>
     </tr>
     </table>
     </form>
  </body>
</html>
