<%@ page contentType="text/html; charset=UTF-8" session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>       
<%@ taglib prefix="pe" uri="/WEB-INF/tlds/powerengine2.tld" %>

<html>
<head>
<title>银行网络系统演示</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>

<frameset rows="65,*,26" framespacing="0" frameborder="0" border="0">
  <frame src="headBarIn.do" name="topFrame" scrolling="NO" noresize >
  <frameset cols="170,13,*" framespacing="0" frameborder="0" border="0" bordercolor="#99CC99">
    <frame src="left.do" name="left" scrolling="auto" noresize id="left">
    <frame src="leftbar.do" name="left" scrolling="no" noresize id="left">
    <frameset name="main" cols="*,0" frameborder="0">
      <frame name="businessfrm"  scrolling="auto" src="welcome.do">

      <frame src="right.do" name="ebookfrm" scrolling="no" noresize>
    </frameset>
  </frameset>
  <frame src="footBar.do" name="bottomFrame" frameborder="no" scrolling="NO" noresize>
</frameset>
</html>
