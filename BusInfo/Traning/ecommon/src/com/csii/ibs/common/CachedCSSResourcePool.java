/*
 * @(#)CachedCSSResourcePool.java	2007-10-21
 *
 * Copyright 2005 Client Service International, Inc. All rights reserved.
 * CSII PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

package com.csii.ibs.common;

import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.support.ApplicationObjectSupport;
import org.springframework.orm.ibatis.SqlMapClientOperations;
import org.springframework.web.context.ConfigurableWebApplicationContext;

import com.csii.pe.channel.http.CSSResource;
import com.csii.pe.channel.http.CSSResourceImpl;
import com.csii.pe.channel.http.CSSResourcePool;
import com.csii.pe.channel.http.UAProfileImpl;
import com.csii.pe.config.support.SqlMapAware;

/**
 * Comment
 * <p>
 * Created on 2007-10-21 Modification history
 * <p>
 * 
 * @author Larry Dai, Internet Banking System Development Group, CSII
 * @version 1.0
 * @since 1.0
 */
public class CachedCSSResourcePool extends ApplicationObjectSupport implements
		CSSResourcePool, SqlMapAware, InitializingBean {

	private SqlMapClientOperations sqlMap;
	private int maxCssFileSize = 5000;
	private Log log = LogFactory.getLog(this.getClass());
	private Object semaphore = new Object();
	private Map cachedCSSResouces;

	/**
	 * 
	 */
	public CachedCSSResourcePool() {
		super();

	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see
	 * com.csii.pe.config.support.SqlMapAware#setSqlMap(org.springframework.
	 * orm.ibatis.SqlMapClientOperations)
	 */
	public void setSqlMap(SqlMapClientOperations arg0) {

		sqlMap = arg0;

	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see
	 * org.springframework.beans.factory.InitializingBean#afterPropertiesSet()
	 */
	public void afterPropertiesSet() throws Exception {

		synchronized (semaphore) {
			cachedCSSResouces = loadCSSResources();
		}

	}

	protected Map loadCSSResources() {

		ConfigurableWebApplicationContext wc = (ConfigurableWebApplicationContext) this.getApplicationContext();

		List cssResourceList = sqlMap.queryForList("common.loadCSSResouces",null);
		Map pool = new HashMap();

		for (Iterator it = cssResourceList.iterator(); it.hasNext();) {
			
			Map item = (Map) it.next();
			String cssId = (String) item.get(Dict.CSSID);
			String cssPath = (String) item.get(Dict.CSSPATH);
			String cssContentString;
			byte[] cssContent = (byte[]) item.get(Dict.CSSCONTENT);

			if (cssContent == null || cssContent.length == 0) {

				InputStream in = wc.getServletContext().getResourceAsStream("/" + cssPath);

				byte[] buffer = new byte[maxCssFileSize];
				
				try {
					
					int length = in.read(buffer);
					if (length > 0) {
						cssContentString = new String(buffer, "UTF-8");
					} else {
						log.error("can't find valid css file under directory: "+ cssPath);

						continue;
					}
				} catch (Exception e) {

					log.error("can't find valid css file under directory: "+ cssPath, e);
					continue;
				}

			} else {
				try {
					cssContentString = new String(cssContent, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					log.error("CSSContent from DB is invalid: " + cssId, e);
					continue;
				}
			}

			pool.put(cssId, new CSSResourceImpl(cssId, cssPath,cssContentString));

		}
		if (log.isDebugEnabled()) {
			log.debug("load CSS Resources: " + pool);
		}
		return pool;
	}

	/**
	 * @param maxCssFileSize
	 *            要设置的 maxCssFileSize。
	 */
	public void setMaxCssFileSize(int maxCssFileSize) {
		this.maxCssFileSize = maxCssFileSize;
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see
	 * com.csii.pe.channel.http.CSSResourcePool#getResource(java.lang.String)
	 */
	public CSSResource getResource(String cssId) {
		
		synchronized (semaphore) {
			if (isDirty()) {
				cachedCSSResouces = loadCSSResources();
			}
			return (CSSResource) cachedCSSResouces.get(cssId);

		}
	}

	protected boolean isDirty() {
		return false;
	}
}
