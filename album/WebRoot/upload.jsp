<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>上传照片</title>
</head>
<style>
body{font-size:12px}
.abm{ list-style:none}
.abm li{ float:left; width:220px; margin:20px}

.abm li img{ padding:2px; border:#CCC  solid 1px}
</style>
<body>
<h1>我的电子相册</h1>
<hr />

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="12%" style="border-right:#CCC  solid 3px"></td>
    <td width="88%" rowspan="2" align="left">
    
    <form action="album?m=upload" method="post" enctype="multipart/form-data">
    
    <table width="90%" border="0" cellspacing="4" cellpadding="4" bgcolor="#CCCCCC">
      <tr>
        <td colspan="2" align="center" bgcolor="#FFFFFF"><h3>照片上传</h3></td>
        </tr>
      <tr>
        <td align="right" bgcolor="#FFFFFF">照片标题：</td>
        <td bgcolor="#FFFFFF"><input type="text" name="title" style="height:25px; line-height:25px;width:350px"/></td>
      </tr>
      <tr>
        <td align="right" bgcolor="#FFFFFF">分类：</td>
        <td bgcolor="#FFFFFF">

           <select name="type">
              <option value="个人写真">个人写真</option>
              <option value="风光风景">风光风景</option>
              <option value="非主流">非主流</option>
              <option value="私密相册">私密相册</option>
           </select>
        </td>
      </tr>
      <tr>
        <td align="right" bgcolor="#FFFFFF">选择文件：</td>
        <td bgcolor="#FFFFFF"><input type="file" name="pic" style="height:25px; line-height:25px;width:350px"/></td>
      </tr>
        <tr>
        <td colspan="2" align="center" bgcolor="#FFFFFF">
          <input type="submit" value="提交" />
        </td>
        </tr>
    </table>
    </form>
   
   
    </td>
  </tr>
  <tr>
    <td align="right" valign="top" style="border-right:#CCC  solid 3px">
      <table width="90%" border="0" cellspacing="0" cellpadding="0" style="line-height:25px;padding:10px; font-size:14px; font-family:'黑体'">
        <tr>
          <td>
            <h3> <a href="">返回相册列表</a></h3>
          </td>
        </tr>
       
        
    </table></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>

</body>
</html>
