//ajaxrequest.js
var myRequest;
	function getOption(name){	
		myRequest = new XMLHttpRequest();
		myRequest.onreadystatechange = function(){
		   f2(name);
		}
		if(name=="questionType"){
			myRequest.open("GET","/exam-platform/themetypeAjax.action",true);
		}else if(name=="questionArea"){
			myRequest.open("GET","/exam-platform/themeareaAjax.action",true);
		}else if(name=="questionDif"){
			myRequest.open("GET","/exam-platform/themedifAjax.action",true);
		}
		myRequest.send(null);
	}
	function f2(name){
		if(myRequest.readyState==4){
			var ret = myRequest.responseText;
			var jsonArr = eval("("+ret+")");
			if(name=="questionType"){
				var group = document.getElementById("questionType");
				group.options.length=0;
				for(var i=0;i<jsonArr.length;i++){
					group.options.add(new Option(jsonArr[i].thetypeName,jsonArr[i].thetypeName));
				}
			}else if(name=="questionArea"){
				var group = document.getElementById("questionArea");
				group.options.length=0;
				for(var i=0;i<jsonArr.length;i++){
					group.options.add(new Option(jsonArr[i].theareaName,jsonArr[i].theareaName));
				}
			}else if(name=="questionDif"){
				var group = document.getElementById("questionDif");
				group.options.length=0;
				for(var i=0;i<jsonArr.length;i++){
					group.options.add(new Option(jsonArr[i].thedifName,jsonArr[i].thedifName));
				}
			}
		}
	}