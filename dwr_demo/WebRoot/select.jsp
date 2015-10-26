<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'select.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	 <script type='text/javascript' src='/dwr_demo/dwr/engine.js'></script>
  <script type='text/javascript' src='/dwr_demo/dwr/interface/areaService.js'></script>
  <script type='text/javascript' src='/dwr_demo/dwr/util.js'></script>

  </head>
  
  <body>
   省 <select name ="provice" id="provice" onchange="getCity(this.value)">
       
    </select>
    
    市 <select name ="city" id="city">
       
    </select>
  </body>
</html>
<script>
   areaService.getAllPros(fillPro);
   
   function fillPro(data){
      dwr.util.removeAllOptions("provice");
      dwr.util.addOptions("provice",data,'pcode','pname'); 
   }
   
   function getCity(pcode){
      areaService.getCitiesByPcode(pcode,fillCity);
   }
   
    function fillCity(data){
      dwr.util.removeAllOptions("city");
      dwr.util.addOptions("city",data,'ccode','cname'); 
   }
</script>