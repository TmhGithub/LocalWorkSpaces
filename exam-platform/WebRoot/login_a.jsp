<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<HEAD>
<TITLE>iSoftStone��ѵ���Ŀ���ƽ̨</TITLE>
<META http-equiv="Content-Type" content="text/html; charset=utf-8"><LINK rel="stylesheet" href="webep/css/style.css" type="text/css">
<DIV id="sending" style="position:absolute; top:320; left:20; z-index:10; visibility:hidden">
		<TABLE width="100%" border="0" cellspacing="0" cellpadding="0">
			<TR>
				<TD width="30%">
				</TD>
				<TD bgcolor="#ff9900">
					<TABLE width="100%" height="70" border="0" cellspacing="2" cellpadding="0">
						<TR>
							<TD bgcolor="#eeeeee" align="center">	���ڶ�ȡ����, ���Ժ�...
							</TD>
						</TR>
					</TABLE>
				</TD>
				<TD width="30%">
				</TD>
			</TR>
		</TABLE>
	</DIV>
	<DIV id="cover" style="position:absolute; top:0; left:0; z-index:9; visibility:hidden">
		<TABLE width="100%" height="600" border="0" cellspacing="0" cellpadding="0">
			<TR>
				<TD align="center"><BR>
				</TD>
			</TR>
		</TABLE>
	</DIV>
<SCRIPT language=javascript>function showSending() 
{
 	gnIsShowSending=1;
	sending.style.visibility="visible";
	cover.style.visibility="visible";
}
</SCRIPT>
</HEAD>
<BODY bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
	
<SCRIPT language="JavaScript1.2" src="webep/js/coolmenus4.js"></SCRIPT>
<SCRIPT language="JavaScript1.2" src="webep/js/cm_addins.js"></SCRIPT>
	<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
		<TR>
			<TD>
				<TABLE width="100%" border="0" cellpadding="0" cellspacing="0" class="pagetop">
					<TR>
						<TD width="420" nowrap class="headerLogo"><IMG src="webep/logo.gif"><IMG src="webep/logo_js.gif">
						</TD>
						<TD class="welcome">
						</TD>
						<TD width="187" align="right" nowrap class="headerHelp">
							<TABLE border="0" cellpadding="4" cellspacing="2">
								<TR>
									<TD align="center" class="sys"><A href="Index.htm" class="syslink">�˳���¼</A> <A href="password.htm" class="syslink">�޸�����</A>
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
									<TD>	&nbsp;
									</TD>
								</TR>
							</TABLE>
						</TD>
					</TR>
					<TR>
						<TD height="2" class="menuBl1"><IMG src="webep/space.gif" width="1" height="1"></TD>
					</TR>
					<TR>
						<TD height="3" class="menuBl2"><IMG src="webep/space.gif" width="1" height="1"></TD>
					</TR>
				</TABLE>
				<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
					<TR>
						<TD><IMG src="webep/space.gif" width="778" height="1"></TD>
					</TR>
				</TABLE>
<P>
<SCRIPT language=JavaScript1.2>showMenu("","../exam-platform",2);
</SCRIPT>
				<TABLE width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#999999">
					
					<TR>
						<TD><IMG src="webep/space.gif" width="1" height="1"></TD>
					</TR>
				</TABLE>
			</TD>
		</TR>
	</TABLE><BR>
	
	<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
		<TR align="center">
						<TD width="100%" colspan="3">
						<input class=button type=reset name="bsave" value=" �������� " onclick="login1()">
						<input class=button type=reset name="bsave" value=" ������ " onclick="login2()">
						<input class=button type=reset name="bsave" value=" ��ʦ " onclick="login3()">
						<input class=button type=reset name="bsave" value=" һ���û� " onclick="login4()">
						<input class=button type=reset name="bsave" value=" ����Ա " onclick="login5()">
						</TD>
					</TR>
		<TR>
			<TD width="250" valign="top">
				<TABLE align="center" border="0" class="top" height="217" width="210">
					<TR>
						<TD class="FormTitle" height="2" width="100%"><B>������Ϣ</B>
						</TD>
					</TR>
					<TR>
						<TD height="200" width="100%">
							<TABLE align="center" border="1" bordercolor="#999999" height="190" width="99%">
								<TR bordercolor="#eaeaea">
									<TD>	�û�������������
									</TD>
								</TR>
								<TR bordercolor="#eaeaea">
									<TD>	�Ա���
									</TD>
								</TR>
								<TR bordercolor="#eaeaea">
									<TD>	�û��ʺţ�elf
									</TD>
								</TR>
								<TR bordercolor="#eaeaea">
									<TD>	�û����ͣ�����Ա
									</TD>
								</TR>
							
								<TR bordercolor="#eaeaea">
									<TD>	�ϴε�½ʱ�䣺
									</TD>
								</TR>
								<TR bordercolor="#eaeaea">
									<TD align="center">	2005-11-27 09:23
									</TD>
								</TR>
							</TABLE>
						</TD>
					</TR>
				</TABLE>
			</TD>
			<TD width="20">	&nbsp;
			</TD>
			<TD align="left" valign="top">
				<TABLE border="0" class="top" height="217" width="700">
					
					<TR>
						<TD class="FormTitle" height="2" width="100%"><B>������Ϣ</B>
						</TD>
					</TR>
					<TR>
						<TD width="100%">
							<TABLE align="center" width="97%">
								<TR>
									<TD height="30"><STRONG>��������û���</STRONG>
									</TD>
								</TR>
								<TR>
									<TD height="40" width="96%" valign="top">
										<TABLE align="center" border="0" class="ItemList" height="20" width="100%">
											<TR height="24" align="middle">
												<TD class="ItemTitle" height="20" width="14%" >	�û��ʺ�
												</TD>
												<TD class="ItemTitle" width="14%" >	�û�����
												</TD>
												<TD class="ItemTitle" width="14%">	�Ա�
												</TD>
												<TD class="ItemTitle" width="14%" >	�û�����
												</TD>
											
												<TD class="ItemTitle" width="14%">  e-mail
												</TD>
												<TD class="ItemTitle" width="14%">  ¼������
												</TD>
											</TR>
											<TR align="middle" class="ItemBody">
												<TD class="ItemBody" height="20" align="left">szhang
												</TD>
												<TD class="ItemBody" align="left">����
												</TD>
												<TD class="ItemBody">��
												</TD>
												<TD class="ItemBody" align="left">������
												</TD>
											
												<TD class="ItemBody" align="left"> szhang@163.com
												</TD>
												<TD class="ItemBody">													
													2005-11-27
												</TD>
											</TR>
														<TR align="middle" class="ItemBody">
												<TD class="ItemBody" height="20" align="left">wwang
												</TD>
												<TD class="ItemBody" align="left">����
												</TD>
												<TD class="ItemBody">��
												</TD>
												<TD class="ItemBody" align="left">������
												</TD>
												
												<TD class="ItemBody" align="left"> wwu@163.com
												</TD>
												<TD class="ItemBody">													
													2005-11-27
												</TD>
											</TR>
														<TR align="middle" class="ItemBody">
												<TD class="ItemBody" height="20" align="left">mli
												</TD>
												<TD class="ItemBody" align="left">����
												</TD>
												<TD class="ItemBody">��
												</TD>
												<TD class="ItemBody" align="left">��ʦ
												</TD>
												
												<TD class="ItemBody" align="left"> mli@isoftstone.com
												</TD>
												<TD class="ItemBody">													
													2005-11-27
												</TD>
											</TR>
														<TR align="middle" class="ItemBody">
												<TD class="ItemBody" height="20" align="left">xyzhang
												</TD>
												<TD class="ItemBody" align="left">��ѧ��
												</TD>
												<TD class="ItemBody">��
												</TD>
												<TD class="ItemBody" align="left">��ʦ
												</TD>
												
												<TD class="ItemBody" align="left">xyzhang@isoftstone.com
												</TD>
												<TD class="ItemBody">													
													2005-11-27
												</TD>
											</TR>
														<TR align="middle" class="ItemBody">
												<TD class="ItemBody" height="20" align="left">dhliu
												</TD>
												<TD class="ItemBody" align="left">���û�
												</TD>
												<TD class="ItemBody">��
												</TD>
												<TD class="ItemBody" align="left">��ʦ
												</TD>
												
												<TD class="ItemBody" align="left">dhliu@isoftstone.com
												</TD>
												<TD class="ItemBody">													
													2005-11-27
												</TD>
											</TR>
														<TR align="middle" class="ItemBody">
												<TD class="ItemBody" height="20" align="left">rfzhou
												</TD>
												<TD class="ItemBody" align="left">����
												</TD>
												<TD class="ItemBody">��
												</TD>
												<TD class="ItemBody" align="left">��ʦ
												</TD>
												
												<TD class="ItemBody" align="left">rfzhou@isoftstone.com
												</TD>
												<TD class="ItemBody">													
													2005-11-27
												</TD>
											</TR>
														<TR align="middle" class="ItemBody">
												<TD class="ItemBody" height="20" align="left">sli
												</TD>
												<TD class="ItemBody" align="left">���� 
												</TD>
												<TD class="ItemBody">��
												</TD>
												<TD class="ItemBody" align="left">������
												</TD>
												
												<TD class="ItemBody" align="left"> sli@163.com
												</TD>
												<TD class="ItemBody">													
													2005-11-27
												</TD>
											</TR>
					
							</TABLE>
						</TD>
					</TR>
					<TR>
						<TD>	&nbsp;
						</TD>
					</TR>
										</TABLE>
									</TD>
								</TR>
							
					<TR>
						<TD>	&nbsp;
						</TD>
					</TR>
					<TR>
						<TD>
<HR width="98%">
						</TD>
					</TR>
					
				</TABLE>
			</TD>
		</TR>
	</TABLE><BR>
	<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
		<TR>
			<TD class="pagefootTl"><IMG src="../webep/space.gif" width="778" height="1"></TD>
		</TR>
		<TR>
			<TD height="25" class="pagefoot"><FONT face="Arial, Helvetica, sans-serif">&copy;</FONT> 2005-2007  ��Ȩ���� ��ͨ������Ϣ�������޹�˾ Powered by ��ͨ�����人��������
			</TD>
		</TR>
	</TABLE>
</BODY>
</HTML>
<SCRIPT language="JavaScript">
function login1()
{	
		document.location.href='loginjiaowuzhuren.htm'; 
	
}function login2()
{	
		document.location.href='loginbanzhuren.htm'; 
	
}function login3()
{	
		document.location.href='loginteacher.htm'; 
	
}function login4()
{	
		document.location.href='loginyiban.htm'; 
	
}function login5()
{	
		document.location.href='login_a.jsp'; 
	
}
</SCRIPT>