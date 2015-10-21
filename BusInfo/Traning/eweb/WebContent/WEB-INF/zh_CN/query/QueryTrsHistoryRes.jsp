<%@ page contentType="text/html; charset=utf-8" session="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="pe" uri="/WEB-INF/tlds/powerengine2.tld"%>

<html><head><title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<link href="css/style.css" rel="stylesheet" type="text/css">
<body>


<form name="form1" method="post" action="QueryTrsHistory.do">
<table width="696" border="0" cellpadding="0" cellspacing="0"  >
  
 <tr>
      <td  class="location"  >交易明细查询结果页</td>
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

<pe:hidden fieldList="AcNo" />
<pe:combinedPage total="${recordNumber}" pageSize="${pageSize}" script="true" />

  <table width="696" class="table-class" cellspacing="1"  id="info2">
    <tr align="right" class="trTitle"> 
      <td colspan="12" align="right" class="tdTitle">第<pe:PageNo />页 | 共<pe:PageNumber />页 | 共<pe:RecordNumber/>笔记录</td>
    </tr>
    <tr class="trTitle">
      <td width="33%" align="center" class="tdTitle">交易日期</td>
      <td width="33%" align="center" class="tdTitle">交易方向</td>
      <td width="34%" align="center" class="tdTitle">交易金额</td>
    </tr>

   <c:forEach items="${List}" var="item">		
    <tr class="trTitle" align="center"> 
         <td align="center" class="tdValue"><c:out value="${item.TrsDate}" />&nbsp;</td>         
         <td align="center" class="tdValue"><fmt:message  key="CD.${item.CD}"/></td>   
         <td align="center" class="tdValue"><fmt:formatNumber value='${item.Amount}' type="currency" currencySymbol="￥"/> </td>    
    </tr>
	</c:forEach>
	<c:if test="${empty List}">
         <tr class="trTitle">
             <td colspan=7 align="center" class="tdValue" nowrap>没有找到相应的查询结果</td>
         </tr>
    </c:if>
   
    <tr align="right" class="trTitle"> 
      <td colspan="12" align="right"class="tdTitle">
  		<pe:TopPage type='2' value="首页"  /> &nbsp;
  		<pe:PrevPage type='2' value="上一页" /> &nbsp; 
  		<pe:NextPage type='2' value="下一页" /> &nbsp;
 		<pe:BottomPage type='2' value="尾页" /> &nbsp;
  		<pe:GotoPage type='1' insertContent="class='xxx'" insertContent2="class='yyy' "/> 
     </td>
	</tr>
  </table> 
 
  <div>
		&nbsp;<BR>
		<input class='button' type='button' name='reset1' value='返  回' onClick="window.location='preQueryTrsHistory.do'">
  </div>


<!--MainForm End-->
</form>
<!-- InstanceEndEditable -->

<!-- InstanceBeginEditable name="pageElseForm" -->
<!-- -->
<!-- InstanceEndEditable -->

</body>
<!-- InstanceEnd --></html>