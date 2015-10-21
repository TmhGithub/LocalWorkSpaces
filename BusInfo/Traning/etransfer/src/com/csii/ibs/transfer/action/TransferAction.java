package com.csii.ibs.transfer.action;

import com.csii.ibs.action.IbsTwoPhaseAction;
import com.csii.pe.core.Context;
import com.csii.pe.core.PeException;

public class TransferAction extends IbsTwoPhaseAction {

	public void prepare(Context context) throws PeException {
		
	}

	public void submit(Context context) throws PeException {
		
		super.submit(context);
	}

}
