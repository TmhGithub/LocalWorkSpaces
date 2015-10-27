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
</HEAD>
<BODY bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<SCRIPT language="JavaScript1.2" src="/exam-platform/webep/js/coolmenus4.js"></SCRIPT>
<SCRIPT language="JavaScript1.2" src="/exam-platform/webep/js/cm_addins.js"></SCRIPT>
<SCRIPT language="JavaScript" src="/exam-platform/webep/js/ajax.js"></SCRIPT>
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
						<TD class="FormTitle" height="2" width="100%"><B>题目维护</B>
						</TD>
					</TR>
					<TR>
						<TD>&nbsp;	
						</TD>
					</TR>
					<s:form action="themeUpdateSave" namespace="/" method="post" id="form5" name="form5" theme="simple">
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
								<TR>
									<TD height="20">
									</TD>
									<TD>	题目范围：
									</TD>
									<TD>
				<select id="questionArea" name="theme.tbThemeArea.theareaName" >
					<option value='<s:property value="theme.tbThemeArea.theareaName"/>' selected><s:property value="theme.tbThemeArea.theareaName"/></option>
				</select>
									</TD>
									<TD>	题目难度：
									</TD>
									<TD>										
				<select id="questionDif" name="theme.tbThemeDifficulty.thedifName" >
				<option value='<s:property value="theme.tbThemeDifficulty.thedifName"/>' selected><s:property value="theme.tbThemeDifficulty.thedifName"/></option>
				</select>
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
								<TD>	<s:textarea cssClass="box" cols="70%" name="theme.theContent" rows="7" id="content"></s:textarea> 
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
												<TD class="ItemTitle" width="5%">	操作
												</TD>
											</TR>
											<s:iterator value="listKey" var="lk">
											<TR align="middle" class="ItemBody">
												<TD class="ItemBody" height="20">	
													<input type="checkbox" name="theRightkey"  value='<s:property value="#lk.thekeyId"/>'
														<s:iterator value="theRightkey" var="rk">
															<s:if test="#rk == #lk.thekeyId">checked="checked"</s:if>
														</s:iterator>
													>
												</TD>
												<TD class="ItemBody" align="left">	<s:property value="#lk.theAllkey"/>
												</TD>
													<TD class="ItemBody">	<INPUT type="button" name="joinExam"  value="删 除"  onclick='toDelete(<s:property value="#lk.themeKeyId"/>)'> 
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
										
        								<input class=button type="button" name="Submit223" value="新增备选答案" onclick="toAdd('<s:property value="theme.theId"/>')">
        
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
									<TD width="12%">	审核人：
									</TD>
									<TD width="35%">										
										<font color="#808080"><s:property value="themeAud.tbUser.userName"/></font>
									</TD>
									<TD width="12%">	审核日期：
									</TD>
									<TD>										
										<font color="#808080"><s:property value="themeAud.autDate"/></font>
									</TD>
								</TR>
								<TR>
									<TD height="20" width="1%">
									</TD>
									<TD width="12%">	审核结果：
									</TD>
									<TD width="35%">										
										<font color="#808080"><s:property value="themeAud.audResult"/></font>
									</TD>
									<TD width="12%">	审核意见：
									</TD>
									<TD>										
										<font color="#808080"><s:property value="themeAud.audIdea"/></font>
									</TD>
								</TR>
							</TABLE>
						</TD>
					</TR>
						<TD>
<HR width="98%">
						</TD>
					</TR>
					<TR>
						<TD>
							<TABLE align="center" border="0" width="90%">
								<TR>
									<TD align="right">
										<input class=button type=button name="bsave" value=" 提 交 " onclick="commit()">
										<input class=button type=button name="bsave" value=" 保 存 " onclick="save()">
										<input class=button type=button name="bsave" value=" 删 除 " onclick="dDelete(<s:property value="theme.themeId"/>)">
										<INPUT class="button" type="button"  name="search" value=" 返 回 " onclick="window.location.href='${pageContext.request.contextPath}/toback.action?Flag=toquery'">
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
			<TD class="pagefootTl"><IMG src="/exam-platform/webep/space.gif" width="778" height="1"></TD>
		</TR>
		<TR>
			<TD height="25" class="pagefoot"><FONT face="Arial, Helvetica, sans-serif">&copy;</FONT> 2005-2007  版权所有 软通动力信息技术有限公司 Powered by 软通动力武汉开发中心
			</TD>
		</TR>
	</TABLE>
</BODY>
</HTML>
<SCRIPT language="JavaScript">
getOption('questionArea');
getOption('questionDif');
function commit()
{	
	//判断题目内容写了没？正确答案勾选了没？
	var content = document.getElementById("content").value;
	if(content.length==0){
		alert('必须填入题目！');
		return;
	}
	if(!chkCheckBoxChs("theRightkey")){
		alert('必须勾选正确答案！');
		return;
	}
	//确认
	if(confirm("确定提交题目吗？"))
	{
		alert("提交成功！"); 
		document.getElementById("form5").action="themeUpdateCommit";
		document.getElementById("form5").submit(); 
	}
}
function save()
{	
	//判断题目内容写了没？正确答案勾选了没？
	var content = document.getElementById("content").value;
	if(content.length==0){
		alert('必须填入题目！');
		return;
	}
	if(!chkCheckBoxChs("theRightkey")){
		alert('必须勾选正确答案！');
		return;
	}	
	document.getElementById("form5").submit(); 
}
function dDelete(themeId)
{	
	if(confirm("确定删除题目吗？"))
	{
		alert("删除成功！"); 
		//传入题目的id,然后去删除
		document.location.href='/exam-platform/deleteTheme.action?theme.themeId='+themeId; 
	}
}
function roReturn()
{	
	document.location.href='quesLibQuery.htm'; 
}
function toAdd(theId)
{	
	//传入题目编号，增加选项
	document.location.href='/exam-platform/toaddthemeAnswer.action?themeKey.theme.theId='+theId+'&Flag=query'; 
}
function toDelete(themekeyId)
{	
	if(confirm("确定删除该答案吗？"))
	{
		alert("删除成功！"); 
		document.location.href='/exam-platform/deleteAnswer.action?Flag=query&tbThemeKey.themeKeyId='+themekeyId; 
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