/*
 * @(#)SimpleWAPPageSizeResolver.java	2007-10-24
 *
 * Copyright 2005 Client Service International, Inc. All rights reserved.
 * CSII PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.csii.ibs.common;

import com.csii.ibs.wap.WAPPageSizeResolver;
import com.csii.pe.channel.http.WAPClientInfo;
import com.csii.pe.core.Context;

/**
 * Comment
 * <p>
 * Created on 2007-10-24 Modification history
 * <p>
 * 
 * @author Larry Dai, Internet Banking System Development Group, CSII
 * @version 1.0
 * @since 1.0
 */
public class SimpleWAPPageSizeResolver implements WAPPageSizeResolver {

	/**
	 * 
	 */
	public SimpleWAPPageSizeResolver() {
		super();

	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see
	 * com.csii.ibs.wap.WAPPageSizeResolver#resolve(com.csii.pe.core.Context)
	 */
	public Number resolve(Context context) {

		WAPClientInfo clientInfo = (WAPClientInfo) context.getClientInfo();
		int charY = clientInfo.getUAProfile().getScreenSizeCharY();
		System.err.println("charY:" + clientInfo.getUAProfile());
		System.err.println("url:" + clientInfo.getUAProfile().getURL());
		if (clientInfo.getUAProfile().getURL() == null) {
			return new Integer(10);
		}
		if (charY == 0)
			return new Integer(3);
		else
			return new Integer(charY - 1);
	}

}
