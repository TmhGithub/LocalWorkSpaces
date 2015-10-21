<%@ page contentType="text/html; charset=UTF-8" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>       
<%@ taglib prefix="pe" uri="/WEB-INF/tlds/powerengine2.tld" %>

<HTML>
<HEAD>
<link rel="stylesheet" type="text/css" href="css/header.css">
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=gb2312">
<style type="text/css">
<!--
.style4 {font-size: 12px}
-->
</style>
</HEAD>
<BODY BGCOLOR=#FFFFFF LEFTMARGIN=0 TOPMARGIN=0 MARGINWIDTH=0 MARGINHEIGHT=0>
<table width="100%"  border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td><TABLE width="100%" height="65" border=0 cellPadding=0 cellSpacing=0>
      <TBODY>
        <TR>
          <TD width="200" height="65" align=center valign="middle" 
            background=images/index_top_left_2.gif class="whitelink"><img src="images/title.gif" width="200" height="65"> </TD>
          <TD align="left" valign="top" background="images/title-bk.gif">
           <table width="650" height="28" border="0" cellpadding="0" cellspacing="0">
             <tr>
               <td align="right"><img src="images/title2.gif" width="129" height="28"></td>
             </tr>
           </table>
           <TABLE width="600" height="33" border=0 cellPadding=0 cellSpacing=0>
            <TBODY>
              <TR>
               
                <TD width="34" align=middle nowrap><IMG height=33 src="images/index_top_left_3.gif" width=34></TD>
                <TD  align=middle nowrap></TD>
				
		        <!-- 
                <TD width="31" class=zi><IMG height=33 
                  src="images/index_top_left_7.gif" width=31></TD>
                 -->
                    <TD width="100%" nowrap><span class="style4"><font color=white> 
                                           　登录名： 
                      <c:out value="${_USER.userId}"  />
                       姓名： 
                      <c:out value="${_USER.name}"  />                      
                       企业名称： 
                      <c:out value="${_USER.cifName}"  /> </font></span></TD>
                
                 <!--
                <TD class=zi><IMG height=33 
                  src="./images/index_top_left_7.gif" width=31></TD>
                <TD nowrap><A 
                  href="#" target="left" class=whitelink>以后添加项目</A></TD>
                <TD class=zi><IMG height=33 
                  src="./images/index_top_left_7.gif" width=31></TD>
                
                <TD nowrap><A 
                  href="#" target="left" class=whitelink>以后添加</A></TD>
                <TD class=zi><IMG height=33 
                  src="./images/index_top_left_7.gif" width=31></TD>
                 
                <TD nowrap><A 
                  href="#" target="left" class=whitelink>以后添加</A></TD>
                <TD class=zi><IMG height=33 
                  src="./images/index_top_left_7.gif" width=31></TD>
                <TD nowrap><A 
                  href="#" target="left" class=whitelink>以后添加</A></TD>
                <TD class=zi><IMG height=33 
                  src="./images/index_top_left_7.gif" 
            width=31></TD>
                -->
              </TR>
            </TBODY>
          </TABLE>
           <table width="400" border="0" cellspacing="0" cellpadding="0">
             <tr>
               <td><img src="images/d2.gif" width="19" height="4"></td>
             </tr>
           </table>
           </TD>
        </TR>
      </TBODY>
    </TABLE></td>
  </tr>
</table>
</BODY>
</HTML>