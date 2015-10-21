/*
 * @(#)CpssTcpServer.java	1.0 2006-5-24
 *
 * Copyright 2004 Client Service International, Inc. All rights reserved.
 * CSII PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */ 
package com.csii.ibs.router.server;

import com.csii.pe.service.comm.tcp.TcpServer;

/**
 * CpssTcpServer.java
 * <p>
 * Created on 2006-5-24 
 * Modification history	
 * <p>
 * @author	Larry Dai, BOC IBS Expert Group, CSII. mailto: dlinkon@csii.com.cn
 * @version	1.0
 * @since	1.0
 */
public class EAITcpServer extends TcpServer {

	/**
	 * 
	 */
	public EAITcpServer() {
		super();
		
	}
	
	public String getId()
	{
		return "EAI";
	}

}
