package com.csii.ibs.router.server;

import com.csii.pe.channel.stream.context.Bootstrap;


public class IoCContainerStart
{
	public static void main(String[] args)
	{
		Bootstrap boot = new Bootstrap();
		boot.setContextConfigLocation(
			"classpath:/config/tcp.xml," +
			"classpath:/config/cluster.xml," +			
			"classpath:/config/core.xml," +
			"classpath:/config/service.xml," +
			"classpath:/config/common.xml," +
			"classpath:/config/trs_poc.xml" 			
			);
		boot.init();
		System.out.println("Business Server startup.");
	}
}
