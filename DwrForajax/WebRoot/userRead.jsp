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
	
  <script type='text/javascript' src='/DwrForajax/dwr/engine.js'></script>
  <script type='text/javascript' src='/DwrForajax/dwr/interface/userValidate.js'></script>
  <script type='text/javascript' src='/DwrForajax/dwr/util.js'></script>

  <script type="text/javascript">
	function toRead(){
		var user={
					name:$("name").value
				 };
		userValidate.saveUser(user,function(data){
				alert(data);
		});
	}
    
  </script>
	
  </head>
  
  <body>
   <h3>DWR演示</h3>
   <hr>
   <form action="">
   <table width="500" border="1" cellspacing="1" cellpadding="1">
  <tr>
    <td colspan="2">用户注册</td>
  </tr>
  <tr>
    <td width="157">用户名：</td>
    <td width="336"><input type="text" name="name" id="name"/><div id="msg"></div></td>
  </tr>
  <tr>
    <td>年龄：</td>
    <td><input type="text" name="age" id="age"/></td>
  </tr>
 
   <tr>
    <td colspan="2"><input type="button"  value="提 交 " onclick="toRead()"/></td>
  </tr>
</table>
</form>
</body>
<script>

</script>


</html>
