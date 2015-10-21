package com.csii.ibs.query.action;

import java.util.HashMap;
import java.util.Map;

import com.csii.ibs.action.IbsQueryAction;
import com.csii.ibs.common.EntUser;
import com.csii.pe.core.Context;
import com.csii.pe.core.PeException;

public class CifInfoQryAction extends IbsQueryAction {
	
	
	public void execute(Context context) throws PeException{
		
		EntUser user=(EntUser) context.getUser();
		String cifno=user.getCif().getId();
/*		Map map1=new HashMap();
		map1.put("CifNo1", "22");
		map1.put("ACNO", "33");*/
		
		Map map=(Map)getSqlMap().queryForObject("common.queryCifInfo", cifno);
		context.setDataMap(map);
		
	}
	

}
