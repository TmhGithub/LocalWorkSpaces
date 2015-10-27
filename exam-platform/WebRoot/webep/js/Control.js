/*
	* 注意：eval中控件名称不能包含下划线，不能以数字开始。
	* File name: Control.js
	* Author: 李术珍
	* Update: Chen Xi
	* Date: 12-30-2001
	*/ 
 
//
var gnIsSelectCtrl=0;
var gnIsShowSending=0;//没有ShowSending

var nextfield="";

var gSubmitFunction=""; 
var gFormName = "";
////xrzhang添加,第一个获得焦点的控件名称，作为在调用executeSubmitFunction时转移焦点，防止重复回车多次保存记录
var gFirstFocusCtrlName="";

/**
 * 设置需要提交的方法
 * @param strFunction 方法
 */
function setSubmitFunction(strFunction)
{
	gSubmitFunction=strFunction;
}
function setFormName(strFormName)
{
	gFormName=strFormName;
}

/**
 * 第一个控件选中
 * @param obj 控件
 */
function firstFocus(obj)
{
////设置第一个焦点时，把控件名称保存到全局变量中。xrzhang添加
	gFirstFocusCtrlName=obj;
	
	if (gFirstFocusCtrlName != "")
	{
	obj.focus();
	}
}

document.onkeydown = keyDown; // work together to analyze keystrokes


/**
 * 按健后的处理方法
 */
function keyDown(DnEvents)
{ 
	if(gnIsShowSending==0)//如果没有显示执行，才处理keydown
	{
		// handles keypress
	// determines whether Netscape or Internet Explorer
		k =  window.event.keyCode;
		if (k == 13)
		{ // enter key pressed
			if(gnIsSelectCtrl==0)
			{
				if (nextfield == 'submitfunction')
			 	{
			 		executeSubmitFunction();
					return false;
			    } // submit, we finished all fields
				else
				{ // we're not done yet, send focus to next box
					if(nextfield=="")
					{
				 		executeSubmitFunction();
						return false;
					}
					else
					{
						eval('document.' + gFormName + '.' + nextfield + '.focus()');
						//文本框选中
						if(!isNaN(eval('document.' + gFormName + '.' + nextfield + '.maxLength')))
						{
							eval('document.' + gFormName + '.' + nextfield + '.select()');
						}
						return false;
					}
	     	}
	    }
	    else
	    {
	    	gnIsSelectCtrl=0;
	    	return false;
	    }
	  }
	}
}


/**
 * 执行需要提交的方法
 */
function executeSubmitFunction()
{

////xrzhang添加，gFirstFocusCtrlName为页面上第一个获得焦点的空件名称，在调用 firstFocus时负值，为全局变量

	if (gFirstFocusCtrlName != "" )
	   gFirstFocusCtrlName.focus();

		 		eval(gSubmitFunction);

}



var gFormName;//控件所在Form的名称
gFormName=new Array(ARRAYNUM);
gNoAccountID=0;
gNo=0;

var ARRAYNUM=100;
var gClientCtrlClientName,gClientCtrlClientID,gClientCtrlClientNo,gClientCtrlCleanUp,gAccountCtrlClientID,gAccountCtrlAccountID,gAccountCtrlAccountID,gFixedDepositCtrlDateEnd,gLoanDueBillCtrlDateStart,gLoanDueBillCtrlDateEnd,gNotifyAccountCtrlInterestDate,gClientCtrlChiefRepCode,gNotifyAccountCtrlBalance;
var gNoName=0,gNoClientID=0,gNoNo=0,gNoID=0,gNo=0,gNoAccountID=0;

//初始化客户控件变量
gClientCtrlClientName=new Array(ARRAYNUM);
gClientCtrlClientNo=new Array(ARRAYNUM);
gClientCtrlClientID=new Array(ARRAYNUM);
gClientCtrlCleanUp=new Array(ARRAYNUM);
gClientCtrlChiefRepCode=new Array(ARRAYNUM);

//初始化帐户控件变量
gAccountCtrlClientName=new Array(ARRAYNUM);
gAccountCtrlClientID=new Array(ARRAYNUM);
gAccountCtrlAccountID=new Array(ARRAYNUM);
gAccountCtrlClientNo=new Array(ARRAYNUM);
gAccountCtrlCleanUp=new Array(ARRAYNUM);

//add by ming
gAccountCtrlAccountNo=new Array(ARRAYNUM);
//add by Hallyzhang
gClientTypeName = new Array(ARRAYNUM);
gClientTypeNo = new Array(ARRAYNUM);
gCreditTypeNo = new Array(ARRAYNUM);
gCreditTypeName = new Array(ARRAYNUM);
gLiborRateCurrency = new Array(ARRAYNUM);
gLiborName=new Array(ARRAYNUM);   //added by lw
gAmount = new Array(ARRAYNUM);
gOfficeAccount=new Array(ARRAYNUM); //ADDED BY LW
gDiscountClientName = new Array(ARRAYNUM);

//初始化非中油帐户
var gOutOfCPFAccountClientName,gOutOfCPFAccountProvince,gOutOfCPFAccountCity,gOutOfCPFAccountBank;
gOutOfCPFAccountClientName=new Array(ARRAYNUM);
gOutOfCPFAccountProvince=new Array(ARRAYNUM);
gOutOfCPFAccountCity=new Array(ARRAYNUM);
gOutOfCPFAccountBank=new Array(ARRAYNUM);
gNotifyAccountCtrlBalance=new Array(ARRAYNUM);

//初始化利率名称
var gRateCodeRateName,gRateCodeRateName1,gRateCodeRateName2,gRateCodeRateValidate,gRateCodeRate;
gRateCodeRateName=new Array(ARRAYNUM);
gRateCodeRateName1=new Array(ARRAYNUM);
// Add by FY
gRateCodeRateName2=new Array(ARRAYNUM);
gRateCodeRateValidate=new Array(ARRAYNUM);
gRateCodeRate=new Array(ARRAYNUM);

//放款通知单余额
var gLetoutRequisitionBalance;
gLetoutRequisitionBalance=new Array(ARRAYNUM);


gFixedDepositCtrlDateEnd=new Array(ARRAYNUM);

gBranchCtrlBranchAccountCode=new Array(ARRAYNUM);

gLoanDueBillCtrlDateStart=new Array(ARRAYNUM);
gLoanDueBillCtrlDateEnd=new Array(ARRAYNUM);

gNotifyAccountCtrlInterestDate=new Array(ARRAYNUM);
//初始化提前还款通知单控件变量
var gAheadRepayCtrlAmount;
gAheadRepayCtrlAmount=new Array(ARRAYNUM); 
var gAheadRepayCtrlInterestDate;
gAheadRepayCtrlInterestDate=new Array(ARRAYNUM);

//初始化贴现票据控件变量
var gDiscountBillCtrlAmount;
gDiscountBillCtrlAmount=new Array(ARRAYNUM); 
var gDiscountBillCtrlStartDate;
gDiscountBillCtrlStartDate=new Array(ARRAYNUM);
var gDiscountBillCtrlEndDate;
gDiscountBillCtrlEndDate=new Array(ARRAYNUM);


var gNoLinkID;

for(gNoLinkID=0;gNoLinkID<ARRAYNUM;gNoLinkID++)
{
	gClientCtrlClientName[gNoLinkID]=new Array(ARRAYNUM);
	gClientCtrlClientID[gNoLinkID]=new Array(ARRAYNUM);
	gClientCtrlClientNo[gNoLinkID]=new Array(ARRAYNUM);
	gClientCtrlCleanUp[gNoLinkID]=new Array(ARRAYNUM);
	gClientCtrlChiefRepCode[gNoLinkID]=new Array(ARRAYNUM);

	gAccountCtrlClientName[gNoLinkID]=new Array(ARRAYNUM);
	gAccountCtrlClientID[gNoLinkID]=new Array(ARRAYNUM);
	gAccountCtrlAccountID[gNoLinkID]=new Array(ARRAYNUM);
	gAccountCtrlClientNo[gNoLinkID]=new Array(ARRAYNUM);
	//add by ming
	gAccountCtrlAccountNo[gNoLinkID]=new Array(ARRAYNUM);

	gAccountCtrlCleanUp[gNoLinkID]=new Array(ARRAYNUM);
	
	// added by hallyzhang
  gDiscountClientName[gNoLinkID]=new Array(ARRAYNUM);
  gClientTypeName[gNoLinkID]=new Array(ARRAYNUM);
  gClientTypeNo[gNoLinkID]=new Array(ARRAYNUM);
  gCreditTypeNo[gNoLinkID]=new Array(ARRAYNUM);
  gCreditTypeName[gNoLinkID]=new Array(ARRAYNUM);
  gLiborRateCurrency[gNoLinkID]=new Array(ARRAYNUM);
  gAmount[gNoLinkID]=new Array(ARRAYNUM);
  gLiborName[gNoLinkID]=new Array(ARRAYNUM);
  gOfficeAccount[gNoLinkID]=new Array(ARRAYNUM);

  
  
  
	gOutOfCPFAccountClientName[gNoLinkID]=new Array(ARRAYNUM);
	gOutOfCPFAccountProvince[gNoLinkID]=new Array(ARRAYNUM);
	gOutOfCPFAccountCity[gNoLinkID]=new Array(ARRAYNUM);
	gOutOfCPFAccountBank[gNoLinkID]=new Array(ARRAYNUM);

	gFixedDepositCtrlDateEnd[gNoLinkID]=new Array(ARRAYNUM);

	gBranchCtrlBranchAccountCode[gNoLinkID]=new Array(ARRAYNUM);

	gLoanDueBillCtrlDateStart[gNoLinkID]=new Array(ARRAYNUM);
	gLoanDueBillCtrlDateEnd[gNoLinkID]=new Array(ARRAYNUM);

	gNotifyAccountCtrlInterestDate[gNoLinkID]=new Array(ARRAYNUM);

	gRateCodeRateName[gNoLinkID]=new Array(ARRAYNUM);
	gRateCodeRateName1[gNoLinkID]=new Array(ARRAYNUM);
	// Add by FY
	gRateCodeRateName2[gNoLinkID]=new Array(ARRAYNUM);
	gRateCodeRateValidate[gNoLinkID]=new Array(ARRAYNUM);
	gRateCodeRate[gNoLinkID]=new Array(ARRAYNUM);

	gLetoutRequisitionBalance[gNoLinkID]=new Array(ARRAYNUM);
	
	gNotifyAccountCtrlBalance[gNoLinkID]=new Array(ARRAYNUM);
	gAheadRepayCtrlAmount[gNoLinkID]=new Array(ARRAYNUM);
	gAheadRepayCtrlInterestDate[gNoLinkID]=new Array(ARRAYNUM);
	
	gAheadRepayCtrlAmount[gNoLinkID]=new Array(ARRAYNUM);
	gAheadRepayCtrlInterestDate[gNoLinkID]=new Array(ARRAYNUM);
	
	gDiscountBillCtrlAmount[gNoLinkID]=new Array(ARRAYNUM);
	gDiscountBillCtrlStartDate[gNoLinkID]=new Array(ARRAYNUM);
	gDiscountBillCtrlEndDate[gNoLinkID]=new Array(ARRAYNUM);
	 
	
	
}



/**
 * 功能块（客户控件）注释开始：
 *
 */



/**
 * 创建客户控件
 * @param strFormName 控件所在form的名称
 * @param lClientID 客户标识
 * @param strClientNo 客户编号
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createClientCtrl(strFormName,strCtrlName,lClientID,strClientNo,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showClientCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lClientID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lClientID+"' ID='"+strCtrlName+ "ForAccount' NAME='"+strCtrlName+"ForAccount'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strClientNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='-1' ID='"+strCtrlName+ "AccountID' NAME='"+strCtrlName+"AccountID'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strClientNo + "' onkeydown='javascript:isSelectClient(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
//		gFormName[gNo]=strFormName;
//		gNoClientID=gNoClientID+1;
//		gNo=gNo+1;
}

/**
 * 设置需要输出客户标识的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setClientCtrlClientID(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientCtrlClientID[i][0]!=null)
		{
			if (gClientCtrlClientID[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gClientCtrlClientID[i][j]==null)
					{
						gClientCtrlClientID[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gClientCtrlClientID[i][0]=strCtrlName;
			gClientCtrlClientID[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 设置需要输出客户标识的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setClientCtrlChiefRepCode(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientCtrlChiefRepCode[i][0]!=null)
		{
			if (gClientCtrlChiefRepCode[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gClientCtrlChiefRepCode[i][j]==null)
					{
						gClientCtrlChiefRepCode[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gClientCtrlChiefRepCode[i][0]=strCtrlName;
			gClientCtrlChiefRepCode[i][1]=objCtrl;
			break;
		}

	}

}


/**
 * 设置需要输出客户名称的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setClientCtrlClientName(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientCtrlClientName[i][0]!=null)
		{
			if (gClientCtrlClientName[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gClientCtrlClientName[i][j]==null)
					{
						gClientCtrlClientName[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gClientCtrlClientName[i][0]=strCtrlName;
			gClientCtrlClientName[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 设置需要输出的客户编号的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setClientCtrlClientNo(strCtrlName,objCtrl)
{
	var i,j;
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientCtrlClientNo[i][0]!=null)
		{
			if (gClientCtrlClientNo[i][0]==strCtrlName)
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gClientCtrlClientNo[i][j]==null)
					{
						gClientCtrlClientNo[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gClientCtrlClientNo[i][0]=strCtrlName;
			gClientCtrlClientNo[i][1]=objCtrl;
			break;
		}

	}
}

/**
 * 设置需要输出客户标识的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setClientCtrlCleanUp(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientCtrlCleanUp[i][0]!=null)
		{
			if (gClientCtrlCleanUp[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gClientCtrlCleanUp[i][j]==null)
					{
						gClientCtrlCleanUp[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gClientCtrlCleanUp[i][0]=strCtrlName;
			gClientCtrlCleanUp[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 显示客户选择框
 * @param strFormName
 * @param strCtrlName
 */
function showClientCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strClientNo;
	eval("strClientNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strClientNo=" + strClientNo + "&strNextCtrlName=" + strNextCtrlName;
//	alert("SelectClient.jsp?"+paraState );
//	alert("2");
	g_win=window.open( "../../jsp/SelectClient.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了客户控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectClient(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if (window.event.keyCode==13)//回车说明选择
	{
		gnIsSelectCtrl=1;
		showClientCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
	}
	else
	{
		eval(strFormName+ "." + strCtrlName + ".value=-1");
		eval(strFormName+ "." + strCtrlName + "ForAccount.value=-1");
		eval(strFormName+ "." + strCtrlName + "Code.value=''");
	}
}


/**
 * 输出客户控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lClientID 客户标识
 * @param strClientName 客户名称
 * @param strClientNo 客户编号
 * @param strAccountID 一个客户所有的帐户
 * @param strChiefRepCode 法人代码
 */
function outputClientCtrl(strFormName,strCtrlName,lClientID,strClientName,strClientNo,strAccountID,strChiefRepCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind; 
	if (strChiefRepCode=="null")
	   strChiefRepCode = "";
	eval(strFormName + "." + strCtrlName + ".value=" + lClientID);
	eval(strFormName + "." + strCtrlName + "ForAccount.value=" + lClientID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strClientNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strClientNo +"'");
	eval(strFormName + "." + strCtrlName +  "AccountID"+".value='" + strAccountID +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientCtrlClientID[i][0]!=null)
		{
			if(gClientCtrlClientID[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gClientCtrlClientID[i][j]!=null)
					{
						eval(strFormName+ "." + gClientCtrlClientID[i][j]+".value='" + lClientID + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientCtrlClientNo[i][0]!=null)
		{
			if(gClientCtrlClientNo[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gClientCtrlClientNo[i][j]!=null)
					{
						eval(strFormName+ "." + gClientCtrlClientNo[i][j]+".value='" + strClientNo + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	
	
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientCtrlClientName[i][0]!=null)
		{
			if(gClientCtrlClientName[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gClientCtrlClientName[i][j]!=null)
					{
						eval(strFormName+ "." + gClientCtrlClientName[i][j]+".value='" + strClientName + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientCtrlCleanUp[i][0]!=null)
		{
			if(gClientCtrlCleanUp[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gClientCtrlCleanUp[i][j]!=null)
					{
						eval(strFormName+ "." + gClientCtrlCleanUp[i][j]+".value=-1");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientCtrlChiefRepCode[i][0]!=null)
		{
			if(gClientCtrlChiefRepCode[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gClientCtrlChiefRepCode[i][j]!=null)
					{ 
						   eval(strFormName+ "." + gClientCtrlChiefRepCode[i][j]+".value='" + strChiefRepCode +"'");
					}
					else
					{ 
						break;
					}
				}
			}
		}
		else
		{ 
			break;
		}
	}


}

/**
 * 功能块（客户控件）注释结束。
 */



/**
 * 功能块（帐户控件）注释开始。
 */
 var gAccountCtrlFieldName=new Array(ARRAYNUM);//域名称
 var gAccountCtrlFieldStatus=new Array(ARRAYNUM);//域状态
 var gAccountCtrlFieldCount=0;//域的数量
/**
 * 得到域的状态
 * @param strFieldName 域的名称
 */
function getAccountCtrlFieldStatus(strFieldName)
{
	var lStatusID=1;
	for(i=0;i<gAccountCtrlFieldCount;i++)
	{
		if(gAccountCtrlFieldName[i]==strFieldName)
		{
			lStatusID=gAccountCtrlFieldStatus[i];
			break;
		}
	}
	return lStatusID;
}

/**
 * 设置帐户的域的状态
 * @param strFieldName 域的名称
 * @param lStatusID 状态 1-从别的域转进来的，2-在自己的域中
 */
function setAccountCtrlFieldStatus(strFieldName,lStatusID)
{
	for(i=0;i<gAccountCtrlFieldCount;i++)
	{
		if(gAccountCtrlFieldName[i]==strFieldName)
		{
			break;
		}
	}
	if(i<gAccountCtrlFieldCount)
	{
		gAccountCtrlFieldStatus[i]=lStatusID;
	}
	else
	{
		gAccountCtrlFieldName[gAccountCtrlFieldCount]=strFieldName;
		gAccountCtrlFieldStatus[gAccountCtrlFieldCount++]=lStatusID;
	}
}

/**
 * 域聚焦
 * @param nTypeID 1-清除field 补0
 */
function fieldFocus(strFormName,strCtrlName,field,field1,field2,nTypeID)
{
	if(gnIsShowSending==0)
	{
		gnIsSelectCtrl=1;
		k =  window.event.keyCode;
		if (k == 13)
		{
			if(nTypeID==1)
			{
				eval(strFormName + "." + field + " .value=''");//清空第4位
				
				//第三位前面补0
				var strField1=eval(strFormName + "." + field1 + ".value");
				if(strField1!="")
				{
					var nField1Length=strField1.length;
					for(var i=nField1Length;i<4;i++)
					{
						strField1="0" + strField1;
					}
				}
				eval(strFormName + "." + field1 + ".value='" + strField1 + "'");
			}
			else
			{
				eval(strFormName+ "." + field + ".select()");
			}
			eval(strFormName+ "." + field + ".focus()");
			setAccountCtrlFieldStatus(field,1);
		}
		else
		{
			if (k!=8 && k!=46)//Back健
			{ 
			  if(getAccountCtrlFieldStatus(field1)==2)
			  {
			  	if (eval(strFormName+ "." + field1 + ".value.length")>= eval(strFormName+ "." + field1 + ".size"))
			   	{
					eval(strFormName+ "." + field + ".select()");
					eval(strFormName+ "." + field + ".focus()");
			     		setAccountCtrlFieldStatus(field,1);
			     		setAccountCtrlFieldStatus(field1,1);
			   	}
			   }
			   else
			   {
			   	setAccountCtrlFieldStatus(field1,2);
			   }
			}
			else
			{
			   
			   if (field2!=null)
			   {
			   	if(eval(strFormName+ "." + field1 + ".value")=="")//本域没有值了
			   	{
					eval(strFormName+ "." + field2 + ".focus()");
					eval(strFormName+ "." + field2 + ".select()");
					setAccountCtrlFieldStatus(field2,1);
					setAccountCtrlFieldStatus(field1,1);
				}
		  	   }
			}
	
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}

/**
 * strFormName:控件所在的Form的名称
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lAccountID 帐户标识
 * @param strAccountNo 帐户号
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strTitle 标题
 * @param objClientID 客户对象，里面的value为客户标识
 * @param lAccountTypeID 帐户类型标识，30001-活期帐户组，30002-定期帐户组，30003-贷款帐户组(帐户组不关联开户行，不关心帐户状态，不关心客户状态 )
 * @param lGetOrPay 付款或者收款
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createAccountCtrl(strFormName,strCtrlName,lAccountID,strAccountNo,lOfficeID,lCurrencyID,strTitle,objClientID,lAccountTypeID,strNextCtrlName,lGetOrPay,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}
	var strAccountNo1,strAccountNo2,strAccountNo3,strAccountNo4;
	strAccountNo1="";
	strAccountNo2="";
	strAccountNo3="";
	strAccountNo4="";
	if (strAccountNo!="")
	{
		var nNum,nStart;
		nStart=0;
		nNum=1;
		for (i = 0;  i < strAccountNo.length;  i++)
		{
			var ch;
			ch = strAccountNo.charAt(i);
			if ((ch=="-") )
			{
				eval("strAccountNo" +nNum +"=strAccountNo.substring(nStart,i)");
/*
				switch(nNum)
				{
					case 1:
					strAccountNo1=strAccountNo.substring(nStart,i);
					break;
					case 2:
					strAccountNo2=strAccountNo.substring(nStart,i);
					break;
					case 3:
					strAccountNo3=strAccountNo.substring(nStart,i);
					break;
				}
*/
//				eval("strAccountNo" + nNum + "=" + strAccountNo.substring(nStart,i-1));
				nNum++;
				nStart=i+1;
			}

			if(nStart<strAccountNo.length)
			{
				eval("strAccountNo" + nNum + "=" + "strAccountNo.substring(nStart,strAccountNo.length)");
			}

		}
	}
	//add by ming(if(" + strFormName + "." + strCtrlName +"Ctrl.disabled == false) {})
	document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:if(" + strFormName + "." + strCtrlName +"Ctrl.disabled == false) {showAccountCtrl(\"" + strFormName + "\",\"" + strCtrlName+ "\",\"" + lOfficeID+ "\",\"" + lCurrencyID+ "\",\"" + lAccountTypeID + "\",\"" + lGetOrPay+ "\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
			+ "  "
			+ " <INPUT TYPE='HIDDEN' VALUE='"+lAccountID+"' ID='"+strCtrlName+"' NAME='"+strCtrlName+"'>"
			+ " <INPUT TYPE='HIDDEN' VALUE='"+strAccountNo+"' ID='"+strCtrlName+"Code' NAME='"+strCtrlName+"Code'>"
			+ " <INPUT TYPE='HIDDEN' VALUE='-1' ID='"+strCtrlName+"BankID' NAME='"+strCtrlName+"BankID'>"
			+ " <INPUT TYPE='HIDDEN' VALUE='-1' ID='"+strCtrlName+"ClientID' NAME='"+strCtrlName+"ClientID'>"
			+ " <INPUT TYPE='HIDDEN' VALUE='-1' ID='"+strCtrlName+"OfficeID' NAME='"+strCtrlName+"OfficeID'>"
			+ " </td>"
			+ "<td " + strSecondTD + " >  "
			+ " <input  type='text' name='" + strCtrlName + "Ctrl' class = 'box' onkeydown='javascript:fieldFocus(\"" + strFormName + "\",\"" + strCtrlName+ "\",\"" + strCtrlName +"zhh2\",\"" + strCtrlName +"Ctrl\")' maxlength='2' size='2' value='" + strAccountNo1 + "'>"
			+ "  - "
			+ "   <input type='text' name='" + strCtrlName + "zhh2' class = 'box' onkeydown='javascript:fieldFocus(\"" + strFormName + "\",\"" + strCtrlName+ "\",\""  + strCtrlName +"zhh3\",\""  + strCtrlName +"zhh2\",\""+ strCtrlName +"Ctrl\")' maxlength='2' size='2' value='" + strAccountNo2 + "'>"
			+ "  - ");
	var bflag = false;
	if (parseInt(lAccountTypeID)>100)	
	{
	  var temp = lAccountTypeID;
	  for (;temp>100;temp=parseInt((temp - temp%100)/100))
	  {
	    if(temp%100==1)
	      bflag = true; 
	  }
	  if(temp==1)
	      bflag = true;
	}
	else
	{
	  if((lAccountTypeID==1) || (lAccountTypeID==97) || (lAccountTypeID<0) || (lAccountTypeID==13) || (lAccountTypeID==14) || (lAccountTypeID==5) || (lAccountTypeID==4)  || (lAccountTypeID==40) || (lAccountTypeID==41) || (lAccountTypeID==42))
	      bflag = true;
	}
			
	if(bflag == true)
	{
		document.writeln("  <input type='text' name='" + strCtrlName + "zhh3' size='4' maxlength='4' class='box'  onkeydown='javascript:fieldFocus(\"" + strFormName + "\",\"" + strCtrlName+ "\",\"" + strCtrlName +"zhh4\",\""  + strCtrlName +"zhh3\",\"" + strCtrlName +"zhh2\",1)'  value='" + strAccountNo3 + "'>"
			+ "  - "
			+ "  <input type='text' name='" + strCtrlName + "zhh4' size='1' maxlength='1' class='box'  value='" + strAccountNo4 + "' onkeydown='javascript:isSelectAccount(\"" + strFormName + "\",\"" + strCtrlName+ "\",\"" + lOfficeID+ "\",\"" + lCurrencyID+ "\",\"" + lAccountTypeID+ "\",\"" + lGetOrPay + "\",\"" + strNextCtrlName + "\",\""  + strCtrlName +"zhh4\",\"" + strCtrlName +"zhh3\")'>");
	}
	else
	{
		document.writeln("  <input type='text' name='" + strCtrlName + "zhh3' size='4' maxlength='4' class='box' value='" + strAccountNo3 + "' onkeydown='javascript:isSelectAccount(\"" + strFormName + "\",\"" + strCtrlName+ "\",\"" + lOfficeID+ "\",\"" + lCurrencyID+ "\",\"" + lAccountTypeID+ "\",\"" + lGetOrPay + "\",\"" + strNextCtrlName + "\",\""  + strCtrlName +"zhh3\",\"" + strCtrlName +"zhh2\")'>");
	}
	document.writeln(" "
			+ "<input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "ForAccount'>"
			+ "</td>");
			//document.writeln(

//	gFormName[gNo]=strFormName;
//	eval("gAccountCtrlAccountID[" + gNoAccountID + "]='" + strFormName+ "." + strCtrlName + "'");//放大镜自身名称
//	gNoAccountID=gNoAccountID+1;
//	gNo=gNo+1;
//	gNoLinkID++;
}

//add by ming
/**
 * 设置帐户控件帐户编号和ID(即选一个放大镜同时给另一个设置帐号和帐号ID)
 * @param strCtrlName 帐户控件名称
 * @param objCtrl 需要输出帐户放大镜名称
 */
function setAccountCtrlAccountNo(strCtrlName,objCtrl)
{
	var i,j,k;
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gAccountCtrlAccountNo[i][0]!=null)
		{
			if (gAccountCtrlAccountNo[i][0]==strCtrlName)
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gAccountCtrlAccountNo[i][j]==null)
					{
						gAccountCtrlAccountNo[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gAccountCtrlAccountNo[i][0]=strCtrlName;
			gAccountCtrlAccountNo[i][1]=objCtrl;
			break;
		}

	}
}

/**
 * 设置帐户控件客户编号
 * @param strCtrlName 帐户控件名称
 * @param objCtrl 需要输出客户编号域
 */
function setAccountCtrlClientNo(strCtrlName,objCtrl)
{
	var i,j,k;
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gAccountCtrlClientNo[i][0]!=null)
		{
			if (gAccountCtrlClientNo[i][0]==strCtrlName)
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gAccountCtrlClientNo[i][j]==null)
					{
						gAccountCtrlClientNo[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gAccountCtrlClientNo[i][0]=strCtrlName;
			gAccountCtrlClientNo[i][1]=objCtrl;
			break;
		}

	}
}

/**
 * 设置帐户控件客户名称
 * @param strCtrlName 帐户控件名称
 * @param objCtrl 需要输出客户名称域
 */
function setAccountCtrlClientName(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gAccountCtrlClientName[i][0]!=null)
		{
			if (gAccountCtrlClientName[i][0]==strCtrlName)
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gAccountCtrlClientName[i][j]==null)
					{
						gAccountCtrlClientName[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gAccountCtrlClientName[i][0]=strCtrlName;
			gAccountCtrlClientName[i][1]=objCtrl;
			break;
		}

	}
}

/**
 * 设置帐户控件的客户标识
 * @param strCtrlName 帐户控件名称
 * @param objCtrl 需要输出客户名称域
 */
function setAccountCtrlClientID(strCtrlName,objCtrl)
{
	var i,j,k;
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gAccountCtrlClientID[i][0]!=null)
		{
			if (gAccountCtrlClientID[i][0]==strCtrlName)
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gAccountCtrlClientID[i][j]==null)
					{
						gAccountCtrlClientID[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gAccountCtrlClientID[i][0]=strCtrlName;
			gAccountCtrlClientID[i][1]=objCtrl;
			break;
		}

	}
}

/**
 * 设置帐户控件的客户标识
 * @param strCtrlName 帐户控件名称
 * @param objCtrl 需要输出客户名称域
 */
function setAccountCtrlAccountID(strCtrlName,objCtrl)
{
	var i,j,k;
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gAccountCtrlAccountID[i][0]!=null)
		{
			if (gAccountCtrlAccountID[i][0]==strCtrlName)
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gAccountCtrlAccountID[i][j]==null)
					{
						gAccountCtrlAccountID[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gAccountCtrlAccountID[i][0]=strCtrlName;
			gAccountCtrlAccountID[i][1]=objCtrl;
			break;
		}

	}
}

/**
 * 设置帐户控件的客户标识
 * @param strCtrlName 帐户控件名称
 * @param objCtrl 需要输出客户名称域
 */
function setAccountCtrlCleanUp(strCtrlName,objCtrl)
{
	var i,j,k;
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gAccountCtrlCleanUp[i][0]!=null)
		{
			if (gAccountCtrlCleanUp[i][0]==strCtrlName)
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gAccountCtrlCleanUp[i][j]==null)
					{
						gAccountCtrlCleanUp[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gAccountCtrlCleanUp[i][0]=strCtrlName;
			gAccountCtrlCleanUp[i][1]=objCtrl;
			break;
		}

	}
}


/**
 * 是否选择了客户控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lAccountTypeID 帐户类型标识
 * @param lGetOrPay 付或者收
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectAccount(strFormName,strCtrlName,lOfficeID,lCurrencyID,lAccountTypeID,lGetOrPay,strNextCtrlName,currentfield,previousfield)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			
			showAccountCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lAccountTypeID,lGetOrPay,strNextCtrlName );
		}
		else
		{
			if (window.event.keyCode==8 || window.event.keyCode==46)
			{
			   if (previousfield!=null)
			   {
			   	if(eval(strFormName + "." + currentfield + ".value")=="")
			   	{
	//			eval(strFormName+ "." + field2 + ".select()");
				eval(strFormName+ "." + previousfield + ".focus()");
				eval(strFormName+ "." + previousfield + ".select()");
				setAccountCtrlFieldStatus(previousfield,1);
				setAccountCtrlFieldStatus(currentfield,1);
				}
				else
				{
			   		eval(strFormName + "." + currentfield + ".value=''");
				}
		  	   }
			}
	
			eval(strFormName+ "." + strCtrlName + ".value=-1");
	
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}

/**
 * 是否选择了客户控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lAccountTypeID 帐户类型标识
 * @param lGetOrPay 付或者收
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showAccountCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lAccountTypeID,lGetOrPay,strNextCtrlName)
{
				//第三位前面补0
	var strField1=eval(strFormName + "." + strCtrlName + "zhh3.value");
	if(strField1!="")
	{
		var nField1Length=strField1.length;
		for(var i=nField1Length;i<4;i++)
		{
			strField1="0" + strField1;
		}
	}
	eval(strFormName + "." + strCtrlName + "zhh3.value='" + strField1 + "'");

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;


	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="nullForAccount" && lClientID !="null")
	{
		var sType=typeof(eval(strFormName + "." + lClientID ));
		if(sType=="object")
		{
			eval("lClientID=" + strFormName + "." + lClientID + ".value");
		}
	}
	else
		lClientID="";

	//得到帐户编号
	var strAccountNo,strAccountNo1,strAccountNo2,strAccountNo3,strAccountNo4;

	strAccountNo1=eval(strFormName + "." + strCtrlName + "Ctrl.value");
	strAccountNo2=eval(strFormName + "." + strCtrlName + "zhh2.value");
	strAccountNo3=eval(strFormName + "." + strCtrlName + "zhh3.value");
	strAccountNo4="";
	if(lAccountTypeID==1)
	{
		strAccountNo4=eval(strFormName + "." + strCtrlName + "zhh4.value");
	}
	strAccountNo="";
	if (strAccountNo1!="")
	{
		strAccountNo=strAccountNo+strAccountNo1;
		if (strAccountNo2!="")
		{
			strAccountNo=strAccountNo+ "-" + strAccountNo2;
			if(strAccountNo3!="")
			{
				strAccountNo=strAccountNo + "-" + strAccountNo3;
				if(strAccountNo4!="")
				{
					strAccountNo=strAccountNo + "-" + strAccountNo4;
				}
			}
		}
	}

	var paraState="lClientID=" + lClientID + "&lCurrencyID=" + lCurrencyID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName+ "&lAccountTypeID=" + lAccountTypeID + "&lOfficeID=" + lOfficeID + "&strNextCtrlName=" + strNextCtrlName + "&strAccountNo=" + strAccountNo + "&lGetOrPay=" +lGetOrPay;
	g_win=window.open( "../../jsp/SelectAccount.jsp?"+paraState  , "SelectAccount" , sFeatures , false );
	g_win.focus();
}


/**
 * 输出帐户控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param strClientName 客户名称
 * @param lClientID 客户标识
 * @param strClientNo 客户编码
 * @param lAccountID 控件标识
 * @param strAccountNo 帐户代码
 * @param lOfficeID 办事处标识
 * @param strBankID 改帐户的开户行，用","分开
 */
function outputAccountCtrl(strFormName,strCtrlName,strClientName,lClientID,strClientNo,lAccountID,strAccountNo,lOfficeID,strBankID)
{

	var i,j;

	//输出客户名称
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gAccountCtrlClientName[i][0]!=null)
		{
			if (gAccountCtrlClientName[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gAccountCtrlClientName[i][j]!=null)
					{
						eval(strFormName + "." + gAccountCtrlClientName[i][j]+".value='"+ strClientName + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

	//输出客户编号
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gAccountCtrlClientNo[i][0]!=null)
		{
			if (gAccountCtrlClientNo[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gAccountCtrlClientNo[i][j]!=null)
					{

						eval(strFormName + "." + gAccountCtrlClientNo[i][j]+".value='"+ strClientNo + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	//输出客户标识
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gAccountCtrlClientID[i][0]!=null)
		{
			if (gAccountCtrlClientID[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gAccountCtrlClientID[i][j]!=null)
						eval(strFormName + "." + gAccountCtrlClientID[i][j]+".value='"+ lClientID + "'");
					else
						break;
				}
			}
		}
		else
			break;
	}

	//输出帐户标识
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gAccountCtrlAccountID[i][0]!=null)
		{
			if (gAccountCtrlAccountID[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gAccountCtrlAccountID[i][j]!=null)
						eval(strFormName + "." + gAccountCtrlAccountID[i][j]+".value='"+ lAccountID + "'");
					else
						break;
				}
			}
		}
		else
			break;
	}

	//得到帐户编号1，2，3，4
	var strAccountNo1,strAccountNo2,strAccountNo3,strAccountNo4;
	strAccountNo1="";
	strAccountNo2="";
	strAccountNo3="";
	strAccountNo4="";

	if (strAccountNo!="")
	{
		var nNum,nStart;
		nStart=0;
		nNum=1;
		for (i = 0;  i < strAccountNo.length;  i++)
		{
			var ch;
			ch = strAccountNo.charAt(i);
			if ((ch=="-") )
			{
				switch(nNum)
				{
					case 1:
					strAccountNo1=strAccountNo.substring(nStart,i);
					break;
					case 2:
					strAccountNo2=strAccountNo.substring(nStart,i);
					break;
					case 3:
					strAccountNo3=strAccountNo.substring(nStart,i);
					break;
				}
//				eval("strAccountNo" + nNum + "=" + strAccountNo.substring(nStart,i-1));
				nNum++;
				nStart=i+1;
			}
			if(i==strAccountNo.length-1)
			{
				if(strAccountNo3=="")
				{
					strAccountNo3=strAccountNo.substring(nStart,strAccountNo.length);
				}
				else
				{
					strAccountNo4=strAccountNo.substring(nStart,strAccountNo.length);
				}
			}
		}
	}

	eval(strFormName + "." + strCtrlName + ".value=" + lAccountID);
	eval(strFormName + "." + strCtrlName + "ClientID.value=" + lClientID);
	eval(strFormName + "." + strCtrlName + "OfficeID.value=" + lOfficeID);
	eval(strFormName + "." + strCtrlName + "Code.value='" + strAccountNo+"'");
	eval(strFormName + "." + strCtrlName + "BankID.value='" + strBankID+"'");
	eval(strFormName + "." + strCtrlName + "Ctrl.value='" + strAccountNo1+"'");
	eval(strFormName + "." + strCtrlName + "zhh2.value='" + strAccountNo2+"'");
	eval(strFormName + "." + strCtrlName + "zhh3.value='" + strAccountNo3+"'");
	if(strAccountNo4!="")
	{
		eval(strFormName + "." + strCtrlName + "zhh4.value='" + strAccountNo4+"'");
	}

	//add by ming
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gAccountCtrlAccountNo[i][0]!=null)
		{
			if (gAccountCtrlAccountNo[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gAccountCtrlAccountNo[i][j]!=null)
					{
  							strCtrlName=gAccountCtrlAccountNo[i][j];
							eval(strFormName + "." + strCtrlName + ".value=" + lAccountID);
							eval(strFormName + "." + strCtrlName + "Code.value='" + strAccountNo+"'");
							eval(strFormName + "." + strCtrlName + "Ctrl.value='" + strAccountNo1+"'");
							eval(strFormName + "." + strCtrlName + "zhh2.value='" + strAccountNo2+"'");
							eval(strFormName + "." + strCtrlName + "zhh3.value='" + strAccountNo3+"'");
							if(strAccountNo4!="")
							{
								eval(strFormName + "." + strCtrlName + "zhh4.value='" + strAccountNo4+"'");
							}
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
}


/**
 * 功能块（帐户控件）注释结束。
 */


/**
 * 功能块（结算方用到的合同控件）注释开始：
 *
 */

/**
 * 创建合同控件（结算使用）
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lContractID 合同标识
 * @param strContractNo 合同编号
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种
 * @param strTitle 控件标题名称
 * @param objClientID 客户对象
 * @param lTransactionTypeID 贷款类型标识,-87：贴现发放复核
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createContractCtrl(strFormName,strCtrlName,lContractID,strContractNo,lOfficeID,lCurrencyID,strTitle,objClientID,lTransactionTypeID,strNextCtrlName,strFirstTD,strSecondTD)
{

	if (strFirstTD=="" || strFirstTD==null)
	{
			strFirstTD="valign='middle' height='20' width='33%'";
	}

	if(strSecondTD==null)
	{
			strSecondTD="";
	}

	document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showContractCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID+ "\",\"" + lCurrencyID + "\",\"" + lTransactionTypeID + "\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
			+ "  "
			+ " <INPUT TYPE='HIDDEN' VALUE='"+lContractID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
			+ " <INPUT TYPE='HIDDEN' VALUE='-1' ID='"+strCtrlName+ "ClientID' NAME='"+strCtrlName+"ClientID'>"
			+ " <INPUT TYPE='HIDDEN' VALUE='"+lTransactionTypeID+"' ID='"+strCtrlName+ "LoanTypeID' NAME='"+strCtrlName+"LoanTypeID'>"
			+ " <INPUT TYPE='HIDDEN' VALUE='"+strContractNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
			+ " <input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
			+ "</td>"
			+ "<td " + strSecondTD + " ><input  class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strContractNo + "' onkeydown='javascript:isSelectContract(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID+ "\",\"" + lTransactionTypeID + "\",\"" + strNextCtrlName + "\")'>"
			+ " </td>");
}
/**
 * 创建合同控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lContractID 合同标识
 * @param strContractNo 合同编号
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种
 * @param strTitle 控件标题名称
 * @param objClientID 客户对象
 * @param lTransactionTypeID 贷款类型标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createContractCtrlScope(strFormName,strCtrlName,lContractID,strContractNo,lOfficeID,lCurrencyID,strTitle,objClientID,lTransactionTypeID,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "<a href='javascript:showContractCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID+ "\",\"" + lCurrencyID + "\",\"" + lTransactionTypeID + "\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lContractID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='-1' ID='"+strCtrlName+ "ClientID' NAME='"+strCtrlName+"ClientID'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lTransactionTypeID+"' ID='"+strCtrlName+ "LoanTypeID' NAME='"+strCtrlName+"LoanTypeID'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strContractNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input  class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strContractNo + "' onkeydown='javascript:isSelectContract(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID+ "\",\"" + lTransactionTypeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示合同选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种
 * @param lTransactionTypeID 贷款类型标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showContractCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lTransactionTypeID,strNextCtrlName)//收款方客户编号
{
	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strContractNo;
	eval("strContractNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID + "&lClientID=" + lClientID + "&lCurrencyID=" + lCurrencyID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strContractNo=" + strContractNo + "&lTransactionTypeID=" + lTransactionTypeID + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectContract.jsp?"+paraState  , "SelectContract" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了合同控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种
 * @param lTransactionTypeID 贷款类型标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectContract(strFormName,strCtrlName,lOfficeID,lCurrencyID,lTransactionTypeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showContractCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lTransactionTypeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出合同控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lClientID 客户标识
 * @param strClientName 客户名称
 * @param strClientNo 客户编号
 */
function outputContractCtrl(strFormName,strCtrlName,lContractID,lTransactionTypeID,strContractNo,lClientID)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lContractID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strContractNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strContractNo +"'");
	eval(strFormName + "." + strCtrlName +  "LoanTypeID"+".value='" + lTransactionTypeID +"'");
	eval(strFormName + "." + strCtrlName +  "ClientID"+".value='" + lClientID +"'");

}

/**
 * 功能块（合同控件）注释结束。
 */




/**
 * 功能块（开户行控件）注释开始：
 *
 */

/**
 * 创建开户行控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lBranchID 开户行标识
 * @param strBranch 开户行名称
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param objAccountID 帐户对象
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 * @param lIsSingleBank 是否单边帐银行
 */
function createBranchCtrl(strFormName,strCtrlName,lBranchID,strBranch,lOfficeID,strTitle,objAccountID,strNextCtrlName,strFirstTD,strSecondTD,lIsSingleBank)
{

createTypeBranchCtrl(strFormName,strCtrlName,lBranchID,strBranch,lOfficeID,strTitle,objAccountID,strNextCtrlName,"",strFirstTD,strSecondTD,lIsSingleBank);
}

/**
 * 创建开户行控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lBranchID 开户行标识
 * @param strBranch 开户行名称
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param objAccountID 帐户对象
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strType 273或者973
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createTypeBranchCtrl(strFormName,strCtrlName,lBranchID,strBranch,lOfficeID,strTitle,objAccountID,strNextCtrlName,strType,strFirstTD,strSecondTD,lIsSingleBank)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}
		//add by ming(if(" + strFormName + "." + strCtrlName +"Ctrl.disabled == false) {})
		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:if(" + strFormName + "." + strCtrlName +"Ctrl.disabled == false) {showBranchCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strType + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lBranchID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='-1' ID='"+strCtrlName+ "AccountID' NAME='"+strCtrlName+"AccountID'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strBranch+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"// 名称
				+ " <INPUT TYPE='HIDDEN' VALUE='' ID='"+strCtrlName+ "NoCode' NAME='"+strCtrlName+"NoCode'>"//Code
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lIsSingleBank+"' ID='"+strCtrlName+ "IsSingle' NAME='"+strCtrlName+"IsSingle'>"
				+ " <input type='hidden' name='" + strCtrlName + "objAccountID' value='" + objAccountID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><textarea  class=box  name='" + strCtrlName + "Ctrl' rows=2 cols=30 onkeydown='javascript:isSelectBranch(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strType + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"+strBranch+"</textarea>"
				+ " </td>");
}


/**
 * 显示开户行选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showBranchCtrl(strFormName,strCtrlName,strType,lOfficeID,strNextCtrlName)//收款方客户编号
{
	//得到帐户标识
	var lAccountID;
	eval("lAccountID="+ strFormName + "."+ strCtrlName + "objAccountID.value");
//	alert("la=" + lAccountID);
	if (lAccountID!="null")
	{
		eval("lAccountID=" + strFormName + "." + lAccountID + ".value");
	}
	else
		lAccountID="";
//	alert("la=" + lAccountID);
	var strBranch=eval(strFormName+"."+strCtrlName+".value");
	eval("strBranch=" + strFormName + "." + strCtrlName + "Ctrl.value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&lAccountID=" + lAccountID + "&strType=" + strType + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strBranch="+strBranch + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectBranch.jsp?"+paraState  , "SelectBranch" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了开户行控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lTransactionTypeID 贷款类型标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectBranch(strFormName,strCtrlName,strType,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showBranchCtrl(strFormName,strCtrlName,strType,lOfficeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
			eval(strFormName+ "." + strCtrlName + "IsSingle.value=-1"); 
		}
	}
}

/**
 * 设置需要输出客户名称的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setBranchCtrlBranchAccountCode(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gBranchCtrlBranchAccountCode[i][0]!=null)
		{
			if (gBranchCtrlBranchAccountCode[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gBranchCtrlBranchAccountCode[i][j]==null)
					{
						gBranchCtrlBranchAccountCode[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gBranchCtrlBranchAccountCode[i][0]=strCtrlName;
			gBranchCtrlBranchAccountCode[i][1]=objCtrl;
			break;
		}

	}

}



/**
 * 输出开户行控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lBranchID 开户行标识
 * @param strBranch 开户行名称
 * @param strBranchAccountCode 银行帐户号
 */
function outputBranchCtrl(strFormName,strCtrlName,lBranchID,strBranch,strBranchAccountCode,lIsSingle,strBranchCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lBranchID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strBranch +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strBranch +"'");
	eval(strFormName + "." + strCtrlName +  "IsSingle"+".value='" + lIsSingle +"'");
	eval(strFormName + "." + strCtrlName + "NoCode.value='" + strBranchCode + "'");

	for(i=0;i<ARRAYNUM;i++)
	{
		if (gBranchCtrlBranchAccountCode[i][0]!=null)
		{
			if(gBranchCtrlBranchAccountCode[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gBranchCtrlBranchAccountCode[i][j]!=null)
					{
						eval(strFormName+ "." + gBranchCtrlBranchAccountCode[i][j]+".value='" + strBranchAccountCode + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}


}

/**
 * 功能块（开户行控件）注释结束。
 */



/**
 * 功能块（总帐控件）注释开始：
 *
 */

/**
 * 创建总帐控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lGeneralLedgerID 总帐标识
 * @param strGeneralLedger 总帐名称
 * @param strGeneralLedgerCode 总帐代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createGeneralLedgerCtrl(strFormName,strCtrlName,lGeneralLedgerID,strGeneralLedger,strGeneralLedgerCode,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showGeneralLedgerCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lGeneralLedgerID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strGeneralLedgerCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><textarea  class=box    type='text' name='" + strCtrlName + "Ctrl' rows=2 cols=30 onkeydown='javascript:isSelectGeneralLedger(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"+ strGeneralLedger +"</textarea>"
				+ " </td>");
}


/**
 * 显示总帐选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showGeneralLedgerCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{
	var strGeneralLedger;
	eval("strGeneralLedger=" + strFormName + "." + strCtrlName + "Ctrl.value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strGeneralLedger="+strGeneralLedger + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectGeneralLedger.jsp?"+paraState  , "SelectGeneralLedger" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了总帐控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lTransactionTypeID 贷款类型标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectGeneralLedger(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showGeneralLedgerCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}

/**
 * 输出总帐控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lGeneralLedgerID 总帐标识
 * @param strGeneralLedger 总帐名称
 * @param strGeneralLedgerCode 银行帐户号
 */
function outputGeneralLedgerCtrl(strFormName,strCtrlName,lGeneralLedgerID,strGeneralLedger,strGeneralLedgerCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lGeneralLedgerID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strGeneralLedger +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strGeneralLedgerCode +"'");



}

/**
 * 功能块（总帐控件）注释结束。
 */




/**
 * 功能块（摘要控件）注释开始：
 *
 */

/**
 * 创建摘要控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strAbstract 摘要
 * @param strCode 摘要代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createAbstractCtrl(strFormName,strCtrlName,strAbstract,strCode,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showAbstractCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box   type='text' name='" + strCtrlName + "' value='" + strAbstract + "' onkeydown='javascript:isSelectAbstract(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")' onfocus=\"nextfield ='"+ strNextCtrlName + "'\">"
				+ " </td>");
}

 
 
/**
 * 显示摘要窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showAbstractCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strAbstract = eval(strFormName+"."+strCtrlName+".value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName+"&strAbstract="+strAbstract;
	g_win=window.open( "../../jsp/SelectAbstract.jsp?"+paraState  , "SelectAbstract" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示摘要窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectAbstract(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		var nData=parseInt(eval(strFormName + "." + strCtrlName + ".value"));
	
		if ((window.event.keyCode==13) && (! isNaN(nData)))//回车说明选择
		{
			gnIsSelectCtrl=1;
			showAbstractCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * 输出摘要控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strAbstract 开户行名称
 * @param strCode 摘要代码
 */
function outputAbstractCtrl(strFormName,strCtrlName,strAbstract,strCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strAbstract+ "'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strCode +"'");

}

/**
 * 功能块（摘要控件）注释结束。
 */



/**
 * 功能块（科目号控件）注释开始：
 *
 */

/**
 * 创建科目号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strSubjectNo 科目号
 * @param strCode 科目号代码
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createSubjectNoCtrl(strFormName,strCtrlName,strSubjectNo,strCode,lOfficeID,lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showSubjectNoCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strSubjectNo+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box size='40' type='text' name='" + strCtrlName + "Ctrl' value='" + strSubjectNo + "' onkeydown='javascript:isSelectSubjectNo(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示科目号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showSubjectNoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=600,height=340,scrollbars=yes";
	var g_win;
	var strSubjectNo = eval(strFormName+"."+strCtrlName+"Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName + "&lCurrencyID=" + lCurrencyID+"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName+"&strSubjectNo="+strSubjectNo;
	g_win=window.open( "../../jsp/SelectSubjectNo.jsp?"+paraState  , "SelectSubjectNo" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示科目号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectSubjectNo(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showSubjectNoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=''");
		}
	}
}


/**
 * 输出科目号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strSubjectNo 开户行名称
 * @param strCode 科目号代码
 */
function outputSubjectNoCtrl(strFormName,strCtrlName,strSubjectNo,strCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + "Ctrl.value='" + strSubjectNo+ "'");
	eval(strFormName + "." + strCtrlName +  ""+".value='" + strCode +"'");

}

/**
 * 功能块（科目号控件）注释结束。
 */


/**
 * 功能块（调整原因控件）注释开始：
 *
 */

/**
 * 创建调整原因控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strAdjustReason 调整原因
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createAdjustReasonCtrl(strFormName,strCtrlName,strAdjustReason,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showAdjustReasonCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box   type='text' name='" + strCtrlName + "' value='" + strAdjustReason + "' onkeydown='javascript:isSelectAdjustReason(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示调整原因窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showAdjustReasonCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectAdjustReason.jsp?"+paraState  , "SelectAdjustReason" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示调整原因窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectAdjustReason(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showAdjustReasonCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * 输出调整原因控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strAdjustReason 开户行名称
 * @param strCode 调整原因代码
 */
function outputAdjustReasonCtrl(strFormName,strCtrlName,strAdjustReason)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strAdjustReason+ "'");

}

/**
 * 功能块（调整原因控件）注释结束。
 */



/**
 * 功能块（定期存款单据号控件）注释开始：
 *
 */

/**
 * 创建定期存款单据号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lFixedDepositID 定期存款单据号标识
 * @param strFixedDepositNo 定期存款单据号
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param objClientID 帐户对象
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createFixedDepositCtrl(strFormName,strCtrlName,lFixedDepositID,strFixedDepositNo,lOfficeID,lCurrencyID,strTitle,objClientID,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showFixedDepositCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lFixedDepositID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='-1' ID='"+strCtrlName+ "ClientID' NAME='"+strCtrlName+"ClientID'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strFixedDepositNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input  class=box    type='text' name='" + strCtrlName + "Ctrl' value='" + strFixedDepositNo + "' onkeydown='javascript:isSelectFixedDeposit(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示定期存款单据号选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showFixedDepositCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方客户编号
{
	//得到帐户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";

	var strFixedDepositNo;
	eval("strFixedDepositNo=" + strFormName + "." + strCtrlName + "Ctrl.value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&lClientID=" + lClientID+ "&lCurrencyID=" + lCurrencyID  + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strFixedDepositNo="+strFixedDepositNo + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectFixedDeposit.jsp?"+paraState  , "SelectFixedDeposit" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了定期存款单据号控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectFixedDeposit(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showFixedDepositCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出定期存款单据号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lFixedDepositID 定期存款单据号标识
 * @param strFixedDepositNo 定期存款单据号
 */
function outputFixedDepositCtrl(strFormName,strCtrlName,lFixedDepositID,strFixedDepositNo,lClientID,strDateEnd)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lFixedDepositID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strFixedDepositNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strFixedDepositNo +"'");
	eval(strFormName + "." + strCtrlName +  "ClientID"+".value='" + lClientID +"'");

	for(i=0;i<ARRAYNUM;i++)
	{
		if(gFixedDepositCtrlDateEnd[i][0]!=null)
		{
			if (gFixedDepositCtrlDateEnd[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gFixedDepositCtrlDateEnd[i][j]!=null)
					{
						eval(strFormName + "." + gFixedDepositCtrlDateEnd[i][j]+".value='"+ strDateEnd + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
}

/**
 * 设置需要输出定期存单的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setFixedDepositDateEnd(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gFixedDepositCtrlDateEnd[i][0]!=null)
		{
			if (gFixedDepositCtrlDateEnd[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gFixedDepositCtrlDateEnd[i][j]==null)
					{
						gFixedDepositCtrlDateEnd[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gFixedDepositCtrlDateEnd[i][0]=strCtrlName;
			gFixedDepositCtrlDateEnd[i][1]=objCtrl;
			break;
		}

	}

}


/**
 * 功能块（定期存款单据号控件）注释结束。
 */


/**
 * 功能块（放款通知单控件）注释开始：
 *
 */

/**
 * 创建放款通知单控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lLetoutRequisitionID 放款通知单标识
 * @param strLetoutRequisitionCode 放款通知单号
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param objContractID 合同对象
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createLetoutRequisitionCtrl(strFormName,strCtrlName,lLetoutRequisitionID,strLetoutRequisitionCode,lOfficeID,lCurrencyID,strTitle,objContractID,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showLetoutRequisitionCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLetoutRequisitionID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strLetoutRequisitionCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objContractID' value='" + objContractID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strLetoutRequisitionCode + "' onkeydown='javascript:isSelectLetoutRequisition(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示放款通知单选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showLetoutRequisitionCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方客户编号
{
	//得到帐户标识
	var lContractID;
	eval("lContractID="+ strFormName + "."+ strCtrlName + "objContractID.value");
	if (lContractID!="null")
	{
		eval("lContractID=" + strFormName + "." + lContractID + ".value");
	}
	else
		lContractID=-1;

	var strLetoutRequisitionCode;
	eval("strLetoutRequisitionCode=" + strFormName + "." + strCtrlName + "Ctrl.value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&lContractID=" + lContractID+ "&lCurrencyID=" + lCurrencyID  + "&strFormName=" + strFormName + "&strLetoutRequisitionCode=" + strLetoutRequisitionCode+"&strCtrlName="+strCtrlName + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectLetoutRequisition.jsp?"+paraState  , "SelectLetoutRequisition" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了放款通知单控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectLetoutRequisition(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showLetoutRequisitionCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出放款通知单控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lLetoutRequisitionID 放款通知单标识
 * @param strLetoutRequisitionCode 放款通知单
 */
function outputLetoutRequisitionCtrl(strFormName,strCtrlName,lLetoutRequisitionID,strLetoutRequisitionCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lLetoutRequisitionID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strLetoutRequisitionCode +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strLetoutRequisitionCode +"'");

}

/**
 * 功能块（放款通知单控件）注释结束。
 */

 
/**
 * 功能块（贴现凭证编号控件）注释开始：
 *
 */

/**
 * 创建贴现凭证编号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lDiscountCredenceCtrlID 贴现凭证编号标识
 * @param strDiscountCredenceCtrlCode 贴现凭证编号
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param lIsGrantOrRecede 发放还是收回 ， 发放：1 ,收回 ： 2
 * @param strTitle 控件标题名称
 * @param objContractID 合同对象
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createDiscountCredenceCtrl(strFormName,strCtrlName,lDiscountCredenceID,strDiscountCredenceCode,lOfficeID,lCurrencyID,lIsGrantOrRecede,strTitle,objContractID,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}
		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showDiscountCredenceCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\",\"" + lIsGrantOrRecede +"\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lDiscountCredenceID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strDiscountCredenceCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objContractID' value='" + objContractID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strDiscountCredenceCode + "' onkeydown='javascript:isSelectDiscountCredence(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\",\"" + lIsGrantOrRecede +"\")'>"
				+ " </td>");
}


/**
 * 显示放贴现凭证编号选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
  * @param lIsGrantOrRecede 发放还是收回 ， 发放：1 ,收回 ： 2
 */
function showDiscountCredenceCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName,lIsGrantOrRecede)//收款方客户编号
{
	//得到帐户标识
	var lContractID;
	eval("lContractID="+ strFormName + "."+ strCtrlName + "objContractID.value");
	if (lContractID!="null")
	{
		eval("lContractID=" + strFormName + "." + lContractID + ".value");
	}
	else
		lContractID=-1;

	var strDiscountCredenceCode;
	eval("strDiscountCredenceCode=" + strFormName + "." + strCtrlName + "Ctrl.value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&lContractID=" + lContractID+ "&lCurrencyID=" + lCurrencyID  + "&strFormName=" + strFormName + "&strDiscountCredenceCode=" + strDiscountCredenceCode+"&strCtrlName="+strCtrlName + "&strNextCtrlName=" + strNextCtrlName + "&lIsGrantOrRecede=" + lIsGrantOrRecede; 
	g_win=window.open( "../../jsp/SelectDiscountCredence.jsp?"+paraState  , "SelectDiscountCredence" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了贴现凭证编号控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectDiscountCredence(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName,lIsGrantOrRecede)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showDiscountCredenceCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName,lIsGrantOrRecede);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出贴现凭证编号
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lDiscountCredenceID 放款通知单标识
 * @param strDiscountCredenceCode 放款通知单
 */
function outputDiscountCredenceCtrl(strFormName,strCtrlName,lDiscountCredenceID,strDiscountCredenceCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lDiscountCredenceID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strDiscountCredenceCode +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strDiscountCredenceCode +"'");

}

/**
 * 功能块（贴现凭证编号控件）注释结束。
 */

 
 
/**
 * 功能块（放款通知单控件-信贷）注释开始：
 *
 */

/**
 * 创建放款通知单控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lLetoutRequisitionID 放款通知单标识
 * @param strLetoutRequisitionCode 放款通知单号
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param objContractID 合同对象
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createLetoutRequisitionCtrl1(strFormName,strCtrlName,lLetoutRequisitionID,strLetoutRequisitionCode,lOfficeID,lCurrencyID,strTitle,objContractID,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showLetoutRequisitionCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLetoutRequisitionID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strLetoutRequisitionCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objContractID' value='" + objContractID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strLetoutRequisitionCode + "' onkeydown='javascript:isSelectLetoutRequisition1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}

/**
 * 设置需要输出域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setLetoutRequisitionBalance(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gLetoutRequisitionBalance[i][0]!=null)
		{
			if (gLetoutRequisitionBalance[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gLetoutRequisitionBalance[i][j]==null)
					{
						gLetoutRequisitionBalance[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gLetoutRequisitionBalance[i][0]=strCtrlName;
			gLetoutRequisitionBalance[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 显示放款通知单选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showLetoutRequisitionCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方客户编号
{
	//得到帐户标识
	var lContractID;
	eval("lContractID="+ strFormName + "."+ strCtrlName + "objContractID.value");
	if (lContractID!="null")
	{
		eval("lContractID=" + strFormName + "." + lContractID + ".value");
	}
	else
		lContractID=-1;

	var strLetoutRequisitionCode;
	eval("strLetoutRequisitionCode=" + strFormName + "." + strCtrlName + "Ctrl.value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&lContractID=" + lContractID+ "&lCurrencyID=" + lCurrencyID  + "&strFormName=" + strFormName + "&strLetoutRequisitionCode=" + strLetoutRequisitionCode+"&strCtrlName="+strCtrlName + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectLetoutRequisition1.jsp?"+paraState  , "SelectLetoutRequisition" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了放款通知单控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectLetoutRequisition1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showLetoutRequisitionCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出放款通知单控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lLetoutRequisitionID 放款通知单标识
 * @param strLetoutRequisitionCode 放款通知单
 */
function outputLetoutRequisitionCtrl1(strFormName,strCtrlName,lLetoutRequisitionID,strLetoutRequisitionCode,strBalance)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lLetoutRequisitionID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strLetoutRequisitionCode +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strLetoutRequisitionCode +"'");

	for(i=0;i<ARRAYNUM;i++)
	{
		if(gLetoutRequisitionBalance[i][0]!=null)
		{
			if (gLetoutRequisitionBalance[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gLetoutRequisitionBalance[i][j]!=null)
					{
						eval(strFormName + "." + gLetoutRequisitionBalance[i][j]+".value='"+ strBalance + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

}

/**
 * 功能块（放款通知单控件-信贷）注释结束。
 */


/**
 * 创建展期控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lExtendApplyNewID 展期标识
 * @param strExtendApplyNewCode 展期号
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param objContractID 合同对象
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createExtendApplyNewCtrl(strFormName,strCtrlName,lExtendApplyNewID,strExtendApplyNewCode,lOfficeID,lCurrencyID,strTitle,objContractID,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showExtendApplyNewCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lExtendApplyNewID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strExtendApplyNewCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objContractID' value='" + objContractID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strExtendApplyNewCode + "' onkeydown='javascript:isSelectExtendApplyNew(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示展期选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showExtendApplyNewCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方客户编号
{
	//得到帐户标识
	var lContractID;
	eval("lContractID="+ strFormName + "."+ strCtrlName + "objContractID.value");
	if (lContractID!="null")
	{
		eval("lContractID=" + strFormName + "." + lContractID + ".value");
	}
	else
		lContractID=-1;

	var strExtendApplyNewCode;
	eval("strExtendApplyNewCode=" + strFormName + "." + strCtrlName + "Ctrl.value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&lContractID=" + lContractID+ "&lCurrencyID=" + lCurrencyID  + "&strFormName=" + strFormName + "&strExtendApplyNewCode=" + strExtendApplyNewCode+"&strCtrlName="+strCtrlName + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectExtendApplyNew.jsp?"+paraState  , "SelectExtendApplyNew" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了展期控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectExtendApplyNew(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showExtendApplyNewCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出展期控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lExtendApplyNewID 放款通知单标识
 * @param strExtendApplyNewCode 放款通知单
 */
function outputExtendApplyNewCtrl(strFormName,strCtrlName,lExtendApplyNewID,strExtendApplyNewCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lExtendApplyNewID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strExtendApplyNewCode +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strExtendApplyNewCode +"'");

}

/**
 * 功能块（展期控件）注释结束。
 */
/**
 * 功能块（数据库表）注释开始：-by ming
 *
 */

/**
 * 创建数据库表控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createTableNameCtrl(strFormName,strCtrlName,strTableName,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showTableNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "' value='" + strTableName + "' onkeydown='javascript:isSelectTableName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示数据表选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 */
function showTableNameCtrl(strFormName,strCtrlName,strNextCtrlName)//收款方客户编号
{
	var strTableName;
	eval("strTableName=" + strFormName + "." + strCtrlName + ".value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="strTableName=" + strTableName + "&strFormName=" + strFormName + "&strCtrlName="+strCtrlName + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../jsp/SelectTableName.jsp?"+paraState  , "SelectTableName" , sFeatures , false );
	//alert(strTableName);
	g_win.focus();
}

/**
 * 是否选择了数据库表
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 */
function isSelectTableName(strFormName,strCtrlName,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showTableNameCtrl(strFormName,strCtrlName,strNextCtrlName);
		}
	}
}


/**
 * 输出数据库表
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 */
function outputTableNameCtrl(strFormName,strCtrlName,strTableName)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strTableName +"'");
}


/**
 * 功能块（数据库表）注释结束。-by ming
 */

 
/**
 * 功能块（贷款借据号控件）注释开始：
 *
 */

/**
 * 创建贷款借据号控件，必须关联合同，否则查不出来，
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的，txtDueBillID这个名称是复核时专用的，其他地方不要使用
 * @param lLoanDueBillID 贷款借据号标识
 * @param strLoanDueBillCode 贷款借据号号
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param objContractID 合同对象
 * @param lTransactionTypeID 贷款类型标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createLoanDueBillCtrl(strFormName,strCtrlName,lLoanDueBillID,strLoanDueBillCode,lOfficeID,lCurrencyID,strTitle,objContractID,lTransactionTypeID,strNextCtrlName,strFirstTD,strSecondTD,objLoanTypeID,strNextCtrlName1)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showLoanDueBillCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + lTransactionTypeID +"\",\"" + strNextCtrlName + "\",\"" + strNextCtrlName1 + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLoanDueBillID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strLoanDueBillCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objContractID' value='" + objContractID + "'>"
				+ " <input type='hidden' name='" + strCtrlName + "objLoanTypeID' value='" + objLoanTypeID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strLoanDueBillCode + "' onkeydown='javascript:isSelectLoanDueBill(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + lTransactionTypeID +"\",\"" + strNextCtrlName + "\",\"" + strNextCtrlName1 + "\")'>"
				+ " </td>");
}


/**
 * 显示贷款借据号选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showLoanDueBillCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lTransactionTypeID,strNextCtrlName,strNextCtrlName1)//收款方客户编号
{
	//得到合同标识 
	var lContractID;
	eval("lContractID="+ strFormName + "."+ strCtrlName + "objContractID.value");
	if (lContractID!="null")
	{
		eval("lContractID=" + strFormName + "." + lContractID + ".value");
	}
	else
		lContractID=-1; 
	//得到Loan Type标识
	var lLoanTypeID;
	eval("lLoanTypeID="+ strFormName + "."+ strCtrlName + "objLoanTypeID.value"); 
	if (lLoanTypeID!="null" && lLoanTypeID!="undefined" && lLoanTypeID!="")
	{
		eval("lLoanTypeID=" + strFormName + "." + lLoanTypeID + ".value");
	}
	else
		lLoanTypeID=-1; 
	var strLoanDueBillCode;
	eval("strLoanDueBillCode=" + strFormName + "." + strCtrlName + "Ctrl.value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&lContractID=" + lContractID+ "&lCurrencyID=" + lCurrencyID + "&lTransactionTypeID=" + lTransactionTypeID + "&lLoanTypeID=" + lLoanTypeID + "&strFormName=" + strFormName + "&strLoanDueBillCode=" + strLoanDueBillCode+"&strCtrlName="+strCtrlName + "&strNextCtrlName=" + strNextCtrlName+ "&strNextCtrlName1=" + strNextCtrlName1;
	g_win=window.open( "../../jsp/SelectLoanDueBill.jsp?"+paraState  , "SelectLoanDueBill" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了贷款借据号控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param lTransactionTypeID 贷款类型标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectLoanDueBill(strFormName,strCtrlName,lOfficeID,lCurrencyID,lTransactionTypeID,strNextCtrlName,strNextCtrlName1)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showLoanDueBillCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lTransactionTypeID,strNextCtrlName,strNextCtrlName1);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}

/**
 * 设置需要输出客户标识的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setLoanDueBillCtrlDateStart(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gLoanDueBillCtrlDateStart[i][0]!=null)
		{
			if (gLoanDueBillCtrlDateStart[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gLoanDueBillCtrlDateStart[i][j]==null)
					{
						gLoanDueBillCtrlDateStart[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gLoanDueBillCtrlDateStart[i][0]=strCtrlName;
			gLoanDueBillCtrlDateStart[i][1]=objCtrl;
			break;
		}

	}

}
/**
 * 设置需要输出客户标识的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setLoanDueBillCtrlDateEnd(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gLoanDueBillCtrlDateEnd[i][0]!=null)
		{
			if (gLoanDueBillCtrlDateEnd[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gLoanDueBillCtrlDateEnd[i][j]==null)
					{
						gLoanDueBillCtrlDateEnd[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gLoanDueBillCtrlDateEnd[i][0]=strCtrlName;
			gLoanDueBillCtrlDateEnd[i][1]=objCtrl;
			break;
		}

	}

}


/**
 * 输出贷款借据号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lLoanDueBillID 贷款借据号标识
 * @param strLoanDueBillNo 贷款借据号
 */
function outputLoanDueBillCtrl(strFormName,strCtrlName,lLoanDueBillID,strLoanDueBillCode,strDateStart,strDateEnd)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lLoanDueBillID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strLoanDueBillCode +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strLoanDueBillCode +"'");

	for(i=0;i<ARRAYNUM;i++)
	{
		if(gLoanDueBillCtrlDateStart[i][0]!=null)
		{
			if (gLoanDueBillCtrlDateStart[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gLoanDueBillCtrlDateStart[i][j]!=null)
					{
						eval(strFormName + "." + gLoanDueBillCtrlDateStart[i][j]+".value='"+ strDateStart + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gLoanDueBillCtrlDateEnd[i][0]!=null)
		{
			if (gLoanDueBillCtrlDateEnd[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gLoanDueBillCtrlDateEnd[i][j]!=null)
					{
						eval(strFormName + "." + gLoanDueBillCtrlDateEnd[i][j]+".value='"+ strDateEnd + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}


}

/**
 * 功能块（贷款借据号控件）注释结束。
 */


/**
 * 功能块（通知存款单据号控件）注释开始：
 *
 */

/**
 * 创建通知存款单据号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lNotifyAccountID 通知存款单据号标识
 * @param strNotifyAccountCode 通知存款单据号号
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param objAccountID 帐户对象
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createNotifyAccountCtrl(strFormName,strCtrlName,lNotifyAccountID,strNotifyAccountCode,lOfficeID,lCurrencyID,strTitle,objAccountID,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showNotifyAccountCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lNotifyAccountID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strNotifyAccountCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objAccountID' value='" + objAccountID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strNotifyAccountCode + "' onkeydown='javascript:isSelectNotifyAccount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}

/**
 * 创建通知存款单据号控件 (用于通知存款支取得复核界面 不用显示金额)
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lNotifyAccountID 通知存款单据号标识
 * @param strNotifyAccountCode 通知存款单据号号
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param objAccountID 帐户对象
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createNotifyAccountCtrlNoAmount(strFormName,strCtrlName,lNotifyAccountID,strNotifyAccountCode,lOfficeID,lCurrencyID,strTitle,objAccountID,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showNotifyAccountCtrlNoAmount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lNotifyAccountID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strNotifyAccountCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objAccountID' value='" + objAccountID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strNotifyAccountCode + "' onkeydown='javascript:isSelectNotifyAccountNoAmount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}
/**
 * 显示通知存款单据号选择框 (用于通知存款支取得复核界面 不用显示金额)
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showNotifyAccountCtrlNoAmount(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方客户编号
{
	//得到帐户标识
	var lAccountID;
	eval("lAccountID="+ strFormName + "."+ strCtrlName + "objAccountID.value");
	if (lAccountID!="null")
	{
		eval("lAccountID=" + strFormName + "." + lAccountID + ".value");
	}
	else
		lAccountID=-1;

	var strNotifyAccountCode;
	eval("strNotifyAccountCode=" + strFormName + "." + strCtrlName + "Ctrl.value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&lAccountID=" + lAccountID+ "&lCurrencyID=" + lCurrencyID + "&strFormName=" + strFormName + "&strNotifyAccountCode=" + strNotifyAccountCode+"&strCtrlName="+strCtrlName + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectNotifyAccountNoAmount.jsp?"+paraState  , "SelectNotifyAccount" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了通知存款单据号控件 (用于通知存款支取得复核界面 不用显示金额)
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param lTransactionTypeID 贷款类型标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectNotifyAccountNoAmount(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showNotifyAccountCtrlNoAmount(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}

/**
 * 显示通知存款单据号选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showNotifyAccountCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方客户编号
{
	//得到帐户标识
	var lAccountID;
	eval("lAccountID="+ strFormName + "."+ strCtrlName + "objAccountID.value");
	if (lAccountID!="null")
	{
		eval("lAccountID=" + strFormName + "." + lAccountID + ".value");
	}
	else
		lAccountID=-1;

	var strNotifyAccountCode;
	eval("strNotifyAccountCode=" + strFormName + "." + strCtrlName + "Ctrl.value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&lAccountID=" + lAccountID+ "&lCurrencyID=" + lCurrencyID + "&strFormName=" + strFormName + "&strNotifyAccountCode=" + strNotifyAccountCode+"&strCtrlName="+strCtrlName + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectNotifyAccount.jsp?"+paraState  , "SelectNotifyAccount" , sFeatures , false );
//	alert("3");
	g_win.focus();
}


/**
 * 是否选择了通知存款单据号控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param lTransactionTypeID 贷款类型标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectNotifyAccount(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showNotifyAccountCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 设置需要输出客户标识的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setNotifyAccountCtrlBalance(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gNotifyAccountCtrlBalance[i][0]!=null)
		{
			if (gNotifyAccountCtrlBalance[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gNotifyAccountCtrlBalance[i][j]==null)
					{
						gNotifyAccountCtrlBalance[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gNotifyAccountCtrlBalance[i][0]=strCtrlName;
			gNotifyAccountCtrlBalance[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 设置需要输出客户标识的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setNotifyAccountCtrlInterestDate(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gNotifyAccountCtrlInterestDate[i][0]!=null)
		{
			if (gNotifyAccountCtrlInterestDate[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gNotifyAccountCtrlInterestDate[i][j]==null)
					{
						gNotifyAccountCtrlInterestDate[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gNotifyAccountCtrlInterestDate[i][0]=strCtrlName;
			gNotifyAccountCtrlInterestDate[i][1]=objCtrl;
			break;
		}

	}

}



/**
 * 输出通知存款单据号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lNotifyAccountID 通知存款单据号标识
 * @param strNotifyAccountNo 通知存款单据号
 */
function outputNotifyAccountCtrl(strFormName,strCtrlName,lNotifyAccountID,strNotifyAccountCode,strInterestDate,dBalance)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lNotifyAccountID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strNotifyAccountCode +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strNotifyAccountCode +"'");


	for(i=0;i<ARRAYNUM;i++)
	{
		if(gNotifyAccountCtrlInterestDate[i][0]!=null)
		{
			if (gNotifyAccountCtrlInterestDate[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gNotifyAccountCtrlInterestDate[i][j]!=null)
					{
						eval(strFormName + "." + gNotifyAccountCtrlInterestDate[i][j]+".value='"+ strInterestDate + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gNotifyAccountCtrlBalance[i][0]!=null)
		{
			if (gNotifyAccountCtrlBalance[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gNotifyAccountCtrlBalance[i][j]!=null)
					{
						eval(strFormName + "." + gNotifyAccountCtrlBalance[i][j]+".value='"+ dBalance + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	


}

/**
 * 功能块（通知存款单据号控件）注释结束。
 */



/**
 * 功能块（非中油客户开户行控件）注释开始：
 *
 */

/**
 * 创建非中油客户开户行控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strOutOfCPFBank 非中油客户开户行
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createOutOfCPFBankCtrl(strFormName,strCtrlName,strOutOfCPFBank,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:if ("+strFormName+"."+strCtrlName+".disabled == false ) {showOutOfCPFBankCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ "</td>"
				+ "<td " + strSecondTD + " ><textarea  class=box name='" + strCtrlName + "' rows=2 cols=30 onkeydown='javascript:isSelectOutOfCPFBank(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"+strOutOfCPFBank+"</textarea>"
				+ " </td>");
}


/**
 * 显示非中油客户开户行窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showOutOfCPFBankCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strOutOfCPFBank=eval(strFormName + "." + strCtrlName + ".value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strOutOfCPFBank="+strOutOfCPFBank +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectOutOfCPFBank.jsp?"+paraState  , "SelectOutOfCPFBank" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示非中油客户开户行窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectOutOfCPFBank(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showOutOfCPFBankCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * 输出非中油客户开户行控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strOutOfCPFBank 开户行名称
 */
function outputOutOfCPFBankCtrl(strFormName,strCtrlName,strOutOfCPFBank)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strOutOfCPFBank+ "'");

}

/**
 * 功能块（非中油客户开户行控件）注释结束。
 */



/**
 * 功能块（多维码控件）注释开始：
 * forest
 */

/**
 * 创建多维码控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strMultiCode 多维码 代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createMultiCodeCtrl(strFormName,strCtrlName,strMultiCode,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:if ("+strFormName+"."+strCtrlName+".disabled == false ) {showMultiCodeCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  <input type='hidden' name='"+strCtrlName+"' value='"+strMultiCode+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input  class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strMultiCode + "' onkeydown='javascript:isSelectMultiCode(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示多维码窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showMultiCodeCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strMultiCode=eval(strFormName + "." + strCtrlName + ".value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strMultiCode="+strMultiCode +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectMultiDimensionCode.jsp?"+paraState  , "SelectMultiDimensionCode" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示多维码窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectMultiCode(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showMultiCodeCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
		else
		{
			eval (strFormName +"."+ strCtrlName + ".value = ''");
		}
	}
}


/**
 * 输出多维码控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strMultiCode 开户行名称
 */
function outputMultiCodeCtrl(strFormName,strCtrlName,strMultiCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strMultiCode+ "'");
	eval(strFormName + "." + strCtrlName + "Ctrl.value='" + strMultiCode+ "'");
}

/**
 * 功能块（多维码控件控件）注释结束。
 */





/**
 * 功能块（非中油客户帐户控件）注释开始：
 *
 */

/**
 * 创建非中油客户帐户控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strOutOfCPFAccount 非中油客户帐户
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createOutOfCPFAccountCtrl(strFormName,strCtrlName,strOutOfCPFAccount,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:if ("+strFormName+"."+strCtrlName+".disabled == false) {showOutOfCPFAccountCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ "</td>"
				+ "<td " + strSecondTD + " ><input  class=box    type='text' name='" + strCtrlName + "' value='" + strOutOfCPFAccount + "' onkeydown='javascript:isSelectOutOfCPFAccount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示非中油客户帐户窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showOutOfCPFAccountCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strOutOfCPFAccount=eval(strFormName+"." + strCtrlName + ".value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strOutOfCPFAccount="+strOutOfCPFAccount+"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectOutOfCPFAccount.jsp?"+paraState  , "SelectOutOfCPFAccount" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示非中油客户帐户窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectOutOfCPFAccount(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showOutOfCPFAccountCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * 设置需要输出客户名称的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setOutOfCPFAccountClientName(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gOutOfCPFAccountClientName[i][0]!=null)
		{
			if (gOutOfCPFAccountClientName[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gOutOfCPFAccountClientName[i][j]==null)
					{
						gOutOfCPFAccountClientName[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gOutOfCPFAccountClientName[i][0]=strCtrlName;
			gOutOfCPFAccountClientName[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 设置需要输出省的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setOutOfCPFAccountProvince(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gOutOfCPFAccountProvince[i][0]!=null)
		{
			if (gOutOfCPFAccountProvince[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gOutOfCPFAccountProvince[i][j]==null)
					{
						gOutOfCPFAccountProvince[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gOutOfCPFAccountProvince[i][0]=strCtrlName;
			gOutOfCPFAccountProvince[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 设置需要输出城市的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setOutOfCPFAccountCity(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gOutOfCPFAccountCity[i][0]!=null)
		{
			if (gOutOfCPFAccountCity[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gOutOfCPFAccountCity[i][j]==null)
					{
						gOutOfCPFAccountCity[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gOutOfCPFAccountCity[i][0]=strCtrlName;
			gOutOfCPFAccountCity[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 设置需要输出银行的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setOutOfCPFAccountBank(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gOutOfCPFAccountBank[i][0]!=null)
		{
			if (gOutOfCPFAccountBank[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gOutOfCPFAccountBank[i][j]==null)
					{
						gOutOfCPFAccountBank[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gOutOfCPFAccountBank[i][0]=strCtrlName;
			gOutOfCPFAccountBank[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 输出非中油客户帐户控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strAccount 帐户名称
 * @param strClientName 客户名称
 * @param strProvince 省
 * @param strCity 城市
 * @param strBank 银行
 */
function outputOutOfCPFAccountCtrl(strFormName,strCtrlName,strAccount,strClientName,strProvince,strCity,strBank)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;

	//输出客户名称
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gOutOfCPFAccountClientName[i][0]!=null)
		{
			if (gOutOfCPFAccountClientName[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gOutOfCPFAccountClientName[i][j]!=null)
					{

						eval(strFormName + "." + gOutOfCPFAccountClientName[i][j]+".value='"+ strClientName + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

	//输出省
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gOutOfCPFAccountProvince[i][0]!=null)
		{
			if (gOutOfCPFAccountProvince[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gOutOfCPFAccountProvince[i][j]!=null)
					{

						eval(strFormName + "." + gOutOfCPFAccountProvince[i][j]+".value='"+ strProvince + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	//输出城市
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gOutOfCPFAccountCity[i][0]!=null)
		{
			if (gOutOfCPFAccountCity[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gOutOfCPFAccountCity[i][j]!=null)
					{

						eval(strFormName + "." + gOutOfCPFAccountCity[i][j]+".value='"+ strCity + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	//输出银行
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gOutOfCPFAccountBank[i][0]!=null)
		{
			if (gOutOfCPFAccountBank[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gOutOfCPFAccountBank[i][j]!=null)
					{

						eval(strFormName + "." + gOutOfCPFAccountBank[i][j]+".value='"+ strBank + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}


	eval(strFormName + "." + strCtrlName + ".value='" + strAccount+ "'");

}

/**
 * 功能块（非中油客户帐户控件）注释结束。
 */



/**
 * 功能块（金额控件）注释开始。
 */

/**
 * 创建金额控件
 * @param strFormName
 * @param strCtrlName 控件名称
 * @param strData 数据
 * @param strNextCtrlName 下一个控件
 * @param strChineseCtrl 中文控件
 * @param nCurrencyID 币种
 */
 function createAmountCtrl(strFormName,strCtrlName,strData,strNextCtrlName,strChineseCtrl,nCurrencyID)
 {
	createAmountCtrl(strFormName,strCtrlName,strData,strNextCtrlName,strChineseCtrl,nCurrencyID,"");
 }

/**
 * 创建金额控件
 * @param strFormName
 * @param strCtrlName 控件名称
 * @param strData 数据
 * @param strNextCtrlName 下一个控件
 * @param strChineseCtrl 中文控件
 * @param nCurrencyID 币种
 */
 function createAmountCtrl(strFormName,strCtrlName,strData,strNextCtrlName,strChineseCtrl,nCurrencyID,sProperty)
 {
// 	alert("n c=" + nCurrencyID);
 	if(isNaN(nCurrencyID)) 
 	{
 		nCurrencyID=1;//缺省人民币
 	}
 	
 		if(strChineseCtrl==null)
 		{
 			strChineseCtrl="";
 		}
 		document.writeln(" <input class=tar   type='text' name='"+ strCtrlName + "' value='" + formatAmount( strData ,nCurrencyID ) +"' size='18' maxlength='15' onblur='adjustAmount(\"" + strFormName +"\",\"" + strCtrlName +"\",1,\"" + strChineseCtrl +"\"," + nCurrencyID+")'  onfocus='adjustAmount(\"" + strFormName +"\",\"" + strCtrlName +"\",2,\"" + strChineseCtrl +"\"," + nCurrencyID + ")' " + sProperty + "> <input type='hidden' name='" + strCtrlName + "NextCtrlName' value='" + strNextCtrlName + "'>");
 }

 /**
 * 创建金额控件
 * @param strFormName
 * @param strCtrlName 控件名称
 * @param strData 数据
 * @param strNextCtrlName 下一个控件
 * @param strChineseCtrl 中文控件
 * @param nCurrencyID 币种
 */
 function createAmountCtrl1(strFormName,strCtrlName,strData,strNextCtrlName,strChineseCtrl,nCurrencyID)
 {
// 	alert("n c=" + nCurrencyID);
 	if(isNaN(nCurrencyID)) 
 	{
 		nCurrencyID=1;//缺省人民币
 	}
 	
 		if(strChineseCtrl==null)
 		{
 			strChineseCtrl="";
 		}
 		document.writeln(" <input class=tar   type='text' name='"+ strCtrlName + "' value='" + formatAmount1( strData ,nCurrencyID ) +"' size='18' maxlength='15' onblur='adjustAmount1(\"" + strFormName +"\",\"" + strCtrlName +"\",1,\"" + strChineseCtrl +"\"," + nCurrencyID+")'  onfocus='adjustAmount(\"" + strFormName +"\",\"" + strCtrlName +"\",2,\"" + strChineseCtrl +"\"," + nCurrencyID + ")'> <input type='hidden' name='" + strCtrlName + "NextCtrlName' value='" + strNextCtrlName + "'>");
 }
 
 
/**
 * 设置需要输出
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setAmount(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gAmount[i][0]!=null)
		{
			if (gAmount[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gAmount[i][j]==null)
					{
						gAmount[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gAmount[i][0]=strCtrlName;
			gAmount[i][1]=objCtrl;
			break;
		}

	}

}
 

/**
 * 格式化金额
 * @param strData 需要格式化的数据
 * @return 返回格式化的金额
 */
 function formatAmount(strData)
 {
 	if(isInnerFloat(strData))
 	{
 		if(strData!="")
 		{
			var i,strTemp;

			//去掉所有的","
			strTemp=new String(strData);
			strData="";
			for(i=0;i<strTemp.length;i++)
			{
				var cData;
				cData=strTemp.charAt(i);
				if (cData!=",")
				{
					strData=strData+cData;
				}
			}

			//将小数点前和后的数据分别取出来
	 		var nPoint;
	 		nPoint=strData.indexOf(".");
	 		var strFront=strData,strEnd="";
	 		if(nPoint!=-1)
	 		{
	 			strFront=strData.substring(0,nPoint);
	 			strEnd=strData.substring(nPoint+1,strData.length);
	 		}

			//小数点前面的数据加","
			strTemp=new String(strFront);
			var bHaveMinus=false;
			if(strFront.substring(0,1)=="-")
			{
				bHaveMinus=true;
				strTemp=strTemp.substring(1,strTemp.length);
			}
			strFront="";
			var nNum;
			nNum=0;
			for(i=strTemp.length-1;i>=0;i--)
			{
				if(nNum==3)
				{
					strFront=","+strFront ;
					nNum=0;
				}
				nNum++;
				var cData;
				cData=strTemp.charAt(i);
				strFront=cData+strFront;
			}
			if(bHaveMinus)
			{
				strFront="-" + strFront;
			}
			
			//补或者截小数点后面的值，保持两位
	 		if(strEnd.length>2)
	 		{
	 			strEnd=strEnd.substring(0,2);
	 		}
	 		else
	 		{
	 			if(strEnd.length==1)
	 			{
	 				strEnd=strEnd+ "0";
	 			}
	 			else
	 			{
	 				if(strEnd.length==0)
	 				{
	 					strEnd="00";
	 				}
	 			}
	 		}
	 		strData=strFront+"." + strEnd;
 		}
	}
 	return strData;
 }

/**
 * 格式化金额
 * @param strData 需要格式化的数据
 * @return 返回格式化的金额
 */
 function formatAmount1(strData)
 {
 	if(isInnerFloat(strData))
 	{
 		if(strData!="")
 		{
			var i,strTemp;

			//去掉所有的","
			strTemp=new String(strData);
			strData="";
			for(i=0;i<strTemp.length;i++)
			{
				var cData;
				cData=strTemp.charAt(i);
				if (cData!=",")
				{
					strData=strData+cData;
				}
			}

			//将小数点前和后的数据分别取出来
	 		var nPoint;
	 		nPoint=strData.indexOf(".");
	 		var strFront=strData,strEnd="";
	 		if(nPoint!=-1)
	 		{
	 			strFront=strData.substring(0,nPoint);
	 			strEnd=strData.substring(nPoint+1,strData.length);
	 		}

			//小数点前面的数据加","
			strTemp=new String(strFront);
			var bHaveMinus=false;
			if(strFront.substring(0,1)=="-")
			{
				bHaveMinus=true;
				strTemp=strTemp.substring(1,strTemp.length);
			}
			strFront="";
			var nNum;
			nNum=0;
			for(i=strTemp.length-1;i>=0;i--)
			{
				if(nNum==3)
				{
					strFront=","+strFront ;
					nNum=0;
				}
				nNum++;
				var cData;
				cData=strTemp.charAt(i);
				strFront=cData+strFront;
			}
			if(bHaveMinus)
			{
				strFront="-" + strFront;
			}
			
			//补或者截小数点后面的值，保持两位
	 		if(strEnd.length>8)
	 		{
	 			strEnd=strEnd.substring(0,8);
	 		}
	 		else if(strEnd.length == 0)
	 		{
	 			strEnd="00";
				/*
				if(strEnd.length==1)
	 			{
	 				strEnd=strEnd+ "0";
	 			}
	 			else
	 			{
	 				if(strEnd.length==0)
	 				{
	 					strEnd="00";
	 				}
	 			}
				*/
	 		}
	 		strData=strFront+"." + strEnd;
 		}
	}
 	return strData;
 }
 
/**
 * 格式化利率
 * @param strData 需要格式化的数据
 * @return 返回格式化的金额
 */
 function formatInterestRate(strData)
 {
 	if(isInnerFloat(strData))
 	{
 		if(strData!="")
 		{
			var i,strTemp;

			//去掉所有的","
			strTemp=new String(strData);
			strData="";
			for(i=0;i<strTemp.length;i++)
			{
				var cData;
				cData=strTemp.charAt(i);
				if (cData!=",")
				{
					strData=strData+cData;
				}
			}

			//将小数点前和后的数据分别取出来
	 		var nPoint;
	 		nPoint=strData.indexOf(".");
	 		var strFront=strData,strEnd="";
	 		if(nPoint!=-1)
	 		{
	 			strFront=strData.substring(0,nPoint);
	 			strEnd=strData.substring(nPoint+1,strData.length);
	 		}

			//小数点前面的数据加","
			strTemp=new String(strFront);
			var bHaveMinus=false;
			if(strFront.substring(0,1)=="-")
			{
				bHaveMinus=true;
				strTemp=strTemp.substring(1,strTemp.length);
			}
			strFront="";
			var nNum;
			nNum=0;
			for(i=strTemp.length-1;i>=0;i--)
			{
				if(nNum==3)
				{
					strFront=","+strFront ;
					nNum=0;
				}
				nNum++;
				var cData;
				cData=strTemp.charAt(i);
				strFront=cData+strFront;
			}
			if(bHaveMinus)
			{
				strFront="-" + strFront;
			}
			
			//alert(strEnd);
			//补或者截小数点后面的值，保持6位
	 		if(strEnd.length>6)
	 		{
	 			strEnd=strEnd.substring(0,6);
	 		}
	 		else
	 		{
	 			if(strEnd.length==5)
	 			{
	 				strEnd=strEnd+ "0";
	 			}
	 			else if(strEnd.length==4)
	 			{
 					strEnd=strEnd+"00";
	 			}
	 			else if(strEnd.length==3)
	 			{
 					strEnd=strEnd+"000";
	 			}
	 			else if(strEnd.length==2)
	 			{
 					strEnd=strEnd+"0000";
	 			}
	 			else if(strEnd.length==1)
	 			{
 					strEnd=strEnd+"00000";
	 			}
	 			else if(strEnd.length==0)
	 			{
 					strEnd="000000";
	 			}																
	 		}
	 		strData=strFront+"." + strEnd;
 		}
	}
 	return strData;
 }

/**
 * 反向格式化金额
 * @param strData 需要格式化的数据
 * @return 返回反格式化的金额
 */
 function reverseFormatAmount(strData)
 {
		var i,strTemp;

		//去掉所有的","
		strTemp=new String(strData);
		strData="";
		for(i=0;i<strTemp.length;i++)
		{
			var cData;
			cData=strTemp.charAt(i);
			if (cData!=",")
			{
				strData=strData+cData;
			}
		}
		return strData;
 }

//是否是float型
function isInnerFloat( d_float)
{
	if(isNaN(parseFloat(d_float)))
	  return false;
	else
	  return true;
}

/**
 * 调整金额
 * @param strFormName
 * @param strCtrlName 控件名称
 * @param nType 类型1,format;2,reverseFormat
 */
 function adjustAmount(strFormName,strCtrlName,nType,strChineseCtrl,nCurrencyID)
 {
	if (window.event.keyCode!=13)//
	{
	 	var strOldData=eval(strFormName+"."+strCtrlName+".value");
	 	if(nType==2)
	 	{
	 			eval("nextfield=" + strFormName + "." + strCtrlName + "NextCtrlName.value");
		}
	 	if(nType==1)
	 	{
	 		  //alert(ARRAYNUM);
			      	for(i=0;i<ARRAYNUM;i++)
			      	{
			      		if (gAmount[i][0]!=null)
			      		{
			      			if(gAmount[i][0]==strCtrlName)
			      			{
			      				for(j=1;j<ARRAYNUM;j++)
			      				{
			      					if (gAmount[i][j]!=null)
			      					{
			//	 		  alert(ARRAYNUM + "-----------" + gAmount[i][j]);
			      						eval(strFormName+ "." + gAmount[i][j]+".value=''");
			      					}
			      					else
			      						break;
			      				}
			      			}
			      		}
			      		else
			      			break;
			      	}
		}
	 	if (isInnerFloat(strOldData))//是否是浮点数
	 	{
	 		var strNewData="";
	 		if(nType==2)//说明是离开
	 		{
 		  		strNewData=reverseFormatAmount(strOldData);
			}
			else
			{
    	 			if (strOldData=="0.00" )
    	 			{
    	 		  		strNewData = "";
    	 			}
    	 			else
    	 			{
					strNewData=formatAmount(strOldData);
				}
				if(strChineseCtrl!="")
				{
					eval(strFormName + "." + strChineseCtrl + ".value='" + showChinese(strOldData,nCurrencyID) +"'");
				}
			}
			/*
			* 2004/4/23，Forest将注释去掉，原因是如果注释，那么在金额控件失去焦点后，‘0.00’会变为‘’
			*/
			if(strNewData=="")//
			{
				strNewData="0.00";
			}
			//alert(" ");
			eval(strFormName + "." +strCtrlName + ".value='"+strNewData+"'");
			if(nType==2)
			{
				eval(strFormName + "." +strCtrlName + ".select()");
				
			}
	 	}
	 	else
	 	{
			if(nType==2)
			{
				eval(strFormName + "." +strCtrlName + ".value='0.00'");
				eval(strFormName + "." +strCtrlName + ".select()");
				
			}
	 		if(strChineseCtrl!="")
	 		{
	 				eval(strFormName + "." + strChineseCtrl + ".value=''");
	 		}
	 	}
	 }
 }

 /**
 * 调整利率
 * @param strFormName
 * @param strCtrlName 控件名称
 * @param nType 类型1,format;2,reverseFormat
 */
 function adjustInterestRate(strFormName,strCtrlName,nType,strChineseCtrl,nCurrencyID,sNextCtrlName)
 {
	if (window.event.keyCode!=13)//
	{
	 	var strOldData=eval(strFormName+"."+strCtrlName+".value");
	 	if(nType==2)
	 	{
	 			eval("nextfield='"+sNextCtrlName+"'");
		}
	 	if(nType==1)
	 	{
	 		  //alert(ARRAYNUM);
			      	for(i=0;i<ARRAYNUM;i++)
			      	{
			      		if (gAmount[i][0]!=null)
			      		{
			      			if(gAmount[i][0]==strCtrlName)
			      			{
			      				for(j=1;j<ARRAYNUM;j++)
			      				{
			      					if (gAmount[i][j]!=null)
			      					{
			//	 		  alert(ARRAYNUM + "-----------" + gAmount[i][j]);
			      						eval(strFormName+ "." + gAmount[i][j]+".value=''");
			      					}
			      					else
			      						break;
			      				}
			      			}
			      		}
			      		else
			      			break;
			      	}
		}
	 	if (isInnerFloat(strOldData))//是否是浮点数
	 	{
	 		var strNewData="";
	 		if(nType==2)//说明是离开
	 		{
 		  		strNewData=reverseFormatAmount(strOldData);
			}
			else
			{
    	 			if (strOldData=="0.000000" )
    	 			{
    	 		  		strNewData = "";
    	 			}
    	 			else
    	 			{
						strNewData=formatInterestRate(strOldData);
					}
				if(strChineseCtrl!="")
				{
					eval(strFormName + "." + strChineseCtrl + ".value='" + showChinese(strOldData,nCurrencyID) +"'");
				}
			}
			/*
			if((nType==2) && (strNewData==""))//
			{
				strNewData="0.00";
			}
			*/
			eval(strFormName + "." +strCtrlName + ".value='"+strNewData+"'");
			if(nType==2)
			{
				eval(strFormName + "." +strCtrlName + ".select()");
				
			}
	 	}
	 	else
	 	{
			if(nType==2)
			{
				eval(strFormName + "." +strCtrlName + ".value='0.000000'");
				eval(strFormName + "." +strCtrlName + ".select()");
				
			}
	 		if(strChineseCtrl!="")
	 		{
	 				eval(strFormName + "." + strChineseCtrl + ".value=''");
	 		}
	 	}
	 }
 }

 
 /**
 * 调整金额
 * @param strFormName
 * @param strCtrlName 控件名称
 * @param nType 类型1,format;2,reverseFormat
 */
 function adjustAmount1(strFormName,strCtrlName,nType,strChineseCtrl,nCurrencyID)
 {
	if (window.event.keyCode!=13)//
	{
	 	var strOldData=eval(strFormName+"."+strCtrlName+".value");
	 	if(nType==2)
	 	{
	 			eval("nextfield=" + strFormName + "." + strCtrlName + "NextCtrlName.value");
		}
	 	if(nType==1)
	 	{
	 		  //alert(ARRAYNUM);
			      	for(i=0;i<ARRAYNUM;i++)
			      	{
			      		if (gAmount[i][0]!=null)
			      		{
			      			if(gAmount[i][0]==strCtrlName)
			      			{
			      				for(j=1;j<ARRAYNUM;j++)
			      				{
			      					if (gAmount[i][j]!=null)
			      					{
			//	 		  alert(ARRAYNUM + "-----------" + gAmount[i][j]);
			      						eval(strFormName+ "." + gAmount[i][j]+".value=''");
			      					}
			      					else
			      						break;
			      				}
			      			}
			      		}
			      		else
			      			break;
			      	}
		}
	 	if (isInnerFloat(strOldData))//是否是浮点数
	 	{
	 		var strNewData="";
	 		if(nType==2)//说明是离开
	 		{
 		  		strNewData=reverseFormatAmount(strOldData);
			}
			else
			{
    	 			if (strOldData=="0.00" )
    	 			{
    	 		  		strNewData = "";
    	 			}
    	 			else
    	 			{
					strNewData=formatAmount1(strOldData);
				}
				if(strChineseCtrl!="")
				{
					eval(strFormName + "." + strChineseCtrl + ".value='" + showChinese(strOldData,nCurrencyID) +"'");
				}
			}
			/*
			if((nType==2) && (strNewData==""))//
			{
				strNewData="0.00";
			}
			*/
			eval(strFormName + "." +strCtrlName + ".value='"+strNewData+"'");
			if(nType==2)
			{
				eval(strFormName + "." +strCtrlName + ".select()");
				
			}
	 	}
	 	else
	 	{
			if(nType==2)
			{
				eval(strFormName + "." +strCtrlName + ".value='0.00'");
				eval(strFormName + "." +strCtrlName + ".select()");
				
			}
	 		if(strChineseCtrl!="")
	 		{
	 				eval(strFormName + "." + strChineseCtrl + ".value=''");
	 		}
	 	}
	 }
 }

/**
 * 功能块（金额控件）注释结束。
 */



/**
 * 功能块（申请书控件）注释开始：
 *
 */



/**
 * 创建申请书控件
 * @param strFormName 控件所在form的名称
 * @param lLoanInfoID 申请书标识
 * @param strLoanInfoNo 申请书编号
 * @param lLoanTypeID 贷款申请类型标识
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createLoanInfoCtrl(strFormName,strCtrlName,lLoanInfoID,strLoanInfoNo,lLoanTypeID,lOfficeID,lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showLoanInfoCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLoanInfoID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strLoanInfoNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strLoanInfoNo + "' onkeydown='javascript:isSelectLoanInfo(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * 显示申请书选择框
 * @param strFormName
 * @param strCtrlName
 */
function showLoanInfoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)//收款方申请书编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strLoanInfoNo;
	eval("strLoanInfoNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strLoanInfoNo=" + strLoanInfoNo + "&lLoanTypeID=" + lLoanTypeID+ "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectLoanInfo.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了申请书控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectLoanInfo(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showLoanInfoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出申请书控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lLoanInfoID 申请书标识
 * @param strLoanInfoName 申请书名称
 * @param strLoanInfoNo 申请书编号
 * @param strAccountID 一个申请书所有的帐户
 */
function outputLoanInfoCtrl(strFormName,strCtrlName,lLoanInfoID,strLoanInfoNo)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lLoanInfoID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strLoanInfoNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strLoanInfoNo +"'");

}

/**
 * 功能块（申请书控件）注释结束。
 */


/**
 * 功能块（申请书控件--报表和查询专用）注释开始：
 *
 */



/**
 * 创建申请书控件
 * @param strFormName 控件所在form的名称
 * @param lLoanInfoID 申请书标识
 * @param strLoanInfoNo 申请书编号
 * @param objTypeID 贷款申请类型选择框的名称
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createLoanInfoCtrl1(strFormName,strCtrlName,lLoanInfoID,strLoanInfoNo,objTypeID,lOfficeID,lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showLoanInfoCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLoanInfoID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strLoanInfoNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objTypeID' value='" + objTypeID + "'>"
				+ " <input type='hidden' name='" + strCtrlName + "Type' value=''>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strLoanInfoNo + "' onkeydown='javascript:isSelectLoanInfo1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * 显示申请书选择框
 * @param strFormName
 * @param strCtrlName
 */
function showLoanInfoCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方申请书编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strLoanInfoNo;
	//得到贷款类型标识
	var lLoanTypeID;
	eval("lLoanTypeID="+ strFormName + "."+ strCtrlName + "objTypeID.value");
	if (lLoanTypeID!="null")
	{
		eval("lLoanTypeID=" + strFormName + "." + lLoanTypeID + ".value");
	}
	else
		lLoanTypeID="";
	eval("strLoanInfoNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strLoanInfoNo=" + strLoanInfoNo + "&lLoanTypeID=" + lLoanTypeID+ "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectLoanInfo1.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了申请书控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectLoanInfo1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showLoanInfoCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
			eval(strFormName+ "." + strCtrlName + "Type.value=''");
		}
	}
}


/**
 * 输出申请书控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lLoanInfoID 申请书标识
 * @param strLoanInfoName 申请书名称
 * @param strLoanInfoNo 申请书编号
 * @param strAccountID 一个申请书所有的帐户
 */
function outputLoanInfoCtrl1(strFormName,strCtrlName,lLoanInfoID,strLoanInfoNo,lLoanTypeID)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lLoanInfoID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strLoanInfoNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strLoanInfoNo +"'");
	eval(strFormName + "." + strCtrlName +  "Type"+".value='" + lLoanTypeID +"'");

}

/**
 * 功能块（申请书控件）注释结束。
 */



/**
 * 功能块（合同控件）注释开始：
 *
 */



/**
 * 创建合同控件(信贷)
 * @param strFormName 控件所在form的名称
 * @param lContractInfoID 合同标识
 * @param strContractInfoNo 合同编号
 * @param lLoanTypeID 贷款申请类型标识
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param objClientID 客户对象
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createContractInfoCtrl(strFormName,strCtrlName,lContractInfoID,strContractInfoNo,lLoanTypeID,lOfficeID,lCurrencyID,strTitle,objClientID,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showContractInfoCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lContractInfoID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strContractInfoNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strContractInfoNo + "' onkeydown='javascript:isSelectContractInfo(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * 显示合同选择框
 * @param strFormName
 * @param strCtrlName
 */
function showContractInfoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)//收款方合同编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strContractInfoNo;

	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";

	eval("strContractInfoNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strContractInfoNo=" + strContractInfoNo + "&lLoanTypeID=" + lLoanTypeID+ "&lClientID=" + lClientID+ "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectContractInfo.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了合同控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectContractInfo(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showContractInfoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出合同控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lContractInfoID 合同标识
 * @param strContractInfoName 合同名称
 * @param strContractInfoNo 合同编号
 * @param strAccountID 一个合同所有的帐户
 */
function outputContractInfoCtrl(strFormName,strCtrlName,lContractInfoID,strContractInfoNo)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lContractInfoID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strContractInfoNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strContractInfoNo +"'");

}

/**
 * 功能块（合同控件）注释结束。
 */




/**
 * 功能块（合同控件）注释开始：
 *
 */



/**
 * 创建合同控件(信贷 带状态)
 * @param strFormName 控件所在form的名称
 * @param lContractInfoID 合同标识
 * @param strContractInfoNo 合同编号
 * @param lLoanTypeID 贷款申请类型标识
 * @param lOfficeID 办事处标识
 * @param lStatusID 状态标识（1：执行中或以展期; 2: 已复核并且未到期;3:未执行；4:可以放款；5:未执行或执行中或已展期）
 * @param strTitle 控件标题名称
 * @param objClientID 客户对象
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createContractInfoCtrl1(strFormName,strCtrlName,lContractInfoID,strContractInfoNo,lLoanTypeID,lOfficeID,lCurrencyID,lStatusID,strTitle,objClientID,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showContractInfoCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""+ lStatusID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lContractInfoID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strContractInfoNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strContractInfoNo + "' onkeydown='javascript:isSelectContractInfo1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""  + lStatusID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * 显示合同选择框
 * @param strFormName
 * @param strCtrlName
 */
function showContractInfoCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)//收款方合同编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strContractInfoNo;

	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";

	eval("strContractInfoNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strContractInfoNo=" + strContractInfoNo + "&lLoanTypeID=" + lLoanTypeID + "&lStatusID=" + lStatusID + "&lClientID=" + lClientID+ "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectContractInfo1.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了合同控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectContractInfo1(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showContractInfoCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出合同控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lContractInfoID 合同标识
 * @param strContractInfoName 合同名称
 * @param strContractInfoNo 合同编号
 * @param strAccountID 一个合同所有的帐户
 */
function outputContractInfoCtrl1(strFormName,strCtrlName,lContractInfoID,strContractInfoNo)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lContractInfoID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strContractInfoNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strContractInfoNo +"'");

}

/**
 * 功能块（合同控件）注释结束。
 */


/**
 * 功能块（合同控件）注释开始：
 *
 */



/**
 * 创建合同控件(信贷 报表及查询用)
 * @param strFormName 控件所在form的名称
 * @param lContractInfoID 合同标识
 * @param strContractInfoNo 合同编号
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param objClientID 客户对象
 * @param objTypeID  贷款类型对象
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createContractInfoCtrl2(strFormName,strCtrlName,lContractInfoID,strContractInfoNo,lOfficeID,lCurrencyID,strTitle,objClientID,objTypeID,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showContractInfoCtrl2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lContractInfoID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strContractInfoNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ " <input type='hidden' name='" + strCtrlName + "objTypeID' value='" + objTypeID + "'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='' ID='"+strCtrlName+ "Type' NAME='"+strCtrlName+"Type'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strContractInfoNo + "' onkeydown='javascript:isSelectContractInfo2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * 显示合同选择框
 * @param strFormName
 * @param strCtrlName
 */
function showContractInfoCtrl2(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方合同编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strContractInfoNo;

	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";
	//得到贷款类型标识
	var lTypeID;
	eval("lTypeID="+ strFormName + "."+ strCtrlName + "objTypeID.value");
	if (lTypeID!="null")
	{
		eval("lTypeID=" + strFormName + "." + lTypeID + ".value");
	}
	else
		lTypeID="";

	eval("strContractInfoNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strContractInfoNo=" + strContractInfoNo + "&lTypeID=" + lTypeID+ "&lClientID=" + lClientID+ "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectContractInfo2.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了合同控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectContractInfo2(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showContractInfoCtrl2(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
			eval(strFormName+ "." + strCtrlName + "Type.value=''");
		}
	}
}


/**
 * 输出合同控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lContractInfoID 合同标识
 * @param strContractInfoName 合同名称
 * @param strContractInfoNo 合同编号
 * @param lLoanOrDiscount 贴现or信贷 （1--信贷  2--贴现）
 */
function outputContractInfoCtrl2(strFormName,strCtrlName,lContractInfoID,strContractInfoNo,lLoanOrDiscount)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lContractInfoID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strContractInfoNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strContractInfoNo +"'");
	eval(strFormName + "." + strCtrlName +  "Type"+".value=" + lLoanOrDiscount);

}

/**
 * 功能块（合同控件）注释结束。
 */

/**
 * 功能块（合同控件）注释开始（展期用，可根据贷款类型动态显示客户号）：
 */

/**
 * 创建合同控件(信贷 带状态)
 * @param strFormName 控件所在form的名称
 * @param lContractInfoID 合同标识
 * @param strContractInfoNo 合同编号
 * @param lOfficeID 办事处标识
 * @param lStatusID 状态标识（1：执行中或以展期; 2: 已复核并且未到期;3:未执行；4:可以放款）
 * @param strTitle 控件标题名称
 * @param objClientID 客户对象
 * @param objTypeID 贷款申请类型标识对象 (20--一般信贷  30--股份信贷)
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createContractInfoCtrl3(strFormName,strCtrlName,lContractInfoID,strContractInfoNo,lOfficeID,lCurrencyID,lStatusID,strTitle,objClientID,objTypeID,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showContractInfoCtrl3(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\""+ lStatusID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lContractInfoID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strContractInfoNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ " <input type='hidden' name='" + strCtrlName + "objTypeID' value='" + objTypeID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strContractInfoNo + "' onkeydown='javascript:isSelectContractInfo3(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lStatusID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * 显示合同选择框
 * @param strFormName
 * @param strCtrlName
 */
function showContractInfoCtrl3(strFormName,strCtrlName,lOfficeID,lCurrencyID,lStatusID,strNextCtrlName)//收款方合同编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strContractInfoNo;

	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";
	//得到贷款类型标识
	var lTypeID;
	eval("lTypeID="+ strFormName + "."+ strCtrlName + "objTypeID.value");
	if (lTypeID!="null")
	{
		eval("lTypeID=" + strFormName + "." + lTypeID + ".value");
	}
	else
		lTypeID="";

	eval("strContractInfoNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strContractInfoNo=" + strContractInfoNo + "&lTypeID=" + lTypeID + "&lStatusID=" + lStatusID + "&lClientID=" + lClientID+ "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectContractInfo3.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了合同控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectContractInfo3(strFormName,strCtrlName,lOfficeID,lCurrencyID,lStatusID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showContractInfoCtrl3(strFormName,strCtrlName,lOfficeID,lCurrencyID,lStatusID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出合同控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lContractInfoID 合同标识
 * @param strContractInfoName 合同名称
 * @param strContractInfoNo 合同编号
 * @param strAccountID 一个合同所有的帐户
 */
function outputContractInfoCtrl3(strFormName,strCtrlName,lContractInfoID,strContractInfoNo)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lContractInfoID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strContractInfoNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strContractInfoNo +"'");

}

/**
 * 功能块（合同控件）注释结束。
 */





/**
 * 功能块（委托合同控件）注释开始：
 *
 */



/**
 * 创建委托合同控件
 * @param strFormName 控件所在form的名称
 * @param lConsignContractID 委托合同标识
 * @param strConsignContractNo 委托合同编号
 * @param lLoanTypeID 贷款申请类型标识
 * @param lOfficeID 办事处标识
 * @param objClientID 客户对象
 * @param strTitle 控件标题名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createConsignContractCtrl(strFormName,strCtrlName,lConsignContractID,strConsignContractNo,lLoanTypeID,lOfficeID,lCurrencyID,objClientID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showConsignContractCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lConsignContractID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strConsignContractNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
			  + "<input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strConsignContractNo + "' onkeydown='javascript:isSelectConsignContract(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * 显示委托合同选择框
 * @param strFormName
 * @param strCtrlName
 */
function showConsignContractCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)//收款方委托合同编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strConsignContractNo;
	
	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";

	eval("strConsignContractNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strConsignContractNo=" + strConsignContractNo + "&lClientID=" + lClientID + "&lLoanTypeID=" + lLoanTypeID+ "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectConsignContract.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了委托合同控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectConsignContract(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showConsignContractCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出委托合同控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lConsignContractID 委托合同标识
 * @param strConsignContractName 委托合同名称
 * @param strConsignContractNo 委托合同编号
 */
function outputConsignContractCtrl(strFormName,strCtrlName,lConsignContractID,strConsignContractNo)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lConsignContractID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strConsignContractNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strConsignContractNo +"'");

}

/**
 * 功能块（委托合同控件）注释结束。
 */


/**
 * 功能块（委托合同控件 带状态）注释开始：
 *
 */



/**
 * 创建委托合同控件
 * @param strFormName 控件所在form的名称
 * @param lConsignContractID 委托合同标识
 * @param strConsignContractNo 委托合同编号
 * @param lLoanTypeID 贷款申请类型标识
 * @param lOfficeID 办事处标识
 * @param lStatusID 状态 (1:已复核)
 * @param objClientID 客户对象
 * @param strTitle 控件标题名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createConsignContractCtrl1(strFormName,strCtrlName,lConsignContractID,strConsignContractNo,lLoanTypeID,lOfficeID,lCurrencyID,lStatusID,objClientID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showConsignContractCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID  + "\",\"" + lStatusID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lConsignContractID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strConsignContractNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
			  + "<input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strConsignContractNo + "' onkeydown='javascript:isSelectConsignContract1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID  + "\",\"" + lStatusID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * 显示委托合同选择框
 * @param strFormName
 * @param strCtrlName
 */
function showConsignContractCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)//收款方委托合同编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strConsignContractNo;
	
	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";

	eval("strConsignContractNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strConsignContractNo=" + strConsignContractNo + "&lClientID=" + lClientID + "&lLoanTypeID=" + lLoanTypeID + "&lStatusID=" + lStatusID+ "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectConsignContract1.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了委托合同控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectConsignContract1(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showConsignContractCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出委托合同控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lConsignContractID 委托合同标识
 * @param strConsignContractName 委托合同名称
 * @param strConsignContractNo 委托合同编号
 */
function outputConsignContractCtrl1(strFormName,strCtrlName,lConsignContractID,strConsignContractNo)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lConsignContractID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strConsignContractNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strConsignContractNo +"'");

}

/**
 * 功能块（委托合同控件）注释结束。
 */



 /**
 * 功能块（委托合同控件 带状态 包括流动和固定）注释开始：
 *
 */



/**
 * 创建委托合同控件
 * @param strFormName 控件所在form的名称
 * @param lConsignContractID 委托合同标识
 * @param strConsignContractNo 委托合同编号
 * @param lLoanTypeID 贷款申请类型标识
 * @param lOfficeID 办事处标识
 * @param lStatusID 状态 (1:已复核)
 * @param objClientID 客户对象
 * @param strTitle 控件标题名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createConsignContractCtrl2(strFormName,strCtrlName,lConsignContractID,strConsignContractNo,lLoanTypeID,lOfficeID,lCurrencyID,lStatusID,objClientID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showConsignContractCtrl2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID  + "\",\"" + lStatusID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lConsignContractID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strConsignContractNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
			  + "<input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strConsignContractNo + "' onkeydown='javascript:isSelectConsignContract2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID  + "\",\"" + lStatusID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * 显示委托合同选择框
 * @param strFormName
 * @param strCtrlName
 */
function showConsignContractCtrl2(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)//收款方委托合同编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strConsignContractNo;
	
	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";

	eval("strConsignContractNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strConsignContractNo=" + strConsignContractNo + "&lClientID=" + lClientID + "&lLoanTypeID=" + lLoanTypeID + "&lStatusID=" + lStatusID+ "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectConsignContract2.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了委托合同控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectConsignContract2(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showConsignContractCtrl2(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出委托合同控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lConsignContractID 委托合同标识
 * @param strConsignContractName 委托合同名称
 * @param strConsignContractNo 委托合同编号
 */
function outputConsignContractCtrl2(strFormName,strCtrlName,lConsignContractID,strConsignContractNo)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lConsignContractID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strConsignContractNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strConsignContractNo +"'");

}

/**
 * 功能块（委托合同控件）注释结束。
 */





/**
 * 功能块（时间控件）注释开始。
 */

var weekend = [0,6];
var weekendColor = "#e0e0e0";
var fontface = "Verdana";
var fontsize = 2;

var gNow = new Date();
var ggWinCal;
isNav = (navigator.appName.indexOf("Netscape") != -1) ? true : false;
isIE = (navigator.appName.indexOf("Microsoft") != -1) ? true : false;

Calendar.Months = ["一月", "二月", "三月", "四月", "五月", "六月",
"七月", "八月", "九月", "十月", "十一月", "十二月"];

// Non-Leap year Month days..
Calendar.DOMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// Leap year Month days..
Calendar.lDOMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function Calendar(p_item, p_WinCal, p_month, p_year, p_format) {
	if ((p_month == null) && (p_year == null))	return;

	if (p_WinCal == null)
		this.gWinCal = ggWinCal;
	else
		this.gWinCal = p_WinCal;

	if (p_month == null) {
		this.gMonthName = null;
		this.gMonth = null;
		this.gYearly = true;
	} else {
		this.gMonthName = Calendar.get_month(p_month);
		this.gMonth = new Number(p_month);
		this.gYearly = false;
	}

	this.gYear = p_year;
	this.gFormat = p_format;
	this.gBGColor = "white";
	this.gFGColor = "black";
	this.gTextColor = "black";
	this.gHeaderColor = "black";
	this.gReturnItem = p_item;
}

Calendar.get_month = Calendar_get_month;
Calendar.get_daysofmonth = Calendar_get_daysofmonth;
Calendar.calc_month_year = Calendar_calc_month_year;
Calendar.print = Calendar_print;

function Calendar_get_month(monthNo) {
	return Calendar.Months[monthNo];
}

function Calendar_get_daysofmonth(monthNo, p_year) {
	/*
	Check for leap year ..
	1.Years evenly divisible by four are normally leap years, except for...
	2.Years also evenly divisible by 100 are not leap years, except for...
	3.Years also evenly divisible by 400 are leap years.
	*/
	if ((p_year % 4) == 0) {
		if ((p_year % 100) == 0 && (p_year % 400) != 0)
			return Calendar.DOMonth[monthNo];

		return Calendar.lDOMonth[monthNo];
	} else
		return Calendar.DOMonth[monthNo];
}

function Calendar_calc_month_year(p_Month, p_Year, incr) {
	/*
	Will return an 1-D array with 1st element being the calculated month
	and second being the calculated year
	after applying the month increment/decrement as specified by 'incr' parameter.
	'incr' will normally have 1/-1 to navigate thru the months.
	*/
	var ret_arr = new Array();

	if (incr == -1) {
		// B A C K W A R D
		if (p_Month == 0) {
			ret_arr[0] = 11;
			ret_arr[1] = parseInt(p_Year) - 1;
		}
		else {
			ret_arr[0] = parseInt(p_Month) - 1;
			ret_arr[1] = parseInt(p_Year);
		}
	} else if (incr == 1) {
		// F O R W A R D
		if (p_Month == 11) {
			ret_arr[0] = 0;
			ret_arr[1] = parseInt(p_Year) + 1;
		}
		else {
			ret_arr[0] = parseInt(p_Month) + 1;
			ret_arr[1] = parseInt(p_Year);
		}
	}

	return ret_arr;
}

function Calendar_print() {
	ggWinCal.print();
}

function Calendar_calc_month_year(p_Month, p_Year, incr) {
	/*
	Will return an 1-D array with 1st element being the calculated month
	and second being the calculated year
	after applying the month increment/decrement as specified by 'incr' parameter.
	'incr' will normally have 1/-1 to navigate thru the months.
	*/
	var ret_arr = new Array();

	if (incr == -1) {
		// B A C K W A R D
		if (p_Month == 0) {
			ret_arr[0] = 11;
			ret_arr[1] = parseInt(p_Year) - 1;
		}
		else {
			ret_arr[0] = parseInt(p_Month) - 1;
			ret_arr[1] = parseInt(p_Year);
		}
	} else if (incr == 1) {
		// F O R W A R D
		if (p_Month == 11) {
			ret_arr[0] = 0;
			ret_arr[1] = parseInt(p_Year) + 1;
		}
		else {
			ret_arr[0] = parseInt(p_Month) + 1;
			ret_arr[1] = parseInt(p_Year);
		}
	}

	return ret_arr;
}

// This is for compatibility with Navigator 3, we have to create and discard one object before the prototype object exists.
new Calendar();

Calendar.prototype.getMonthlyCalendarCode = function() {
	var vCode = "";
	var vHeader_Code = "";
	var vData_Code = "";

	// Begin Table Drawing code here..
	vCode = vCode + "<TABLE BORDER=1 WIDTH=\"100%\" BGCOLOR=\"" + this.gBGColor + "\">";

	vHeader_Code = this.cal_header();
	vData_Code = this.cal_data();
	vCode = vCode + vHeader_Code + vData_Code;

	vCode = vCode + "</TABLE>";

	return vCode;
}


Calendar.prototype.show = function() {
 var vCode = "";

 this.gWinCal.document.open();

 // Setup the page...
 this.wwrite("<html>");
 this.wwrite("<head><title>日历</title>");
 this.wwrite("<style type='text/css'>");
 this.wwrite("a.dates:link {font-size:16px;font-weight:bold;width:100%; }");
 this.wwrite("a.dates:visited {font-size:16px;font-weight:bold;width:100%;}");
 this.wwrite("a.dates:hover {font-size:16px;font-weight:bold;width:100%;}");
 this.wwrite("a.dates:active {font-size:16px;font-weight:bold;width:100%;}");
 this.wwrite("</style>");
 this.wwrite("<link rel='stylesheet' href='../websett/template.css' type='text/css'>");
 this.wwrite("</head>");

 this.wwrite("<body " +
  "link=\"" + this.gLinkColor + "\" " +
  "vlink=\"" + this.gLinkColor + "\" " +
  "alink=\"" + this.gLinkColor + "\" " +
  "text=\"" + this.gTextColor + "\">");
 this.wwriteA("<FONT FACE='" + fontface + "' ><B>");
 this.wwriteA(this.gMonthName + " " + this.gYear + "年");
 this.wwriteA("</B><BR>");

 // Show navigation buttons
 var prevMMYYYY = Calendar.calc_month_year(this.gMonth, this.gYear, -1);
 var prevMM = prevMMYYYY[0];
 var prevYYYY = prevMMYYYY[1];

 var nextMMYYYY = Calendar.calc_month_year(this.gMonth, this.gYear, 1);
 var nextMM = nextMMYYYY[0];
 var nextYYYY = nextMMYYYY[1];

 this.wwrite("<TABLE WIDTH='100%' BORDER=1 CELLSPACING=0 CELLPADDING=0 BGCOLOR='#e0e0e0'><TR><TD ALIGN=center>");
 this.wwrite("[<A HREF=\"" +
  "javascript:window.opener.Build(" +
  "'" + this.gReturnItem + "', '" + this.gMonth + "', '" + (parseInt(this.gYear)-1) + "', '" + this.gFormat + "'" +
  ");" +
  "\"><<<\/A>]</TD><TD ALIGN=center>");
 this.wwrite("[<A HREF=\"" +
  "javascript:window.opener.Build(" +
  "'" + this.gReturnItem + "', '" + prevMM + "', '" + prevYYYY + "', '" + this.gFormat + "'" +
  ");" +
  "\"><<\/A>]</TD>");
 this.wwrite("<TD ALIGN=center>");
 this.wwrite("[<A HREF=\"" +
  "javascript:window.opener.Build(" +
  "'" + this.gReturnItem + "', '" + nextMM + "', '" + nextYYYY + "', '" + this.gFormat + "'" +
  ");" +
  "\">><\/A>]</TD><TD ALIGN=center>");
 this.wwrite("[<A HREF=\"" +
  "javascript:window.opener.Build(" +
  "'" + this.gReturnItem + "', '" + this.gMonth + "', '" + (parseInt(this.gYear)+1) + "', '" + this.gFormat + "'" +
  ");" +
  "\">>><\/A>]</TD></TR></TABLE><BR>");

 // Get the complete calendar code for the month..
 vCode = this.getMonthlyCalendarCode();
 this.wwrite(vCode);

 this.wwrite("</font></body></html>");
 this.gWinCal.document.close();
}

Calendar.prototype.showY = function() {
 var vCode = "";
 var i;
 var vr, vc, vx, vy;  // Row, Column, X-coord, Y-coord
 var vxf = 285;   // X-Factor
 var vyf = 200;   // Y-Factor
 var vxm = 10;   // X-margin
 var vym;    // Y-margin
 if (isIE) vym = 75;
 else if (isNav) vym = 25;

 this.gWinCal.document.open();

 this.wwrite("<html>");
 this.wwrite("<head><title>日历</title>");
 this.wwrite("<style type='text/css'>\n<!--");
 for (i=0; i<12; i++) {
  vc = i % 3;
  if (i>=0 && i<= 2) vr = 0;
  if (i>=3 && i<= 5) vr = 1;
  if (i>=6 && i<= 8) vr = 2;
  if (i>=9 && i<= 11) vr = 3;

  vx = parseInt(vxf * vc) + vxm;
  vy = parseInt(vyf * vr) + vym;

  this.wwrite(".lclass" + i + " {position:absolute;top:" + vy + ";left:" + vx + ";}");
 }
 this.wwrite("-->\n</style>");
 this.wwrite("</head>");

 this.wwrite("<body " +
  "link=\"" + this.gLinkColor + "\" " +
  "vlink=\"" + this.gLinkColor + "\" " +
  "alink=\"" + this.gLinkColor + "\" " +
  "text=\"" + this.gTextColor + "\">");
 this.wwrite("<FONT FACE='" + fontface + "' ><B>");
 this.wwrite("Year : " + this.gYear);
 this.wwrite("</B><BR>");

 // Show navigation buttons
 var prevYYYY = parseInt(this.gYear) - 1;
 var nextYYYY = parseInt(this.gYear) + 1;

 this.wwrite("<TABLE WIDTH='100%' BORDER=1 CELLSPACING=0 CELLPADDING=0 BGCOLOR='#e0e0e0'><TR><TD ALIGN=center>");
 this.wwrite("[<A HREF=\"" +
  "javascript:window.opener.Build(" +
  "'" + this.gReturnItem + "', null, '" + prevYYYY + "', '" + this.gFormat + "'" +
  ");" +
  "\" alt='Prev Year'><<<\/A>]</TD>");
 this.wwrite("<TD ALIGN=center>");
 this.wwrite("[<A HREF=\"" +
  "javascript:window.opener.Build(" +
  "'" + this.gReturnItem + "', null, '" + nextYYYY + "', '" + this.gFormat + "'" +
  ");" +
  "\">>><\/A>]</TD></TR></TABLE><BR>");

 // Get the complete calendar code for each month..
 var j;
 for (i=11; i>=0; i--) {
  if (isIE)
   this.wwrite("<DIV ID=\"layer" + i + "\" CLASS=\"lclass" + i + "\">");
  else if (isNav)
   this.wwrite("<LAYER ID=\"layer" + i + "\" CLASS=\"lclass" + i + "\">");

  this.gMonth = i;
  this.gMonthName = Calendar.get_month(this.gMonth);
  vCode = this.getMonthlyCalendarCode();
  this.wwrite(this.gMonthName + "/" + this.gYear + "<BR>");
  this.wwrite(vCode);

  if (isIE)
   this.wwrite("</DIV>");
  else if (isNav)
   this.wwrite("</LAYER>");
 }

 this.wwrite("</font><BR></body></html>");
 this.gWinCal.document.close();
}

Calendar.prototype.wwrite = function(wtext) {
 this.gWinCal.document.writeln(wtext);
}

Calendar.prototype.wwriteA = function(wtext) {
 this.gWinCal.document.write(wtext);
}

Calendar.prototype.cal_header = function() {
 var vCode = "";

 vCode = vCode + "<TR>";
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>日</B></td>";
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>一</B></td>";
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>二</B></td>";
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>三</B></td>";
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>四</B></td>";
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>五</B></td>";
 vCode = vCode + "<TD WIDTH='16%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>六</B></td>";
 vCode = vCode + "</TR>";

 return vCode;
}

Calendar.prototype.cal_data = function() {
 var vDate = new Date();
 vDate.setDate(1);
 vDate.setMonth(this.gMonth);
 vDate.setFullYear(this.gYear);

 var vFirstDay=vDate.getDay();
 var vDay=1;
 var vLastDay=Calendar.get_daysofmonth(this.gMonth, this.gYear);
 var vOnLastDay=0;
 var vCode = "";

 /*
 Get day for the 1st of the requested month/year..
 Place as many blank cells before the 1st day of the month as necessary.
 */

 vCode = vCode + "<TR>";
 for (i=0; i<vFirstDay; i++) {
  vCode = vCode + "<TD WIDTH='14%' align='center' " + this.write_weekend_string(i) + "><FONT  FACE='" + fontface + "'> </td>";
 }

 // Write rest of the 1st week
 for (j=vFirstDay; j<7; j++) {
  vCode = vCode + "<TD WIDTH='14%' align='center' " + this.write_weekend_string(j) + "><FONT  FACE='" + fontface + "'>" +
   "<A class='dates' HREF='#' " +
    "onClick=\"self.opener." + this.gReturnItem + ".value='" +
    this.format_data(vDay) +
    "';window.close();"+"self.opener." + this.gReturnItem + ".focus();"+"\">" +
    this.format_day(vDay) +
   "</A>" +
   "</td>";
  vDay=vDay + 1;
 }
 vCode = vCode + "</TR>";

 // Write the rest of the weeks
 for (k=2; k<7; k++) {
  vCode = vCode + "<TR>";

  for (j=0; j<7; j++) {
   vCode = vCode + "<TD WIDTH='14%' align='center' " + this.write_weekend_string(j) + "><FONT  FACE='" + fontface + "'>" +
    "<A class='dates' HREF='#' " +
     "onClick=\"self.opener." + this.gReturnItem + ".value='" +
     this.format_data(vDay) +
     "';window.close();"+"self.opener." + this.gReturnItem + ".focus();"+"\">" +
    this.format_day(vDay) +
    "</A>" +
    "</td>";
   vDay=vDay + 1;

   if (vDay > vLastDay) {
    vOnLastDay = 1;
    break;
   }
  }

  if (j == 6)
   vCode = vCode + "</TR>";
  if (vOnLastDay == 1)
   break;
 }

 // Fill up the rest of last week with proper blanks, so that we get proper square blocks
 for (m=1; m<(7-j); m++) {
  if (this.gYearly)
   vCode = vCode + "<TD WIDTH='14%' align='center' " + this.write_weekend_string(j+m) +
   "><FONT  FACE='" + fontface + "' COLOR='gray'> </td>";
  else
   vCode = vCode + "<TD WIDTH='14%' align='center' " + this.write_weekend_string(j+m) +
   "><FONT  FACE='" + fontface + "' COLOR='gray'>" + m + "</td>";
 }

 return vCode;
}



Calendar.prototype.format_day = function(vday) {
	var vNowDay = gNow.getDate();
	var vNowMonth = gNow.getMonth();
	var vNowYear = gNow.getFullYear();

	if (vday == vNowDay && this.gMonth == vNowMonth && this.gYear == vNowYear)
		return ("<FONT  COLOR=\"RED\"><B>" + vday + "</B></FONT>");
	else
		return (vday);
}

Calendar.prototype.write_weekend_string = function(vday) {
	var i;

	// Return special formatting for the weekend day.
	for (i=0; i<weekend.length; i++) {
		if (vday == weekend[i])
			return (" BGCOLOR=\"" + weekendColor + "\"");
	}

	return "";
}

Calendar.prototype.format_data = function(p_day) {
	var vData;
	var vMonth = 1 + this.gMonth;
	vMonth = (vMonth.toString().length < 2) ? "0" + vMonth : vMonth;
	var vMon = Calendar.get_month(this.gMonth).substr(0,3).toUpperCase();
	var vFMon = Calendar.get_month(this.gMonth).toUpperCase();
	var vY4 = new String(this.gYear);
	var vY2 = new String(this.gYear.substr(2,2));
	var vDD = (p_day.toString().length < 2) ? "0" + p_day : p_day;

	switch (this.gFormat) {
		case "YYYY-MM-DD" :
			vData = vY4 + "-" + vMonth + "-" + vDD;
			break;
		case "MM\/DD\/YYYY" :
			vData = vMonth + "\/" + vDD + "\/" + vY4;
			break;
		case "MM\/DD\/YY" :
			vData = vMonth + "\/" + vDD + "\/" + vY2;
			break;
		case "MM-DD-YYYY" :
			vData = vMonth + "-" + vDD + "-" + vY4;
			break;
		case "MM-DD-YY" :
			vData = vMonth + "-" + vDD + "-" + vY2;
			break;

		case "DD\/MON\/YYYY" :
			vData = vDD + "\/" + vMon + "\/" + vY4;
			break;
		case "DD\/MON\/YY" :
			vData = vDD + "\/" + vMon + "\/" + vY2;
			break;
		case "DD-MON-YYYY" :
			vData = vDD + "-" + vMon + "-" + vY4;
			break;
		case "DD-MON-YY" :
			vData = vDD + "-" + vMon + "-" + vY2;
			break;

		case "DD\/MONTH\/YYYY" :
			vData = vDD + "\/" + vFMon + "\/" + vY4;
			break;
		case "DD\/MONTH\/YY" :
			vData = vDD + "\/" + vFMon + "\/" + vY2;
			break;
		case "DD-MONTH-YYYY" :
			vData = vDD + "-" + vFMon + "-" + vY4;
			break;
		case "DD-MONTH-YY" :
			vData = vDD + "-" + vFMon + "-" + vY2;
			break;

		case "DD\/MM\/YYYY" :
			vData = vDD + "\/" + vMonth + "\/" + vY4;
			break;
		case "DD\/MM\/YY" :
			vData = vDD + "\/" + vMonth + "\/" + vY2;
			break;
		case "DD-MM-YYYY" :
			vData = vDD + "-" + vMonth + "-" + vY4;
			break;
		case "DD-MM-YY" :
			vData = vDD + "-" + vMonth + "-" + vY2;
			break;

		default :
			vData = vMonth + "\/" + vDD + "\/" + vY4;
	}

	return vData;
}

function Build(p_item, p_month, p_year, p_format) {
	var p_WinCal = ggWinCal;
	gCal = new Calendar(p_item, p_WinCal, p_month, p_year, p_format);

	// Customize your Calendar here..
	gCal.gBGColor="white";
	gCal.gLinkColor="black";
	gCal.gTextColor="black";
	gCal.gHeaderColor="darkgreen";

	// Choose appropriate show function
	if (gCal.gYearly)	gCal.showY();
	else	gCal.show();
}

function show_calendar() {
	/*
		p_month : 0-11 for Jan-Dec; 12 for All Months.
		p_year	: 4-digit year
		p_format: Date format (mm/dd/yyyy, dd/mm/yy, ...)
		p_item	: Return Item.
	*/
	p_item = arguments[0];
	if (arguments[1] == null)
		p_month = new String(gNow.getMonth());
	else
		p_month = arguments[1];
	if (arguments[2] == "" || arguments[2] == null)
		p_year = new String(gNow.getFullYear().toString());
	else
		p_year = arguments[2];
	if (arguments[3] == null)
		p_format = "YYYY-MM-DD";
	else
		p_format = arguments[3];

	vWinCal = window.open("", "Calendar",
		"width=280,height=250,status=no,resizable=no,top=200,left=400");
	vWinCal.opener = self;
	ggWinCal = vWinCal;

	Build(p_item, p_month, p_year, p_format);
}
/*
Yearly Calendar Code Starts here
*/
function show_yearly_calendar(p_item, p_year, p_format) {
	// Load the defaults..
	if (p_year == null || p_year == "")
		p_year = new String(gNow.getFullYear().toString());
	if (p_format == null || p_format == "")
		p_format = "YYYY-MM-DD";

	var vWinCal = window.open("", "Calendar", "scrollbars=yes");
	vWinCal.opener = self;
	ggWinCal = vWinCal;

	Build(p_item, null, p_year, p_format);
}

/**
 * 功能块（时间控件）注释结束。
 */

/**
 * 功能块（用户名称控件--设置页面使用）注释开始：
 *
 */

/**
 * 创建用户名称控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strUserName 用户名称
 * @param strCode 用户代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createUserNameCtrl(strFormName,strCtrlName,strUserName,strCode,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showUserNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\""+ strUserName + "\",\""  + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box' type='text' name='" + strCtrlName + "' value='" + strUserName + "' onkeydown='javascript:isSelectUserName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strUserName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示用户登录窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showUserNameCtrl(strFormName,strCtrlName,strUserName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	//var strUserName;
	eval ("strUserName = "+strFormName+"."+strCtrlName +".value");
	//alert (strUserName);
	var paraState="lOfficeID=" + lOfficeID + "&strUserName=" + strUserName + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName + "&strUserName="+strUserName;
	g_win=window.open( "../jsp/SelectUserName.jsp?"+paraState  , "SelectUserName" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否显示用户登录窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectUserName(strFormName,strCtrlName,strUserName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showUserNameCtrl(strFormName,strCtrlName,strUserName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * 输出用户名称控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strUserName 用户名称
 * @param strCode 用户代码
 */
function outputUserNameCtrl(strFormName,strCtrlName,strUserName,strCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strUserName+ "'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strCode +"'");

}

/**
 * 功能块（用户名称控件）注释结束。
 */

/**
 * 功能块（用户名称控件--普通页面使用）注释开始：
 *
 */

/**
 * 创建用户名称控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strUserName 用户名称
 * @param strCode 用户代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createUserNameCtrl1(strFormName,strCtrlName,strUserName,strCode,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{
  	if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showUserNameCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box' type='text' name='" + strCtrlName + "' value='" + strUserName + "' onkeydown='javascript:isSelectUserName1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示用户登录窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showUserNameCtrl1(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectUserName1.jsp?"+paraState  , "SelectUserName" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否显示用户登录窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectUserName1(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
	
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showUserNameCtrl1(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * 输出用户名称控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strUserName 用户名称
 * @param strCode 用户代码
 */
function outputUserNameCtrl1(strFormName,strCtrlName,strUserName,strCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strUserName+ "'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strCode +"'");

}

/**
 * 功能块（用户名称控件）注释结束。
 */


/**
 * 功能块（用户名称控件--普通页面使用,根据模块显示用户）注释开始：
 *
 */

/**
 * 创建用户名称控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strUserName 用户名称
 * @param strCode 用户代码
 * @param lModuleID 模块标识
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createUserNameCtrl2(strFormName,strCtrlName,strUserName,strCode,lModuleID,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{
  	if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showUserNameCtrl2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lModuleID + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box' type='text' name='" + strCtrlName + "' value='" + strUserName + "' onkeydown='javascript:isSelectUserName2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lModuleID + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示用户登录窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showUserNameCtrl2(strFormName,strCtrlName,lModuleID,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lModuleID=" + lModuleID + "&lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectUserName2.jsp?"+paraState  , "SelectUserName" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否显示用户登录窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectUserName2(strFormName,strCtrlName,lModuleID,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
	
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showUserNameCtrl2(strFormName,strCtrlName,lModuleID,lOfficeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + "Code.value=-1");
		}
	}

}


/**
 * 输出用户名称控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strUserName 用户名称
 * @param strCode 用户代码
 */
function outputUserNameCtrl2(strFormName,strCtrlName,strUserName,strCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strUserName+ "'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strCode +"'");

}

/**
 * 功能块（用户名称控件）注释结束。
 */


/**
 * 功能块（用户名称控件--报表信贷-21使用，调整过贷款利率的经办员）注释开始：
 *
 */

/**
 * 创建用户名称控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strUserName 用户名称
 * @param strCode 用户代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createUserNameCtrl3(strFormName,strCtrlName,strUserName,strCode,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{
  	if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showUserNameCtrl3(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box' type='text' name='" + strCtrlName + "' value='" + strUserName + "' onkeydown='javascript:isSelectUserName3(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示用户登录窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showUserNameCtrl3(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectUserName3.jsp?"+paraState  , "SelectUserName" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否显示用户登录窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectUserName3(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showUserNameCtrl3(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * 输出用户名称控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strUserName 用户名称
 * @param strCode 用户代码
 */
function outputUserNameCtrl3(strFormName,strCtrlName,strUserName,strCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strUserName+ "'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strCode +"'");

}

/**
 * 功能块（用户名称控件）注释结束。
 */




/**
 * 功能块（登录名称控件）注释开始：
 *
 */

/**
 * 创建登录名称控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strLogin 登录名称
 * @param strCode 用户代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createLoginCtrl(strFormName,strCtrlName,strLogin,strCode,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showLoginCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strLogin + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "' value='" + strLogin + "' onkeydown='javascript:isSelectLogin(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strLogin + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示登录名称窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showLoginCtrl(strFormName,strCtrlName,strLogin,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	//var strLogin;
	eval ("strLogin = "+strFormName+"."+strCtrlName+".value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName  + "&strLogin=" + strLogin +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../jsp/SelectLogin.jsp?"+paraState  , "SelectLogin" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示登录名称窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectLogin(strFormName,strCtrlName,strLogin,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showLoginCtrl(strFormName,strCtrlName,strLogin,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * 输出登录名称控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strLogin 登录名称
 * @param strCode 用户代码
 */
function outputLoginCtrl(strFormName,strCtrlName,strLogin,strCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strLogin+ "'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strCode +"'");

}

/**
 * 功能块（登录名称控件）注释结束。
 */

/**
 * 功能块（用户组控件）注释开始：
 *
 */

/**
 * 创建用户组控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strGroupName 用户组名称
 * @param strCode 用户组代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 * @param strProperty  strCtrlName的其他属性
 */
function createGroupNameCtrl(strFormName,strCtrlName,strGroupName,strCode,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD,strProperty)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showGroupNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strGroupName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "' value='" + strGroupName +"' " + strProperty + "  onkeydown='javascript:isSelectGroupName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strGroupName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示用户组窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showGroupNameCtrl(strFormName,strCtrlName,strGroupName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName + "&strGroupName=" + strGroupName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../jsp/SelectGroupName.jsp?"+paraState  , "SelectGroupName" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示用户组窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectGroupName(strFormName,strCtrlName,strGroupName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showGroupNameCtrl(strFormName,strCtrlName,strGroupName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * 输出用户组控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strGroupName 用户组名称
 * @param strCode 用户代码
 */
function outputGroupNameCtrl(strFormName,strCtrlName,strGroupName,strCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strGroupName+ "'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strCode +"'");

}

/**
 * 功能块（用户组控件）注释结束。
 */

/**
 * 功能块（利率计划控件）注释开始：
 *
 */

/**
 * 创建利率计划控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strRatePlan 利率计划名称
 * @param strCode 用户代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 * @param nTypeID 类型，1-显示代码
 */
function createRatePlanCtrl(strFormName,strCtrlName,strRatePlan,lRateID,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD,nTypeID)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:if(" + strFormName + "." + strCtrlName +"Ctrl.disabled == false) {showRatePlanCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+nTypeID+"' ID='"+strCtrlName+ "Type' NAME='"+strCtrlName+"Type'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRatePlan + "' onkeydown='javascript:isSelectRatePlan(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示利率计划窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showRatePlanCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strRatePlan = eval(strFormName+"."+strCtrlName+"Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName+"&strRatePlan="+strRatePlan;
	g_win=window.open( "../../jsp/SelectRatePlan.jsp?"+paraState  , "SelectRatePlan" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示利率计划窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectRatePlan(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showRatePlanCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出利率计划控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strGroupName 用户组名称
 * @param strCode 用户代码
 */
function outputRatePlanCtrl(strFormName,strCtrlName,strRatePlan,lRateID,strCode)
{
	var nType;
	nType=eval(strFormName + "." + strCtrlName + "Type.value");

	eval(strFormName + "." + strCtrlName + ".value='" + lRateID+ "'");
	if(nType==1)
	{
		eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strCode +"'");
	}
	else
	{
		eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strRatePlan +"'");
	}
}

/**
 * 功能块（利率计划控件）注释结束。
 */



/**
 * 功能块（利率控件）注释开始：
 *
 */

/**
 * 创建利率控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strRateName 利率名称
 * @param lRateID 利率代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createRateCtrl(strFormName,strCtrlName,strRateName,lRateID,lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showRateCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				
				+ " <INPUT TYPE='HIDDEN' VALUE='' ID='"+strCtrlName+ "Value' NAME='"+strCtrlName+"Value'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRateName + "' onkeydown='javascript:isSelectRate(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示利率窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showRateCtrl(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strName;
	eval("strName = "+strFormName+"."+strCtrlName+"Ctrl.value");
	var paraState="lCurrencyID=" + lCurrencyID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName + "&strName="+ strName;
	g_win=window.open( "../../jsp/SelectRate.jsp?"+paraState  , "SelectRate" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示利率窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectRate(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showRateCtrl(strFormName,strCtrlName,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=''");
		}
	}
}


/**
 * 输出利率控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strRateName 利率名称
 * @param lRateID 利率代码
 */
function outputRateCtrl(strFormName,strCtrlName,lRateID,strRateName,dInterestRate)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strRateName+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + lRateID +"'");
	eval(strFormName + "." + strCtrlName +  "Value"+".value='" + dInterestRate +"'");

}

/**
 * 功能块（利率控件）注释结束。
 */


/**
 * 功能块（客户分类编号控件）注释开始：
 *
 */

/**
 * 创建客户分类编号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strClientTypeNoName 客户分类编号名称
 * @param lClientTypeID 客户分类代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createClientTypeNoCtrl(strFormName,strCtrlName,strClientTypeNoName,lClientTypeID,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showClientTypeNoCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lClientTypeID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strClientTypeNoName + "' onkeydown='javascript:isSelectClientTypeNo(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示客户分类编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showClientTypeNoCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectClientTypeNo.jsp?"+paraState  , "SelectClientTypeNo" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示客户分类编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectClientTypeNo(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showClientTypeNoCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出客户分类编号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strClientTypeNoName 客户分类编号名称
 * @param lClientTypeID 利率代码
 */
function outputClientTypeNoCtrl(strFormName,strCtrlName,strClientTypeNoName,lClientTypeID,strClientName)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lClientTypeID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strClientTypeNoName +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientTypeName[i][0]!=null)
		{
			if(gClientTypeName[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gClientTypeName[i][j]!=null)
					{
						eval(strFormName+ "." + gClientTypeName[i][j]+".value='" + strClientName + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

}



/**
 * 设置需要输出客户分类名称的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setClientTypeName(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gClientTypeName[i][0]!=null)
		{
			if (gClientTypeName[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gClientTypeName[i][j]==null)
					{
						gClientTypeName[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gClientTypeName[i][0]=strCtrlName;
			gClientTypeName[i][1]=objCtrl;
			break;
		}

	}

}



/**
 * 功能块（客户分类编号控件）注释结束。
 */


/**
 * 功能块（客户分类名称控件）注释开始：
 *
 */

/**
 * 创建客户分类名称控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strClientTypeNameName 客户分类名称名称
 * @param lClientTypeID 客户分类代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createClientTypeNameCtrl(strFormName,strCtrlName,strClientTypeNameName,lClientTypeID,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showClientTypeNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lClientTypeID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strClientTypeNameName + "' onkeydown='javascript:isSelectClientTypeName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示客户分类名称窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showClientTypeNameCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectClientTypeName.jsp?"+paraState  , "SelectClientTypeName" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示客户分类名称窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectClientTypeName(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if (window.event.keyCode==13)//回车说明选择
	{
		gnIsSelectCtrl=1;
		showClientTypeNameCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
	}
	else
	{
		eval(strFormName+ "." + strCtrlName + ".value=-1");
	}
}


/**
 * 输出客户分类名称控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strClientTypeNameName 客户分类名称名称
 * @param lClientTypeID 利率代码
 */
function outputClientTypeNameCtrl(strFormName,strCtrlName,strClientTypeNameName,lClientTypeID)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lClientTypeID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strClientTypeNameName +"'");

}

/**
 * 功能块（客户分类名称控件）注释结束。
 */


/**
 * 功能块（Libor利率控件）注释开始：
 *
 */

/**
 * 创建Libor利率控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strLiborRateName Libor利率名称
 * @param lLiborRateID Libor利率代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createLiborRateCtrl(strFormName,strCtrlName,strLiborRateName,lLiborRateID,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showLiborRateCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLiborRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strLiborRateName + "' onkeydown='javascript:isSelectLiborRate(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示Libor利率窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showLiborRateCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strLiborRate;
	eval("strLiborRate="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strLiborRate=" + strLiborRate +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectLiborRate.jsp?"+paraState  , "SelectLiborRate" , sFeatures , false );
	//alert("3");
	g_win.focus();
}

/**
 * 是否显示Libor利率窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectLiborRate(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showLiborRateCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出Libor利率控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strLiborRateName Libor利率名称
 * @param lLiborRateID Libor利率代码
 */
function outputLiborRateCtrl(strFormName,strCtrlName,strLiborRateName,lLiborRateID,lCurrencyID)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lLiborRateID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strLiborRateName +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gLiborRateCurrency[i][0]!=null)
		{
			if(gLiborRateCurrency[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gLiborRateCurrency[i][j]!=null)
					{
						eval(strFormName+ "." + gLiborRateCurrency[i][j]+".value='" + lCurrencyID + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

}



/**
 * 设置需要输出币种的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setLiborCurrencyID(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gLiborRateCurrency[i][0]!=null)
		{
			if (gLiborRateCurrency[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gLiborRateCurrency[i][j]==null)
					{
						gLiborRateCurrency[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gLiborRateCurrency[i][0]=strCtrlName;
			gLiborRateCurrency[i][1]=objCtrl;
			break;
		}

	}

}


/**
 * 功能块（Libor利率控件）注释结束。
 */


/**
 * 功能块（利率编号控件）注释开始：
 *
 */

/**
 * 创建利率编号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strRateCode 利率编号
 * @param lRateID 利率代码
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createRateCodeCtrl(strFormName,strCtrlName,strRateCode,lRateID,lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showRateCodeCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRateCode + "' onkeydown='javascript:isSelectRateCode(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 设置需要输出域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setRateCodeRateName(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gRateCodeRateName[i][0]!=null)
		{
			if (gRateCodeRateName[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gRateCodeRateName[i][j]==null)
					{
						gRateCodeRateName[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gRateCodeRateName[i][0]=strCtrlName;
			gRateCodeRateName[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 显示利率编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showRateCodeCtrl(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strRateCode;
	eval("strRateCode="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lCurrencyID=" + lCurrencyID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strRateCode=" + strRateCode +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectRateCode.jsp?"+paraState  , "SelectRateCode" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示利率编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectRateCode(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showRateCodeCtrl(strFormName,strCtrlName,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出利率编号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strRateCode 利率编号
 * @param lRateID 利率代码
 */
function outputRateCodeCtrl(strFormName,strCtrlName,strRateCode,lRateID,strRateName)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lRateID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strRateCode +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gRateCodeRateName[i][0]!=null)
		{
			if (gRateCodeRateName[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gRateCodeRateName[i][j]!=null)
					{
						eval(strFormName + "." + gRateCodeRateName[i][j]+".value='"+ strRateName + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

}

/**
 * 功能块（利率编号控件）注释结束。
 */



/**
 * 功能块（利率编号控件 显示利率值）注释开始：
 *
 */

/**
 * 创建利率编号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strRateValue 利率值
 * @param lRateID 利率代码
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createRateCodeCtrl2(strFormName,strCtrlName,strRateValue,lRateID,lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showRateCodeCtrl2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box' readonly type='text' name='" + strCtrlName + "Value' value='" + strRateValue + "' onkeydown='javascript:isSelectRateCode2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示利率编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showRateCodeCtrl2(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strRateValue;
	eval("strRateValue="+ strFormName + "."+ strCtrlName + "Value.value");
	var paraState="lCurrencyID=" + lCurrencyID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strRateValue=" + strRateValue +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectRateCode2.jsp?"+paraState  , "SelectRateCode" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示利率编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectRateCode2(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showRateCodeCtrl2(strFormName,strCtrlName,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出利率编号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strRateValue 利率值
 * @param lRateID 利率代码
 */
function outputRateCodeCtrl2(strFormName,strCtrlName,strRateValue,lRateID)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lRateID+ "'");
	eval(strFormName + "." + strCtrlName +  "Value"+".value='" + strRateValue +"'");

}

/**
 * 功能块（利率编号控件）注释结束。
 */




/**
 * 功能块（利率编号控件 现在及以后）注释开始：
 *
 */

/**
 * 创建利率编号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strRateCode 利率编号
 * @param lRateID 利率代码
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createRateCodeCtrl1(strFormName,strCtrlName,strRateCode,lRateID,lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showRateCodeCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRateCode + "' onkeydown='javascript:isSelectRateCode1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}

/**
 * 设置需要输出域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setRateCodeRateName1(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gRateCodeRateName1[i][0]!=null)
		{
			if (gRateCodeRateName1[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gRateCodeRateName1[i][j]==null)
					{
						gRateCodeRateName1[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gRateCodeRateName1[i][0]=strCtrlName;
			gRateCodeRateName1[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 显示利率编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showRateCodeCtrl1(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strRateCode;
	eval("strRateCode="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lCurrencyID=" + lCurrencyID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strRateCode=" + strRateCode +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectRateCode1.jsp?"+paraState  , "SelectRateCode" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示利率编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectRateCode1(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showRateCodeCtrl1(strFormName,strCtrlName,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出利率编号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strRateCode 利率编号
 * @param lRateID 利率代码
 */
function outputRateCodeCtrl1(strFormName,strCtrlName,strRateCode,lRateID,strRateName)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lRateID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strRateCode +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gRateCodeRateName1[i][0]!=null)
		{
			if (gRateCodeRateName1[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gRateCodeRateName1[i][j]!=null)
					{
						eval(strFormName + "." + gRateCodeRateName1[i][j]+".value='"+ strRateName + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

}

/**
 * 功能块（利率编号控件）注释结束。
 */




/**
 * 功能块（利率编号控件 输出利率生效日）注释开始：
 *
 */

/**
 * 创建利率编号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strRateCode 利率编号
 * @param lRateID 利率代码
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createRateCodeCtrl3(strFormName,strCtrlName,strRateCode,lRateID,lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showRateCodeCtrl3(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRateCode + "' onkeydown='javascript:isSelectRateCode3(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}

/**
 * 设置需要输出域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setRateCodeRateName3(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gRateCodeRateName2[i][0]!=null)
		{
			if (gRateCodeRateName2[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gRateCodeRateName2[i][j]==null)
					{
						gRateCodeRateName2[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gRateCodeRateName2[i][0]=strCtrlName;
			gRateCodeRateName2[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 设置需要输出域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setRateCodeRateValidate(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gRateCodeRateValidate[i][0]!=null)
		{
			if (gRateCodeRateValidate[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gRateCodeRateValidate[i][j]==null)
					{
						gRateCodeRateValidate[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gRateCodeRateValidate[i][0]=strCtrlName;
			gRateCodeRateValidate[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 设置需要输出域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setRateCodeRate(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gRateCodeRate[i][0]!=null)
		{
			if (gRateCodeRate[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gRateCodeRate[i][j]==null)
					{
						gRateCodeRate[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gRateCodeRate[i][0]=strCtrlName;
			gRateCodeRate[i][1]=objCtrl;
			break;
		}

	}

}

/**
 * 显示利率编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showRateCodeCtrl3(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strRateCode;
	eval("strRateCode="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lCurrencyID=" + lCurrencyID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strRateCode=" + strRateCode +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectRateCode3.jsp?"+paraState  , "SelectRateCode" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示利率编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectRateCode3(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showRateCodeCtrl3(strFormName,strCtrlName,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出利率编号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strRateCode 利率编号
 * @param lRateID 利率代码
 */
function outputRateCodeCtrl3(strFormName,strCtrlName,strRateCode,lRateID,strRateName,strRateValidate,fRate)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lRateID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strRateCode +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gRateCodeRateName2[i][0]!=null)
		{
			if (gRateCodeRateName2[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gRateCodeRateName2[i][j]!=null)
					{
						eval(strFormName + "." + gRateCodeRateName2[i][j]+".value='"+ strRateName + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gRateCodeRateValidate[i][0]!=null)
		{
			if (gRateCodeRateValidate[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gRateCodeRateValidate[i][j]!=null)
					{
						eval(strFormName + "." + gRateCodeRateValidate[i][j]+".value='"+ strRateValidate + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	for(i=0;i<ARRAYNUM;i++)
	{
		if(gRateCodeRate[i][0]!=null)
		{
			if (gRateCodeRate[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gRateCodeRate[i][j]!=null)
					{
						eval(strFormName + "." + gRateCodeRate[i][j]+".value='"+ fRate + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

}

/**
 * 功能块（利率编号控件）注释结束。
 */



/**
 * 功能块（利率名称控件）注释开始：
 *
 */

/**
 * 创建利率名称控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strRateName 利率名称
 * @param lRateID 利率代码
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createRateNameCtrl(strFormName,strCtrlName,strRateName,lRateID,lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showRateNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRateName + "' onkeydown='javascript:isSelectRateName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示利率名称窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showRateNameCtrl(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strRateName;
	eval("strRateName="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lCurrencyID=" + lCurrencyID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strRateName=" + strRateName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectRateName.jsp?"+paraState  , "SelectRateName" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示利率名称窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectRateName(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showRateNameCtrl(strFormName,strCtrlName,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出利率名称控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strRateName 利率名称
 * @param lRateID 利率代码
 */
function outputRateNameCtrl(strFormName,strCtrlName,strRateName,lRateID)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lRateID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strRateName +"'");

}

/**
 * 功能块（利率名称控件）注释结束。
 */



/**
 * 功能块（客户名称控件）注释开始：
 *
 */

/**
 * 创建客户名称控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strClientName 客户名称
 * @param lClientID 客户代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createClientNameCtrl(strFormName,strCtrlName,strClientName,lClientID,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showClientNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lClientID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strClientName + "' onkeydown='javascript:isSelectClientName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示客户名称窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showClientNameCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strClientName;
	eval("strClientName="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strClientName=" + strClientName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectClientName.jsp?"+paraState  , "SelectClientName" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示客户名称窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectClientName(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showClientNameCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出客户名称控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strClientName 客户名称
 * @param lClientID 客户代码
 */
function outputClientNameCtrl(strFormName,strCtrlName,strClientName,lClientID)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lClientID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strClientName +"'");

}

/**
 * 功能块（客户名称控件）注释结束。
 */




/**
 * 功能块（客户名称控件）注释开始：
 *
 */

/**
 * 创建客户名称控件(长Input控件)
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strClientName 客户名称
 * @param lClientID 客户代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createClientNameCtrl1(strFormName,strCtrlName,strClientName,lClientID,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showClientNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lClientID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' size='59' name='" + strCtrlName + "Ctrl' value='" + strClientName + "' onkeydown='javascript:isSelectClientName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </font></td>");
}

//其他方法借用  createClientNameCtrl（）

/**
 * 功能块（客户名称控件）注释结束。
 */



/**
 * 功能块（展期申请控件）注释开始：
 *
 */

/**
 * 创建展期申请控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称
 * @param lExtendApplyID 申请标识
 * @param strExtendApplyNo 申请编号
 * @param lLoanTypeID 贷款申请类型标识（外汇部分送入任何一种外汇申请类型皆可）
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币中标识
 * @param strTitle 控件标题名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createExtendApplyCtrl(strFormName,strCtrlName,lExtendApplyID,strExtendApplyNo,lLoanTypeID,lOfficeID,lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showExtendApplyCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lExtendApplyID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strExtendApplyNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strExtendApplyNo + "' onkeydown='javascript:isSelectExtendApply(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * 显示申请选择框
 * @param strFormName
 * @param strCtrlName
 */
function showExtendApplyCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)//收款方申请书编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strExtendApplyNo;
	eval("strExtendApplyNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strExtendApplyNo=" + strExtendApplyNo + "&lLoanTypeID=" + lLoanTypeID+ "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectExtendApply.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了展期申请控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectExtendApply(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showExtendApplyCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出展期申请控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lExtendApplyID 申请标识
 * @param strExtendApplyNo 申请编号
 */
function outputExtendApplyCtrl(strFormName,strCtrlName,lExtendApplyID,strExtendApplyNo)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lExtendApplyID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strExtendApplyNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strExtendApplyNo +"'");

}

/**
 * 功能块（展期申请控件）注释结束。
 */


/**
 * 功能块（客户表中的账户号控件）注释开始：
 *
 */

/**
 * 创建客户表中的账户号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strClientAccount 客户表中的账户号
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createClientAccountCtrl(strFormName,strCtrlName,strClientAccount,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showClientAccountCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box   type='text' name='" + strCtrlName + "' value='" + strClientAccount + "' onkeydown='javascript:isSelectClientAccount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示客户表中的账户号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showClientAccountCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strClientAccountID;
	eval("strClientAccountID="+ strFormName + "."+ strCtrlName + ".value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strClientAccountID="+strClientAccountID +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectClientAccount.jsp?"+paraState  , "SelectClientAccount" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示客户表中的账户号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectClientAccount(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showClientAccountCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * 输出客户表中的账户号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strClientAccount 客户表中的账户号
 */
function outputClientAccountCtrl(strFormName,strCtrlName,strClientAccount)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strClientAccount+ "'");

}

/**
 * 功能块（客户表中的账户号控件）注释结束。
 */


/**
 * 功能块（贴现控件）注释开始：
 *
 */



/**
 * 创建贴现控件
 * @param strFormName 控件所在form的名称
 * @param lDiscountID 贴现标识
 * @param strDiscountNo 贴现编号
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param objClientID 客户对象
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createDiscountCtrl(strFormName,strCtrlName,lDiscountID,strDiscountNo,lOfficeID,lCurrencyID,strTitle,objClientID,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showDiscountCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" +  strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lDiscountID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strDiscountNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strDiscountNo + "' onkeydown='javascript:isSelectDiscount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" +  strNextCtrlName + "\")'>"
			  + "<input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ " </td>");
				
}




/**
 * 显示贴现选择框
 * @param strFormName
 * @param strCtrlName
 */
function showDiscountCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方贴现编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strDiscountNo;

	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";


	eval("strDiscountNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName=" + strCtrlName + "&lClientID=" + lClientID + "&strDiscountNo=" + strDiscountNo + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectDiscount.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了贴现控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectDiscount(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showDiscountCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出贴现控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lDiscountID 贴现标识
 * @param strDiscountNo 贴现编号
 */
function outputDiscountCtrl(strFormName,strCtrlName,lDiscountID,strDiscountNo,strDiscountClientName)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lDiscountID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strDiscountNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strDiscountNo +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gDiscountClientName[i][0]!=null)
		{
			if(gDiscountClientName[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gDiscountClientName[i][j]!=null)
					{
						eval(strFormName+ "." + gDiscountClientName[i][j]+".value='" + strDiscountClientName + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

}


/**
 * 设置需要输出贴现客户名称的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setDiscountClientName(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gDiscountClientName[i][0]!=null)
		{
			if (gDiscountClientName[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gDiscountClientName[i][j]==null)
					{
						gDiscountClientName[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gDiscountClientName[i][0]=strCtrlName;
			gDiscountClientName[i][1]=objCtrl;
			break;
		}

	}

}


/**
 * 创建贴现控件
 * @param strFormName 控件所在form的名称
 * @param lDiscountID 贴现标识
 * @param strDiscountNo 贴现编号
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param objClientID 客户对象
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createDiscountCtrl1(strFormName,strCtrlName,lDiscountID,strDiscountNo,lOfficeID,lCurrencyID,strTitle,objClientID,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showDiscountCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" +  strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lDiscountID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strDiscountNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strDiscountNo + "' onkeydown='javascript:isSelectDiscount1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" +  strNextCtrlName + "\")'>"
			  + "<input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ " </td>");
				
}




/**
 * 显示贴现选择框
 * @param strFormName
 * @param strCtrlName
 */
function showDiscountCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方贴现编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strDiscountNo;

	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";


	eval("strDiscountNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName=" + strCtrlName + "&lClientID=" + lClientID + "&strDiscountNo=" + strDiscountNo + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectDiscount1.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了贴现控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectDiscount1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showDiscountCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出贴现控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lDiscountID 贴现标识
 * @param strDiscountNo 贴现编号
 */
function outputDiscountCtrl1(strFormName,strCtrlName,lDiscountID,strDiscountNo,strDiscountClientName)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lDiscountID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strDiscountNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strDiscountNo +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gDiscountClientName[i][0]!=null)
		{
			if(gDiscountClientName[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gDiscountClientName[i][j]!=null)
					{
						eval(strFormName+ "." + gDiscountClientName[i][j]+".value='" + strDiscountClientName + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

}


/**
 * 设置需要输出贴现客户名称的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setDiscountClientName(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gDiscountClientName[i][0]!=null)
		{
			if (gDiscountClientName[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gDiscountClientName[i][j]==null)
					{
						gDiscountClientName[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gDiscountClientName[i][0]=strCtrlName;
			gDiscountClientName[i][1]=objCtrl;
			break;
		}

	}

}



/**
 * 功能块（贴现控件）注释结束。
 */



/**
 * 功能块（债券品种控件）注释开始：
 *
 */

/**
 * 创建债券品种控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strCreditName 债券品种
 * @param lCreditID 债券标示
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createCreditNameCtrl(strFormName,strCtrlName,strCreditName,lCreditID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showCreditNameCtrl(\"" + strFormName + "\",\"" + strCtrlName +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lCreditID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strCreditName + "' onkeydown='javascript:isSelectCreditName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示债券品种窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showCreditNameCtrl(strFormName,strCtrlName,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strCreditName;
	eval("strCreditName="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strCreditName=" + strCreditName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectCreditName.jsp?"+paraState  , "SelectCreditName" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示债券品种窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectCreditName(strFormName,strCtrlName,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showCreditNameCtrl(strFormName,strCtrlName,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出债券品种控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strCreditName 债券品种
 * @param lCreditID 债券标示
 */
function outputCreditNameCtrl(strFormName,strCtrlName,strCreditName,lCreditID)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lCreditID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strCreditName +"'");

}


/**
 * 功能块（债券品种控件）注释结束。
 */



/**
 * 功能块（债券代码控件）注释开始：
 *
 */

/**
 * 创建债券代码控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strCreditCode 债券代码
 * @param lCreditID 债券标示
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createCreditCodeCtrl(strFormName,strCtrlName,strCreditCode,lCreditID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showCreditCodeCtrl(\"" + strFormName + "\",\"" + strCtrlName +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lCreditID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strCreditCode + "' onkeydown='javascript:isSelectCreditCode(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示债券代码窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showCreditCodeCtrl(strFormName,strCtrlName,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strCreditCode;
	eval("strCreditCode="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strCreditCode=" + strCreditCode +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectCreditCode.jsp?"+paraState  , "SelectCreditCode" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示债券代码窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectCreditCode(strFormName,strCtrlName,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showCreditCodeCtrl(strFormName,strCtrlName,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出债券代码控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strCreditCode 债券代码
 * @param lCreditID 债券标示
 */
function outputCreditCodeCtrl(strFormName,strCtrlName,strCreditCode,lCreditID,strName1,strCode1)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lCreditID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strCreditCode +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gCreditTypeName[i][0]!=null)
		{
			if(gCreditTypeName[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gCreditTypeName[i][j]!=null)
					{
						eval(strFormName+ "." + gCreditTypeName[i][j]+".value='" + strName1 + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gCreditTypeNo[i][0]!=null)
		{
			if(gCreditTypeNo[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gCreditTypeNo[i][j]!=null)
					{
						eval(strFormName+ "." + gCreditTypeNo[i][j]+".value='" + strCode1 + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

}




/**
 * 设置需要输出债券品种名称的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setCreditTypeName(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gCreditTypeName[i][0]!=null)
		{
			if (gCreditTypeName[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gCreditTypeName[i][j]==null)
					{
						gCreditTypeName[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gCreditTypeName[i][0]=strCtrlName;
			gCreditTypeName[i][1]=objCtrl;
			break;
		}

	}

}
/**
 * 设置需要输出债券品种编码的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setCreditTypeNo(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gCreditTypeNo[i][0]!=null)
		{
			if (gCreditTypeNo[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gCreditTypeNo[i][j]==null)
					{
						gCreditTypeNo[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gCreditTypeNo[i][0]=strCtrlName;
			gCreditTypeNo[i][1]=objCtrl;
			break;
		}

	}

}




/**
 * 功能块（债券代码控件）注释结束。
 */


 /**
 * 功能块（利率显示控件）注释开始束：
 *
 */

/**
 * 格式化利率
 * @param strData 需要格式化的数据
 * @return 返回格式化的利率
 */
 function formatIntereRate(fromName,rateCntlName)
 {
  var strData=eval(fromName + '.' + rateCntlName + '.value');
	if(isInnerFloat(strData))
 	{
 		
		if(strData!="")
 		{
			var i,strTemp;

			//将小数点前和后的数据分别取出来
	 		var nPoint;
	 		nPoint=strData.indexOf(".");
	 		var strFront=strData,strEnd="";
	 		if(nPoint!=-1)
	 		{
	 			strFront=strData.substring(0,nPoint);
	 			strEnd=strData.substring(nPoint+1,strData.length);
	 		}

			//小数点前如果是零位，则付0
			if (strFront.length==0)
			{
				strFront = "0";
			}
			//补或者截小数点后面的值，保持四位
	 		if(strEnd.length>6)
	 		{
	 			strEnd=strEnd.substring(0,6);
	 		}
	 		else
	 		{
	 			if(strEnd.length==1)
	 			{
	 				strEnd=strEnd+ "00000";
	 			}
	 			else
				if (strEnd.length==2)
				{
					strEnd=strEnd+ "0000";
				}
				else
				if (strEnd.length==3)
				{
					strEnd=strEnd+ "000";
				}
				else
				if (strEnd.length==4)
				{
					strEnd=strEnd+ "00";
				}
				else
				if (strEnd.length==5)
				{
					strEnd=strEnd+ "0";
				}
				else
	 				if(strEnd.length==0)
	 				{
	 					strEnd="000000";
	 				}
	 		}
	 		strData=strFront+"." + strEnd;
 		}
		else
		{
			strData = "0.000000";
		}
	}
	eval(fromName + "." + rateCntlName + ".value='"+strData+"'");
 }

 /**
 * 功能块（利率显示控件）注释结束：
 *
 */
 
 
 
/**
 * 功能块（交易号控件）注释开始：
 *
 */

/**
 * 创建交易号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strInvestmentCode 交易号
 * @param lInvestmentID 交易代码
 * @param lCurrencyID 币种标识
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createInvestmentCodeCtrl(strFormName,strCtrlName,strInvestmentCode,lInvestmentID,lCurrencyID,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showInvestmentCodeCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lInvestmentID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strInvestmentCode + "' onkeydown='javascript:isSelectInvestmentCode(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示交易号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showInvestmentCodeCtrl(strFormName,strCtrlName,lCurrencyID,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strInvestmentCode;
	eval("strInvestmentCode="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lCurrencyID=" + lCurrencyID + "&lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strInvestmentCode=" + strInvestmentCode +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectInvestmentCode.jsp?"+paraState  , "SelectInvestmentCode" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示交易号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lCurrencyID 币种标识
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectInvestmentCode(strFormName,strCtrlName,lCurrencyID,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showInvestmentCodeCtrl(strFormName,strCtrlName,lCurrencyID,lOfficeID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出交易号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strInvestmentCode 交易号
 * @param lInvestmentID 交易代码
 */
function outputInvestmentCodeCtrl(strFormName,strCtrlName,strInvestmentCode,lInvestmentID)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + lInvestmentID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strInvestmentCode +"'");

}

/**
 * 功能块（交易号控件）注释结束。
 */



/**
 * 显示不可用的账户
 * @param strCtrlName   控件名称
 * @param strAccountNo  账户号
 * @param strTitle      标题名称
 * @param strFirstTD    第一个TD里面的参数
 * @param strSecondTD   第二个TD里面的参数
 *
 * created by Hally Zhang    2002-02-01
 *
 */
function showDisableAccountCtrl(strCtrlName,strAccountNo,strTitle,strFirstTD,strSecondTD)
{
  if (strFirstTD=="" || strFirstTD==null)
	{
			strFirstTD="valign='middle' height='20' width='33%'";
	}

	if(strSecondTD==null)
	{
			strSecondTD="";
	}

	var strAccountNo1,strAccountNo2,strAccountNo3,strAccountNo4;
	strAccountNo1="";
	strAccountNo2="";
	strAccountNo3="";
	strAccountNo4="";
	if (strAccountNo!="")
	{
		var nNum,nStart;
		nStart=0;
		nNum=1;
		for (i = 0;  i < strAccountNo.length;  i++)
		{
			var ch;
			ch = strAccountNo.charAt(i);
			if ((ch=="-") )
			{
				eval("strAccountNo" +nNum +"=strAccountNo.substring(nStart,i)");
/*
				switch(nNum)
				{
					case 1:
					strAccountNo1=strAccountNo.substring(nStart,i);
					break;
					case 2:
					strAccountNo2=strAccountNo.substring(nStart,i);
					break;
					case 3:
					strAccountNo3=strAccountNo.substring(nStart,i);
					break;
				}
*/
//				eval("strAccountNo" + nNum + "=" + strAccountNo.substring(nStart,i-1));
				nNum++;
				nStart=i+1;
			}

			if(nStart<strAccountNo.length)
			{
				eval("strAccountNo" + nNum + "=" + "strAccountNo.substring(nStart,strAccountNo.length)");
			}

		}
	}

	document.writeln("<td " + strFirstTD + ">" + strTitle + "： "
			+ "  </td>"
			+ "<td " + strSecondTD + " >  "
			+ " <input type='text' disabled name='" + strCtrlName + "Ctrl' class = 'box' maxlength='2' size='2' value='" + strAccountNo1 + "'>"
			+ "  - "
			+ "   <input type='text' disabled name='" + strCtrlName + "zhh2' class = 'box' maxlength='2' size='2' value='" + strAccountNo2 + "'>"
			+ "  - "
			+ "  <input type='text' disabled name='" + strCtrlName + "zhh3' size='4' maxlength='4' class='box'  value='" + strAccountNo3 + "'>");
	if(strAccountNo4!="")
	{
		document.writeln( "  - "
			+ "  <input type='text' disabled name='" + strCtrlName + "zhh4' size='1' maxlength='1' class='box'  value='" + strAccountNo4 + "' >"
			+ " "
			+ "</td>");
	}
	else if(strAccountNo1=="" && strAccountNo2=="" && strAccountNo3=="" && strAccountNo4=="")
	{//当输入的帐户为空时，显示四个文本框
		document.writeln( "  - "
			+ "  <input type='text' disabled name='" + strCtrlName + "zhh4' size='1' maxlength='1' class='box'  value='" + strAccountNo4 + "' >"
			+ " "
			+ "</td>");
	}
}

/**
 * 显示中文金额
 */

	var CN = new Array(10);
	CN[0]="零";
	CN[1]="壹";
	CN[2]="贰";
	CN[3]="叁";
	CN[4]="肆";
	CN[5]="伍";
	CN[6]="陆";
	CN[7]="柒";
	CN[8]="捌";
	CN[9]="玖";
	var LP = new Array(12);
	LP[0]="仟";
	LP[1]="佰";
	LP[2]="拾";
	LP[3]="亿";
	LP[4]="仟";
	LP[5]="佰";
	LP[6]="拾";
	LP[7]="万";
	LP[8]="仟";
	LP[9]="佰";
	LP[10]="拾";
	LP[11]="元";
	var RP =new Array(2);
	RP[0]= "角";
	RP[1]="分";

	/**
	 * 显示中文金额
	 */
	function showChinese(sAmount,nCurrencyID)
	{
		var sResult = "";
		if (sAmount == null || sAmount=="") 
		{
				sResult = "零元";
		} 
		else 
		{
			var nPoint = sAmount.indexOf(".");
			var sLeft="";
			var sRight="";
			if (nPoint != -1) 
			{
				sLeft = sAmount.substring(0,nPoint);
				sRight = sAmount.substring(nPoint+1,sAmount.length);
			}
			else
			{
				sLeft=sAmount;
			}
			sResult = getLeftOfPoint(sLeft);
			if (sResult == "" || sResult == null)
			{
  			switch(nCurrencyID)
  			{
  				case 2:
  					sResult="美元" ;
  					break;
  				case 3:
  					sResult="英镑";
  					break;
  				case 4:
  					sResult="欧元";
  					break;
  				case 5:
  					sResult="日元";
  					break;
  				case 6:
  					sResult="新加坡元";
  					break;
  			}
			}
			else 
			{
  			switch(nCurrencyID)
  			{
  				case 1:
  				default:
  					sResult=sResult + "元";
  					break;
  				case 2:
  					sResult="美元" + sResult + "元";
  					break;
  				case 3:
  					sResult="英镑" + sResult + "镑";
  					break;
  				case 4:
  					sResult="欧元" + sResult+ "元";
  					break;
  				case 5:
  					sResult="日元" + sResult+ "元";
  					break;
  				case 6:
  					sResult="新加坡元" + sResult+ "元";
  					break;
  			}
  			if(isLeftHaveSingle(sLeft) && getRightOfPoint(sRight,nCurrencyID)!="")
  			{
  				sResult=sResult + "零";
  			}
  	  }
			sResult=sResult+getRightOfPoint(sRight,nCurrencyID);
			if(isFullRight(sRight,nCurrencyID)==true)
			{
				sResult=sResult + "整";
			}
		}
		return sResult;
	}
	
	/**
	 * 左值个位是否有值
	 * @param nData 
	 */
	function isLeftHaveSingle(nData)
	{
		if(nData.substring(nData.length-1,nData.length)>"0")
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	
	/**
	 * 得到金额的左值
	 * @param nData 值
	 */
	function getLeftOfPoint(nData)
	{
		var nYiNum=0;//亿位数
		var nWanNum=0;//万位数
		var nRemainNum=0;//剩余的数字
		var nThousandBelowNum=0;//千以下的数据
		var strReturn="";
		
		nRemainNum=nData;
		nYiNum=parseInt(nRemainNum)/100000000;
		if(nYiNum<1)
		{
			nYiNum=0;
		}
		nRemainNum=parseInt(nRemainNum) - parseInt(nYiNum)*100000000;
		nWanNum=parseInt(nRemainNum)/10000;
		if(nWanNum<1)
		{
			nWanNum=0;
		}
		nRemainNum=parseInt(nRemainNum)-parseInt(nWanNum)*10000;
		if(nYiNum>0)//如果亿位数>0，则处理
		{
			if(nYiNum>=10000)//如果大于1万，递归
			{
				strReturn=strReturn + getLeftOfPoint(nYiNum);
			}
			else//如果小于一万，得出千以下数据
			{
				strReturn=strReturn+getThousandChineseData(nYiNum);
			}
			strReturn=strReturn + "亿";
			if(nWanNum>0 || nRemainNum >0)//说明有可能补0
			{
				if((parseInt(parseInt(nYiNum)/10))==parseInt(nYiNum)/10)//说明亿位为0
				{
					strReturn=strReturn + "零";
				}
				else//亿位不为0
				{
					if(parseInt(nWanNum)<1000)//小于一千，需要补0
					{
						strReturn=strReturn + "零";
					}
				}
			}
		}
		if(nWanNum>0)//有万
		{
			strReturn=strReturn + getThousandChineseData(nWanNum);
			strReturn=strReturn + "万";
			if(nRemainNum>0)//说明有可能补0
			{
				if((parseInt(parseInt(nWanNum)/10))==parseInt(nWanNum)/10)//说明亿位为0
				{
					strReturn=strReturn + "零";
				}
				else//亿位不为0
				{
					if(parseInt(nRemainNum)<1000)//小于一千，需要补0
					{
						strReturn=strReturn + "零";
					}
				}
			}				
		}
		if(nRemainNum>0)
		{
			strReturn=strReturn + getThousandChineseData(nRemainNum);
		}
		return strReturn;
	}
	
	/**
	 * 得到千以下数据的中文
	 */
	function getThousandChineseData(nData)
	{
		var strReturn="";
		if(parseInt(nData)>9999)
		{
			return "错误的千";
		}
		else
		{
			var nRemainNum=nData;//剩余的数
			var nThousandNum=0;//千位数
			var nHundredNum=0;//百位数
			var nTenNum=0;//十位数
			var nNum=0;//个位数
			nThousandNum=parseInt(parseInt(nRemainNum)/1000);//千位数
			nRemainNum=parseInt(nRemainNum)-parseInt(nThousandNum)*1000;
			nHundredNum=parseInt(parseInt(nRemainNum)/100);
			nRemainNum=parseInt(nRemainNum)-parseInt(nHundredNum)*100;
			nTenNum=parseInt(parseInt(nRemainNum)/10);
			nNum=parseInt(nRemainNum)-parseInt(nTenNum)*10;
			if(parseInt(nThousandNum)>0) 
			{
				strReturn=strReturn + CN[nThousandNum]+ "仟";
			}
			if(parseInt(nHundredNum)>0)
			{
				strReturn=strReturn + CN[nHundredNum] + "佰";
			}
			if(parseInt(nTenNum)>0)
			{
				if(nThousandNum>0 && nHundredNum==0)
				{
					strReturn=strReturn + "零";
				}
				strReturn=strReturn + CN[nTenNum] + "拾";
			}
			if(parseInt(nNum)>0)
			{
				if(nTenNum==0)
				{
					if(nThousandNum>0 || nHundredNum>0)
					{
						strReturn=strReturn + "零";
					}
				}
				strReturn=strReturn+CN[nNum];
			}
		}
		return strReturn;
	}
	
	/**
	 * 根据金额右边的值判断，是否加整
	 * @param sRight 右边的值
	 * @param nCurrencyID 币种
	 */
	function isFullRight(sRight,nCurrencyID)
	{
		if(sRight=="")
		{
			sRight="00";
		}
		else
		{
			if(sRight.length==1)
			{
				sRight=sRight + "0";
			}
		}
		var bIsFull=false;
		if(sRight=="")
		{
			bIsFull=true;
		}
		else
		{
			sRight=sRight.substring(0,2);
			var sTempRight = parseInt(sRight);
			if (sRight == "08")
			{
			  sTempRight = 8;
			}
			if (sRight == "09")
			{
			  sTempRight = 9;
			}
			if (sTempRight==0 )
			{
				bIsFull=true;
			}
			else
			{
				switch(nCurrencyID)
				{
					case 1://人民币
					  if(sTempRight>=10)
					  {
				
					  	if(sRight.substring(1,2)=="0" || sRight.substring(1,2)=="")
					  	{
					  		bIsFull=true;
					  	}
					  }	
					  break;
					case 2://美元
					case 3://英镑
					case 4://欧元
					case 6://新加坡元
					  if(sTempRight==0)
					  {
					  	bIsFull=true;
					  }
					  break;
					case 5://日元
					  bIsFull=true;
					  break;
					  
				}
			}
		}
		return bIsFull;

	}

	/** 
	 * 得到小数点右边的部分
	 * @param sRight 右边的值
	 * @param nCurrencyID 币种
	 */
	function getRightOfPoint(sRight,nCurrencyID)
	{
		if(sRight=="")
		{
			sRight="00";
		}
		else
		{
			if(sRight.length==1)
			{
				sRight=sRight + "0";
			}
		}
		sRight=sRight.substring(0,2);
		var sb = "";
		var sTempRight = parseInt(sRight);
		if (sRight == "08")
		{
		  sTempRight = 8;
		}
		if (sRight == "09")
		{
		  sTempRight = 9;
		}
		  
		if (sTempRight > 0)
		{
		  if(sTempRight<10)
			{
				sb=sb + "零";
			}
			switch(nCurrencyID)
			{
				case 1:
				default:
					for (var i=0; i<sRight.length; i++)
					{
							var nNum = parseInt(sRight.substring(i,i+1));
							if (nNum != 0)
							{
									sb=sb+CN[nNum];
									sb=sb+RP[i];
							}
					}
					break;
				case 2:
					
					sb=sb+getThousandChineseData(sTempRight)+"美分";
					break;
				case 3:
					sb=sb+getThousandChineseData(sRight)+ "便士";
					break;
				case 4:
					sb=sb+getThousandChineseData(sRight)+ "欧分";
					break;
				case 6:
					sb=sb+getThousandChineseData(sRight)+ "新加坡分";
					break;
					
			}
		}
		return sb;

	}

	function isKeyPosition(position)
	{
		switch (position) {
	    	case 3: return true;
	    	case 7: return true;
	    	default: return false;
	    }
	}


	function CheckSuperPri(strFormName,strVarName)
	{

		   var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=300,height=120,scrollbars=no";
	       var g_win;
		   var paraState="strFormName=" + strFormName +"&strVarName="+strVarName;
	       g_win=window.open( "/NASApp/cpf/settlement/tran/CheckSuperPrivilege.jsp?"+paraState  , "CheckSuperPrivilege" , sFeatures , false );
           g_win.focus();


	}
	 
	function signature( form_signature)
	{
		for(c=0; c < form_signature.elements.length; c++)
		{
		    if( form_signature.elements[c].value != null && form_signature.elements[c].value.length>0 )
				InfoSecNetSign1.addFormItem(form_signature.elements[c].value);
		}
		InfoSecNetSign1.makeAttachedSign();
		form_signature.signature.value = InfoSecNetSign1.attachedSign;
		if (form_signature.signature.value)
		{
			alert(" 您的数字签名 : " +form_signature.signature.value);
			return true;
		}
		if (!form_signature.signature.value)
		{
			alert("签名操作取消！");
			return false;
		}
	
	}
	
	
/**
 * 创建Libor利率编号控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
* @param strLiborRateCode Libor利率编号
 * @param lLiborRateID Libor利率代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createLiborRateCodeCtrl(strFormName,strCtrlName,strLiborRateCode,lLiborRateID, lCurrencyID,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showLiborRateCodeCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strLiborRateCode + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLiborRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strLiborRateCode + "' onkeydown='javascript:isSelectLiborRateCode(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strLiborRateCode + "\",\"" + lCurrencyID + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示Libor利率窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件  
 */
function showLiborRateCodeCtrl(strFormName,strCtrlName,strLiborRateCode,lOfficeID, lCurrencyID,strNextCtrlName)
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strLiborRate;
	eval("strLiborRateCode="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID + "&NCURRENCYID=" + lCurrencyID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strLiborRateCode=" + strLiborRateCode +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectLiborRateCode.jsp?"+paraState  , "SelectLiborRate" , sFeatures , false );
	//alert("3");
	g_win.focus();
}

/**
 * 是否显示Libor利率窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectLiborRateCode(strFormName,strCtrlName,strLiborRateCode,lCurrencyID,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showLiborRateCodeCtrl(strFormName,strCtrlName,strLiborRateCode,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出Libor利率控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strLiborRateName Libor利率名称
 * @param lLiborRateID Libor利率代码
 */
function outputLiborRateCodeCtrl(strFormName,strCtrlName,strLiborRateCode,strLiborName,strCurrency)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	//eval(strFormName + "." + strCtrlName + ".value='" + lLiborRateID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strLiborRateCode +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gLiborRateCurrency[i][0]!=null)
		{
			if(gLiborRateCurrency[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gLiborRateCurrency[i][j]!=null)
					{
						eval(strFormName+ "." + gLiborRateCurrency[i][j]+".value='" + strCurrency + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

	for(i=0;i<ARRAYNUM;i++)
	{
		if (gLiborName[i][0]!=null)
		{
			if(gLiborName[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gLiborName[i][j]!=null)
					{
						eval(strFormName+ "." + gLiborName[i][j]+".value='" + strLiborName + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}

}



/**
 * 设置需要输出币种的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setLiborCurrencyID(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gLiborRateCurrency[i][0]!=null)
		{
			if (gLiborRateCurrency[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gLiborRateCurrency[i][j]==null)
					{
						gLiborRateCurrency[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gLiborRateCurrency[i][0]=strCtrlName;
			gLiborRateCurrency[i][1]=objCtrl;
			break;
		}

	}

}

function setLiborName(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa="";
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gLiborName[i][0]!=null)
		{
			if (gLiborName[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gLiborName[i][j]==null)
					{
						gLiborName[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gLiborName[i][0]=strCtrlName;
			gLiborName[i][1]=objCtrl;
			break;
		}

	}	
}

/**
 * 功能块（Libor利率编号控件）注释结束。
 */


/**
 * 功能块（与客户放大镜关联的客户账号控件）注释开始。
 */
 
 
 /**
 * 创建办事处账户控件控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的,其value是记录办事处的账户编号，不记录ID！
 * @param strOfficeAccount 办事处账户编号
 * @param lCLIENTID 借款单位ID，如果小于等于0，则查出全部
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createOfficeAccountCtrl1(strFormName,strCtrlName,strOfficeAccount,objClientID, lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showOfficeAccountCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strOfficeAccount + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strOfficeAccount+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' readonly value='" + strOfficeAccount + "' onkeydown='javascript:isSelectOfficeAccount1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strOfficeAccount + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"  
				+ " </td>");
}


/**
 * 显示办事处账户编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showOfficeAccountCtrl1(strFormName, strCtrlName, strOfficeAccount, lCurrencyID, strNextCtrlName)
{
	//得到客户标识
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strLiborRate;
	eval("strOfficeAccount="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="NCurrencyID=" + lCurrencyID + "&NCLIENTID=" + lClientID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strOfficeAccount=" + strOfficeAccount +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectOfficeAccount.jsp?"+paraState  , "SelectOfficeAccount" , sFeatures , false );
	//alert("3");
	g_win.focus();
}

/**
 * 是否显示办事处账户编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectOfficeAccount1(strFormName,strCtrlName,strOfficeAccount, lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showOfficeAccountCtrl1(strFormName,strCtrlName,strOfficeAccount, lCurrencyID, strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}




/**
 * 功能块（与客户放大镜关联的客户账号控件）注释结束。
 */

/**
 * 功能块（与客户ID关联的客户账号控件）注释开始。
 */
 
 
 
 
 /**
 * Writen by wli@isoftstone.com
 * 创建办事处账户控件控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的,其value是记录办事处的账户编号，不记录ID！
 * @param strOfficeAccount 办事处账户编号
 * @param lCLIENTID 借款单位ID，如果小于等于0，则查出全部
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createOfficeAccountCtrl(strFormName,strCtrlName,strOfficeAccount,lCLIENTID, lCurrencyID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showOfficeAccountCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strOfficeAccount + "\",\"" + lCLIENTID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strOfficeAccount+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' readonly value='" + strOfficeAccount + "' onkeydown='javascript:isSelectOfficeAccount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strOfficeAccount + "\",\"" + lCLIENTID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"  
				+ " </td>");
}


/**
 * 显示办事处账户编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showOfficeAccountCtrl(strFormName, strCtrlName, strOfficeAccount, NCLIENTID, lCurrencyID, strNextCtrlName)
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strLiborRate;
	eval("strOfficeAccount="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="NCurrencyID=" + lCurrencyID + "&NCLIENTID=" + NCLIENTID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strOfficeAccount=" + strOfficeAccount +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectOfficeAccount.jsp?"+paraState  , "SelectOfficeAccount" , sFeatures , false );
	//alert("3");
	g_win.focus();
}

/**
 * 是否显示办事处账户编号窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectOfficeAccount(strFormName,strCtrlName,strOfficeAccount, NCLIENTID, lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showOfficeAccountCtrl(strFormName,strCtrlName,strOfficeAccount, NCLIENTID, lCurrencyID, strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
		}
	}
}


/**
 * 输出办事处账户编号控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strLiborRateName Libor利率名称
 * @param lLiborRateID Libor利率代码
 */
function outputOfficeAccountCtrl(strFormName,strCtrlName,strOfficeAccountCode,strOfficeName)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	//eval(strFormName + "." + strCtrlName + ".value='" + lLiborRateID+ "'");
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strOfficeAccountCode +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gOfficeAccount[i][0]!=null)
		{
			if(gOfficeAccount[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gOfficeAccount[i][j]!=null)
					{
						eval(strFormName+ "." + gOfficeAccount[i][j]+".value='" + strOfficeAccountCode + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}


}


/**
 * 功能块（与客户ID关联的客户账号控件）注释结束。
 */




/**
 * 功能块（带状态的申请书控件）注释开始：
 *
 */



/**
 * 创建申请书控件
 * @param strFormName 控件所在form的名称
 * @param lLoanInfoID 申请书标识
 * @param strLoanInfoNo 申请书编号
 * @param lLoanTypeID 贷款申请类型标识
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param lStatusID 状态 1-已提交和已审批
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createStatusLoanInfoCtrl(strFormName,strCtrlName,lLoanInfoID,strLoanInfoNo,lLoanTypeID,lOfficeID,lCurrencyID,strTitle,lStatusID,strNextCtrlName,strFirstTD,strSecondTD)
{
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + "> " + strTitle + "：<a href='javascript:showStatusLoanInfoCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID+ "\",\"" + lStatusID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLoanInfoID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strLoanInfoNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strLoanInfoNo + "' onkeydown='javascript:isSelectStatusLoanInfo(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\"" + lStatusID+ "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * 显示申请书选择框
 * @param strFormName
 * @param strCtrlName
 */
function showStatusLoanInfoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)//收款方申请书编号
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strLoanInfoNo;
	eval("strLoanInfoNo="+ strFormName + "."+ strCtrlName + "Ctrl.value");
	var paraState="lOfficeID=" + lOfficeID +"&lCurrencyID=" + lCurrencyID+ "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName + "&strLoanInfoNo=" + strLoanInfoNo + "&lLoanTypeID=" + lLoanTypeID+ "&lStatusID=" + lStatusID+ "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectStatusLoanInfo.jsp?"+paraState  , "SelectCustom" , sFeatures , false );
	g_win.focus();
}

/**
 * 是否选择了申请书控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 */
function isSelectStatusLoanInfo(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showStatusLoanInfoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''");
		}
	}
}


/**
 * 输出申请书控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lLoanInfoID 申请书标识
 * @param strLoanInfoName 申请书名称
 * @param strLoanInfoNo 申请书编号
 * @param strAccountID 一个申请书所有的帐户
 */
function outputStatusLoanInfoCtrl(strFormName,strCtrlName,lLoanInfoID,strLoanInfoNo)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value=" + lLoanInfoID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strLoanInfoNo +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strLoanInfoNo +"'");

}

/**
 * 功能块（带状态的申请书控件）注释结束。
 */
/**
 * 功能块（现金流向控件）注释开始：
 *
 */

/**
 * 创建现金流向控件  注意！！！！！：这个控件命名不规范，标识是控件名称+"ID"，文本框是控件名称
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param strAbstract 现金流向
 * @param lCashFlowID 现金流向ID 
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createCashFlowCtrl(strFormName,strCtrlName,strCashFlow,lCashFlowID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{ 
		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}
		if(strSecondTD==null)
		{
				strSecondTD="";
		} 
		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showCashFlowCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lCashFlowID+"' ID='"+strCtrlName+ "ID' NAME='"+strCtrlName+"ID'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box   type='text' name='" + strCtrlName + "' value='" + strCashFlow + "' onkeydown='javascript:isSelectCashFlow(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>"); 
}

 
 
/**
 * 显示摘要窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称 
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showCashFlowCtrl(strFormName,strCtrlName,strNextCtrlName)//收款方客户编号
{ 
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strCashFlow = eval(strFormName+"."+strCtrlName+".value");
	var paraState="strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName+"&strCashFlow="+strCashFlow;
	g_win=window.open( "../../jsp/SelectCashFlow.jsp?"+paraState  , "SelectCashFlow" , sFeatures , false );
 	g_win.focus();
}

/**
 * 是否显示摘要窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectCashFlow(strFormName,strCtrlName,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showCashFlowCtrl(strFormName,strCtrlName,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + "ID.value=-1"); 
		}
	}
}


/**
 * 输出摘要控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param strAbstract 开户行名称
 * @param strCode 摘要代码
 */
function outputCashFlowCtrl(strFormName,strCtrlName,strCashFlow,strCashFlowID)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strCashFlow+ "'"); 
	eval(strFormName + "." + strCtrlName +  "ID"+".value='" + strCashFlowID +"'");  
}

/**
 * 功能块（利率控件）注释结束。
 */
/**
 * 功能块（利率控件）注释开始：
 *
 */

/**
 * 创建利率控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param fFixedRate 利率
 * @param strCode 摘要代码
 * @param lOfficeID 办事处标识
 * @param strTitle 控件标题名称
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createFixedRateCtrl(strFormName,strCtrlName,fFixedRate,strCode,lOfficeID,strTitle,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}
 			
		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showFixedRateCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=tar  type='text' name='" + strCtrlName + "' value='" + fFixedRate + "' onblur='javascript:formatIntereRate(\"" + strFormName + "\",\"" + strCtrlName + "\")' onfocus=\"nextfield ='"+ strNextCtrlName + "';\">"
				+ " %</td>");
}

 
 
/**
 * 显示摘要窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showFixedRateCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//收款方客户编号
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var fFixedRate = eval(strFormName+"."+strCtrlName+".value");
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName+"&fFixedRate="+fFixedRate;
	g_win=window.open( "../../jsp/SelectInterestRate.jsp?"+paraState  , "SelectFixedRate" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否显示摘要窗口
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectFixedRate(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showFixedRateCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * 输出摘要控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param fFixedRate 利率至
 * @param strCode 摘要代码
 */
function outputFixedRateCtrl(strFormName,strCtrlName,fFixedRate,strCode)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + fFixedRate+ "'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strCode +"'");
	formatIntereRate(strFormName,strCtrlName);

}

/**
 * 功能块（摘要控件）注释结束。
 */
 
 
 
 /**
 * 功能块（提前还款通知单控件）注释开始：
 *
 */

/**
 * 创建提前还款通知单控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的
 * @param lAheadRepayRequisitionID 提前还款通知单标识
 * @param strAheadRepayRequisitionCode 提前还款通知单
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param lContractID 合同对象
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createAheadRepayRequisitionCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lContractID,lLetoutRequisitionID,lAheadRepayRequisitionID,strAheadRepayRequisitionCode,dAmount,tsInterestStart,strTitle,strAmount,dtInterestDate,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showAheadRepayRequisitionCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lAheadRepayRequisitionID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strAheadRepayRequisitionCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "lContractID' value='" + lContractID + "'>"
				+ " <input type='hidden' name='" + strCtrlName + "lLetoutRequisitionID' value='" + lLetoutRequisitionID + "'>"
				+ " <input type='hidden' name='" + strCtrlName + "Amount' value='"+dAmount+"'>"
				+ " <input type='hidden' name='" + strCtrlName + "InterestDate' value='"+tsInterestStart+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strAheadRepayRequisitionCode + "' onkeydown='javascript:isSelectAheadRepayRequisition(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strAmount + "\",\"" + dtInterestDate + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示放款通知单选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showAheadRepayRequisitionCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方客户编号
{
	//得到帐户标识
	var lContractID; 
	eval("lContractID="+ strFormName + "."+ strCtrlName + "lContractID.value");
	if (lContractID!="null")
	{
		eval("lContractID=" + strFormName + "." + lContractID + ".value");
	}
	else
		lContractID=-1;
   var lLetoutRequisitionID; 
	eval("lLetoutRequisitionID="+ strFormName + "."+ strCtrlName + "lLetoutRequisitionID.value");
	if (lLetoutRequisitionID!="null")
	{
		eval("lLetoutRequisitionID=" + strFormName + "." + lLetoutRequisitionID + ".value");
	}
	else
		lLetoutRequisitionID=-1;
	var strAheadRepayRequisitionCode;
	eval("strAheadRepayRequisitionCode=" + strFormName + "." + strCtrlName + "Ctrl.value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&lContractID=" + lContractID+ "&lLetoutRequisitionID="+lLetoutRequisitionID+"&lCurrencyID=" + lCurrencyID  + "&strFormName=" + strFormName +"&strAheadRepayRequisitionCode=" + strAheadRepayRequisitionCode+"&strCtrlName="+strCtrlName + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectAheadRepayRequisition.jsp?"+paraState  , "SelectAheadRepayRequisition" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了放款通知单控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectAheadRepayRequisition(strFormName,strCtrlName,lOfficeID,lCurrencyID,strAmount,dtInterestDate,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showAheadRepayRequisitionCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			eval(strFormName+ "." + strCtrlName + ".value=-1");
			eval(strFormName+ "." + strCtrlName + "Code.value=''"); 
			if(strAmount!=null && strAmount!= "")
			{
			    eval(strFormName+ "." + strAmount + ".disabled=false"); 
			}
			if(dtInterestDate!=null && dtInterestDate!= "")
			{
			    eval(strFormName+ "." + dtInterestDate + ".disabled=false"); 
			}
		}
	}
}

/**
 * 设置需要输出客户标识的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setAheadRepayRequisitionCtrlAmount(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa=""; 
	
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gAheadRepayCtrlAmount[i][0]!=null)
		{
			if (gAheadRepayCtrlAmount[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gAheadRepayCtrlAmount[i][j]==null)
					{
						gAheadRepayCtrlAmount[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gAheadRepayCtrlAmount[i][0]=strCtrlName;
			gAheadRepayCtrlAmount[i][1]=objCtrl;
			break;
		} 
	}
	 

}
/**
 * 设置需要输出客户标识的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setAheadRepayRequisitionCtrlInterestDate(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa=""; 
	 
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gAheadRepayCtrlInterestDate[i][0]!=null)
		{
			if (gAheadRepayCtrlInterestDate[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gAheadRepayCtrlInterestDate[i][j]==null)
					{
						gAheadRepayCtrlInterestDate[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gAheadRepayCtrlInterestDate[i][0]=strCtrlName;
			gAheadRepayCtrlInterestDate[i][1]=objCtrl;
			break;
		} 
	}

}
/**
 * 输出放款通知单控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lLetoutRequisitionID 放款通知单标识
 * @param strLetoutRequisitionCode 放款通知单
 */
function outputAheadRepayRequisitionCtrl(strFormName,strCtrlName,lAheadRepayRequisitionID,strAheadRepayRequisitionCode,strAmount,tsInterestDate)
{
	var strTempCtrl;
	var i,k=0;
	var Ind; 
	eval(strFormName + "." + strCtrlName + ".value=" + lAheadRepayRequisitionID);
	eval(strFormName + "." + strCtrlName +  "Ctrl"+".value='" + strAheadRepayRequisitionCode +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strAheadRepayRequisitionCode +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gAheadRepayCtrlAmount[i][0]!=null)
		{
			if(gAheadRepayCtrlAmount[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gAheadRepayCtrlAmount[i][j]!=null)
					{
						eval(strFormName+ "." + gAheadRepayCtrlAmount[i][j]+".value='" + formatAmount(strAmount) + "'");
						eval(strFormName+ "." + gAheadRepayCtrlAmount[i][j]+".disabled=true");
						eval(strFormName+ "." + strCtrlName+"Amount.value='" + formatAmount(strAmount) + "'");
						
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gAheadRepayCtrlInterestDate[i][0]!=null)
		{
			if(gAheadRepayCtrlInterestDate[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gAheadRepayCtrlInterestDate[i][j]!=null)
					{
						eval(strFormName+ "." + gAheadRepayCtrlInterestDate[i][j]+".value='" + tsInterestDate + "'");
						eval(strFormName+ "." + gAheadRepayCtrlInterestDate[i][j]+".disabled=true");
						eval(strFormName+ "." + strCtrlName+"InterestDate.value='" + tsInterestDate + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	 
}


/**
 * 功能块（提前还款通知单控件）注释结束。
 */
 
  /**
 * 功能块（贴现票据控件）注释开始：
 *
 */

/**
 * 创建贴现票据控件
 * @param strFormName 控件所在form的名称
 * @param strCtrlName 控件名称，这个名称在整个form里是不能重复的 
 * @param strDiscountBillCode 贴现票据
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strTitle 控件标题名称
 * @param strAmount  金额对象
 * @param strStartDate 开始日期对象
 * @param strEndDate 终止日期对象
 * @param lContractID 合同对象
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 * @param strFirstTD 第一个TD里面的参数
 * @param strSecondTD 第二个TD里面的参数
 */
function createDiscountBillCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lContractID,lDiscountCredenceID,strDiscountBillCode,dAmount,tsStartDate,tsEndDate,strTitle,strAmount,strStartDate,strEndDate,strNextCtrlName,strFirstTD,strSecondTD)
{

		if (strFirstTD=="" || strFirstTD==null)
		{
				strFirstTD="valign='middle' height='20' width='33%'";
		}

		if(strSecondTD==null)
		{
				strSecondTD="";
		}

		document.writeln("<td " + strFirstTD + ">" + strTitle + "：<a href='javascript:showDiscountBillCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='hidden' value='"+strDiscountBillCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "lContractID' value='" + lContractID + "'>"
				+ " <input type='hidden' name='" + strCtrlName + "lDiscountCredenceID' value='" + lDiscountCredenceID + "'>"
				+ " <input type='hidden' name='" + strCtrlName + "Amount' value='"+strAmount+"'>"
				+ " <input type='hidden' name='" + strCtrlName + "StartDate' value='"+strStartDate+"'>"
				+ " <input type='hidden' name='" + strCtrlName + "EndDate' value='"+strEndDate+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "' value='" + strDiscountBillCode + "' onkeydown='javascript:isSelectDiscountBill(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strAmount + "\",\"" + strStartDate + "\",\"" + strEndDate + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * 显示放款通知单选择框
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function showDiscountBillCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//收款方客户编号
{
	//得到帐户标识
	var lContractID; 
	eval("lContractID="+ strFormName + "."+ strCtrlName + "lContractID.value");
	if (lContractID!="null")
	{
		eval("lContractID=" + strFormName + "." + lContractID + ".value");
	}
	else
		lContractID=-1;
   var lDiscountCredenceID; 
	eval("lDiscountCredenceID="+ strFormName + "."+ strCtrlName + "lDiscountCredenceID.value");
	if (lDiscountCredenceID!="null")
	{
		eval("lDiscountCredenceID=" + strFormName + "." + lDiscountCredenceID + ".value");
	}
	else
		lDiscountCredenceID=-1;
	var strDiscountBillCode;
	eval("strDiscountBillCode=" + strFormName + "." + strCtrlName + ".value");
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&lContractID=" + lContractID+ "&lDiscountCredenceID="+lDiscountCredenceID+"&lCurrencyID=" + lCurrencyID  + "&strFormName=" + strFormName +"&strDiscountBillCode=" + strDiscountBillCode+"&strCtrlName="+strCtrlName + "&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectDiscountBill.jsp?"+paraState  , "SelectDiscountBill" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * 是否选择了放款通知单控件
 * @param strFormName form名称
 * @param strCtrlName 控件名称
 * @param lOfficeID 办事处标识
 * @param lCurrencyID 币种标识
 * @param strNextCtrlName 下一个控件的名称，当关闭了选择窗口的时候，焦点到这个控件
 */
function isSelectDiscountBill(strFormName,strCtrlName,lOfficeID,lCurrencyID,strAmount,strStartDate,strEndDate,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//回车说明选择
		{
			gnIsSelectCtrl=1;
			showDiscountBillCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName);
		}
		else
		{
			///eval(strFormName+ "." + strCtrlName + ".value=''");
			eval(strFormName+ "." + strCtrlName + "Code.value=''"); 
			if(strAmount!=null && strAmount!= "")
			{
			    //eval(strFormName+ "." + strAmount + ".readOnly=false"); 
				//eval(strFormName+ "." + strAmount + ".value=''"); 
			}
			if(strStartDate!=null && strStartDate!= "")
			{
			    //eval(strFormName+ "." + strStartDate + ".readOnly=false"); 
				eval(strFormName+ "." + strStartDate + ".value=''"); 
			}
			if(strEndDate!=null && strEndDate!= "")
			{
			    //eval(strFormName+ "." + strEndDate + ".readOnly=false"); 
				eval(strFormName+ "." + strEndDate + ".value=''"); 
			}
		}
	}
}

/**
 * 设置需要输出客户标识的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */ 
	
function setDiscountBillCtrlAmount(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa=""; 
	
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gDiscountBillCtrlAmount[i][0]!=null)
		{
			if (gDiscountBillCtrlAmount[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gDiscountBillCtrlAmount[i][j]==null)
					{
						gDiscountBillCtrlAmount[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gDiscountBillCtrlAmount[i][0]=strCtrlName;
			gDiscountBillCtrlAmount[i][1]=objCtrl;
			break;
		} 
	}
	 

}
/**
 * 设置需要输出客户标识的域对象
 * @param strCtrlName 控件名称
 * @param objCtrl 域对象
 */
function setDiscountBillCtrlStartDate(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa=""; 
	 
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gDiscountBillCtrlStartDate[i][0]!=null)
		{
			if (gDiscountBillCtrlStartDate[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gDiscountBillCtrlStartDate[i][j]==null)
					{
						gDiscountBillCtrlStartDate[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gDiscountBillCtrlStartDate[i][0]=strCtrlName;
			gDiscountBillCtrlStartDate[i][1]=objCtrl;
			break;
		} 
	}

}
function setDiscountBillCtrlEndDate(strCtrlName,objCtrl)
{
	var i,j,k;
	var aa=""; 
	 
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gDiscountBillCtrlEndDate[i][0]!=null)
		{
			if (gDiscountBillCtrlEndDate[i][0]==strCtrlName)//
			{
				for(j=0;j<ARRAYNUM;j++)
				{
					if (gDiscountBillCtrlEndDate[i][j]==null)
					{
						gDiscountBillCtrlEndDate[i][j]=objCtrl;
						break;
					}
				}
			}
		}
		else
		{
			gDiscountBillCtrlEndDate[i][0]=strCtrlName;
			gDiscountBillCtrlEndDate[i][1]=objCtrl;
			break;
		} 
	}

}
/**
 * 输出放款通知单控件
 * @param strFormName form的名称
 * @param strCtrlName 控件名称
 * @param lLetoutRequisitionID 放款通知单标识
 * @param strLetoutRequisitionCode 放款通知单
 */
function outputDiscountBillCtrl(strFormName,strCtrlName,strDiscountBillCode,strAmount,tsStartDate,tsEndDate)
{
	var strTempCtrl;
	var i,k=0;
	var Ind; 
	eval(strFormName + "." + strCtrlName +  ".value='" + strDiscountBillCode +"'");
	eval(strFormName + "." + strCtrlName +  "Code"+".value='" + strDiscountBillCode +"'");
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gDiscountBillCtrlAmount[i][0]!=null)
		{
			if(gDiscountBillCtrlAmount[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gDiscountBillCtrlAmount[i][j]!=null)
					{
						
						//eval(strFormName+ "." + gDiscountBillCtrlAmount[i][j]+".value='" + formatAmount(strAmount) + "'");
						//eval(strFormName+ "." + gDiscountBillCtrlAmount[i][j]+".readOnly=true");
						eval(strFormName+ "." + strCtrlName+"Amount.value='" + formatAmount(strAmount) + "'");
						
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gDiscountBillCtrlStartDate[i][0]!=null)
		{
			if(gDiscountBillCtrlStartDate[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gDiscountBillCtrlStartDate[i][j]!=null)
					{
						eval(strFormName+ "." + gDiscountBillCtrlStartDate[i][j]+".value='" + tsStartDate + "'");
						//eval(strFormName+ "." + gDiscountBillCtrlStartDate[i][j]+".readOnly=true");
						eval(strFormName+ "." + strCtrlName+"StartDate.value='" + tsStartDate + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	for(i=0;i<ARRAYNUM;i++)
	{
		if (gDiscountBillCtrlEndDate[i][0]!=null)
		{
			if(gDiscountBillCtrlEndDate[i][0]==strCtrlName)
			{
				for(j=1;j<ARRAYNUM;j++)
				{
					if (gDiscountBillCtrlEndDate[i][j]!=null)
					{
						eval(strFormName+ "." + gDiscountBillCtrlEndDate[i][j]+".value='" + tsEndDate + "'");
						//eval(strFormName+ "." + gDiscountBillCtrlEndDate[i][j]+".readOnly=true");
						eval(strFormName+ "." + strCtrlName+"EndDate.value='" + tsEndDate + "'");
					}
					else
						break;
				}
			}
		}
		else
			break;
	}
	 
}


/**
 * 功能块（提前还款通知单控件）注释结束。
 */
/**
 * added by wangligang
 */

	function appendZero(num,deci){
		
		var tmp = num;
		
		if (tmp == null || tmp == "") tmp = "0";
		
		var indexOfDeci = tmp.indexOf(".");
		if (indexOfDeci>=0){
			var tmpLen = tmp.length;
			for (var n=0;n<deci-(tmpLen-indexOfDeci-1);n++){
				tmp += "0";
				}
			}
		else{
			tmp += ".";
			for (var n=0;n<deci;n++){
				tmp += "0";
				}
			}
		return tmp;
		}
	
	/**
	 * 过滤非数字需要项目
	 */
 	function filterKey(obj){
 		if(!(event.keyCode >=48 && event.keyCode<=57  || event.keyCode == 45 || event.keyCode == 46)){
 			event.keyCode = 0;
 			}
 		else{
 			if (event.keyCode == 46){
 				if (obj.value.indexOf(".")>0){
	 				event.keyCode = 0;
	 				}
 				}
 			}
 		}
//------------------------------------------------------------------------
	/**
	 * 取反序字串
	 */
	function reverseStr(str){
		var tmp = str+"";
		var tmpToReturn = "";
		if (tmp != null && tmp.length>0){
			for (var n=tmp.length-1;n>=0;n--){
				tmpToReturn += tmp.charAt(n);
				}
			}
		return tmpToReturn;
		}
 	/**
 	 * 给数字添加",",deci为小数点后保留位数
 	 */
 	function formatNumber(num,deci){
 		if (num == null) return "";
 		
 		var tmp = num + "";			//转化成字符串
 		var tmpToReturn = "";		//待返回结果
 		var signPart = "";
 		var intPart = "";			//整数部分
 		var deciPart = "";			//小数部分
 		
 		if (tmp.indexOf(".")>0){
 			if (tmp.indexOf("-")==0) {
 				signPart = "-";
 				intPart = tmp.substring(1,tmp.indexOf("."));
 				}
 			else{
 				intPart = tmp.substring(0,tmp.indexOf("."));
 				}
 				
 			deciPart = tmp.substring(tmp.indexOf(".")+1);
 			if (deciPart.length > deci){			//如果本身小数位数大于需要位数,四舍五入
 				var tmpDeciPart = deciPart ;
 				deciPart = deciPart.substring(0,deci);
 				if (parseInt(tmpDeciPart.charAt(deci))>4) deciPart = (parseInt(deciPart)+1) + "";
 				}
 			else{									//如果本身小数位数小于需要位数,补零
 				while(deciPart.length<deci){
 					deciPart+="0";
 					}
	 			}
 			}
 		else{
 			intPart = tmp;
 			while(deciPart.length<deci){
 				deciPart+="0";
 				}
 			}
 		
 		
 		if (intPart.length>3){
 			tmp = reverseStr(intPart);
 			for (var n=0;n<tmp.length;n++){
 				tmpToReturn += tmp.charAt(n);
 				if ((n+1)%3==0 && n<(tmp.length-1)) tmpToReturn += ",";			//添加逗号
 				}
 			tmpToReturn = reverseStr(tmpToReturn);
 			if (deciPart.length>0) tmpToReturn = signPart + tmpToReturn + "." + deciPart;
 			}
 		else{
 			if (intPart == "") intPart = "0";
 			tmpToReturn = signPart + intPart + "." + deciPart;
 			}
 		return tmpToReturn;
 		}
 	/**
 	 * 去除数字里的","
 	 */
 	function resumeNumber(num){
 		var tmp = num;
 		if (tmp.indexOf(",")>=0){
 			var arrayNum = tmp.split(",");
 			tmp = "";
 			for (var n=0;n<arrayNum.length;n++){
 				tmp += arrayNum[n];
 				}
 			}
 		return tmp;
 		}

	function adjustNumber(strNextCtrlName,obj,deci,typeId){
		var val = obj.value;
		var formatedVal = "";
		
		while (formatedVal.length<deci){
			formatedVal += "0";
		}
		formatedVal = "0."+formatedVal;
		
		if (typeId == 1){
			if (!isNaN(val)){
				if (parseFloat(val) == 0){
						formatedVal = formatNumber(val,deci);
					}
				else{
						formatedVal = formatNumber(val,deci);
					}
				}
			}
		else if (typeId == 2){
			formatedVal = resumeNumber(val);
	 		nextfield = strNextCtrlName;
		}
		obj.value = formatedVal;
		if (typeId == 2)obj.select();
	}
	
	/**
	 * 可以写多个同名的金额控件,内部使用接口
	 */
	function createMutiAmountBaseFun(strFormName,strCtrlName,strData,deci,sProperty,strNextCtrlName){
 	 	document.writeln(" <input class=tar type='text' name='"+ strCtrlName + "' value='" + formatNumber( strData,deci ) +"' onkeypress='filterKey(this)' size='18' maxlength='15' onblur='adjustNumber(\"" + strNextCtrlName + "\",this," + deci +",1)'  onfocus='adjustNumber(\"" + strNextCtrlName + "\",this," + deci +",2)' " + sProperty + ">");
 	}
 	
 	
 	/**
	 * 可以写多个同名的金额控件,外部使用接口
	 */
 	function createMutiAmountCtrl(strFormName,strCtrlName,strData,strNextCtrlName){
 	 	createMutiAmountBaseFun(strFormName,strCtrlName,strData,2,"",strNextCtrlName);
 	}
 	
 	/**
	 * 创建数字控件,可以控制小数位数
	 */
	function createNumberCtrl(strFormName,strCtrlName,strData,deci,strNextCtrlName){
		createMutiAmountBaseFun(strFormName,strCtrlName,strData,deci,"",strNextCtrlName);
	}