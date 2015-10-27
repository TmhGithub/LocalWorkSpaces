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
<META http-equiv="Content-Type" content="text/html; charset=gb2312"><LINK rel="stylesheet" href="/exam-platform/webep/css/style.css" type="text/css">
<script language="JavaScript" src="/exam-platform/webep/js/ajax.js"></script>
<script type="text/javascript">
function goPage(current){
	document.getElementById("currentPage").value = current;
	document.getElementById("form6").submit();
}
function gotoPage(){
	var page = document.getElementById("QueryPageNo").value;
	document.getElementById("currentPage").value = page;
	document.getElementById("form6").submit();
}
</script>
</HEAD>
<BODY bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<SCRIPT language="JavaScript1.2" src="/exam-platform/webep/js/coolmenus4.js"></SCRIPT>
<SCRIPT language="JavaScript1.2" src="/exam-platform/webep/js/My97DatePicker/WdatePicker.js"></SCRIPT>
<SCRIPT language="JavaScript1.2" src="/exam-platform/webep/js/cm_addins.js"></SCRIPT>
	<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
		<TR>
			<TD>
				<TABLE width="100%" border="0" cellpadding="0" cellspacing="0" class="pagetop">
					<TR>
						<TD width="420" nowrap class="headerLogo"><IMG src="/exam-platform/webep/logo.gif"><IMG src="/exam-platform/webep/logo_js.gif">
						</TD>
						<TD class="welcome">
						</TD>
						<TD width="187" align="right" nowrap class="headerHelp">
							<TABLE border="0" cellpadding="4" cellspacing="2">
								<TR>
									<TD align="center" class="sys"><A href="/exam-platform/Index.htm" class="syslink">退出登录</A> <A href="password.htm" class="syslink">修改密码</A>
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
						<TD height="2" class="menuBl1"><IMG src="/exam-platform/webep/space.gif" width="1" height="1"></TD>
					</TR>
					<TR>
						<TD height="3" class="menuBl2"><IMG src="/exam-platform/webep/space.gif" width="1" height="1"></TD>
					</TR>
				</TABLE>
				<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
					<TR>
						<TD><IMG src="/exam-platform/webep/space.gif" width="778" height="1"></TD>
					</TR>
				</TABLE>
<P>
<SCRIPT language=JavaScript1.2>showMenu("","../../exam-platform",2);
</SCRIPT>
				<TABLE width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#999999">
					<TR>
						<TD><IMG src="/exam-platform/webep/space.gif" width="1" height="1"></TD>
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
						<TD class="FormTitle" height="2" width="100%"><B>题目撤销</B>
						</TD>
					</TR>
					<TR>
						<TD>&nbsp;	
						</TD>
					</TR>
					<s:form action="queryTheme" namespace="/" method="post" id="form6" name="form6" theme="simple">
					<s:hidden name="Flag" value="tocancel"></s:hidden>
					<s:hidden name="currentPage"/>
					<TR>
						<TD>
							<TABLE align="center" border="0" width="90%">
								<TR>
									<TD height="20" width="1%">
									</TD>
									<TD width="12%">	题目编号：
									</TD>
									<TD width="35%">										
										<INPUT class=box name="theme.theId" size=20 maxLength=20>
									</TD>
									<TD width="12%">	题目类型：
									</TD>
									<TD>										
				<select id="questionType" name="theme.tbThemeType.thetypeName" onclick="getOption('questionType')">
				</select>
									</TD>
								</TR>
								<TR>
									<TD height="20">
									</TD>
									<TD>	题目范围：
									</TD>
									<TD>
				<select id="questionArea" name="theme.tbThemeArea.theareaName" onclick="getOption('questionArea')">
				</select>
									</TD>
									<TD>	题目难度：
									</TD>
									<TD>										
				<select id="questionDif" name="theme.tbThemeDifficulty.thedifName">
				</select>
									</TD>
								</TR>
								<TR>
									<TD height="20">
									</TD>
									<TD>	录入人：
									</TD>
									<TD>										
				<INPUT class=box name="theme.tbUser.userName" size=20 maxLength=20 value="">
									</TD>
								</TR>
								<TR>
									<TD height="20">
									</TD>
									<TD>	录入日期：
									</TD>
									<TD colspan="3">	由：										
										<s:textfield name="theIndate1" cssClass="Wdate" onclick='WdatePicker()' theme="simple"/>&nbsp;
										&nbsp;&nbsp;&nbsp;&nbsp;到：										
										<s:textfield name="theIndate2" cssClass="Wdate" onclick='WdatePicker()' theme="simple"/>&nbsp;
									</TD>
								</TR>
								<TR>
									<TD height="20">
									</TD>
									<TD>
									</TD>
									<TD colspan="3" align="right">										
										<INPUT class="button" type="button"  name="search" value=" 查 找 " onclick="goPage(1)">
									</TD>
								</TR>
							</TABLE>
						</TD>
					</TR>
					</s:form>
					<TR>
						<TD>
<HR width="98%">
						</TD>
					</TR>
					<TR>
						<TD height="40" valign="top">
							<TABLE align="center" border="0" class="ItemList" height="20" width="96%">
								<TR height="24" align="middle">
												<TD class="ItemTitle" height="20" width="14%">	题目编号
												</TD>
												<TD class="ItemTitle" width="14%">	题目类型
												</TD>
												<TD class="ItemTitle" width="14%">	题目范围
												</TD>
												<TD class="ItemTitle" width="14%">	题目难度
												</TD>
												<TD class="ItemTitle" width="14%">	录入人
												</TD>
												<TD class="ItemTitle" width="14%">	录入日期
												</TD>
												
											</TR>
											<s:iterator value="qlist" var="ql">
											<TR align="middle" class="ItemBody">
												<TD class="ItemBody" height="20">	<a href='${pageContext.request.contextPath}/toCancleDisplay.action?theme.themeId=<s:property value="#ql.themeId"/>'><s:property value="#ql.theId"/></a>
												</TD>
												<TD class="ItemBody" align="left">	<s:property value="#ql.tbThemeType.thetypeName"/>
												</TD>
												<TD class="ItemBody" align="left">	<s:property value="#ql.tbThemeArea.theareaName"/>
												</TD>
												<TD class="ItemBody" align="left">	<s:property value="#ql.tbThemeDifficulty.thedifName"/>
												</TD>
												<TD class="ItemBody" align="left">	<s:property value="#ql.tbUser.userName"/>
												</TD>
												<TD class="ItemBody">&nbsp; 	<s:property value="#ql.theIndate"/> 
												</TD>
											</TR>
											</s:iterator>
											<TR align="middle" class="ItemBody">
												<TD colSpan=7 height=1>
            <TABLE border=0 cellPadding=0 cellSpacing=3 class=SearchBar 
            height=20 width="135%">
              <TR>
                <TD height=20 width=1100>
                     <DIV align=right> 
                      <P><B>第 
		              	
                        <s:textfield  id="QueryPageNo" name="pagerBean.currentPage" cssClass="SearchBar_Page" size="3" theme="simple"/>
                           页 / 共 <s:property value="pagerBean.totalPages"/> 页      共有  <s:property value="pagerBean.totalRows"/> 条记录
                     	<input type="button" name="btnGo" value="go" class="SearchBar_Btn" onclick="gotoPage()"/>
							
                        <input type="button" name="btnFirst" value="|&lt;" class="SearchBar_Btn" 
                        	onclick="goPage(1)">

                        <input type="button" name="btnPrevious" value="&lt;" class="SearchBar_Btn"
                        	onclick="goPage(<s:property value="pagerBean.currentPage-1"/>)">

                        <input type="button" name="btnNext" value="&gt;" class="SearchBar_Btn" 
                        	onclick="goPage(<s:property value="pagerBean.currentPage+1"/>)">

                        <input type="button" name="btnEnd" value="&gt;|" class="SearchBar_Btn" 
                        	onclick="goPage(<s:property value="pagerBean.totalPages"/>)">

                        <SPAN 
          class=SearchBar></SPAN></B></P>
                  </DIV></TD></TR></TABLE>
				  </TD>
											</TR>
							</TABLE>
						</TD>
					</TR>
					<TR>
						<TD>&nbsp;	
						</TD>
					</TR>
				</TABLE>
			<td></TD>
		</TR>
	</TABLE><BR>
	<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
		<TR>
			<TD class="pagefootTl"><IMG src="/exam-platform/webep/space.gif" width="778" height="1"></TD>
		</TR>
		<TR>
			<TD height="25" class="pagefoot"><FONT face="Arial, Helvetica, sans-serif">&copy;</FONT> 2005-2007  版权所有 软通动力信息技术有限公司 Powered by 软通动力武汉开发中心
			</TD>
		</TR>
	</TABLE>
</BODY>
</HTML>
<script type="text/javascript">
getOption('questionDif');
</script>