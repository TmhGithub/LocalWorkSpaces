<%@ page contentType="text/html; charset=utf-8" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>       
<%@ taglib prefix="pe" uri="/WEB-INF/tlds/powerengine2.tld" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="css/style.css" rel="stylesheet" type="text/css">

</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<!-- InstanceBeginEditable name="main" -->


<form method="post" action="AuthResult.do"   >	
  <pe:ViewName/>	
  <input type="hidden" name="counter"	value="1"> 		
  <input type="hidden" name="_AuthList[0]._AuthJnlNo" value="<c:out value='${_AuthJnlNo}'/>">	
  <pe:token />

<table width="696" border="0" cellpadding="0" cellspacing="0"  >
    <tr>
      <td  class="location"  >待授权交易详细信息</td>
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
    <td colspan="2" class="tdTitle">交易信息</td>
  </tr>
  <tr class="trTitle">
    <td height="23" width="40%" align="right" class="tdTitle"><fmt:message key="JnlNo" /> &nbsp;</td>
    <td height="23" width="60%" align="left" class="tdValue"> <c:out value="${_AuthJnlNo}" /> &nbsp;</td>
  </tr>
  <tr class="trTitle">
    <td height="23" width="40%" align="right"  class="tdTitle"><fmt:message key="TransName" />
      &nbsp;</td>
     <td height="23" width="60%" align="left" class="tdValue"><pe:message key="${_TransName}" nameSpace="TransName" />
      &nbsp;</td>
  </tr>
  <tr class="trTitle">
    <td height="23" width="40%" align="right"  class="tdTitle">交易时间&nbsp;</td>
     <td height="23" width="60%" align="left" class="tdValue"><c:out value="${DateTime}" />&nbsp;</td>
  </tr>
</table>
<br>
<p>
         <pe:push name="_stack" value="${_JnlData}" /> 
         <jsp:include page="AuthInner.jsp" />
</p>


 
<table width="696" border="0" cellpadding="0" cellspacing="0" >
    <tr>
      <td valign="top" >&nbsp;</td>
    </tr>
    <tr>
      <td valign="top"  >
                  <input type="submit" name="Accept" value="接受"  class="button"/>
                  <input type="submit" name="Reject" value="拒绝" class="button"/>
                  <input type="submit" name="Entry" value="退回" class="button"/>
                  <input type="button" name="Back" value="返回" class="button" onClick="JavaScript: window.navigate('AuthList.do')">
      </td>
    </tr>
</table>

</form>
<!-- InstanceEndEditable -->
</body> 
<!-- InstanceEnd --></html> 

 
 
 
 

























