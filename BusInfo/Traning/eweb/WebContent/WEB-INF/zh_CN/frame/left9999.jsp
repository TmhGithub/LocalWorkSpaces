<%@ page contentType="text/html; charset=utf-8" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>       
<%@ taglib prefix="pe" uri="/WEB-INF/tlds/powerengine2.tld" %>

<html>
<head>
<title>menu</title>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<link href="css/menu.css" rel="stylesheet" type="text/css">
<script language="JavaScript" type="text/JavaScript">
<!--
function turnit(ss)
{
	var oldStatus = ss.style.display;
	closeall();
	if (oldStatus=="none")
		{ss.style.display="";}
	else
		{ss.style.display="none";}
} 

function closeit(ss)
{
	   ss.style.display="none"; 
} 

function closeall() 
{
	
}

function init() 
{
	closeall();
}
//-->
</script>
</head>

<body leftmargin="0" rightmargin="0" topmargin="0" marginwidth="0" marginheight="0" onLoad="init();">
<TABLE width=170 height="100%" border=0 cellPadding=0 cellSpacing=0>
  <TBODY>
    <TR>
      <TD vAlign=top align=middle background=images/bg_2.gif>
        <TABLE width="100%" border=0 cellPadding=0 cellSpacing=0>
          <TBODY>
            <TR>
              <TD height=35 align=center 
                background=images/index_left_24.gif class="menu_title">演示服务</TD>
            </TR>
          </TBODY>
        </TABLE>
        <TABLE height=1 cellSpacing=0 cellPadding=0 width=170 border=0>
          <TBODY>
            <TR>
              <TD width=7 background=images/index_left_bg1.gif><IMG 
                  height=15 src="images/index_left_bg1.gif" width=7></TD>
              <TD width=216>
                <TABLE cellSpacing=0 cellPadding=0 width=163 border=0>
                  <TBODY>
                    <TR>
                      <TD width=8 background=images/index_left_4.gif><IMG 
                        height=13 src="images/index_left_4.gif" width=8></TD>
                      <TD vAlign=top bgColor=#ececec>
				


	<pe:menufilter role="ACQ003" >                        

			<TABLE width="100%" border=0 cellPadding=0 cellSpacing=0 background="images/index_left_23.gif">
                        <TBODY>
                          <TR>
                            <TD width="30" 
                                height=25>&nbsp;</TD>
                              <TD nowrap class="menu_level1" > <a href="preQueryTrsHistory.do" target="businessfrm">交易明细查询</a></TD>
                          </TR>
                        </TBODY>
                      </TABLE>
	</pe:menufilter>
	
	<pe:menufilter role="ACQ004" >                        

			<TABLE width="100%" border=0 cellPadding=0 cellSpacing=0 background="images/index_left_23.gif">
                        <TBODY>
                          <TR>
                            <TD width="30" 
                                height=25>&nbsp;</TD>
                              <TD nowrap class="menu_level1" > <a href="cifInfoQry.do" target="businessfrm">客户信息</a></TD>
                          </TR>
                        </TBODY>
                      </TABLE>
	</pe:menufilter>

 
	<pe:menufilter role="ACT010" >
	
			<TABLE width="100%" border=0 cellPadding=0 cellSpacing=0 background="images/index_left_23.gif">
            <TBODY>
              <TR>
                <TD width="30" 
                    height=25>&nbsp;</TD>
                  <TD nowrap class="menu_level1" > <a href="preEntInnerTransfer.do" target="businessfrm">内部转账</a></TD>
              </TR>
            </TBODY>
            </TABLE>

	</pe:menufilter>
                        
	<pe:menufilter role="ACT020" >                        

			<TABLE width="100%" border=0 cellPadding=0 cellSpacing=0 background="images/index_left_23.gif">
                        <TBODY>
                          <TR>
                            <TD width="30" 
                                height=25>&nbsp;</TD>
                              <TD nowrap class="menu_level1" > <a href="preEntTransfer.do" target="businessfrm">行内转账</a></TD>
                          </TR>
                        </TBODY>
                      </TABLE>
                      
            <TABLE width="100%" border=0 cellPadding=0 cellSpacing=0 background="images/index_left_23.gif">
              <TBODY>
                <TR>
                  <TD width="30" 
                      height=25>&nbsp;</TD>
                    <TD nowrap class="menu_level1" > <a href="TransferPre.do" target="businessfrm">跨行转账</a></TD>
                </TR>
              </TBODY>
            </TABLE>
	</pe:menufilter>

	<pe:menufilter role="ACT030" >                        

			<TABLE width="100%" border=0 cellPadding=0 cellSpacing=0 background="images/index_left_23.gif">
                        <TBODY>
                          <TR>
                            <TD width="30" 
                                height=25>&nbsp;</TD>
                              <TD nowrap class="menu_level1" > <a href="AuthList.do" target="businessfrm">交易授权</a></TD>
                          </TR>
                        </TBODY>
                      </TABLE>
	</pe:menufilter>                                               
                        <!--Menu 09, Begin-->
                        <TABLE width="100%" border=0 cellPadding=0 cellSpacing=0 background="images/index_left_23.gif">
                          <TBODY>
                            <TR>
                              <TD width="30" 
                                height=25>&nbsp;</TD>
                              <TD nowrap class="menu_level1" ><a href="logout.do" target="_top">签退</a></TD>
                            </TR>
                          </TBODY>
                        </TABLE>
                        <!--Menu 09, End-->
                        
                        
                        
                      </TD>
                    </TR>
                  </TBODY>
              </TABLE></TD>
            </TR>
          </TBODY>
        </TABLE>
        <TABLE cellSpacing=0 cellPadding=0 width=170 border=0>
          <TBODY>
            <TR>
              <TD><IMG height=15 src="images/index_left_21.gif" 
                  width=170></TD>
            </TR>
          </TBODY>
      </TABLE></TD>
    </TR>
  </TBODY>
</TABLE>
</body>
</html>