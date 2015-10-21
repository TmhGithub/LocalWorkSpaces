<%@ page contentType="text/html; charset=utf-8" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>       
<%@ taglib prefix="pe" uri="/WEB-INF/tlds/powerengine2.tld" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="css/style.css" rel="stylesheet" type="text/css">
</head><body>
<form name="form1" method="post" >
<table width="696" border="0" cellpadding="0" cellspacing="0"  >
    <tr>
      <td  class="location"  >客户信息</td>
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
     <tr valign="middle" class="trTitle"> 
           <td width="20%" height="23"  class="tdTitle" align="center">分行号</td>
           <td width="20%" height="23"  class="tdTitle" align="center">机构号</td>
           <td width="20%" height="23"  class="tdTitle" align="center">客户名称</td>
           <td width="20%" height="23"  class="tdTitle" align="center">开户日期</td>
      </tr>
     <tr valign="middle" class="trTitle"> 
           <td width="20%" height="23"  class="tdValue" align="center"><c:out value="${BranchId}"/></td>
           <td width="20%" height="23"  class="tdValue" align="center"><c:out value="${DeptId}"/></td>
           <td width="20%" height="23"  class="tdValue" align="center"><c:out value="${Name}"/></td>
           <td width="20%" height="23"  class="tdValue" align="center"><c:out value="${OpenDate}"/></td>
      </tr>
</table>


</form>
</body> 
</html> 
