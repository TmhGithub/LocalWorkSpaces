<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>个人相册</title>
</head>
<style>
body{font-size:12px}
.abm{ list-style:none}
.abm li{ float:left; width:220px; margin:20px}

.abm li img{ padding:2px; border:#CCC  solid 1px}
</style>
<body>
<h1>我的电子相册</h1>
<hr />
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="12%" style="border-right:#CCC  solid 3px"><h3>相册分类：</h3></td>
    <td width="88%" rowspan="2" align="left"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>
        <ul class="abm">
        <c:forEach items="${ls}"  var="vo">
          <li><div align="center"><a href="#"><img src="${pageContext.request.contextPath }/${vo.storePath}" width="200" height="120" /></a><br />
          ${vo.title}&nbsp;<a href="#">下载</a>(${vo.sizeStr})</div></li>
      </c:forEach>
        </ul></td>
      </tr>
    </table>
    </td>
  </tr>
  <tr>
    <td align="right" valign="top" style="border-right:#CCC  solid 3px">
      <table width="90%" border="0" cellspacing="0" cellpadding="0" style="line-height:25px;padding:10px; font-size:14px; font-family:'黑体'">
        <tr>
          <td><a href="#">个人写真</a></td>
        </tr>
        <tr>
          <td><a href="#">风光风景</a></td>
        </tr>
        <tr>
          <td><a href="#">非主流</a></td>
        </tr>
        <tr>
          <td><a href="#">私密相册</a></td>
        </tr>
        
        <tr>
          <td>
            <h3> <a href="">上传照片</a></h3>
          </td>
        </tr>
        
    </table></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>

</body>
</html>
