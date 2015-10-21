package com.csii.ibs.common;

import java.util.Map;
import com.csii.pe.transform.Formatter;
import com.csii.pe.transform.TransformException;

public class CSXmlHeadFormatter implements Formatter {

	/**
	 * 
	 */
	public CSXmlHeadFormatter() {
		super();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.csii.pe.transform.Formatter#format(java.lang.Object,
	 * java.util.Map)
	 */
	public Object format(Object map0, Map context) throws TransformException {

		Map map = (Map) map0;

		return map;

	}

}
