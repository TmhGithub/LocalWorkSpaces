/*
 * @(#)AmountUtils.java	2007-10-21
 *
 * Copyright 2005 Client Service International, Inc. All rights reserved.
 * CSII PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

package com.csii.ibs.common;

import java.math.BigDecimal;
import java.util.Map;

import com.csii.pe.core.PeRuntimeException;

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

public class AmountUtils {
	private AmountUtils() {
	}

	public final static BigDecimal ZERO = new BigDecimal("0");

	public static BigDecimal getBigDecimal(Object object) {
		if (object == null)
			return null;

		BigDecimal result;

		if (object instanceof BigDecimal)
			result = (BigDecimal) object;
		else if (object instanceof String) {
			result = new BigDecimal((String) object);
		} else if (object instanceof Number) {
			result = new BigDecimal(((Number) object).doubleValue());
		} else
			throw new PeRuntimeException("unsupported_bigdecimal_convert",
					new Object[] { object });

		return result;

	}

	public static Integer getInteger(Object object) {
		if (object == null)
			return null;

		Integer result;

		if (object instanceof Integer)
			result = (Integer) object;
		else if (object instanceof String) {
			result = new Integer((String) object);
		} else if (object instanceof Number) {
			result = new Integer(((Number) object).intValue());
		} else
			throw new PeRuntimeException("unsupported_integer_convert",
					new Object[] { object });

		return result;

	}

	public static BigDecimal getTrsAmount(Object object) {
		BigDecimal result = getBigDecimal(object);
		if (result == null)
			return null;
		if (result.compareTo(ZERO) == 0)
			return null;
		else
			return result;

	}

	// A value of Map is Null or Empty?
	public static boolean JudgeNullorEmpty(Map map, String field) {
		Object obj = map.get(field);
		if (obj == null)
			return true;
		else if (obj.equals(""))
			return true;
		else
			return false;
	}

	/**
	 * 
	 * @param
	 * @return
	 * @author
	 */
	public static void BigDecimal2String(Map map, String key) {
		if (!AmountUtils.JudgeNullorEmpty(map, key)) {
			if (map.get(key) instanceof BigDecimal) {
				map.put(key, map.get(key).toString());
			}
		}

	}

}
