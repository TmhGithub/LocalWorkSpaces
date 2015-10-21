<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@ page contentType="text/html; charset=utf-8" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>       
<%@ taglib prefix="pe" uri="/WEB-INF/tlds/powerengine2.tld" %>
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script language="JScript.Encode" src="script.do"></script>

<script language="javascript">
	  
</script>
<link href="css/style.css" rel="stylesheet" type="text/css">
</head>
<body >
<form action="QueryTrsHistory.do" method="post" name="f1">
<pe:ViewName/>

 
<table width="696" border="0" cellpadding="0" cellspacing="0"  >
    <tr>
      <td  class="location"  >交易明细查询</td>
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

<table width="696" class="table-class" cellspacing="1">
	<tr class="trTitle">
		<td width="40%" class="tdTitle" align="right">账号</td>
		<td width="60%" class="tdValue" align="left">
          <select name="AcNo"  onChange="freshIt();"  >
             <pe:option items="${_USER.accounts}" optionName="name,id" 
           		optionValue="id" currentValue="${AcNo}" />
           </select>
       </td>
	</tr>
	<tr class="trTitle">
		<td width="40%" class="tdTitle" align="right">开始日期</td>
		<td width="60%" class="tdValue" align="left">
         <input type="text" name="BeginDate" value="<c:out value='${BeginDate}'/>" />
       </td>
	</tr>
	<tr class="trTitle">
		<td width="40%" class="tdTitle" align="right">结束日期</td>
		<td width="60%" class="tdValue" align="left">
         <input type="text" name="EndDate" value="<c:out value='${EndDate}'/>" />
       </td>
	</tr>	
	<tr class="trTitle">
		<td width="40%" class="tdTitle" align="right"><font class="errors"><span id="EEE">&nbsp;</span></font> </td>
        <td width="60%" class="tdValue" align="left"></td>
	</tr>
</table>
<table width="696" border="0">
    <tr>
      <td valign="top">&nbsp;</td>
    </tr>
	<tr>		
      <td  valign="top"> <input type="submit"  class="button" name="B5" value="查 询"></td>
	</tr>
</table>

<table width="696" border="0">
	<tr>
		<TD><span id="AAA"></span></TD>
	</tr>
</table>
</form>
</body>
</html>
