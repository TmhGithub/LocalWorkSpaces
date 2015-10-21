/*
 * @(#)Account.java	2007-10-21
 *
 * Copyright 2005 Client Service International, Inc. All rights reserved.
 * CSII PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.csii.ibs.common;

import com.csii.ibs.AccountImpl;
import com.csii.pe.common.util.CsiiUtils;

/**
 * Comment
 * <p>
 * Created on 2007-10-23 Modification history
 * <p>
 * 
 * @author Larry Dai, Internet Banking System Development Group, CSII
 * @version 1.0
 * @since 1.0
 */
public class Account extends AccountImpl {

	private String name;
	private String englishName;

	public String getName() {

		return name;
	}

	public void setId(String id) {
		super.setId(id);
		name = id;// CsiiUtils.edit(id,"999-999-99-99999-9");
	}

	/**
	 * @param name
	 *            要设置的 name。
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return 返回 englishName。
	 */
	public String getEnglishName() {
		return englishName;
	}

	/**
	 * @param englishName
	 *            要设置的 englishName。
	 */
	public void setEnglishName(String englishName) {
		this.englishName = englishName;
	}
}
