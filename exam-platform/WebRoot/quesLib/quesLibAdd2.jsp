<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<HEAD>
<TITLE>iSoftStone��ѵ���Ŀ���ƽ̨</TITLE>
<META http-equiv="Content-Type" content="text/html; charset=gb2312"><LINK rel="stylesheet" href="/exam-platform/webep/css/style.css" type="text/css">
</HEAD>
<BODY bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<SCRIPT language="JavaScript1.2" src="/exam-platform/webep/js/coolmenus4.js"></SCRIPT>
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
									<TD align="center" class="sys"><A href="/exam-platform/Index.htm" class="syslink">�˳���¼</A> <A href="password.htm" class="syslink">�޸�����</A>
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
	<form action="${pageContext.request.contextPath}/saveTheme.action" method="post" id="form3" name="form3" >
	<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
		<TR>
			<TD width="20">&nbsp;	
			</TD>
			<TD align="left" valign="top">
				<TABLE border="0" class="top" width="700">
					<TR>
						<TD class="FormTitle" height="2" width="100%"><B>��Ŀ�������ڶ�������������</B>
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
									<TD width="12%">	��Ŀ��ţ�
									</TD>
									<TD width="35%">										
										<font color="#808080"><s:property value="theme.theId"/></font>
									</TD>
									<TD width="12%">	��Ŀ���ͣ�
									</TD>
									<TD>										
										<font color="#808080"><s:property value="theme.tbThemeType.thetypeName"/></font>
									</TD>
								</TR>
								<TR>
									<TD height="20">
									</TD>
									<TD>	��Ŀ��Χ��
									</TD>
									<TD>
										<font color="#808080"><s:property value="theme.tbThemeArea.theareaName"/></font>
									</TD>
									<TD>	��Ŀ�Ѷȣ�
									</TD>
									<TD>										
										<font color="#808080"><s:property value="theme.tbThemeDifficulty.thedifName"/></font>
									</TD>
								</TR>
							</TABLE>
						</TD>
					</TR>
					<TR>
						<TD>
                          <hr width="98%">
</TD>
					</TR>
					<TR>
						<TD>
							<TABLE align="center" border="0" width="90%">
								<TR>
									<TD height="20" width="1%">
									</TD>
									<TD width="12%">	��Ŀ��
									</TD>
								<TD>	<s:textarea cssClass="box" cols="70%" name="theme.theContent" id="content" rows="7" theme="simple"></s:textarea> 
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
									<TD width="12%">	�𰸣�
									</TD>
								<TD>	
								   <TABLE align="left" border="0" class="ItemList" height="20" width="83%">
								      <TR height="24" align="middle" >
												<TD class="ItemTitle" height="20" width="5%">	ѡ��
												</TD>
												<TD class="ItemTitle" width="20%">	��ѡ��
												</TD>
												<TD class="ItemTitle" width="5%">	����
												</TD>
											</TR>
											<s:iterator value="listKey" var="lk">
											<TR align="middle" class="ItemBody">
												<TD class="ItemBody" height="20">	<input type="checkbox" name="theRightkey" value="<s:property value="#lk.thekeyId"/>"/>
												</TD>
												<TD class="ItemBody" align="left">	<s:property value="#lk.theAllkey"/>
												</TD>
												<TD class="ItemBody">	<INPUT type="button" name="joinExam"  value="ɾ��"  onclick="toDelete(<s:property value="#lk.themeKeyId"/>)"> 
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
				 <TABLE align="center" border="0" width="90%">
							<TR>	
									<TD align="center">
										
        								<input class=button type="button" name="Submit223" value="������ѡ��" onclick="toAdd()">
        								
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
										<input class="button" type="button"  name="bsave" value=" �� �� " onClick="commit()">
										<input class="button" type="button"  name="bsave" value=" �� �� " onClick="save()">
										<input class="button" type="button"  name="search" value=" �� �� " onClick="toReturn()">
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
			</TD>
		</TR>
	</TABLE>
	</form>
	<BR>
	<TABLE width="100%" border="0" cellpadding="0" cellspacing="0">
		<TR>
			<TD class="pagefootTl"><IMG src="/exam-platform/webep/space.gif" width="778" height="1"></TD>
		</TR>
		<TR>
			<TD height="25" class="pagefoot"><FONT face="Arial, Helvetica, sans-serif">&copy;</FONT> 2005-2007  ��Ȩ���� ��ͨ������Ϣ�������޹�˾ Powered by ��ͨ�����人��������
			</TD>
		</TR>
	</TABLE>
</BODY>
</HTML>
<SCRIPT language="JavaScript">
function commit()
{	
	//�ж���Ŀ����д��û����ȷ�𰸹�ѡ��û��
	var content = document.getElementById("content").value;
	if(content.length==0){
		alert('����������Ŀ��');
		return;
	}
	if(!chkCheckBoxChs("theRightkey")){
		alert('���빴ѡ��ȷ�𰸣�');
		return;
	}
	//ȷ��
	if(confirm("ȷ���ύ��Ŀ��"))
	{
		alert("�ύ�ɹ���"); 
		document.getElementById("form3").action="${pageContext.request.contextPath}/commitTheme.action";
		var form = document.getElementById("form3");
		form.submit(); 
	}
}

function save()
{	
	//�ж���Ŀ����д��û����ȷ�𰸹�ѡ��û��
	var content = document.getElementById("content").value;
	if(content.length==0){
		alert('����������Ŀ��');
		return;
	}
	if(!chkCheckBoxChs("theRightkey")){
		alert('���빴ѡ��ȷ�𰸣�');
		return;
	}
	var form = document.getElementById("form3");
	form.submit(); 
}


function ddelete()
{	
	if(confirm("ȷ��ɾ����Ŀ��"))
	{
		alert("ɾ���ɹ���"); 
		document.location.href='quesLibAdd.htm'; 
	}
}

function toReturn()
{	
	document.location.href='${pageContext.request.contextPath}/toback.action?Flag=toadd'; 
}

function toAdd()  
{	
	//������ѡ��
	window.location.href='/exam-platform/toaddthemeAnswer.action?&Flag=add'; 
}
function toDelete(keyId)
{	
	if(confirm("ȷ��ɾ���ñ�ѡ����"))
	{
		alert("ɾ���ɹ���"); 
		//������Ŀ�𰸱��
		window.location.href='/exam-platform/deleteAnswer.action?tbThemeKey.themeKeyId='+keyId; 
	}
}
function chkCheckBoxChs(ckid){
	var obj = document.getElementsByName(ckid); 
	var objLen= obj.length; 
	var objflag; 
	var i;
	objflag=false;
	for (i = 0;i<objLen;i++){
		if (obj[i].checked==true) {
			objflag= true;
			break;
		}
	}
	return objflag;
}
</SCRIPT>