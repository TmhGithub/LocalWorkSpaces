/*
 * @(#)EntUser.java	1.0 2004-5-11
 *
 * Copyright 2004 Client Server International, Inc. All rights reserved.
 * CSII PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.csii.ibs.common;

import java.util.Iterator;
import java.util.List;

import com.csii.ibs.IbsUser;

public class EntUser extends IbsUser {

	private List transferAccounts;
	private String userSeqNo;
	private String cifName;

	public String getCifName() {
		return cifName;
	}

	public void setCifName(String cifName) {
		this.cifName = cifName;
	}

	/**
	 * 
	 */
	public EntUser() {
		super();
	}

	public List getTransferAccounts() {

		return transferAccounts;
	}

	public String getUserId() {
		return super.getUniqueId();
	}

	/**
	 * Sets the transferAccounts.
	 * 
	 * @param transferAccounts
	 *            The transferAccounts to set
	 */
	public void setTransferAccounts(List transferAccounts) {
		this.transferAccounts = transferAccounts;
	}

	/**
	 * @return 返回 userSeqNo。
	 */
	public String getUserSeqNo() {
		return userSeqNo;
	}

	/**
	 * @param userSeqNo
	 *            要设置的 userSeqNo。
	 */
	public void setUserSeqNo(String userSeqNo) {
		this.userSeqNo = userSeqNo;
	}
}
