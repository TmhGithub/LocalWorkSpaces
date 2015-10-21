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
<body leftmargin="0">
<script language="JavaScript">
     var submitFlag=false;
     function dosub(){
           if(submitFlag==true){
                   alert("交易已经提交，请不要重复提交");
                   return false;
           }
           submitFlag=true;
           return true;
      }
</script>
<form action="EntInnerTransfer.do" method="post" name="form1">
<pe:token delayTime="30" /> 
<pe:ViewName/>
<table width="696" border="0" cellpadding="0" cellspacing="0"  >
    <tr>
      <td  class="location"  > 企业内部转帐
	    <c:if test="${_AuthJnlNo!=null}" > 
                 (修改退回交易,交易流水：<c:out value='${_AuthJnlNo}'/>) 
	              <input type="hidden" name="_AuthJnlNo"	value="<c:out value='${_AuthJnlNo}'/>">	
	    </c:if>
      </td>
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

<table width="696" class="table-class" cellspacing="1"  >
     <tr valign="middle" class="trTitle"> 
           <td width="40%" height="23"  class="tdTitle" align="right">转出账号</td>
           <td width="60%" height="23"  class="tdValue" align="left">
                        <SELECT name="AcNo">
						  <pe:option items="${_USER.accounts}" 
                                     optionName="id"
									 optionValue="id" 
                                     currentValue="${AcNo}" 
                                     condition='permission.equals("1")' />
						</SELECT>
           </td>
      </tr>
      <tr valign="middle" class="trTitle"> 
            <td width="40%" height="23"  class="tdTitle" align="right">转入账号</td>
            <td width="60%" height="23"  class="tdValue" align="left">
                        <SELECT name="AcNo2">
						   <pe:option items="${_USER.accounts}" 
                                      optionName="id"
									  optionValue="id" 
                                      currentValue="${AcNo2}" 
                             />
						</SELECT>
            </td>
     </tr>
     <tr valign="middle" class="trTitle"> 
            <td width="40%" height="23"  class="tdTitle" align="right">交易金额</td>
            <td width="60%" height="23"  class="tdValue" align="left"><input type="text" name="Amount" value="<c:out value='${Amount}'/>" /></td>
     </tr>
     <tr valign="middle" class="trTitle"> 
            <td width="40%" height="23"  class="tdTitle" align="right">转帐用途</td>
            <td width="60%" height="23"  class="tdValue" align="left"><input type="text" name="Purpose" value="<c:out value='${Purpose}'/>" /></td>
     </tr>
</table>

<table width="696" bgcolor="f8f8ff" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td valign="top">&nbsp;</td>
    </tr>
    <tr>
      <td   ><input type="submit" name="Button25" value="确认" class="button"></td>
    </tr>
</table>
</form>
</body>
</html>
