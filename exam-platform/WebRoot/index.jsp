<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<HEAD>
<TITLE>iSoftStone培训中心考试平台</TITLE>
<META http-equiv="Content-Type" content="text/html; charset=utf-8"><LINK rel="stylesheet" href="/exam-platform/webep/css/style.css" type="text/css">
</HEAD>
<BODY>
	<FORM name="form1" method="post" action="">
		<TABLE width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
			<TR>
				<TD>
					<TABLE width="540" border="0" align="center" cellpadding="0" cellspacing="0">
						<TR>
							<TD align="center" height="76" background="/exam-platform/webep/login_top.gif"><IMG src="/exam-platform/webep/login_logo.jpg">
							</TD>
						</TR>
						<TR>
							<TD height="259" align="center" background="/exam-platform/webep/login_middle.jpg">
								<TABLE width="247" border="0" cellpadding="3" cellspacing="4">
									<TR>
										<TD colspan="2" align="center" nowrap>
										<input type="radio" name="userType" checked value="student"><STRONG><FONT color="#000000">学生</FONT></STRONG>
										<input type="radio" name="userType" value="admin"><STRONG><FONT color="#000000">管理员</FONT></STRONG>
									
										</TD>
									</TR>
									
									<TR>
										<TD width="68" nowrap><STRONG><FONT color="#000000">用户帐号：</FONT></STRONG>
										</TD>
										<TD width="122">											
											<INPUT name="loginno" type="text" size="23" style="width:150px">
										</TD>
									</TR>
									<TR>
										<TD nowrap><STRONG><FONT color="#000000">密　　码：</FONT></STRONG>
										</TD>
										<TD>											
											<INPUT name="password" type="password"  size="23" style="width:150px">
										</TD>
									</TR>
									<TR>
										<TD colspan="2" align="center" nowrap>											
											<INPUT name="Submit3" type="button" value="提交" onclick="toLogin();">											
											<INPUT name="Submit22" type="reset" value="取消">
										</TD>
									</TR>
								</TABLE>
							</TD>
						</TR>
						<TR>
							<TD height="57" valign="bottom" background="/exam-platform/webep/login_bottom.gif">
								<TABLE width="100%" border="0" cellspacing="0" cellpadding="0">
									<TR>
										<TD height="30" align="center" valign="top">	&copy; 2005 - 2007 软通动力信息技术有限公司 版权所有.
										</TD>
									</TR>
								</TABLE>
							</TD>
						</TR>
					</TABLE>
				</TD>
			</TR>
		</TABLE>		
		<INPUT type=hidden name="currency" value="1">		
		<INPUT type=hidden name="select2" value="1">
	</FORM>
</BODY>
</HTML>
<SCRIPT language="JavaScript">function toLogin()
{	
	if(document.all.form1.userType[0].checked)
	{
		document.location.href='login_s.jsp';
	}
	else if(document.all.form1.userType[1].checked)
	{
		document.location.href='login_a.jsp';
	}
	
}
</SCRIPT>