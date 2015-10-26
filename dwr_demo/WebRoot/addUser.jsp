<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
  <script type='text/javascript' src='/dwr_demo/dwr/engine.js'></script>
  <script type='text/javascript' src='/dwr_demo/dwr/interface/userService.js'></script>
  <script type='text/javascript' src='/dwr_demo/dwr/util.js'></script>

  <script type="text/javascript">
     function saveUser(){
         var user = {
                     uname:$("uname").value,
                     age:$("age").value,
                     birth:new Date()
                    };
                    
         userService.saveUser(user,showMsg);  
     }
     
     function showMsg(data){
       alert(data.uname);
     }
     
  </script>
	
  </head>
  
  <body>
   <h3>ajax演示</h3>
   <hr>
   <form action="">
   <table width="500" border="1" cellspacing="1" cellpadding="1">
  <tr>
    <td colspan="2">用户注册</td>
  </tr>
  <tr>
    <td width="157">用户名：</td>
    <td width="336"><input type="text" name="uname" id="uname"/><div id="msg"></div></td>
  </tr>
  <tr>
    <td>age：</td>
    <td><input type="text" name="age" id="age"/></td>
  </tr>
  <tr>
    <td>birth：</td>
    <td><input type="text" name="birth" id="birth"/></td>
  </tr>
   <tr>
    <td colspan="2"><input type="button"  value=" 提 交 " onclick="saveUser()"/></td>
  </tr>
</table>
</form>
</body>
<script>

</script>


</html>
