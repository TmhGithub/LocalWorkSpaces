<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>权限演示</title>
  <script type="text/javascript" src="js/jquery-1.4.4.min.js"></script>
  
  <script type="text/javascript">
     function login(){
       var username = $("input[name='username']").val();
       var userpass = $("input[name='userpass']").val();

       $.ajax({
          url:"login_user.action?r="+Math.random(),
          dataType:"json",
          data:{'user.username':username,'user.userpass':userpass},
          success:function(da){
             if(da.status==1){
                location.href="home_user.action";
             }else{
                alert(da.msg);
                $("#btn").attr('value','登录');
                $("#btn").attr('disabled','');
             }
          },
          beforeSend:function(){
            $("#btn").attr('value','登录中');
            $("#btn").attr('disabled','disabled');
          }
       
       });
     }
  
  </script>
</head>

<body>

<center><h2>权限一般做法演示</h2></center>
<hr />

<form>
    <center>
    
 <table width="300" border="0" cellpadding="1" cellspacing="1" bgcolor="#FF9900" style="line-height:30px">
  <tr>
    <td width="68" align="center" bgcolor="#FFFFFF">用户名</td>
    <td width="225" colspan="2" align="center" bgcolor="#FFFFFF">
    <input type="text" name="username"  style="width:200px"/></td>
    </tr>
  <tr>
    <td align="center" bgcolor="#FFFFFF">口令</td>
    <td colspan="2" align="center" bgcolor="#FFFFFF">
    <input type="password" name="userpass"  style="width:200px"/></td>
    </tr>
  <tr>
    <td colspan="3" align="center" bgcolor="#FFFFFF">
    <input type="button"  value=" 登 录 " id="btn" onclick="login()"/></td>
    </tr>
</table>

  </center>
</form>
</body>
</html>
