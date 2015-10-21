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

<form action="AuthResult.do" method="post" >
<pe:ViewName/>
<pe:token delayTime="300" />
<input type="hidden" name="counter"	value="<pe:size name='${_AuthList}' />"> 

<table width="696" border="0" cellpadding="0" cellspacing="0"  >
    <tr>
      <td  class="location"  >待授权交易列表</td>
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
      <td norwap align="center" class="tdTitle">&nbsp;</td>
      <td norwap align="center" class="tdTitle">交易码</td>
      <td norwap align="center" class="tdTitle">交易时间</td>
      <td norwap align="center" class="tdTitle">转出账号</td>
      <td norwap align="center" class="tdTitle">转入账号</td>
      <td norwap align="center" class="tdTitle">金额</td>
      <td norwap align="center" class="tdTitle">&nbsp;</td>
    </tr>
    <c:forEach items="${_AuthList}" var="item" varStatus="status"> 
      <tr class="trTitle"> 
        <td align="center" class="tdValue">
             <input name="_AuthList[<c:out value='${status.count-1}' />]._AuthJnlNo" type="checkbox" value="<c:out value='${item._AuthJnlNo}'/>"> 
        </td>
        <td norwap align="center" class="tdValue"><pe:message key="${item._TransName}" nameSpace="TransName" /> &nbsp;</td>
        <td norwap align="center" class="tdValue"><fmt:formatDate value="${item.DateTime}" pattern="yyyy-MM-dd" /> &nbsp;</td>
        <td norwap align="center" class="tdValue"><c:out value="${item.AcNo}" /> &nbsp;</td>
        <td norwap align="center" class="tdValue"><c:out value="${item.AcNo2}" /> &nbsp;</td>
        <td norwap align="center" class="tdValue"><c:out value="${item.txAmount}" />&nbsp;</td>
        <td norwap align="center" class="tdValue">
             <a href="AuthDetail.do?_AuthJnlNo=<c:out value='${item._AuthJnlNo}'/>" target="_self"> 交易详细信息</a>&nbsp;
        </td>
      </tr>
    </c:forEach>
 </table>


<table width="696" border="0" cellpadding="0" cellspacing="0" >
    <tr>
      <td valign="top" >&nbsp;</td>
    </tr>
    <tr>
      <td valign="top"  >
                  <input type="submit" name="Accept" value="接受"  class="button"/>
                  <input type="submit" name="Reject" value="拒绝" class="button"/>
                  <input type="submit" name="Entry" value="退回" class="button"/>
      </td>
    </tr>
</table>
</form>
</body> 
</html> 