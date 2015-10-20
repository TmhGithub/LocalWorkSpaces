<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'role_actions.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
    <link rel="stylesheet" href="css/zTreeStyle/zTreeStyle.css" type="text/css" />
    <script type="text/javascript" src="js/jquery-1.4.4.min.js"></script>
    <script type="text/javascript" src="js/jquery.ztree.all-3.4.js"></script>
    
    
 
 <script type="text/javascript">
    $(document).ready(function(){
       loadRoles();
       loadActions();
    });
    
    
    function loadRoles(){
       alert('角色');
       var setting = {
            callback:{
               onClick:getRoleActions
            },
			async: {
				enable: true,
				url:"listAll_ro.action"
			}
		};
		$.fn.zTree.init($("#roleTree"), setting); 
    }
    
    
     function loadActions(){
     	alert('权限');
       var setting = {
       check:{
          enable:true
       },
            data: {
				simpleData: {
					enable: true
				}
			},
			async: {
				enable: true,
				url:"listAll_ac.action"
			}
		};
		$.fn.zTree.init($("#actionTree"), setting); 
    }
    
    function getRoleActions(event,treeId,treeNode,clickFlag){
      alert('得到权限');
      var atree= $.fn.zTree.getZTreeObj("actionTree");
      atree.checkAllNodes(false);
      
       $.ajax({
          url:"getActionsByRoleId_ro.action?r="+Math.random(),
          dataType:"json",
          data:{'rid':treeNode.id},
          success:function(da){
          
            $(da).each(function(){
            
               var node = atree.getNodeByParam("id",this.id,null);
               atree.checkNode(node, true, true);
               
            });

          }
       });
    }
    
    function saveAuths(){
         var rtree= $.fn.zTree.getZTreeObj("roleTree");
    
         var checkedRoles = rtree.getSelectedNodes();
         
         
         if(checkedRoles.length==0){
            alert('请选择角色');
            return ;
         }
         
         var roleNode=checkedRoles[0];
        
        var atree= $.fn.zTree.getZTreeObj("actionTree");
        
        var checkedNodes=atree.getCheckedNodes(true);
        
        var ids = "";
        $(checkedNodes).each(function(){
           ids+=this.id+",";
        });
        alert(ids);
        
        $.ajax({
           url:"saveRoleAcrions_ro.action?r="+Math.random(),
           dataType:"json",
           data:{'rid':roleNode.id,'ids':ids},
           success:function(da){
              if(da.status==1){
                 alert('数据保存成功');
              }else{
                 alert(da.msg);
              }
           }
        
        });
        
    }
    
 </script>
 
 
  </head>
  
  <body>
  <h2>角色和权限设置</h2>
  <hr>
  
  <div style="width:250px;height:400px;float: left; border:#ccc solid 2px;margin:10px;padding: 10px">
    <h3>角色</h3>
    
    <ul id="roleTree" class="ztree" style="width:260px; overflow:auto;"></ul>
  </div>
  
  <div style="width:250px;height:400px;float: left; border:#ccc solid 2px;margin:10px;padding: 10px">
    <h3>权限</h3>
    
     <ul id="actionTree" class="ztree" style="width:260px; overflow:auto;"></ul>
  </div>
  
  
   <div style="width:250px;height:400px; margin:10px;padding: 10px">
     <input type="button"  onclick="saveAuths()" value=" 保存权限设置  " style="width:100px; height:30px; background-color: #666;"/>
  </div>
  
  
  </body>
</html>
