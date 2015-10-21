/*
 * Created on 2005-5-30
 *
 * To change the template for this generated file go to
 * Window&gt;Preferences&gt;Java&gt;Code Generation&gt;Code and Comments
 */
package com.csii.ibs.common;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Map;
import com.csii.ibs.Constants;
import com.csii.pe.transform.Formatter;
import com.csii.pe.transform.TransformException;

/**
 * @author Larry
 * 
 *         To change the template for this generated type comment go to
 *         Window&gt;Preferences&gt;Java&gt;Code Generation&gt;Code and Comments
 */
public class UDFHeadFormatter implements Formatter {

	private String dateFormat = "yyyyMMdd";
	private String timeFormat = "HHmmss";

	/**
	 * 
	 */
	public UDFHeadFormatter() {
		super();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.csii.pe.transform.Formatter#format(java.lang.Object,
	 * java.util.Map)
	 */
	public Object format(Object data, Map context) throws TransformException {

		Map map = (Map) data;

		return map;
	}

}
