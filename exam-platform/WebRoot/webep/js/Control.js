/*
	* ע�⣺eval�пؼ����Ʋ��ܰ����»��ߣ����������ֿ�ʼ��
	* File name: Control.js
	* Author: ������
	* Update: Chen Xi
	* Date: 12-30-2001
	*/ 
 
//
var gnIsSelectCtrl=0;
var gnIsShowSending=0;//û��ShowSending

var nextfield="";

var gSubmitFunction=""; 
var gFormName = "";
////xrzhang���,��һ����ý���Ŀؼ����ƣ���Ϊ�ڵ���executeSubmitFunctionʱת�ƽ��㣬��ֹ�ظ��س���α����¼
var gFirstFocusCtrlName="";

/**
 * ������Ҫ�ύ�ķ���
 * @param strFunction ����
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
 * ��һ���ؼ�ѡ��
 * @param obj �ؼ�
 */
function firstFocus(obj)
{
////���õ�һ������ʱ���ѿؼ����Ʊ��浽ȫ�ֱ����С�xrzhang���
	gFirstFocusCtrlName=obj;
	
	if (gFirstFocusCtrlName != "")
	{
	obj.focus();
	}
}

document.onkeydown = keyDown; // work together to analyze keystrokes


/**
 * ������Ĵ�����
 */
function keyDown(DnEvents)
{ 
	if(gnIsShowSending==0)//���û����ʾִ�У��Ŵ���keydown
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
						//�ı���ѡ��
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
 * ִ����Ҫ�ύ�ķ���
 */
function executeSubmitFunction()
{

////xrzhang��ӣ�gFirstFocusCtrlNameΪҳ���ϵ�һ����ý���Ŀռ����ƣ��ڵ��� firstFocusʱ��ֵ��Ϊȫ�ֱ���

	if (gFirstFocusCtrlName != "" )
	   gFirstFocusCtrlName.focus();

		 		eval(gSubmitFunction);

}



var gFormName;//�ؼ�����Form������
gFormName=new Array(ARRAYNUM);
gNoAccountID=0;
gNo=0;

var ARRAYNUM=100;
var gClientCtrlClientName,gClientCtrlClientID,gClientCtrlClientNo,gClientCtrlCleanUp,gAccountCtrlClientID,gAccountCtrlAccountID,gAccountCtrlAccountID,gFixedDepositCtrlDateEnd,gLoanDueBillCtrlDateStart,gLoanDueBillCtrlDateEnd,gNotifyAccountCtrlInterestDate,gClientCtrlChiefRepCode,gNotifyAccountCtrlBalance;
var gNoName=0,gNoClientID=0,gNoNo=0,gNoID=0,gNo=0,gNoAccountID=0;

//��ʼ���ͻ��ؼ�����
gClientCtrlClientName=new Array(ARRAYNUM);
gClientCtrlClientNo=new Array(ARRAYNUM);
gClientCtrlClientID=new Array(ARRAYNUM);
gClientCtrlCleanUp=new Array(ARRAYNUM);
gClientCtrlChiefRepCode=new Array(ARRAYNUM);

//��ʼ���ʻ��ؼ�����
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

//��ʼ���������ʻ�
var gOutOfCPFAccountClientName,gOutOfCPFAccountProvince,gOutOfCPFAccountCity,gOutOfCPFAccountBank;
gOutOfCPFAccountClientName=new Array(ARRAYNUM);
gOutOfCPFAccountProvince=new Array(ARRAYNUM);
gOutOfCPFAccountCity=new Array(ARRAYNUM);
gOutOfCPFAccountBank=new Array(ARRAYNUM);
gNotifyAccountCtrlBalance=new Array(ARRAYNUM);

//��ʼ����������
var gRateCodeRateName,gRateCodeRateName1,gRateCodeRateName2,gRateCodeRateValidate,gRateCodeRate;
gRateCodeRateName=new Array(ARRAYNUM);
gRateCodeRateName1=new Array(ARRAYNUM);
// Add by FY
gRateCodeRateName2=new Array(ARRAYNUM);
gRateCodeRateValidate=new Array(ARRAYNUM);
gRateCodeRate=new Array(ARRAYNUM);

//�ſ�֪ͨ�����
var gLetoutRequisitionBalance;
gLetoutRequisitionBalance=new Array(ARRAYNUM);


gFixedDepositCtrlDateEnd=new Array(ARRAYNUM);

gBranchCtrlBranchAccountCode=new Array(ARRAYNUM);

gLoanDueBillCtrlDateStart=new Array(ARRAYNUM);
gLoanDueBillCtrlDateEnd=new Array(ARRAYNUM);

gNotifyAccountCtrlInterestDate=new Array(ARRAYNUM);
//��ʼ����ǰ����֪ͨ���ؼ�����
var gAheadRepayCtrlAmount;
gAheadRepayCtrlAmount=new Array(ARRAYNUM); 
var gAheadRepayCtrlInterestDate;
gAheadRepayCtrlInterestDate=new Array(ARRAYNUM);

//��ʼ������Ʊ�ݿؼ�����
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
 * ���ܿ飨�ͻ��ؼ���ע�Ϳ�ʼ��
 *
 */



/**
 * �����ͻ��ؼ�
 * @param strFormName �ؼ�����form������
 * @param lClientID �ͻ���ʶ
 * @param strClientNo �ͻ����
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showClientCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
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
 * ������Ҫ����ͻ���ʶ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ����ͻ���ʶ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ����ͻ����Ƶ������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ����Ŀͻ���ŵ������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ����ͻ���ʶ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ��ʾ�ͻ�ѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showClientCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ�ѡ���˿ͻ��ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectClient(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ����ͻ��ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lClientID �ͻ���ʶ
 * @param strClientName �ͻ�����
 * @param strClientNo �ͻ����
 * @param strAccountID һ���ͻ����е��ʻ�
 * @param strChiefRepCode ���˴���
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
 * ���ܿ飨�ͻ��ؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨�ʻ��ؼ���ע�Ϳ�ʼ��
 */
 var gAccountCtrlFieldName=new Array(ARRAYNUM);//������
 var gAccountCtrlFieldStatus=new Array(ARRAYNUM);//��״̬
 var gAccountCtrlFieldCount=0;//�������
/**
 * �õ����״̬
 * @param strFieldName �������
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
 * �����ʻ������״̬
 * @param strFieldName �������
 * @param lStatusID ״̬ 1-�ӱ����ת�����ģ�2-���Լ�������
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
 * ��۽�
 * @param nTypeID 1-���field ��0
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
				eval(strFormName + "." + field + " .value=''");//��յ�4λ
				
				//����λǰ�油0
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
			if (k!=8 && k!=46)//Back��
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
			   	if(eval(strFormName+ "." + field1 + ".value")=="")//����û��ֵ��
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
 * strFormName:�ؼ����ڵ�Form������
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lAccountID �ʻ���ʶ
 * @param strAccountNo �ʻ���
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle ����
 * @param objClientID �ͻ����������valueΪ�ͻ���ʶ
 * @param lAccountTypeID �ʻ����ͱ�ʶ��30001-�����ʻ��飬30002-�����ʻ��飬30003-�����ʻ���(�ʻ��鲻���������У��������ʻ�״̬�������Ŀͻ�״̬ )
 * @param lGetOrPay ��������տ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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
	document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:if(" + strFormName + "." + strCtrlName +"Ctrl.disabled == false) {showAccountCtrl(\"" + strFormName + "\",\"" + strCtrlName+ "\",\"" + lOfficeID+ "\",\"" + lCurrencyID+ "\",\"" + lAccountTypeID + "\",\"" + lGetOrPay+ "\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
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
//	eval("gAccountCtrlAccountID[" + gNoAccountID + "]='" + strFormName+ "." + strCtrlName + "'");//�Ŵ���������
//	gNoAccountID=gNoAccountID+1;
//	gNo=gNo+1;
//	gNoLinkID++;
}

//add by ming
/**
 * �����ʻ��ؼ��ʻ���ź�ID(��ѡһ���Ŵ�ͬʱ����һ�������ʺź��ʺ�ID)
 * @param strCtrlName �ʻ��ؼ�����
 * @param objCtrl ��Ҫ����ʻ��Ŵ�����
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
 * �����ʻ��ؼ��ͻ����
 * @param strCtrlName �ʻ��ؼ�����
 * @param objCtrl ��Ҫ����ͻ������
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
 * �����ʻ��ؼ��ͻ�����
 * @param strCtrlName �ʻ��ؼ�����
 * @param objCtrl ��Ҫ����ͻ�������
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
 * �����ʻ��ؼ��Ŀͻ���ʶ
 * @param strCtrlName �ʻ��ؼ�����
 * @param objCtrl ��Ҫ����ͻ�������
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
 * �����ʻ��ؼ��Ŀͻ���ʶ
 * @param strCtrlName �ʻ��ؼ�����
 * @param objCtrl ��Ҫ����ͻ�������
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
 * �����ʻ��ؼ��Ŀͻ���ʶ
 * @param strCtrlName �ʻ��ؼ�����
 * @param objCtrl ��Ҫ����ͻ�������
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
 * �Ƿ�ѡ���˿ͻ��ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lAccountTypeID �ʻ����ͱ�ʶ
 * @param lGetOrPay ��������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectAccount(strFormName,strCtrlName,lOfficeID,lCurrencyID,lAccountTypeID,lGetOrPay,strNextCtrlName,currentfield,previousfield)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * �Ƿ�ѡ���˿ͻ��ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lAccountTypeID �ʻ����ͱ�ʶ
 * @param lGetOrPay ��������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showAccountCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lAccountTypeID,lGetOrPay,strNextCtrlName)
{
				//����λǰ�油0
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


	//�õ��ͻ���ʶ
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

	//�õ��ʻ����
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
 * ����ʻ��ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param strClientName �ͻ�����
 * @param lClientID �ͻ���ʶ
 * @param strClientNo �ͻ�����
 * @param lAccountID �ؼ���ʶ
 * @param strAccountNo �ʻ�����
 * @param lOfficeID ���´���ʶ
 * @param strBankID ���ʻ��Ŀ����У���","�ֿ�
 */
function outputAccountCtrl(strFormName,strCtrlName,strClientName,lClientID,strClientNo,lAccountID,strAccountNo,lOfficeID,strBankID)
{

	var i,j;

	//����ͻ�����
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

	//����ͻ����
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
	//����ͻ���ʶ
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

	//����ʻ���ʶ
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

	//�õ��ʻ����1��2��3��4
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
 * ���ܿ飨�ʻ��ؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨���㷽�õ��ĺ�ͬ�ؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ������ͬ�ؼ�������ʹ�ã�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lContractID ��ͬ��ʶ
 * @param strContractNo ��ͬ���
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ����
 * @param strTitle �ؼ���������
 * @param objClientID �ͻ�����
 * @param lTransactionTypeID �������ͱ�ʶ,-87�����ַ��Ÿ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

	document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showContractCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID+ "\",\"" + lCurrencyID + "\",\"" + lTransactionTypeID + "\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
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
 * ������ͬ�ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lContractID ��ͬ��ʶ
 * @param strContractNo ��ͬ���
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ����
 * @param strTitle �ؼ���������
 * @param objClientID �ͻ�����
 * @param lTransactionTypeID �������ͱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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
 * ��ʾ��ͬѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ����
 * @param lTransactionTypeID �������ͱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showContractCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lTransactionTypeID,strNextCtrlName)//�տ�ͻ����
{
	//�õ��ͻ���ʶ
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
 * �Ƿ�ѡ���˺�ͬ�ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ����
 * @param lTransactionTypeID �������ͱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectContract(strFormName,strCtrlName,lOfficeID,lCurrencyID,lTransactionTypeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * �����ͬ�ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lClientID �ͻ���ʶ
 * @param strClientName �ͻ�����
 * @param strClientNo �ͻ����
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
 * ���ܿ飨��ͬ�ؼ���ע�ͽ�����
 */




/**
 * ���ܿ飨�����пؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ���������пؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lBranchID �����б�ʶ
 * @param strBranch ����������
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param objAccountID �ʻ�����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
 * @param lIsSingleBank �Ƿ񵥱�������
 */
function createBranchCtrl(strFormName,strCtrlName,lBranchID,strBranch,lOfficeID,strTitle,objAccountID,strNextCtrlName,strFirstTD,strSecondTD,lIsSingleBank)
{

createTypeBranchCtrl(strFormName,strCtrlName,lBranchID,strBranch,lOfficeID,strTitle,objAccountID,strNextCtrlName,"",strFirstTD,strSecondTD,lIsSingleBank);
}

/**
 * ���������пؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lBranchID �����б�ʶ
 * @param strBranch ����������
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param objAccountID �ʻ�����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strType 273����973
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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
		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:if(" + strFormName + "." + strCtrlName +"Ctrl.disabled == false) {showBranchCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strType + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lBranchID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='-1' ID='"+strCtrlName+ "AccountID' NAME='"+strCtrlName+"AccountID'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strBranch+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"// ����
				+ " <INPUT TYPE='HIDDEN' VALUE='' ID='"+strCtrlName+ "NoCode' NAME='"+strCtrlName+"NoCode'>"//Code
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lIsSingleBank+"' ID='"+strCtrlName+ "IsSingle' NAME='"+strCtrlName+"IsSingle'>"
				+ " <input type='hidden' name='" + strCtrlName + "objAccountID' value='" + objAccountID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><textarea  class=box  name='" + strCtrlName + "Ctrl' rows=2 cols=30 onkeydown='javascript:isSelectBranch(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strType + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"+strBranch+"</textarea>"
				+ " </td>");
}


/**
 * ��ʾ������ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showBranchCtrl(strFormName,strCtrlName,strType,lOfficeID,strNextCtrlName)//�տ�ͻ����
{
	//�õ��ʻ���ʶ
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
 * �Ƿ�ѡ���˿����пؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lTransactionTypeID �������ͱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectBranch(strFormName,strCtrlName,strType,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������Ҫ����ͻ����Ƶ������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ��������пؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lBranchID �����б�ʶ
 * @param strBranch ����������
 * @param strBranchAccountCode �����ʻ���
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
 * ���ܿ飨�����пؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨���ʿؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �������ʿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lGeneralLedgerID ���ʱ�ʶ
 * @param strGeneralLedger ��������
 * @param strGeneralLedgerCode ���ʴ���
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showGeneralLedgerCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lGeneralLedgerID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strGeneralLedgerCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><textarea  class=box    type='text' name='" + strCtrlName + "Ctrl' rows=2 cols=30 onkeydown='javascript:isSelectGeneralLedger(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"+ strGeneralLedger +"</textarea>"
				+ " </td>");
}


/**
 * ��ʾ����ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showGeneralLedgerCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ�ѡ�������ʿؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lTransactionTypeID �������ͱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectGeneralLedger(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������ʿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lGeneralLedgerID ���ʱ�ʶ
 * @param strGeneralLedger ��������
 * @param strGeneralLedgerCode �����ʻ���
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
 * ���ܿ飨���ʿؼ���ע�ͽ�����
 */




/**
 * ���ܿ飨ժҪ�ؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ����ժҪ�ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strAbstract ժҪ
 * @param strCode ժҪ����
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showAbstractCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box   type='text' name='" + strCtrlName + "' value='" + strAbstract + "' onkeydown='javascript:isSelectAbstract(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")' onfocus=\"nextfield ='"+ strNextCtrlName + "'\">"
				+ " </td>");
}

 
 
/**
 * ��ʾժҪ����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showAbstractCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾժҪ����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectAbstract(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		var nData=parseInt(eval(strFormName + "." + strCtrlName + ".value"));
	
		if ((window.event.keyCode==13) && (! isNaN(nData)))//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showAbstractCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * ���ժҪ�ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strAbstract ����������
 * @param strCode ժҪ����
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
 * ���ܿ飨ժҪ�ؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨��Ŀ�ſؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ������Ŀ�ſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strSubjectNo ��Ŀ��
 * @param strCode ��Ŀ�Ŵ���
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showSubjectNoCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strSubjectNo+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box size='40' type='text' name='" + strCtrlName + "Ctrl' value='" + strSubjectNo + "' onkeydown='javascript:isSelectSubjectNo(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ��Ŀ�Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showSubjectNoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ��Ŀ�Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectSubjectNo(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * �����Ŀ�ſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strSubjectNo ����������
 * @param strCode ��Ŀ�Ŵ���
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
 * ���ܿ飨��Ŀ�ſؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨����ԭ��ؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ��������ԭ��ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strAdjustReason ����ԭ��
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showAdjustReasonCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box   type='text' name='" + strCtrlName + "' value='" + strAdjustReason + "' onkeydown='javascript:isSelectAdjustReason(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ����ԭ�򴰿�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showAdjustReasonCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectAdjustReason.jsp?"+paraState  , "SelectAdjustReason" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * �Ƿ���ʾ����ԭ�򴰿�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectAdjustReason(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showAdjustReasonCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * �������ԭ��ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strAdjustReason ����������
 * @param strCode ����ԭ�����
 */
function outputAdjustReasonCtrl(strFormName,strCtrlName,strAdjustReason)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strAdjustReason+ "'");

}

/**
 * ���ܿ飨����ԭ��ؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨���ڴ��ݺſؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �������ڴ��ݺſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lFixedDepositID ���ڴ��ݺű�ʶ
 * @param strFixedDepositNo ���ڴ��ݺ�
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param objClientID �ʻ�����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showFixedDepositCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
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
 * ��ʾ���ڴ��ݺ�ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showFixedDepositCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ�ͻ����
{
	//�õ��ʻ���ʶ
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
 * �Ƿ�ѡ���˶��ڴ��ݺſؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectFixedDeposit(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������ڴ��ݺſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lFixedDepositID ���ڴ��ݺű�ʶ
 * @param strFixedDepositNo ���ڴ��ݺ�
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
 * ������Ҫ������ڴ浥�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ���ܿ飨���ڴ��ݺſؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨�ſ�֪ͨ���ؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �����ſ�֪ͨ���ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lLetoutRequisitionID �ſ�֪ͨ����ʶ
 * @param strLetoutRequisitionCode �ſ�֪ͨ����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param objContractID ��ͬ����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showLetoutRequisitionCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLetoutRequisitionID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strLetoutRequisitionCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objContractID' value='" + objContractID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strLetoutRequisitionCode + "' onkeydown='javascript:isSelectLetoutRequisition(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�ſ�֪ͨ��ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showLetoutRequisitionCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ�ͻ����
{
	//�õ��ʻ���ʶ
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
 * �Ƿ�ѡ���˷ſ�֪ͨ���ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectLetoutRequisition(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ����ſ�֪ͨ���ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lLetoutRequisitionID �ſ�֪ͨ����ʶ
 * @param strLetoutRequisitionCode �ſ�֪ͨ��
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
 * ���ܿ飨�ſ�֪ͨ���ؼ���ע�ͽ�����
 */

 
/**
 * ���ܿ飨����ƾ֤��ſؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ��������ƾ֤��ſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lDiscountCredenceCtrlID ����ƾ֤��ű�ʶ
 * @param strDiscountCredenceCtrlCode ����ƾ֤���
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param lIsGrantOrRecede ���Ż����ջ� �� ���ţ�1 ,�ջ� �� 2
 * @param strTitle �ؼ���������
 * @param objContractID ��ͬ����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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
		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showDiscountCredenceCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\",\"" + lIsGrantOrRecede +"\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lDiscountCredenceID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strDiscountCredenceCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objContractID' value='" + objContractID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strDiscountCredenceCode + "' onkeydown='javascript:isSelectDiscountCredence(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\",\"" + lIsGrantOrRecede +"\")'>"
				+ " </td>");
}


/**
 * ��ʾ������ƾ֤���ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
  * @param lIsGrantOrRecede ���Ż����ջ� �� ���ţ�1 ,�ջ� �� 2
 */
function showDiscountCredenceCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName,lIsGrantOrRecede)//�տ�ͻ����
{
	//�õ��ʻ���ʶ
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
 * �Ƿ�ѡ��������ƾ֤��ſؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectDiscountCredence(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName,lIsGrantOrRecede)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * �������ƾ֤���
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lDiscountCredenceID �ſ�֪ͨ����ʶ
 * @param strDiscountCredenceCode �ſ�֪ͨ��
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
 * ���ܿ飨����ƾ֤��ſؼ���ע�ͽ�����
 */

 
 
/**
 * ���ܿ飨�ſ�֪ͨ���ؼ�-�Ŵ���ע�Ϳ�ʼ��
 *
 */

/**
 * �����ſ�֪ͨ���ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lLetoutRequisitionID �ſ�֪ͨ����ʶ
 * @param strLetoutRequisitionCode �ſ�֪ͨ����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param objContractID ��ͬ����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showLetoutRequisitionCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLetoutRequisitionID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strLetoutRequisitionCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objContractID' value='" + objContractID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strLetoutRequisitionCode + "' onkeydown='javascript:isSelectLetoutRequisition1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}

/**
 * ������Ҫ��������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ��ʾ�ſ�֪ͨ��ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showLetoutRequisitionCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ�ͻ����
{
	//�õ��ʻ���ʶ
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
 * �Ƿ�ѡ���˷ſ�֪ͨ���ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectLetoutRequisition1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ����ſ�֪ͨ���ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lLetoutRequisitionID �ſ�֪ͨ����ʶ
 * @param strLetoutRequisitionCode �ſ�֪ͨ��
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
 * ���ܿ飨�ſ�֪ͨ���ؼ�-�Ŵ���ע�ͽ�����
 */


/**
 * ����չ�ڿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lExtendApplyNewID չ�ڱ�ʶ
 * @param strExtendApplyNewCode չ�ں�
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param objContractID ��ͬ����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showExtendApplyNewCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lExtendApplyNewID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strExtendApplyNewCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objContractID' value='" + objContractID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strExtendApplyNewCode + "' onkeydown='javascript:isSelectExtendApplyNew(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾչ��ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showExtendApplyNewCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ�ͻ����
{
	//�õ��ʻ���ʶ
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
 * �Ƿ�ѡ����չ�ڿؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectExtendApplyNew(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���չ�ڿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lExtendApplyNewID �ſ�֪ͨ����ʶ
 * @param strExtendApplyNewCode �ſ�֪ͨ��
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
 * ���ܿ飨չ�ڿؼ���ע�ͽ�����
 */
/**
 * ���ܿ飨���ݿ��ע�Ϳ�ʼ��-by ming
 *
 */

/**
 * �������ݿ��ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showTableNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "' value='" + strTableName + "' onkeydown='javascript:isSelectTableName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ���ݱ�ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 */
function showTableNameCtrl(strFormName,strCtrlName,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ�ѡ�������ݿ��
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 */
function isSelectTableName(strFormName,strCtrlName,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showTableNameCtrl(strFormName,strCtrlName,strNextCtrlName);
		}
	}
}


/**
 * ������ݿ��
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 */
function outputTableNameCtrl(strFormName,strCtrlName,strTableName)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strTableName +"'");
}


/**
 * ���ܿ飨���ݿ��ע�ͽ�����-by ming
 */

 
/**
 * ���ܿ飨�����ݺſؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ���������ݺſؼ������������ͬ������鲻������
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ��ģ�txtDueBillID��������Ǹ���ʱר�õģ������ط���Ҫʹ��
 * @param lLoanDueBillID �����ݺű�ʶ
 * @param strLoanDueBillCode �����ݺź�
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param objContractID ��ͬ����
 * @param lTransactionTypeID �������ͱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showLoanDueBillCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + lTransactionTypeID +"\",\"" + strNextCtrlName + "\",\"" + strNextCtrlName1 + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
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
 * ��ʾ�����ݺ�ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showLoanDueBillCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lTransactionTypeID,strNextCtrlName,strNextCtrlName1)//�տ�ͻ����
{
	//�õ���ͬ��ʶ 
	var lContractID;
	eval("lContractID="+ strFormName + "."+ strCtrlName + "objContractID.value");
	if (lContractID!="null")
	{
		eval("lContractID=" + strFormName + "." + lContractID + ".value");
	}
	else
		lContractID=-1; 
	//�õ�Loan Type��ʶ
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
 * �Ƿ�ѡ���˴����ݺſؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param lTransactionTypeID �������ͱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectLoanDueBill(strFormName,strCtrlName,lOfficeID,lCurrencyID,lTransactionTypeID,strNextCtrlName,strNextCtrlName1)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������Ҫ����ͻ���ʶ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ����ͻ���ʶ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ��������ݺſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lLoanDueBillID �����ݺű�ʶ
 * @param strLoanDueBillNo �����ݺ�
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
 * ���ܿ飨�����ݺſؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨֪ͨ���ݺſؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ����֪ͨ���ݺſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lNotifyAccountID ֪ͨ���ݺű�ʶ
 * @param strNotifyAccountCode ֪ͨ���ݺź�
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param objAccountID �ʻ�����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showNotifyAccountCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lNotifyAccountID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strNotifyAccountCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objAccountID' value='" + objAccountID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strNotifyAccountCode + "' onkeydown='javascript:isSelectNotifyAccount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}

/**
 * ����֪ͨ���ݺſؼ� (����֪ͨ���֧ȡ�ø��˽��� ������ʾ���)
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lNotifyAccountID ֪ͨ���ݺű�ʶ
 * @param strNotifyAccountCode ֪ͨ���ݺź�
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param objAccountID �ʻ�����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showNotifyAccountCtrlNoAmount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lNotifyAccountID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strNotifyAccountCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objAccountID' value='" + objAccountID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input   class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strNotifyAccountCode + "' onkeydown='javascript:isSelectNotifyAccountNoAmount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}
/**
 * ��ʾ֪ͨ���ݺ�ѡ��� (����֪ͨ���֧ȡ�ø��˽��� ������ʾ���)
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showNotifyAccountCtrlNoAmount(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ�ͻ����
{
	//�õ��ʻ���ʶ
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
 * �Ƿ�ѡ����֪ͨ���ݺſؼ� (����֪ͨ���֧ȡ�ø��˽��� ������ʾ���)
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param lTransactionTypeID �������ͱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectNotifyAccountNoAmount(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ��ʾ֪ͨ���ݺ�ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showNotifyAccountCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ�ͻ����
{
	//�õ��ʻ���ʶ
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
 * �Ƿ�ѡ����֪ͨ���ݺſؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param lTransactionTypeID �������ͱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectNotifyAccount(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������Ҫ����ͻ���ʶ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ����ͻ���ʶ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ���֪ͨ���ݺſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lNotifyAccountID ֪ͨ���ݺű�ʶ
 * @param strNotifyAccountNo ֪ͨ���ݺ�
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
 * ���ܿ飨֪ͨ���ݺſؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨�����Ϳͻ������пؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ���������Ϳͻ������пؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strOutOfCPFBank �����Ϳͻ�������
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:if ("+strFormName+"."+strCtrlName+".disabled == false ) {showOutOfCPFBankCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ "</td>"
				+ "<td " + strSecondTD + " ><textarea  class=box name='" + strCtrlName + "' rows=2 cols=30 onkeydown='javascript:isSelectOutOfCPFBank(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"+strOutOfCPFBank+"</textarea>"
				+ " </td>");
}


/**
 * ��ʾ�����Ϳͻ������д���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showOutOfCPFBankCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ�����Ϳͻ������д���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectOutOfCPFBank(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showOutOfCPFBankCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * ��������Ϳͻ������пؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strOutOfCPFBank ����������
 */
function outputOutOfCPFBankCtrl(strFormName,strCtrlName,strOutOfCPFBank)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strOutOfCPFBank+ "'");

}

/**
 * ���ܿ飨�����Ϳͻ������пؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨��ά��ؼ���ע�Ϳ�ʼ��
 * forest
 */

/**
 * ������ά��ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strMultiCode ��ά�� ����
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:if ("+strFormName+"."+strCtrlName+".disabled == false ) {showMultiCodeCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  <input type='hidden' name='"+strCtrlName+"' value='"+strMultiCode+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input  class=box   type='text' name='" + strCtrlName + "Ctrl' value='" + strMultiCode + "' onkeydown='javascript:isSelectMultiCode(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ��ά�봰��
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showMultiCodeCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ��ά�봰��
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectMultiCode(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * �����ά��ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strMultiCode ����������
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
 * ���ܿ飨��ά��ؼ��ؼ���ע�ͽ�����
 */





/**
 * ���ܿ飨�����Ϳͻ��ʻ��ؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ���������Ϳͻ��ʻ��ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strOutOfCPFAccount �����Ϳͻ��ʻ�
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:if ("+strFormName+"."+strCtrlName+".disabled == false) {showOutOfCPFAccountCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ "</td>"
				+ "<td " + strSecondTD + " ><input  class=box    type='text' name='" + strCtrlName + "' value='" + strOutOfCPFAccount + "' onkeydown='javascript:isSelectOutOfCPFAccount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�����Ϳͻ��ʻ�����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showOutOfCPFAccountCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ�����Ϳͻ��ʻ�����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectOutOfCPFAccount(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showOutOfCPFAccountCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * ������Ҫ����ͻ����Ƶ������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ���ʡ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ������е������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ������е������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ��������Ϳͻ��ʻ��ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strAccount �ʻ�����
 * @param strClientName �ͻ�����
 * @param strProvince ʡ
 * @param strCity ����
 * @param strBank ����
 */
function outputOutOfCPFAccountCtrl(strFormName,strCtrlName,strAccount,strClientName,strProvince,strCity,strBank)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;

	//����ͻ�����
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

	//���ʡ
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
	//�������
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
	//�������
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
 * ���ܿ飨�����Ϳͻ��ʻ��ؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨���ؼ���ע�Ϳ�ʼ��
 */

/**
 * �������ؼ�
 * @param strFormName
 * @param strCtrlName �ؼ�����
 * @param strData ����
 * @param strNextCtrlName ��һ���ؼ�
 * @param strChineseCtrl ���Ŀؼ�
 * @param nCurrencyID ����
 */
 function createAmountCtrl(strFormName,strCtrlName,strData,strNextCtrlName,strChineseCtrl,nCurrencyID)
 {
	createAmountCtrl(strFormName,strCtrlName,strData,strNextCtrlName,strChineseCtrl,nCurrencyID,"");
 }

/**
 * �������ؼ�
 * @param strFormName
 * @param strCtrlName �ؼ�����
 * @param strData ����
 * @param strNextCtrlName ��һ���ؼ�
 * @param strChineseCtrl ���Ŀؼ�
 * @param nCurrencyID ����
 */
 function createAmountCtrl(strFormName,strCtrlName,strData,strNextCtrlName,strChineseCtrl,nCurrencyID,sProperty)
 {
// 	alert("n c=" + nCurrencyID);
 	if(isNaN(nCurrencyID)) 
 	{
 		nCurrencyID=1;//ȱʡ�����
 	}
 	
 		if(strChineseCtrl==null)
 		{
 			strChineseCtrl="";
 		}
 		document.writeln(" <input class=tar   type='text' name='"+ strCtrlName + "' value='" + formatAmount( strData ,nCurrencyID ) +"' size='18' maxlength='15' onblur='adjustAmount(\"" + strFormName +"\",\"" + strCtrlName +"\",1,\"" + strChineseCtrl +"\"," + nCurrencyID+")'  onfocus='adjustAmount(\"" + strFormName +"\",\"" + strCtrlName +"\",2,\"" + strChineseCtrl +"\"," + nCurrencyID + ")' " + sProperty + "> <input type='hidden' name='" + strCtrlName + "NextCtrlName' value='" + strNextCtrlName + "'>");
 }

 /**
 * �������ؼ�
 * @param strFormName
 * @param strCtrlName �ؼ�����
 * @param strData ����
 * @param strNextCtrlName ��һ���ؼ�
 * @param strChineseCtrl ���Ŀؼ�
 * @param nCurrencyID ����
 */
 function createAmountCtrl1(strFormName,strCtrlName,strData,strNextCtrlName,strChineseCtrl,nCurrencyID)
 {
// 	alert("n c=" + nCurrencyID);
 	if(isNaN(nCurrencyID)) 
 	{
 		nCurrencyID=1;//ȱʡ�����
 	}
 	
 		if(strChineseCtrl==null)
 		{
 			strChineseCtrl="";
 		}
 		document.writeln(" <input class=tar   type='text' name='"+ strCtrlName + "' value='" + formatAmount1( strData ,nCurrencyID ) +"' size='18' maxlength='15' onblur='adjustAmount1(\"" + strFormName +"\",\"" + strCtrlName +"\",1,\"" + strChineseCtrl +"\"," + nCurrencyID+")'  onfocus='adjustAmount(\"" + strFormName +"\",\"" + strCtrlName +"\",2,\"" + strChineseCtrl +"\"," + nCurrencyID + ")'> <input type='hidden' name='" + strCtrlName + "NextCtrlName' value='" + strNextCtrlName + "'>");
 }
 
 
/**
 * ������Ҫ���
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ��ʽ�����
 * @param strData ��Ҫ��ʽ��������
 * @return ���ظ�ʽ���Ľ��
 */
 function formatAmount(strData)
 {
 	if(isInnerFloat(strData))
 	{
 		if(strData!="")
 		{
			var i,strTemp;

			//ȥ�����е�","
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

			//��С����ǰ�ͺ�����ݷֱ�ȡ����
	 		var nPoint;
	 		nPoint=strData.indexOf(".");
	 		var strFront=strData,strEnd="";
	 		if(nPoint!=-1)
	 		{
	 			strFront=strData.substring(0,nPoint);
	 			strEnd=strData.substring(nPoint+1,strData.length);
	 		}

			//С����ǰ������ݼ�","
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
			
			//�����߽�С��������ֵ��������λ
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
 * ��ʽ�����
 * @param strData ��Ҫ��ʽ��������
 * @return ���ظ�ʽ���Ľ��
 */
 function formatAmount1(strData)
 {
 	if(isInnerFloat(strData))
 	{
 		if(strData!="")
 		{
			var i,strTemp;

			//ȥ�����е�","
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

			//��С����ǰ�ͺ�����ݷֱ�ȡ����
	 		var nPoint;
	 		nPoint=strData.indexOf(".");
	 		var strFront=strData,strEnd="";
	 		if(nPoint!=-1)
	 		{
	 			strFront=strData.substring(0,nPoint);
	 			strEnd=strData.substring(nPoint+1,strData.length);
	 		}

			//С����ǰ������ݼ�","
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
			
			//�����߽�С��������ֵ��������λ
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
 * ��ʽ������
 * @param strData ��Ҫ��ʽ��������
 * @return ���ظ�ʽ���Ľ��
 */
 function formatInterestRate(strData)
 {
 	if(isInnerFloat(strData))
 	{
 		if(strData!="")
 		{
			var i,strTemp;

			//ȥ�����е�","
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

			//��С����ǰ�ͺ�����ݷֱ�ȡ����
	 		var nPoint;
	 		nPoint=strData.indexOf(".");
	 		var strFront=strData,strEnd="";
	 		if(nPoint!=-1)
	 		{
	 			strFront=strData.substring(0,nPoint);
	 			strEnd=strData.substring(nPoint+1,strData.length);
	 		}

			//С����ǰ������ݼ�","
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
			//�����߽�С��������ֵ������6λ
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
 * �����ʽ�����
 * @param strData ��Ҫ��ʽ��������
 * @return ���ط���ʽ���Ľ��
 */
 function reverseFormatAmount(strData)
 {
		var i,strTemp;

		//ȥ�����е�","
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

//�Ƿ���float��
function isInnerFloat( d_float)
{
	if(isNaN(parseFloat(d_float)))
	  return false;
	else
	  return true;
}

/**
 * �������
 * @param strFormName
 * @param strCtrlName �ؼ�����
 * @param nType ����1,format;2,reverseFormat
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
	 	if (isInnerFloat(strOldData))//�Ƿ��Ǹ�����
	 	{
	 		var strNewData="";
	 		if(nType==2)//˵�����뿪
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
			* 2004/4/23��Forest��ע��ȥ����ԭ�������ע�ͣ���ô�ڽ��ؼ�ʧȥ����󣬡�0.00�����Ϊ����
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
 * ��������
 * @param strFormName
 * @param strCtrlName �ؼ�����
 * @param nType ����1,format;2,reverseFormat
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
	 	if (isInnerFloat(strOldData))//�Ƿ��Ǹ�����
	 	{
	 		var strNewData="";
	 		if(nType==2)//˵�����뿪
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
 * �������
 * @param strFormName
 * @param strCtrlName �ؼ�����
 * @param nType ����1,format;2,reverseFormat
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
	 	if (isInnerFloat(strOldData))//�Ƿ��Ǹ�����
	 	{
	 		var strNewData="";
	 		if(nType==2)//˵�����뿪
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
 * ���ܿ飨���ؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨������ؼ���ע�Ϳ�ʼ��
 *
 */



/**
 * ����������ؼ�
 * @param strFormName �ؼ�����form������
 * @param lLoanInfoID �������ʶ
 * @param strLoanInfoNo ��������
 * @param lLoanTypeID �����������ͱ�ʶ
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showLoanInfoCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLoanInfoID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strLoanInfoNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strLoanInfoNo + "' onkeydown='javascript:isSelectLoanInfo(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * ��ʾ������ѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showLoanInfoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)//�տ��������
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
 * �Ƿ�ѡ����������ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectLoanInfo(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���������ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lLoanInfoID �������ʶ
 * @param strLoanInfoName ����������
 * @param strLoanInfoNo ��������
 * @param strAccountID һ�����������е��ʻ�
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
 * ���ܿ飨������ؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨������ؼ�--����Ͳ�ѯר�ã�ע�Ϳ�ʼ��
 *
 */



/**
 * ����������ؼ�
 * @param strFormName �ؼ�����form������
 * @param lLoanInfoID �������ʶ
 * @param strLoanInfoNo ��������
 * @param objTypeID ������������ѡ��������
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showLoanInfoCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
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
 * ��ʾ������ѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showLoanInfoCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ��������
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strLoanInfoNo;
	//�õ��������ͱ�ʶ
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
 * �Ƿ�ѡ����������ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectLoanInfo1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���������ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lLoanInfoID �������ʶ
 * @param strLoanInfoName ����������
 * @param strLoanInfoNo ��������
 * @param strAccountID һ�����������е��ʻ�
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
 * ���ܿ飨������ؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨��ͬ�ؼ���ע�Ϳ�ʼ��
 *
 */



/**
 * ������ͬ�ؼ�(�Ŵ�)
 * @param strFormName �ؼ�����form������
 * @param lContractInfoID ��ͬ��ʶ
 * @param strContractInfoNo ��ͬ���
 * @param lLoanTypeID �����������ͱ�ʶ
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param objClientID �ͻ�����
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showContractInfoCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lContractInfoID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strContractInfoNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strContractInfoNo + "' onkeydown='javascript:isSelectContractInfo(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * ��ʾ��ͬѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showContractInfoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)//�տ��ͬ���
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strContractInfoNo;

	//�õ��ͻ���ʶ
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
 * �Ƿ�ѡ���˺�ͬ�ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectContractInfo(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * �����ͬ�ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lContractInfoID ��ͬ��ʶ
 * @param strContractInfoName ��ͬ����
 * @param strContractInfoNo ��ͬ���
 * @param strAccountID һ����ͬ���е��ʻ�
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
 * ���ܿ飨��ͬ�ؼ���ע�ͽ�����
 */




/**
 * ���ܿ飨��ͬ�ؼ���ע�Ϳ�ʼ��
 *
 */



/**
 * ������ͬ�ؼ�(�Ŵ� ��״̬)
 * @param strFormName �ؼ�����form������
 * @param lContractInfoID ��ͬ��ʶ
 * @param strContractInfoNo ��ͬ���
 * @param lLoanTypeID �����������ͱ�ʶ
 * @param lOfficeID ���´���ʶ
 * @param lStatusID ״̬��ʶ��1��ִ���л���չ��; 2: �Ѹ��˲���δ����;3:δִ�У�4:���Էſ5:δִ�л�ִ���л���չ�ڣ�
 * @param strTitle �ؼ���������
 * @param objClientID �ͻ�����
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showContractInfoCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""+ lStatusID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lContractInfoID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strContractInfoNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ " <input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strContractInfoNo + "' onkeydown='javascript:isSelectContractInfo1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""  + lStatusID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * ��ʾ��ͬѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showContractInfoCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)//�տ��ͬ���
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strContractInfoNo;

	//�õ��ͻ���ʶ
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
 * �Ƿ�ѡ���˺�ͬ�ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectContractInfo1(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * �����ͬ�ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lContractInfoID ��ͬ��ʶ
 * @param strContractInfoName ��ͬ����
 * @param strContractInfoNo ��ͬ���
 * @param strAccountID һ����ͬ���е��ʻ�
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
 * ���ܿ飨��ͬ�ؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨��ͬ�ؼ���ע�Ϳ�ʼ��
 *
 */



/**
 * ������ͬ�ؼ�(�Ŵ� ������ѯ��)
 * @param strFormName �ؼ�����form������
 * @param lContractInfoID ��ͬ��ʶ
 * @param strContractInfoNo ��ͬ���
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param objClientID �ͻ�����
 * @param objTypeID  �������Ͷ���
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showContractInfoCtrl2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
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
 * ��ʾ��ͬѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showContractInfoCtrl2(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ��ͬ���
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strContractInfoNo;

	//�õ��ͻ���ʶ
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";
	//�õ��������ͱ�ʶ
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
 * �Ƿ�ѡ���˺�ͬ�ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectContractInfo2(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * �����ͬ�ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lContractInfoID ��ͬ��ʶ
 * @param strContractInfoName ��ͬ����
 * @param strContractInfoNo ��ͬ���
 * @param lLoanOrDiscount ����or�Ŵ� ��1--�Ŵ�  2--���֣�
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
 * ���ܿ飨��ͬ�ؼ���ע�ͽ�����
 */

/**
 * ���ܿ飨��ͬ�ؼ���ע�Ϳ�ʼ��չ���ã��ɸ��ݴ������Ͷ�̬��ʾ�ͻ��ţ���
 */

/**
 * ������ͬ�ؼ�(�Ŵ� ��״̬)
 * @param strFormName �ؼ�����form������
 * @param lContractInfoID ��ͬ��ʶ
 * @param strContractInfoNo ��ͬ���
 * @param lOfficeID ���´���ʶ
 * @param lStatusID ״̬��ʶ��1��ִ���л���չ��; 2: �Ѹ��˲���δ����;3:δִ�У�4:���Էſ
 * @param strTitle �ؼ���������
 * @param objClientID �ͻ�����
 * @param objTypeID �����������ͱ�ʶ���� (20--һ���Ŵ�  30--�ɷ��Ŵ�)
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showContractInfoCtrl3(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID + "\",\""+ lStatusID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
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
 * ��ʾ��ͬѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showContractInfoCtrl3(strFormName,strCtrlName,lOfficeID,lCurrencyID,lStatusID,strNextCtrlName)//�տ��ͬ���
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strContractInfoNo;

	//�õ��ͻ���ʶ
	var lClientID;
	eval("lClientID="+ strFormName + "."+ strCtrlName + "objClientID.value");
	if (lClientID!="null")
	{
		eval("lClientID=" + strFormName + "." + lClientID + ".value");
	}
	else
		lClientID="";
	//�õ��������ͱ�ʶ
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
 * �Ƿ�ѡ���˺�ͬ�ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectContractInfo3(strFormName,strCtrlName,lOfficeID,lCurrencyID,lStatusID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * �����ͬ�ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lContractInfoID ��ͬ��ʶ
 * @param strContractInfoName ��ͬ����
 * @param strContractInfoNo ��ͬ���
 * @param strAccountID һ����ͬ���е��ʻ�
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
 * ���ܿ飨��ͬ�ؼ���ע�ͽ�����
 */





/**
 * ���ܿ飨ί�к�ͬ�ؼ���ע�Ϳ�ʼ��
 *
 */



/**
 * ����ί�к�ͬ�ؼ�
 * @param strFormName �ؼ�����form������
 * @param lConsignContractID ί�к�ͬ��ʶ
 * @param strConsignContractNo ί�к�ͬ���
 * @param lLoanTypeID �����������ͱ�ʶ
 * @param lOfficeID ���´���ʶ
 * @param objClientID �ͻ�����
 * @param strTitle �ؼ���������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showConsignContractCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lConsignContractID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strConsignContractNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
			  + "<input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strConsignContractNo + "' onkeydown='javascript:isSelectConsignContract(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * ��ʾί�к�ͬѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showConsignContractCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)//�տί�к�ͬ���
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strConsignContractNo;
	
	//�õ��ͻ���ʶ
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
 * �Ƿ�ѡ����ί�к�ͬ�ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectConsignContract(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���ί�к�ͬ�ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lConsignContractID ί�к�ͬ��ʶ
 * @param strConsignContractName ί�к�ͬ����
 * @param strConsignContractNo ί�к�ͬ���
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
 * ���ܿ飨ί�к�ͬ�ؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨ί�к�ͬ�ؼ� ��״̬��ע�Ϳ�ʼ��
 *
 */



/**
 * ����ί�к�ͬ�ؼ�
 * @param strFormName �ؼ�����form������
 * @param lConsignContractID ί�к�ͬ��ʶ
 * @param strConsignContractNo ί�к�ͬ���
 * @param lLoanTypeID �����������ͱ�ʶ
 * @param lOfficeID ���´���ʶ
 * @param lStatusID ״̬ (1:�Ѹ���)
 * @param objClientID �ͻ�����
 * @param strTitle �ؼ���������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showConsignContractCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID  + "\",\"" + lStatusID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lConsignContractID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strConsignContractNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
			  + "<input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strConsignContractNo + "' onkeydown='javascript:isSelectConsignContract1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID  + "\",\"" + lStatusID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * ��ʾί�к�ͬѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showConsignContractCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)//�տί�к�ͬ���
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strConsignContractNo;
	
	//�õ��ͻ���ʶ
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
 * �Ƿ�ѡ����ί�к�ͬ�ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectConsignContract1(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���ί�к�ͬ�ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lConsignContractID ί�к�ͬ��ʶ
 * @param strConsignContractName ί�к�ͬ����
 * @param strConsignContractNo ί�к�ͬ���
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
 * ���ܿ飨ί�к�ͬ�ؼ���ע�ͽ�����
 */



 /**
 * ���ܿ飨ί�к�ͬ�ؼ� ��״̬ ���������͹̶���ע�Ϳ�ʼ��
 *
 */



/**
 * ����ί�к�ͬ�ؼ�
 * @param strFormName �ؼ�����form������
 * @param lConsignContractID ί�к�ͬ��ʶ
 * @param strConsignContractNo ί�к�ͬ���
 * @param lLoanTypeID �����������ͱ�ʶ
 * @param lOfficeID ���´���ʶ
 * @param lStatusID ״̬ (1:�Ѹ���)
 * @param objClientID �ͻ�����
 * @param strTitle �ؼ���������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showConsignContractCtrl2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID  + "\",\"" + lStatusID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lConsignContractID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strConsignContractNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
			  + "<input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strConsignContractNo + "' onkeydown='javascript:isSelectConsignContract2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID  + "\",\"" + lStatusID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * ��ʾί�к�ͬѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showConsignContractCtrl2(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)//�տί�к�ͬ���
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strConsignContractNo;
	
	//�õ��ͻ���ʶ
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
 * �Ƿ�ѡ����ί�к�ͬ�ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectConsignContract2(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���ί�к�ͬ�ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lConsignContractID ί�к�ͬ��ʶ
 * @param strConsignContractName ί�к�ͬ����
 * @param strConsignContractNo ί�к�ͬ���
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
 * ���ܿ飨ί�к�ͬ�ؼ���ע�ͽ�����
 */





/**
 * ���ܿ飨ʱ��ؼ���ע�Ϳ�ʼ��
 */

var weekend = [0,6];
var weekendColor = "#e0e0e0";
var fontface = "Verdana";
var fontsize = 2;

var gNow = new Date();
var ggWinCal;
isNav = (navigator.appName.indexOf("Netscape") != -1) ? true : false;
isIE = (navigator.appName.indexOf("Microsoft") != -1) ? true : false;

Calendar.Months = ["һ��", "����", "����", "����", "����", "����",
"����", "����", "����", "ʮ��", "ʮһ��", "ʮ����"];

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
 this.wwrite("<head><title>����</title>");
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
 this.wwriteA(this.gMonthName + " " + this.gYear + "��");
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
 this.wwrite("<head><title>����</title>");
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
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>��</B></td>";
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>һ</B></td>";
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>��</B></td>";
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>��</B></td>";
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>��</B></td>";
 vCode = vCode + "<TD WIDTH='14%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>��</B></td>";
 vCode = vCode + "<TD WIDTH='16%' align='center'><FONT  FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>��</B></td>";
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
 * ���ܿ飨ʱ��ؼ���ע�ͽ�����
 */

/**
 * ���ܿ飨�û����ƿؼ�--����ҳ��ʹ�ã�ע�Ϳ�ʼ��
 *
 */

/**
 * �����û����ƿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strUserName �û�����
 * @param strCode �û�����
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showUserNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\""+ strUserName + "\",\""  + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box' type='text' name='" + strCtrlName + "' value='" + strUserName + "' onkeydown='javascript:isSelectUserName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strUserName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�û���¼����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showUserNameCtrl(strFormName,strCtrlName,strUserName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ�û���¼����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectUserName(strFormName,strCtrlName,strUserName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showUserNameCtrl(strFormName,strCtrlName,strUserName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * ����û����ƿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strUserName �û�����
 * @param strCode �û�����
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
 * ���ܿ飨�û����ƿؼ���ע�ͽ�����
 */

/**
 * ���ܿ飨�û����ƿؼ�--��ͨҳ��ʹ�ã�ע�Ϳ�ʼ��
 *
 */

/**
 * �����û����ƿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strUserName �û�����
 * @param strCode �û�����
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showUserNameCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box' type='text' name='" + strCtrlName + "' value='" + strUserName + "' onkeydown='javascript:isSelectUserName1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�û���¼����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showUserNameCtrl1(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectUserName1.jsp?"+paraState  , "SelectUserName" , sFeatures , false );
	g_win.focus();
}

/**
 * �Ƿ���ʾ�û���¼����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectUserName1(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
	
		if (window.event.keyCode==13)//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showUserNameCtrl1(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * ����û����ƿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strUserName �û�����
 * @param strCode �û�����
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
 * ���ܿ飨�û����ƿؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨�û����ƿؼ�--��ͨҳ��ʹ��,����ģ����ʾ�û���ע�Ϳ�ʼ��
 *
 */

/**
 * �����û����ƿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strUserName �û�����
 * @param strCode �û�����
 * @param lModuleID ģ���ʶ
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showUserNameCtrl2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lModuleID + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box' type='text' name='" + strCtrlName + "' value='" + strUserName + "' onkeydown='javascript:isSelectUserName2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lModuleID + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�û���¼����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showUserNameCtrl2(strFormName,strCtrlName,lModuleID,lOfficeID,strNextCtrlName)//�տ�ͻ����
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lModuleID=" + lModuleID + "&lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectUserName2.jsp?"+paraState  , "SelectUserName" , sFeatures , false );
	g_win.focus();
}

/**
 * �Ƿ���ʾ�û���¼����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectUserName2(strFormName,strCtrlName,lModuleID,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
	
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ����û����ƿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strUserName �û�����
 * @param strCode �û�����
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
 * ���ܿ飨�û����ƿؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨�û����ƿؼ�--�����Ŵ�-21ʹ�ã��������������ʵľ���Ա��ע�Ϳ�ʼ��
 *
 */

/**
 * �����û����ƿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strUserName �û�����
 * @param strCode �û�����
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showUserNameCtrl3(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box' type='text' name='" + strCtrlName + "' value='" + strUserName + "' onkeydown='javascript:isSelectUserName3(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�û���¼����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showUserNameCtrl3(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectUserName3.jsp?"+paraState  , "SelectUserName" , sFeatures , false );
	g_win.focus();
}

/**
 * �Ƿ���ʾ�û���¼����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectUserName3(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showUserNameCtrl3(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * ����û����ƿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strUserName �û�����
 * @param strCode �û�����
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
 * ���ܿ飨�û����ƿؼ���ע�ͽ�����
 */




/**
 * ���ܿ飨��¼���ƿؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ������¼���ƿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strLogin ��¼����
 * @param strCode �û�����
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showLoginCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strLogin + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "' value='" + strLogin + "' onkeydown='javascript:isSelectLogin(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strLogin + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ��¼���ƴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showLoginCtrl(strFormName,strCtrlName,strLogin,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ��¼���ƴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectLogin(strFormName,strCtrlName,strLogin,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showLoginCtrl(strFormName,strCtrlName,strLogin,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * �����¼���ƿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strLogin ��¼����
 * @param strCode �û�����
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
 * ���ܿ飨��¼���ƿؼ���ע�ͽ�����
 */

/**
 * ���ܿ飨�û���ؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �����û���ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strGroupName �û�������
 * @param strCode �û������
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
 * @param strProperty  strCtrlName����������
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showGroupNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strGroupName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "' value='" + strGroupName +"' " + strProperty + "  onkeydown='javascript:isSelectGroupName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strGroupName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�û��鴰��
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showGroupNameCtrl(strFormName,strCtrlName,strGroupName,lOfficeID,strNextCtrlName)//�տ�ͻ����
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName + "&strGroupName=" + strGroupName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../jsp/SelectGroupName.jsp?"+paraState  , "SelectGroupName" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * �Ƿ���ʾ�û��鴰��
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectGroupName(strFormName,strCtrlName,strGroupName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showGroupNameCtrl(strFormName,strCtrlName,strGroupName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * ����û���ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strGroupName �û�������
 * @param strCode �û�����
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
 * ���ܿ飨�û���ؼ���ע�ͽ�����
 */

/**
 * ���ܿ飨���ʼƻ��ؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �������ʼƻ��ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strRatePlan ���ʼƻ�����
 * @param strCode �û�����
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
 * @param nTypeID ���ͣ�1-��ʾ����
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:if(" + strFormName + "." + strCtrlName +"Ctrl.disabled == false) {showRatePlanCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\");}'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+nTypeID+"' ID='"+strCtrlName+ "Type' NAME='"+strCtrlName+"Type'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRatePlan + "' onkeydown='javascript:isSelectRatePlan(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ���ʼƻ�����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showRatePlanCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ���ʼƻ�����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectRatePlan(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������ʼƻ��ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strGroupName �û�������
 * @param strCode �û�����
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
 * ���ܿ飨���ʼƻ��ؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨���ʿؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �������ʿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strRateName ��������
 * @param lRateID ���ʴ���
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showRateCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				
				+ " <INPUT TYPE='HIDDEN' VALUE='' ID='"+strCtrlName+ "Value' NAME='"+strCtrlName+"Value'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRateName + "' onkeydown='javascript:isSelectRate(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ���ʴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showRateCtrl(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ���ʴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectRate(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������ʿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strRateName ��������
 * @param lRateID ���ʴ���
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
 * ���ܿ飨���ʿؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨�ͻ������ſؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �����ͻ������ſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strClientTypeNoName �ͻ�����������
 * @param lClientTypeID �ͻ��������
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showClientTypeNoCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lClientTypeID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strClientTypeNoName + "' onkeydown='javascript:isSelectClientTypeNo(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�ͻ������Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showClientTypeNoCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectClientTypeNo.jsp?"+paraState  , "SelectClientTypeNo" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * �Ƿ���ʾ�ͻ������Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectClientTypeNo(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ����ͻ������ſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strClientTypeNoName �ͻ�����������
 * @param lClientTypeID ���ʴ���
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
 * ������Ҫ����ͻ��������Ƶ������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ���ܿ飨�ͻ������ſؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨�ͻ��������ƿؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �����ͻ��������ƿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strClientTypeNameName �ͻ�������������
 * @param lClientTypeID �ͻ��������
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showClientTypeNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lClientTypeID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strClientTypeNameName + "' onkeydown='javascript:isSelectClientTypeName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�ͻ��������ƴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showClientTypeNameCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
{

	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var paraState="lOfficeID=" + lOfficeID + "&strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName;
	g_win=window.open( "../../jsp/SelectClientTypeName.jsp?"+paraState  , "SelectClientTypeName" , sFeatures , false );
//	alert("3");
	g_win.focus();
}

/**
 * �Ƿ���ʾ�ͻ��������ƴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectClientTypeName(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ����ͻ��������ƿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strClientTypeNameName �ͻ�������������
 * @param lClientTypeID ���ʴ���
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
 * ���ܿ飨�ͻ��������ƿؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨Libor���ʿؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ����Libor���ʿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strLiborRateName Libor��������
 * @param lLiborRateID Libor���ʴ���
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showLiborRateCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLiborRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strLiborRateName + "' onkeydown='javascript:isSelectLiborRate(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾLibor���ʴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showLiborRateCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾLibor���ʴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectLiborRate(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���Libor���ʿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strLiborRateName Libor��������
 * @param lLiborRateID Libor���ʴ���
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
 * ������Ҫ������ֵ������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ���ܿ飨Libor���ʿؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨���ʱ�ſؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �������ʱ�ſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strRateCode ���ʱ��
 * @param lRateID ���ʴ���
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showRateCodeCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRateCode + "' onkeydown='javascript:isSelectRateCode(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ������Ҫ��������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ��ʾ���ʱ�Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showRateCodeCtrl(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ���ʱ�Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectRateCode(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������ʱ�ſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strRateCode ���ʱ��
 * @param lRateID ���ʴ���
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
 * ���ܿ飨���ʱ�ſؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨���ʱ�ſؼ� ��ʾ����ֵ��ע�Ϳ�ʼ��
 *
 */

/**
 * �������ʱ�ſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strRateValue ����ֵ
 * @param lRateID ���ʴ���
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showRateCodeCtrl2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box' readonly type='text' name='" + strCtrlName + "Value' value='" + strRateValue + "' onkeydown='javascript:isSelectRateCode2(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ���ʱ�Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showRateCodeCtrl2(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ���ʱ�Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectRateCode2(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������ʱ�ſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strRateValue ����ֵ
 * @param lRateID ���ʴ���
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
 * ���ܿ飨���ʱ�ſؼ���ע�ͽ�����
 */




/**
 * ���ܿ飨���ʱ�ſؼ� ���ڼ��Ժ�ע�Ϳ�ʼ��
 *
 */

/**
 * �������ʱ�ſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strRateCode ���ʱ��
 * @param lRateID ���ʴ���
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showRateCodeCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRateCode + "' onkeydown='javascript:isSelectRateCode1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}

/**
 * ������Ҫ��������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ��ʾ���ʱ�Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showRateCodeCtrl1(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ���ʱ�Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectRateCode1(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������ʱ�ſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strRateCode ���ʱ��
 * @param lRateID ���ʴ���
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
 * ���ܿ飨���ʱ�ſؼ���ע�ͽ�����
 */




/**
 * ���ܿ飨���ʱ�ſؼ� ���������Ч�գ�ע�Ϳ�ʼ��
 *
 */

/**
 * �������ʱ�ſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strRateCode ���ʱ��
 * @param lRateID ���ʴ���
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showRateCodeCtrl3(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRateCode + "' onkeydown='javascript:isSelectRateCode3(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}

/**
 * ������Ҫ��������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ��������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ��������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ��ʾ���ʱ�Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showRateCodeCtrl3(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ���ʱ�Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectRateCode3(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������ʱ�ſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strRateCode ���ʱ��
 * @param lRateID ���ʴ���
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
 * ���ܿ飨���ʱ�ſؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨�������ƿؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �����������ƿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strRateName ��������
 * @param lRateID ���ʴ���
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showRateNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strRateName + "' onkeydown='javascript:isSelectRateName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�������ƴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showRateNameCtrl(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ�������ƴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectRateName(strFormName,strCtrlName,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ����������ƿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strRateName ��������
 * @param lRateID ���ʴ���
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
 * ���ܿ飨�������ƿؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨�ͻ����ƿؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �����ͻ����ƿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strClientName �ͻ�����
 * @param lClientID �ͻ�����
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showClientNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lClientID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strClientName + "' onkeydown='javascript:isSelectClientName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�ͻ����ƴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showClientNameCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ�ͻ����ƴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectClientName(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ����ͻ����ƿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strClientName �ͻ�����
 * @param lClientID �ͻ�����
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
 * ���ܿ飨�ͻ����ƿؼ���ע�ͽ�����
 */




/**
 * ���ܿ飨�ͻ����ƿؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �����ͻ����ƿؼ�(��Input�ؼ�)
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strClientName �ͻ�����
 * @param lClientID �ͻ�����
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showClientNameCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lClientID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' size='59' name='" + strCtrlName + "Ctrl' value='" + strClientName + "' onkeydown='javascript:isSelectClientName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </font></td>");
}

//������������  createClientNameCtrl����

/**
 * ���ܿ飨�ͻ����ƿؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨չ������ؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ����չ������ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ�����
 * @param lExtendApplyID �����ʶ
 * @param strExtendApplyNo ������
 * @param lLoanTypeID �����������ͱ�ʶ����㲿�������κ�һ������������ͽԿɣ�
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���б�ʶ
 * @param strTitle �ؼ���������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showExtendApplyCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lExtendApplyID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strExtendApplyNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strExtendApplyNo + "' onkeydown='javascript:isSelectExtendApply(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * ��ʾ����ѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showExtendApplyCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)//�տ��������
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
 * �Ƿ�ѡ����չ������ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectExtendApply(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���չ������ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lExtendApplyID �����ʶ
 * @param strExtendApplyNo ������
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
 * ���ܿ飨չ������ؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨�ͻ����е��˻��ſؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �����ͻ����е��˻��ſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strClientAccount �ͻ����е��˻���
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showClientAccountCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box   type='text' name='" + strCtrlName + "' value='" + strClientAccount + "' onkeydown='javascript:isSelectClientAccount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ�ͻ����е��˻��Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showClientAccountCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ�ͻ����е��˻��Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectClientAccount(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showClientAccountCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * ����ͻ����е��˻��ſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strClientAccount �ͻ����е��˻���
 */
function outputClientAccountCtrl(strFormName,strCtrlName,strClientAccount)
{
	var strTempCtrl;
	var i,k=0;
	var Ind;
	eval(strFormName + "." + strCtrlName + ".value='" + strClientAccount+ "'");

}

/**
 * ���ܿ飨�ͻ����е��˻��ſؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨���ֿؼ���ע�Ϳ�ʼ��
 *
 */



/**
 * �������ֿؼ�
 * @param strFormName �ؼ�����form������
 * @param lDiscountID ���ֱ�ʶ
 * @param strDiscountNo ���ֱ��
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param objClientID �ͻ�����
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showDiscountCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" +  strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lDiscountID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strDiscountNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strDiscountNo + "' onkeydown='javascript:isSelectDiscount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" +  strNextCtrlName + "\")'>"
			  + "<input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ " </td>");
				
}




/**
 * ��ʾ����ѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showDiscountCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ���ֱ��
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strDiscountNo;

	//�õ��ͻ���ʶ
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
 * �Ƿ�ѡ�������ֿؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectDiscount(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������ֿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lDiscountID ���ֱ�ʶ
 * @param strDiscountNo ���ֱ��
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
 * ������Ҫ������ֿͻ����Ƶ������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * �������ֿؼ�
 * @param strFormName �ؼ�����form������
 * @param lDiscountID ���ֱ�ʶ
 * @param strDiscountNo ���ֱ��
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param objClientID �ͻ�����
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showDiscountCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" +  strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lDiscountID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strDiscountNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strDiscountNo + "' onkeydown='javascript:isSelectDiscount1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" +  strNextCtrlName + "\")'>"
			  + "<input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ " </td>");
				
}




/**
 * ��ʾ����ѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showDiscountCtrl1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ���ֱ��
{
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strDiscountNo;

	//�õ��ͻ���ʶ
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
 * �Ƿ�ѡ�������ֿؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectDiscount1(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������ֿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lDiscountID ���ֱ�ʶ
 * @param strDiscountNo ���ֱ��
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
 * ������Ҫ������ֿͻ����Ƶ������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ���ܿ飨���ֿؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨ծȯƷ�ֿؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ����ծȯƷ�ֿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strCreditName ծȯƷ��
 * @param lCreditID ծȯ��ʾ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showCreditNameCtrl(\"" + strFormName + "\",\"" + strCtrlName +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lCreditID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strCreditName + "' onkeydown='javascript:isSelectCreditName(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾծȯƷ�ִ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showCreditNameCtrl(strFormName,strCtrlName,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾծȯƷ�ִ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectCreditName(strFormName,strCtrlName,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���ծȯƷ�ֿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strCreditName ծȯƷ��
 * @param lCreditID ծȯ��ʾ
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
 * ���ܿ飨ծȯƷ�ֿؼ���ע�ͽ�����
 */



/**
 * ���ܿ飨ծȯ����ؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ����ծȯ����ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strCreditCode ծȯ����
 * @param lCreditID ծȯ��ʾ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showCreditCodeCtrl(\"" + strFormName + "\",\"" + strCtrlName +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lCreditID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strCreditCode + "' onkeydown='javascript:isSelectCreditCode(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾծȯ���봰��
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showCreditCodeCtrl(strFormName,strCtrlName,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾծȯ���봰��
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectCreditCode(strFormName,strCtrlName,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���ծȯ����ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strCreditCode ծȯ����
 * @param lCreditID ծȯ��ʾ
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
 * ������Ҫ���ծȯƷ�����Ƶ������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ���ծȯƷ�ֱ���������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ���ܿ飨ծȯ����ؼ���ע�ͽ�����
 */


 /**
 * ���ܿ飨������ʾ�ؼ���ע�Ϳ�ʼ����
 *
 */

/**
 * ��ʽ������
 * @param strData ��Ҫ��ʽ��������
 * @return ���ظ�ʽ��������
 */
 function formatIntereRate(fromName,rateCntlName)
 {
  var strData=eval(fromName + '.' + rateCntlName + '.value');
	if(isInnerFloat(strData))
 	{
 		
		if(strData!="")
 		{
			var i,strTemp;

			//��С����ǰ�ͺ�����ݷֱ�ȡ����
	 		var nPoint;
	 		nPoint=strData.indexOf(".");
	 		var strFront=strData,strEnd="";
	 		if(nPoint!=-1)
	 		{
	 			strFront=strData.substring(0,nPoint);
	 			strEnd=strData.substring(nPoint+1,strData.length);
	 		}

			//С����ǰ�������λ����0
			if (strFront.length==0)
			{
				strFront = "0";
			}
			//�����߽�С��������ֵ��������λ
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
 * ���ܿ飨������ʾ�ؼ���ע�ͽ�����
 *
 */
 
 
 
/**
 * ���ܿ飨���׺ſؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �������׺ſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strInvestmentCode ���׺�
 * @param lInvestmentID ���״���
 * @param lCurrencyID ���ֱ�ʶ
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showInvestmentCodeCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lInvestmentID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strInvestmentCode + "' onkeydown='javascript:isSelectInvestmentCode(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lCurrencyID + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾ���׺Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showInvestmentCodeCtrl(strFormName,strCtrlName,lCurrencyID,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾ���׺Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lCurrencyID ���ֱ�ʶ
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectInvestmentCode(strFormName,strCtrlName,lCurrencyID,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������׺ſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strInvestmentCode ���׺�
 * @param lInvestmentID ���״���
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
 * ���ܿ飨���׺ſؼ���ע�ͽ�����
 */



/**
 * ��ʾ�����õ��˻�
 * @param strCtrlName   �ؼ�����
 * @param strAccountNo  �˻���
 * @param strTitle      ��������
 * @param strFirstTD    ��һ��TD����Ĳ���
 * @param strSecondTD   �ڶ���TD����Ĳ���
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

	document.writeln("<td " + strFirstTD + ">" + strTitle + "�� "
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
	{//��������ʻ�Ϊ��ʱ����ʾ�ĸ��ı���
		document.writeln( "  - "
			+ "  <input type='text' disabled name='" + strCtrlName + "zhh4' size='1' maxlength='1' class='box'  value='" + strAccountNo4 + "' >"
			+ " "
			+ "</td>");
	}
}

/**
 * ��ʾ���Ľ��
 */

	var CN = new Array(10);
	CN[0]="��";
	CN[1]="Ҽ";
	CN[2]="��";
	CN[3]="��";
	CN[4]="��";
	CN[5]="��";
	CN[6]="½";
	CN[7]="��";
	CN[8]="��";
	CN[9]="��";
	var LP = new Array(12);
	LP[0]="Ǫ";
	LP[1]="��";
	LP[2]="ʰ";
	LP[3]="��";
	LP[4]="Ǫ";
	LP[5]="��";
	LP[6]="ʰ";
	LP[7]="��";
	LP[8]="Ǫ";
	LP[9]="��";
	LP[10]="ʰ";
	LP[11]="Ԫ";
	var RP =new Array(2);
	RP[0]= "��";
	RP[1]="��";

	/**
	 * ��ʾ���Ľ��
	 */
	function showChinese(sAmount,nCurrencyID)
	{
		var sResult = "";
		if (sAmount == null || sAmount=="") 
		{
				sResult = "��Ԫ";
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
  					sResult="��Ԫ" ;
  					break;
  				case 3:
  					sResult="Ӣ��";
  					break;
  				case 4:
  					sResult="ŷԪ";
  					break;
  				case 5:
  					sResult="��Ԫ";
  					break;
  				case 6:
  					sResult="�¼���Ԫ";
  					break;
  			}
			}
			else 
			{
  			switch(nCurrencyID)
  			{
  				case 1:
  				default:
  					sResult=sResult + "Ԫ";
  					break;
  				case 2:
  					sResult="��Ԫ" + sResult + "Ԫ";
  					break;
  				case 3:
  					sResult="Ӣ��" + sResult + "��";
  					break;
  				case 4:
  					sResult="ŷԪ" + sResult+ "Ԫ";
  					break;
  				case 5:
  					sResult="��Ԫ" + sResult+ "Ԫ";
  					break;
  				case 6:
  					sResult="�¼���Ԫ" + sResult+ "Ԫ";
  					break;
  			}
  			if(isLeftHaveSingle(sLeft) && getRightOfPoint(sRight,nCurrencyID)!="")
  			{
  				sResult=sResult + "��";
  			}
  	  }
			sResult=sResult+getRightOfPoint(sRight,nCurrencyID);
			if(isFullRight(sRight,nCurrencyID)==true)
			{
				sResult=sResult + "��";
			}
		}
		return sResult;
	}
	
	/**
	 * ��ֵ��λ�Ƿ���ֵ
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
	 * �õ�������ֵ
	 * @param nData ֵ
	 */
	function getLeftOfPoint(nData)
	{
		var nYiNum=0;//��λ��
		var nWanNum=0;//��λ��
		var nRemainNum=0;//ʣ�������
		var nThousandBelowNum=0;//ǧ���µ�����
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
		if(nYiNum>0)//�����λ��>0������
		{
			if(nYiNum>=10000)//�������1�򣬵ݹ�
			{
				strReturn=strReturn + getLeftOfPoint(nYiNum);
			}
			else//���С��һ�򣬵ó�ǧ��������
			{
				strReturn=strReturn+getThousandChineseData(nYiNum);
			}
			strReturn=strReturn + "��";
			if(nWanNum>0 || nRemainNum >0)//˵���п��ܲ�0
			{
				if((parseInt(parseInt(nYiNum)/10))==parseInt(nYiNum)/10)//˵����λΪ0
				{
					strReturn=strReturn + "��";
				}
				else//��λ��Ϊ0
				{
					if(parseInt(nWanNum)<1000)//С��һǧ����Ҫ��0
					{
						strReturn=strReturn + "��";
					}
				}
			}
		}
		if(nWanNum>0)//����
		{
			strReturn=strReturn + getThousandChineseData(nWanNum);
			strReturn=strReturn + "��";
			if(nRemainNum>0)//˵���п��ܲ�0
			{
				if((parseInt(parseInt(nWanNum)/10))==parseInt(nWanNum)/10)//˵����λΪ0
				{
					strReturn=strReturn + "��";
				}
				else//��λ��Ϊ0
				{
					if(parseInt(nRemainNum)<1000)//С��һǧ����Ҫ��0
					{
						strReturn=strReturn + "��";
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
	 * �õ�ǧ�������ݵ�����
	 */
	function getThousandChineseData(nData)
	{
		var strReturn="";
		if(parseInt(nData)>9999)
		{
			return "�����ǧ";
		}
		else
		{
			var nRemainNum=nData;//ʣ�����
			var nThousandNum=0;//ǧλ��
			var nHundredNum=0;//��λ��
			var nTenNum=0;//ʮλ��
			var nNum=0;//��λ��
			nThousandNum=parseInt(parseInt(nRemainNum)/1000);//ǧλ��
			nRemainNum=parseInt(nRemainNum)-parseInt(nThousandNum)*1000;
			nHundredNum=parseInt(parseInt(nRemainNum)/100);
			nRemainNum=parseInt(nRemainNum)-parseInt(nHundredNum)*100;
			nTenNum=parseInt(parseInt(nRemainNum)/10);
			nNum=parseInt(nRemainNum)-parseInt(nTenNum)*10;
			if(parseInt(nThousandNum)>0) 
			{
				strReturn=strReturn + CN[nThousandNum]+ "Ǫ";
			}
			if(parseInt(nHundredNum)>0)
			{
				strReturn=strReturn + CN[nHundredNum] + "��";
			}
			if(parseInt(nTenNum)>0)
			{
				if(nThousandNum>0 && nHundredNum==0)
				{
					strReturn=strReturn + "��";
				}
				strReturn=strReturn + CN[nTenNum] + "ʰ";
			}
			if(parseInt(nNum)>0)
			{
				if(nTenNum==0)
				{
					if(nThousandNum>0 || nHundredNum>0)
					{
						strReturn=strReturn + "��";
					}
				}
				strReturn=strReturn+CN[nNum];
			}
		}
		return strReturn;
	}
	
	/**
	 * ���ݽ���ұߵ�ֵ�жϣ��Ƿ����
	 * @param sRight �ұߵ�ֵ
	 * @param nCurrencyID ����
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
					case 1://�����
					  if(sTempRight>=10)
					  {
				
					  	if(sRight.substring(1,2)=="0" || sRight.substring(1,2)=="")
					  	{
					  		bIsFull=true;
					  	}
					  }	
					  break;
					case 2://��Ԫ
					case 3://Ӣ��
					case 4://ŷԪ
					case 6://�¼���Ԫ
					  if(sTempRight==0)
					  {
					  	bIsFull=true;
					  }
					  break;
					case 5://��Ԫ
					  bIsFull=true;
					  break;
					  
				}
			}
		}
		return bIsFull;

	}

	/** 
	 * �õ�С�����ұߵĲ���
	 * @param sRight �ұߵ�ֵ
	 * @param nCurrencyID ����
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
				sb=sb + "��";
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
					
					sb=sb+getThousandChineseData(sTempRight)+"����";
					break;
				case 3:
					sb=sb+getThousandChineseData(sRight)+ "��ʿ";
					break;
				case 4:
					sb=sb+getThousandChineseData(sRight)+ "ŷ��";
					break;
				case 6:
					sb=sb+getThousandChineseData(sRight)+ "�¼��·�";
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
			alert(" ��������ǩ�� : " +form_signature.signature.value);
			return true;
		}
		if (!form_signature.signature.value)
		{
			alert("ǩ������ȡ����");
			return false;
		}
	
	}
	
	
/**
 * ����Libor���ʱ�ſؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
* @param strLiborRateCode Libor���ʱ��
 * @param lLiborRateID Libor���ʴ���
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showLiborRateCodeCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strLiborRateCode + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLiborRateID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' value='" + strLiborRateCode + "' onkeydown='javascript:isSelectLiborRateCode(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strLiborRateCode + "\",\"" + lCurrencyID + "\",\"" + lOfficeID + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}


/**
 * ��ʾLibor���ʴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�  
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
 * �Ƿ���ʾLibor���ʴ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectLiborRateCode(strFormName,strCtrlName,strLiborRateCode,lCurrencyID,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���Libor���ʿؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strLiborRateName Libor��������
 * @param lLiborRateID Libor���ʴ���
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
 * ������Ҫ������ֵ������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ���ܿ飨Libor���ʱ�ſؼ���ע�ͽ�����
 */


/**
 * ���ܿ飨��ͻ��Ŵ󾵹����Ŀͻ��˺ſؼ���ע�Ϳ�ʼ��
 */
 
 
 /**
 * �������´��˻��ؼ��ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���,��value�Ǽ�¼���´����˻���ţ�����¼ID��
 * @param strOfficeAccount ���´��˻����
 * @param lCLIENTID ��λID�����С�ڵ���0������ȫ��
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showOfficeAccountCtrl1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strOfficeAccount + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strOfficeAccount+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <input type='hidden' name='" + strCtrlName + "objClientID' value='" + objClientID + "'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' readonly value='" + strOfficeAccount + "' onkeydown='javascript:isSelectOfficeAccount1(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strOfficeAccount + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"  
				+ " </td>");
}


/**
 * ��ʾ���´��˻���Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showOfficeAccountCtrl1(strFormName, strCtrlName, strOfficeAccount, lCurrencyID, strNextCtrlName)
{
	//�õ��ͻ���ʶ
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
 * �Ƿ���ʾ���´��˻���Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectOfficeAccount1(strFormName,strCtrlName,strOfficeAccount, lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���ܿ飨��ͻ��Ŵ󾵹����Ŀͻ��˺ſؼ���ע�ͽ�����
 */

/**
 * ���ܿ飨��ͻ�ID�����Ŀͻ��˺ſؼ���ע�Ϳ�ʼ��
 */
 
 
 
 
 /**
 * Writen by wli@isoftstone.com
 * �������´��˻��ؼ��ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���,��value�Ǽ�¼���´����˻���ţ�����¼ID��
 * @param strOfficeAccount ���´��˻����
 * @param lCLIENTID ��λID�����С�ڵ���0������ȫ��
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showOfficeAccountCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strOfficeAccount + "\",\"" + lCLIENTID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strOfficeAccount+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class='box'  type='text' name='" + strCtrlName + "Ctrl' readonly value='" + strOfficeAccount + "' onkeydown='javascript:isSelectOfficeAccount(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strOfficeAccount + "\",\"" + lCLIENTID + "\",\"" + lCurrencyID + "\",\"" + strNextCtrlName + "\")'>"  
				+ " </td>");
}


/**
 * ��ʾ���´��˻���Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
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
 * �Ƿ���ʾ���´��˻���Ŵ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectOfficeAccount(strFormName,strCtrlName,strOfficeAccount, NCLIENTID, lCurrencyID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������´��˻���ſؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strLiborRateName Libor��������
 * @param lLiborRateID Libor���ʴ���
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
 * ���ܿ飨��ͻ�ID�����Ŀͻ��˺ſؼ���ע�ͽ�����
 */




/**
 * ���ܿ飨��״̬��������ؼ���ע�Ϳ�ʼ��
 *
 */



/**
 * ����������ؼ�
 * @param strFormName �ؼ�����form������
 * @param lLoanInfoID �������ʶ
 * @param strLoanInfoNo ��������
 * @param lLoanTypeID �����������ͱ�ʶ
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param lStatusID ״̬ 1-���ύ��������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + "> " + strTitle + "��<a href='javascript:showStatusLoanInfoCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID+ "\",\"" + lStatusID + "\",\""+ strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lLoanInfoID+"' ID='"+strCtrlName+ "' NAME='"+strCtrlName+"'>"
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strLoanInfoNo+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box  type='text' name='" + strCtrlName + "Ctrl' value='" + strLoanInfoNo + "' onkeydown='javascript:isSelectStatusLoanInfo(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID  + "\",\"" + lLoanTypeID + "\",\"" + lStatusID+ "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>");
}




/**
 * ��ʾ������ѡ���
 * @param strFormName
 * @param strCtrlName
 */
function showStatusLoanInfoCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)//�տ��������
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
 * �Ƿ�ѡ����������ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 */
function isSelectStatusLoanInfo(strFormName,strCtrlName,lOfficeID,lCurrencyID,lLoanTypeID,lStatusID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���������ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lLoanInfoID �������ʶ
 * @param strLoanInfoName ����������
 * @param strLoanInfoNo ��������
 * @param strAccountID һ�����������е��ʻ�
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
 * ���ܿ飨��״̬��������ؼ���ע�ͽ�����
 */
/**
 * ���ܿ飨�ֽ�����ؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �����ֽ�����ؼ�  ע�⣡��������������ؼ��������淶����ʶ�ǿؼ�����+"ID"���ı����ǿؼ�����
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param strAbstract �ֽ�����
 * @param lCashFlowID �ֽ�����ID 
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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
		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showCashFlowCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+lCashFlowID+"' ID='"+strCtrlName+ "ID' NAME='"+strCtrlName+"ID'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=box   type='text' name='" + strCtrlName + "' value='" + strCashFlow + "' onkeydown='javascript:isSelectCashFlow(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + strNextCtrlName + "\")'>"
				+ " </td>"); 
}

 
 
/**
 * ��ʾժҪ����
 * @param strFormName form����
 * @param strCtrlName �ؼ����� 
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showCashFlowCtrl(strFormName,strCtrlName,strNextCtrlName)//�տ�ͻ����
{ 
	var sFeatures="toolbar=no,menubar=no,resizable=no,location=no,width=436,height=340,scrollbars=yes";
	var g_win;
	var strCashFlow = eval(strFormName+"."+strCtrlName+".value");
	var paraState="strFormName=" + strFormName +"&strCtrlName="+strCtrlName +"&strNextCtrlName=" + strNextCtrlName+"&strCashFlow="+strCashFlow;
	g_win=window.open( "../../jsp/SelectCashFlow.jsp?"+paraState  , "SelectCashFlow" , sFeatures , false );
 	g_win.focus();
}

/**
 * �Ƿ���ʾժҪ����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectCashFlow(strFormName,strCtrlName,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ���ժҪ�ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param strAbstract ����������
 * @param strCode ժҪ����
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
 * ���ܿ飨���ʿؼ���ע�ͽ�����
 */
/**
 * ���ܿ飨���ʿؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * �������ʿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param fFixedRate ����
 * @param strCode ժҪ����
 * @param lOfficeID ���´���ʶ
 * @param strTitle �ؼ���������
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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
 			
		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showFixedRateCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
				+ "  "
				+ " <INPUT TYPE='HIDDEN' VALUE='"+strCode+"' ID='"+strCtrlName+ "Code' NAME='"+strCtrlName+"Code'>"
				+ "</td>"
				+ "<td " + strSecondTD + " ><input class=tar  type='text' name='" + strCtrlName + "' value='" + fFixedRate + "' onblur='javascript:formatIntereRate(\"" + strFormName + "\",\"" + strCtrlName + "\")' onfocus=\"nextfield ='"+ strNextCtrlName + "';\">"
				+ " %</td>");
}

 
 
/**
 * ��ʾժҪ����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showFixedRateCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName)//�տ�ͻ����
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
 * �Ƿ���ʾժҪ����
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectFixedRate(strFormName,strCtrlName,lOfficeID,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
		{
			gnIsSelectCtrl=1;
			showFixedRateCtrl(strFormName,strCtrlName,lOfficeID,strNextCtrlName);
		}
	}
}


/**
 * ���ժҪ�ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param fFixedRate ������
 * @param strCode ժҪ����
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
 * ���ܿ飨ժҪ�ؼ���ע�ͽ�����
 */
 
 
 
 /**
 * ���ܿ飨��ǰ����֪ͨ���ؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ������ǰ����֪ͨ���ؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ���
 * @param lAheadRepayRequisitionID ��ǰ����֪ͨ����ʶ
 * @param strAheadRepayRequisitionCode ��ǰ����֪ͨ��
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param lContractID ��ͬ����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showAheadRepayRequisitionCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
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
 * ��ʾ�ſ�֪ͨ��ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showAheadRepayRequisitionCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ�ͻ����
{
	//�õ��ʻ���ʶ
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
 * �Ƿ�ѡ���˷ſ�֪ͨ���ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectAheadRepayRequisition(strFormName,strCtrlName,lOfficeID,lCurrencyID,strAmount,dtInterestDate,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������Ҫ����ͻ���ʶ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ����ͻ���ʶ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ����ſ�֪ͨ���ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lLetoutRequisitionID �ſ�֪ͨ����ʶ
 * @param strLetoutRequisitionCode �ſ�֪ͨ��
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
 * ���ܿ飨��ǰ����֪ͨ���ؼ���ע�ͽ�����
 */
 
  /**
 * ���ܿ飨����Ʊ�ݿؼ���ע�Ϳ�ʼ��
 *
 */

/**
 * ��������Ʊ�ݿؼ�
 * @param strFormName �ؼ�����form������
 * @param strCtrlName �ؼ����ƣ��������������form���ǲ����ظ��� 
 * @param strDiscountBillCode ����Ʊ��
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strTitle �ؼ���������
 * @param strAmount  ������
 * @param strStartDate ��ʼ���ڶ���
 * @param strEndDate ��ֹ���ڶ���
 * @param lContractID ��ͬ����
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 * @param strFirstTD ��һ��TD����Ĳ���
 * @param strSecondTD �ڶ���TD����Ĳ���
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

		document.writeln("<td " + strFirstTD + ">" + strTitle + "��<a href='javascript:showDiscountBillCtrl(\"" + strFormName + "\",\"" + strCtrlName + "\",\"" + lOfficeID + "\",\"" + lCurrencyID +"\",\"" + strNextCtrlName + "\")'><img border= '0' src='/websett/icon.gif' width='15' height='15'></a> "
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
 * ��ʾ�ſ�֪ͨ��ѡ���
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function showDiscountBillCtrl(strFormName,strCtrlName,lOfficeID,lCurrencyID,strNextCtrlName)//�տ�ͻ����
{
	//�õ��ʻ���ʶ
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
 * �Ƿ�ѡ���˷ſ�֪ͨ���ؼ�
 * @param strFormName form����
 * @param strCtrlName �ؼ�����
 * @param lOfficeID ���´���ʶ
 * @param lCurrencyID ���ֱ�ʶ
 * @param strNextCtrlName ��һ���ؼ������ƣ����ر���ѡ�񴰿ڵ�ʱ�򣬽��㵽����ؼ�
 */
function isSelectDiscountBill(strFormName,strCtrlName,lOfficeID,lCurrencyID,strAmount,strStartDate,strEndDate,strNextCtrlName)
{
	if(gnIsShowSending==0)
	{
		if (window.event.keyCode==13)//�س�˵��ѡ��
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
 * ������Ҫ����ͻ���ʶ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ������Ҫ����ͻ���ʶ�������
 * @param strCtrlName �ؼ�����
 * @param objCtrl �����
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
 * ����ſ�֪ͨ���ؼ�
 * @param strFormName form������
 * @param strCtrlName �ؼ�����
 * @param lLetoutRequisitionID �ſ�֪ͨ����ʶ
 * @param strLetoutRequisitionCode �ſ�֪ͨ��
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
 * ���ܿ飨��ǰ����֪ͨ���ؼ���ע�ͽ�����
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
	 * ���˷�������Ҫ��Ŀ
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
	 * ȡ�����ִ�
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
 	 * ���������",",deciΪС�������λ��
 	 */
 	function formatNumber(num,deci){
 		if (num == null) return "";
 		
 		var tmp = num + "";			//ת�����ַ���
 		var tmpToReturn = "";		//�����ؽ��
 		var signPart = "";
 		var intPart = "";			//��������
 		var deciPart = "";			//С������
 		
 		if (tmp.indexOf(".")>0){
 			if (tmp.indexOf("-")==0) {
 				signPart = "-";
 				intPart = tmp.substring(1,tmp.indexOf("."));
 				}
 			else{
 				intPart = tmp.substring(0,tmp.indexOf("."));
 				}
 				
 			deciPart = tmp.substring(tmp.indexOf(".")+1);
 			if (deciPart.length > deci){			//�������С��λ��������Ҫλ��,��������
 				var tmpDeciPart = deciPart ;
 				deciPart = deciPart.substring(0,deci);
 				if (parseInt(tmpDeciPart.charAt(deci))>4) deciPart = (parseInt(deciPart)+1) + "";
 				}
 			else{									//�������С��λ��С����Ҫλ��,����
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
 				if ((n+1)%3==0 && n<(tmp.length-1)) tmpToReturn += ",";			//��Ӷ���
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
 	 * ȥ���������","
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
	 * ����д���ͬ���Ľ��ؼ�,�ڲ�ʹ�ýӿ�
	 */
	function createMutiAmountBaseFun(strFormName,strCtrlName,strData,deci,sProperty,strNextCtrlName){
 	 	document.writeln(" <input class=tar type='text' name='"+ strCtrlName + "' value='" + formatNumber( strData,deci ) +"' onkeypress='filterKey(this)' size='18' maxlength='15' onblur='adjustNumber(\"" + strNextCtrlName + "\",this," + deci +",1)'  onfocus='adjustNumber(\"" + strNextCtrlName + "\",this," + deci +",2)' " + sProperty + ">");
 	}
 	
 	
 	/**
	 * ����д���ͬ���Ľ��ؼ�,�ⲿʹ�ýӿ�
	 */
 	function createMutiAmountCtrl(strFormName,strCtrlName,strData,strNextCtrlName){
 	 	createMutiAmountBaseFun(strFormName,strCtrlName,strData,2,"",strNextCtrlName);
 	}
 	
 	/**
	 * �������ֿؼ�,���Կ���С��λ��
	 */
	function createNumberCtrl(strFormName,strCtrlName,strData,deci,strNextCtrlName){
		createMutiAmountBaseFun(strFormName,strCtrlName,strData,deci,"",strNextCtrlName);
	}