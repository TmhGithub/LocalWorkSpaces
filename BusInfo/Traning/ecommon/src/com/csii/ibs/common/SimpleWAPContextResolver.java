package com.csii.ibs.common;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.orm.ibatis.SqlMapClientOperations;

import com.csii.ibs.wap.WAPContextResolver;
import com.csii.pe.channel.http.CSSResourcePool;
import com.csii.pe.channel.http.UAProfile;
import com.csii.pe.channel.http.UAProfileImpl;
import com.csii.pe.channel.http.WCSS;
import com.csii.pe.channel.http.WCSSImpl;
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
public class SimpleWAPContextResolver extends WAPContextResolver implements
		SqlMapAware {

	private SqlMapClientOperations sqlMap;
	private List reservedSessionAttributesList;
	private CSSResourcePool cssResoucePool;
	final static String EXTRA_VENDOR_INFO_IN_SESSION = "_CSIIExtra_Vendor_Info";
	final static String WCSS_IN_SESSION = "_CSII_WCSS";
	final static String X_WAP_P_IN_SESSION = "_TEST_ONLY_X_WAP_P";
	final static String BEARER_NAME = "Bearer";
	final static String BEARER_VENDOR_NAME = "BearerVendor";
	final static String WAPCLIENT_IP_NAME = "WapClientIp";
	public final static String WAPCLIENT_TELNO_NAME = "WapClientTelNo";
	private Log log = LogFactory.getLog(this.getClass());

	private boolean test = false;

	/**
	 * 
	 */
	public SimpleWAPContextResolver() {
		super();
		reservedSessionAttributesList = new ArrayList();
		reservedSessionAttributesList.add(EXTRA_VENDOR_INFO_IN_SESSION);
		reservedSessionAttributesList.add(WCSS_IN_SESSION);
		reservedSessionAttributesList.add(X_WAP_P_IN_SESSION);
	}

	protected String resolveUAProfileURL(HttpServletRequest request) {
		if (test) {

			HttpSession session = request.getSession();
			String str = (String) session.getAttribute(X_WAP_P_IN_SESSION);
			if (str != null) {
				return str;
			}

			str = request.getParameter("x-wap-profile");
			if (str != null) {
				session.setAttribute(X_WAP_P_IN_SESSION, str);
				return str;
			}

			String url = request.getHeader("x-wap-profile");
			if (url != null) {
				if (url.charAt(0) == '"')
					url = url.substring(1);

				if (url.endsWith("\"")) {
					url = url.substring(0, url.length() - 1);
				}
				return url;
			} else
				return url;
		} else {
			String url = request.getHeader("x-wap-profile");
			if (url != null) {
				if (url.charAt(0) == '"')
					url = url.substring(1);

				if (url.endsWith("\"")) {
					url = url.substring(0, url.length() - 1);
				}
				return url;
			} else
				return url;
		}
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see
	 * com.csii.ibs.wap.WAPContextResolver#resolveUAProfile(java.lang.String,
	 * javax.servlet.http.HttpServletRequest)
	 */
	protected UAProfile resolveUAProfile(String profileURL,
			HttpServletRequest request) {
		if (profileURL != null)
			return new UAProfileImpl(profileURL, false);
		else {
			UAProfileImpl browserImpl = new UAProfileImpl(profileURL, false);
			browserImpl.setJavaScriptEnabled(true);
			return browserImpl;
		}
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see com.csii.ibs.wap.WAPContextResolver#isDirty()
	 */
	protected boolean isDirty() {
		return false;
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see
	 * com.csii.ibs.wap.WAPContextResolver#isFromWapClient(javax.servlet.http
	 * .HttpServletRequest)
	 */
	protected boolean isFromWapClient(HttpServletRequest arg0) {
		return true;
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see com.csii.ibs.wap.WAPContextResolver#loadUAProfiles()
	 */
	protected Map loadUAProfiles() {

		List uaProfileList = sqlMap.queryForList("common.loadUAProfiles", null);
		Map profiles = new HashMap();

		for (Iterator it = uaProfileList.iterator(); it.hasNext();) {
			Map item = (Map) it.next();
			String url = (String) item.get(Dict.PROFILEURL);
			String enabled = (String) item.get(Dict.ENABLED);
			UAProfileImpl profile = new UAProfileImpl(url,
					enabled.charAt(0) == 'Y');
			profile.setBitsPerPixel(((Number) item.get(Dict.BITSPERPIXEL))
					.intValue());
			profile.setColorCapable(((String) item.get(Dict.COLORCAPABLE))
					.charAt(0) == 'Y');
			profile.setFrameCapable(((String) item.get(Dict.FRAMECAPABLE))
					.charAt(0) == 'Y');
			profile.setImageCapable(((String) item.get(Dict.IMAGECAPABLE))
					.charAt(0) == 'Y');
			profile.setJavaScriptEnabled(((String) item
					.get(Dict.JAVASCRIPTENABLED)).charAt(0) == 'Y');
			profile.setModel(((String) item.get(Dict.MODEL)));
			profile.setRatioX(((Number) item.get(Dict.RATIOX)).intValue());
			profile.setRatioY(((Number) item.get(Dict.RATIOY)).intValue());
			profile.setScreenSizeCharX(((Number) item.get(Dict.SCREENSIZECHARX))
					.intValue());
			profile.setScreenSizeCharY(((Number) item.get(Dict.SCREENSIZECHARY))
					.intValue());
			profile.setScreenSizeX(((Number) item.get(Dict.SCREENSIZEX))
					.intValue());
			profile.setScreenSizeY(((Number) item.get(Dict.SCREENSIZEY))
					.intValue());
			profile.setSoftKeysNumber(((Number) item.get(Dict.SOFTKEYSNUMBER))
					.intValue());
			profile.setStandardFontProportional(((String) item
					.get(Dict.STANDARDFONTPROPORTIONAL)).charAt(0) == 'Y');
			profile.setVendor(((String) item.get(Dict.VENDOR)));
			profile.setWAPVersion(((String) item.get(Dict.WAPVERSION)));
			profile.setXHTMLVersion(((String) item.get(Dict.XHTMLVERSION)));

			profiles.put(profile.getURL(), profile);
		}
		if (log.isDebugEnabled()) {
			log.debug("load UA profiles: " + profiles);
		}
		return profiles;
	}

	public void setSqlMap(SqlMapClientOperations operations) {
		sqlMap = operations;
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see
	 * com.csii.ibs.wap.WAPContextResolver#resolveExtraVendorInfo(javax.servlet
	 * .http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
	 */
	protected Map resolveExtraVendorInfo(HttpServletRequest request,
			HttpServletResponse response) {

		HttpSession session = request.getSession();

		Map extraVendorInfo = (Map) session
				.getAttribute(EXTRA_VENDOR_INFO_IN_SESSION);
		if (extraVendorInfo != null)
			return extraVendorInfo;
		else {
			extraVendorInfo = new HashMap();

			if (test) {
				if (request.getParameter(BEARER_NAME) != null)
					extraVendorInfo.put(BEARER_NAME,
							request.getParameter(BEARER_NAME));
				else
					extraVendorInfo.put(BEARER_NAME, "GPRS");

				if (request.getParameter(BEARER_VENDOR_NAME) != null)
					extraVendorInfo.put(BEARER_VENDOR_NAME,
							request.getParameter(BEARER_VENDOR_NAME));
				else
					extraVendorInfo.put(BEARER_VENDOR_NAME, "China Mobile");

				if (request.getParameter(WAPCLIENT_IP_NAME) != null)
					extraVendorInfo.put(WAPCLIENT_IP_NAME,
							request.getParameter(WAPCLIENT_IP_NAME));
				else
					extraVendorInfo.put(WAPCLIENT_IP_NAME, "10.1.1.111");

				if (request.getParameter(WAPCLIENT_TELNO_NAME) != null)
					extraVendorInfo.put(WAPCLIENT_TELNO_NAME,
							request.getParameter(WAPCLIENT_TELNO_NAME));
				else
					extraVendorInfo.put(WAPCLIENT_TELNO_NAME, "13910628163");

			} else {
				// TODO pls contact your bearer vendor to get documents about
				// how to get the extra vendor information.

				extraVendorInfo.put(BEARER_NAME, "GPRS");
				extraVendorInfo.put(BEARER_VENDOR_NAME, "China Mobile");
				extraVendorInfo.put(WAPCLIENT_IP_NAME, "10.1.1.101");
				extraVendorInfo.put(WAPCLIENT_TELNO_NAME, "13910628163");

			}
			session.setAttribute(EXTRA_VENDOR_INFO_IN_SESSION, extraVendorInfo);
			return extraVendorInfo;
		}
	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see
	 * com.csii.ibs.wap.WAPContextResolver#resolveCSSId(com.csii.pe.channel.
	 * http.UAProfile, java.util.Map, javax.servlet.http.HttpServletRequest,
	 * javax.servlet.http.HttpServletResponse)
	 */
	protected WCSS resolveCSSId(UAProfile profile, Map extraVendorInfo,
			HttpServletRequest request, HttpServletResponse response,
			Locale locale) {

		log.debug(" profile: " + profile);
		request.setAttribute(CSSResourcePool.CSSResourcePoolName,
				cssResoucePool);

		HttpSession session = request.getSession();

		WCSS wcss = (WCSS) session.getAttribute(WCSS_IN_SESSION);
		if (wcss == null) {
			log.debug(" create wcss session ");
			if (profile.isEnabled()) {
				Map map = new HashMap(3);
				map.put(Dict.VENDOR, profile.getVendor());
				map.put(Dict.MODEL, profile.getModel());
				map.put(Dict.BEARER, (String) extraVendorInfo.get(BEARER_NAME));
				Map cssMap = (Map) sqlMap.queryForObject(
						"common.queryCSSMapping", map);

				if (cssMap == null) {
					map.put(Dict.BEARER, "");
					cssMap = (Map) sqlMap.queryForObject(
							"common.queryCSSMapping", map);

					if (cssMap == null) {
						return new WCSSImpl("default", true);
					}
				}
				wcss = new WCSSImpl(
						(String) cssMap.get(Dict.CSSID),
						((String) cssMap.get(Dict.EXTERNALCSS)).charAt(0) == 'Y');
			} else {
				wcss = new WCSSImpl("default", true);
			}
			session.setAttribute(WCSS_IN_SESSION, wcss);
		}

		if (log.isDebugEnabled()) {
			log.debug("WCSS: " + wcss + " profile: " + profile);
		}

		return wcss;

	}

	/*
	 * （非 Javadoc）
	 * 
	 * @see com.csii.pe.channel.http.servlet.AbstractExtendedContextResolver#
	 * resolveReservedSessionAttributesList
	 * (javax.servlet.http.HttpServletRequest,
	 * javax.servlet.http.HttpServletResponse)
	 */
	protected List resolveReservedSessionAttributesList(
			HttpServletRequest arg0, HttpServletResponse arg1) {

		return reservedSessionAttributesList;
	}

	/**
	 * @param test
	 *            要设置的 test。
	 */
	public void setTest(boolean test) {
		this.test = test;
	}

	/**
	 * @param resoucePool
	 *            要设置的 cssResoucePool。
	 */
	public void setCssResoucePool(CSSResourcePool resoucePool) {
		cssResoucePool = resoucePool;
	}
}
