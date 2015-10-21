<%@ page contentType="text/html; charset=utf-8" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>       
<%@ taglib prefix="pe" uri="/WEB-INF/tlds/powerengine2.tld" %>
<pe:pop name="_stack" var="items" />
<table width="696" class="table-class" cellspacing="1" >
  <c:forEach items="${items}" var="item"> 
	<pe:instanceof  className='java.util.ArrayList'  value='${item.value}'  var='isArray' />
	 <c:choose>
       <c:when test="${empty item.value}">
         <tr> 
             <td width="40%" class="tdTitle" align="right"> <pe:message key="${item.key}" />&nbsp;</td>
             <td width="60%" class="tdValue" align="left">&nbsp;  </td>
        </tr> 
       </c:when>
       <c:when test="${isArray}" >
      <c:forEach items="${item.value}" var="subitems" varStatus="status"> 
       <tr class="trTitle"> 
            <td width="40%" class="tdTitle" align="right"><pe:message key="${item.key}" /> 第<c:out value="${status.count}"/>条记录</td>
            <td width="60%" class="tdValue" align="left">
	            <pe:push name="_stack"  value="${subitems}"  />
	           <jsp:include page="AuthInner.jsp" />
	        </td>
      </tr> 
  	  </c:forEach>
      </c:when>
      <c:otherwise>
      <tr class="trTitle"> 
         <td width="40%" class="tdTitle" align="right"> <pe:message key="${item.key}" />&nbsp;</td>
         <td width="60%" class="tdValue" align="left"><pe:message  key="${item.value}"  nameSpace="${item.key}" />  &nbsp;</td>
      </tr> 
      </c:otherwise>
    </c:choose>
  </c:forEach>
</table>