<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<HEAD>
<TITLE>iSoftStone培训中心考试平台</TITLE>
<META http-equiv="Content-Type" content="text/html; charset=gb2312"><LINK rel="stylesheet" href="${pageContext.request.contextPath}/webep/css/style.css" type="text/css">
</HEAD>
<BODY bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<SCRIPT language="JavaScript1.2" src="${pageContext.request.contextPath}/webep/js/coolmenus4.js"></SCRIPT>
<SCRIPT language="JavaScript1.2" src="${pageContext.request.contextPath}/webep/js/cm_addins.js"></SCRIPT>
	<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
		<TR>
			<TD>
				<TABLE width="100%" border="0" cellpadding="0" cellspacing="0" class="pagetop">
					<TR>
						<TD width="420" nowrap class="headerLogo"><IMG src="${pageContext.request.contextPath}/webep/logo.gif"><IMG src="${pageContext.request.contextPath}/webep/logo_js.gif">
						</TD>
						<TD class="welcome">
						</TD>
						<TD width="187" align="right" nowrap class="headerHelp">
							<TABLE border="0" cellpadding="4" cellspacing="2">
								<TR>
									<TD align="center" class="sys"><A href="${pageContext.request.contextPath}/Index.htm" class="syslink">退出登录</A> <A href="password.htm" class="syslink">修改密码</A>
									</TD>
								</TR>
							</TABLE>
						</TD>
					</TR>
				</TABLE>
				<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
					<TR>
						<TD height="24" class="menuMain">
							<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
								<TR>
									<TD>&nbsp;	
									</TD>
								</TR>
							</TABLE>
						</TD>
					</TR>
					<TR>
						<TD height="2" class="menuBl1"><IMG src="${pageContext.request.contextPath}/webep/space.gif" width="1" height="1"></TD>
					</TR>
					<TR>
						<TD height="3" class="menuBl2"><IMG src="${pageContext.request.contextPath}/webep/space.gif" width="1" height="1"></TD>
					</TR>
				</TABLE>
				<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
					<TR>
						<TD><IMG src="${pageContext.request.contextPath}/webep/space.gif" width="778" height="1"></TD>
					</TR>
				</TABLE>
<P>
<SCRIPT language=JavaScript1.2>showMenu("","../../exam-platform",2);
</SCRIPT>
				<TABLE width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#999999">
					<TR>
						<TD><IMG src="${pageContext.request.contextPath}/webep/space.gif" width="1" height="1"></TD>
					</TR>
				</TABLE>
			</TD>
		</TR>
	</TABLE><BR>
	<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
		<TR>
			<TD width="20">&nbsp;	
			</TD>
			<TD align="left" valign="top">
				<TABLE border="0" class="top" width="700">
					<TR>
						<TD class="FormTitle" height="2" width="100%"><B>题目审核</B>
						</TD>
					</TR>
					<TR>
						<TD>&nbsp;	
						</TD>
					</TR>
					<TR>
						<TD>
							<TABLE align="center" border="0" width="90%">
								<TR>
									<TD height="20" width="1%">
									</TD>
									<TD width="12%">	题目编号：
									</TD>
									<TD width="35%">										
										<font color="#808080"><s:property value="theme.theId"/></font>
									</TD>
									<TD width="12%">	题目类型：
									</TD>
									<TD>										
										<font color="#808080"><s:property value="theme.tbThemeType.thetypeName"/></font>
									</TD>
								</TR>
								<TR>
									<TD height="20">
									</TD>
									<TD>	题目范围：
									</TD>
									<TD>
										<font color="#808080"><s:property value="theme.tbThemeArea.theareaName"/></font>
									</TD>
									<TD>	题目难度：
									</TD>
									<TD>										
										<font color="#808080"><s:property value="theme.tbThemeDifficulty.thedifName"/></font>
									</TD>
								</TR>
								<TR>
									<TD height="20">
									</TD>
									<TD>	录入人：
									</TD>
									<TD>
				                      <font color="#808080"><s:property value="theme.tbUser.userName"/></font>
									</TD>
									<TD width="12%">	录入日期：
									</TD>
									<TD>										
										<font color="#808080"><s:property value="theme.theIndate"/></font>
									</TD>
								</TR>
							</TABLE>
						</TD>
					</TR>
					<TR>
						<TD>
<HR width="98%">
						</TD>
					</TR>
					<TR>
						<TD>
							<TABLE align="center" border="0" width="90%">
								<TR>
									<TD height="20" width="1%">
									</TD>
									<TD width="12%">	题目：
									</TD>
								<TD>	<TEXTAREA class=box  cols="70%" name="question" rows=7 disabled><s:property value="theme.theContent"/></TEXTAREA> 
									</TD>
								</TR>
							</TABLE>
						</TD>
					</TR>
										<TR>
						<TD>
<HR width="98%">
						</TD>
						</TR>
	             <TR>
	              	<TD>
							<TABLE align="center" border="0" width="90%">
								<TR>
									<TD height="20" width="1%">
									</TD>
									<TD width="12%">	答案：
									</TD>
									<TD>	
								   <TABLE align="left" border="0" class="ItemList" height="20" width="83%">
								      <TR height="24" align="middle" >
												<TD class="ItemTitle" height="20" width="5%">	选择
												</TD>
												
												<TD class="ItemTitle" width="20%">	备选答案
												</TD>
												
											</TR>
											<s:iterator value="listKey" var="lk">
											<TR align="middle" class="ItemBody">
												<TD class="ItemBody" height="20">	
													<input type="checkbox" name="key"  value='<s:property value="#lk.thekeyId"/>' disabled="disabled"
														<s:iterator value="theRightkey" var="rk">
															<s:if test="#rk == #lk.thekeyId">checked="checked"</s:if>
														</s:iterator>
													>
												</TD>
												<TD class="ItemBody" align="left">	<s:property value="#lk.theAllkey"/>
												</TD>
											</TR>
											</s:iterator>
										</TABLE>
						               </TD>
								</TR>
								
							</TABLE>
						</TD>    
	             </TR>
				
					<TR>
						<TD>
<HR width="98%">
						</TD>
						</TR>
				<s:form action="audTheme" namespace="/" method="post" id="form7" name="form7" theme="simple">
				<s:hidden name="theme.themeId"></s:hidden>
					<TR>
						<TD>
							<TABLE align="center" border="0" width="90%">
								<TR>
									<TD height="20" width="1%">
									</TD> 
									<TD width="12%">	审核意见：
									</TD>
								<TD>	<s:textarea cssClass="box"  cols="70%" name="themeAud.audIdea" rows="4" />
									</TD>
								</TR>
							</TABLE>
						</TD>
					</TR>
					<TR>			
						<TD>
<HR width="98%">
						</TD>
					</TR>
					<TR>
						<TD>
							<TABLE align="center" border="0" width="90%">
								<TR>
									<TD align="right">
										<input class=button type=button name="bsave" value=" 通 过 " onclick="toPass()">
										<input class=button type=button name="bsave" value=" 拒 绝 " onclick="toDelete()">
										<INPUT class="button" type="button"  name="search" value=" 返 回 " onclick="window.location.href='${pageContext.request.contextPath}/toback.action?Flag=toaudit'">
									</TD>
								</TR>
							</TABLE>
						</TD>
					</TR>
					</s:form>
					<TR>
						<TD>&nbsp;	
						</TD>
					</TR>
				</TABLE>
			</TD>
		</TR>
	</TABLE><BR>
	<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
		<TR>
			<TD class="pagefootTl"><IMG src="${pageContext.request.contextPath}/webep/space.gif" width="778" height="1"></TD>
		</TR>
		<TR>
			<TD height="25" class="pagefoot"><FONT face="Arial, Helvetica, sans-serif">&copy;</FONT> 2005-2007  版权所有 软通动力信息技术有限公司 Powered by 软通动力武汉开发中心
			</TD>
		</TR>
	</TABLE>
</BODY>
</HTML>
<SCRIPT language="JavaScript">
function toPass()
{	
	if(confirm("确定通过题目吗？"))
	{
		alert("通过成功！"); 	
		document.getElementById("form7").submit(); 
	}
}
function toDelete()
{	
	if(confirm("确定拒绝题目吗？"))
	{
		alert("拒绝成功！"); 
		document.getElementById("form7").action="audThemeRe"
		document.getElementById("form7").submit(); 
	}
}
function toReturn()
{	
	document.location.href='quesLibAudit.htm'; 
}
</SCRIPT>