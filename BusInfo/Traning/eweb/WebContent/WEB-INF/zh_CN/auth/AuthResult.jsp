<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@ page contentType="text/html; charset=utf-8" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>       
<%@ taglib prefix="pe" uri="/WEB-INF/tlds/powerengine2.tld" %>

<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="css/style.css" rel="stylesheet" type="text/css">
</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<!-- InstanceBeginEditable name="main" -->

<form name="form1" method="post" action="">
<pe:ViewName/>	


<table width="696" border="0" cellpadding="0" cellspacing="0"  >
    <tr>
      <td  class="location"  >授权交易结果</td>
    </tr>
    <tr>
      <td valign="top" background="images/bg_line_02.gif"><img src="images/spacer.gif" width="1" height="2"></td>
    </tr>
    <tr>
      <td valign="top" class="tdError"><pe:error/></td>
    </tr>
    <tr>
      <td valign="top">&nbsp;</td>
    </tr>
</table>
 <table width="696" class="table-class" cellspacing="1" >
     <tr class="trTitle"> 
           <td norwap class="tdTitle">交易名称&nbsp;</td>
           <td norwap class="tdTitle">交易流水号&nbsp;</td>
           <td norwap class="tdTitle">当前交易流水号&nbsp;</td>
           <td norwap class="tdTitle">交易时间&nbsp;</td>
           <td norwap class="tdTitle">交易状态&nbsp;</td>
           <td norwap class="tdTitle">交易结果&nbsp;</td>
     </tr>
    <c:forEach items="${Result}" var="item" varStatus="Status"	>
     <tr class="trTitle">
           <td norwap class="tdValue"><pe:message key="${item._TransName}"  nameSpace="TransName"/>&nbsp;</td>
           <td norwap class="tdValue"><c:out value="${item._AuthJnlNo}" />&nbsp;</td>
           <td norwap class="tdValue"><c:out value="${item._JnlNo}" />&nbsp;</td>
           <td norwap class="tdValue"><fmt:formatDate value="${item._EndTime}" type="both"/>&nbsp;</td>
           <td norwap class="tdValue"><pe:message key="${item._JnlStatus}" nameSpace="JnlStatus"/> &nbsp;</td>
           <td norwap class="tdValue"><pe:message key="${item._TrsData._TrsStatus}" nameSpace="AuthJnlStatus"/>&nbsp;</td>
     </tr>
    </c:forEach>
</table>
<table width="696" border="0" cellpadding="0" cellspacing="0" >
    <tr>
      <td valign="top" >&nbsp;</td>
    </tr>
    <tr>
      <td valign="top"  >
                 <input type="button" class="button" name="Back" value="返回" onClick="JavaScript: window.navigate('AuthList.do')">
      </td>
    </tr>
</table>
</form>
</body> 
</html> 

 
 
 
 

























