<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@ page contentType="text/html; charset=UTF-8" session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>       
<%@ taglib prefix="pe" uri="/WEB-INF/tlds/powerengine2.tld" %>
<html>
<head>
<title>银行网络系统演示</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script language="JScript.Encode" src="script.do"></script>
   <script type="text/javascript">
      
      function postForm2Server(clickObj)
      {
            post2Server('login.do','EEE',document.f1,clickObj);
			// postForm2ServerWithCallback('login.do',document.f1, clickObj, true, mycallback);
		 // var postData="UserId=zhujf&Password=88888888";
		// post2ServerWithCallback('login.do',postData,false, mycallback);
      }
      
      function mycallback(success, message)
      {
         alert(success);
         alert(message);
      }

    </script>
<link href="css/style.css" rel="stylesheet" type="text/css">
</head>
<body class="body_bg">
<table width="516" border="0" align="center" cellpadding="0" cellspacing="0">

  <tr>
    <td align="center"><div id="PEAjaxState"  style="font-size:12; color:#FFFFFF; position:absolute; width:106px; height:18px; z-index:2; left: 801px; top: 44px; visibility: hidden; background-color: #8C0000; layer-background-color: #8C0000; border: 1px none #000000;">通讯中...</div></td>
  </tr>
</table>
<table width="516" height="83" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="left">&nbsp;</td>
  </tr>
</table>

<form method="post"  name="f1">
<pe:ViewName />
<input type="hidden" name="_locale" value="zh_CN">
<table width="516" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="left"><img src="images/loginnew_05.gif" width="516" height="52" alt="" /></td>
  </tr>
</table>
<table width="516" height="196" border="0" align="center" cellpadding="0" cellspacing="0" >
  <tr valign="top">
    <td align="center" background="images/loginnew_06.gif">
     <table width="60%" height="196" border="0" cellpadding="0" cellspacing="5">
      <tr>
        <td width="31%" height="25" align="right">用户名:</td>
        <td width="69%" align="left"><input type="text" name="UserId" value="<c:out value='${UserId}'/>" size="20"></td>
      </tr>
      <tr>
        <td height="25" align="right">密&nbsp;&nbsp;码:</td>
        <td align="left"><input type="password" name="Password" value="<c:out value='${Password}'/>" size="20"></td>
      </tr>
      <tr>
        <td height="30" colspan="2" align="center">
              <input type="button" value=" 登录 " onClick="postForm2Server(this);" class="button"> 
			  <input type="reset" name="S1" value=" 重置 " class="button"></td>
        </tr>
		<tr align="center">
						<td colspan="2"><font class="tdError"><span id="EEE">&nbsp;</span></font></td>
		</tr>
    </table>
   </td>
  </tr>
</table>
</form>
</body>
</html>
