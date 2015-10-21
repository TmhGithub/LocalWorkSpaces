/*
 * @(#)Util.java	1.0 2004-8-18
 *
 * Copyright 2004 Client Server International, Inc. All rights reserved.
 * CSII PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.csii.ibs.common;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Map;

import com.csii.pe.common.util.CsiiUtils;
import com.csii.pe.core.Context;
import com.csii.pe.core.PeRuntimeException;
import com.csii.pe.validation.ValidationException;

/**
 * Comment
 * <p>
 * Created on 2004-8-18 
 * Modification history	
 * <p>
 * @author	PowerEngine Expert Group, CSII
 * @version	1.0
 * @since	1.0
 */
public class Util {

	private final static java.lang.String ABC_SEED =
		"_BOCHKDigest200710181104";

	/**
	 * 
	 */
	public Util() {
		super();
	}
	public static boolean isDateEqual(
		java.util.Date date1,
		java.util.Date date2) {

		java.util.Calendar cal1 = java.util.Calendar.getInstance();
		cal1.setTime(date1);
		java.util.Calendar cal2 = java.util.Calendar.getInstance();
		cal2.setTime(date2);

		return (
			cal1.get(java.util.Calendar.YEAR)
				== cal2.get(java.util.Calendar.YEAR)
				&& cal1.get(java.util.Calendar.MONTH)
					== cal2.get(java.util.Calendar.MONTH)
				&& cal1.get(java.util.Calendar.DAY_OF_MONTH)
					== cal2.get(java.util.Calendar.DAY_OF_MONTH));

	}
	public static String digest(String value) {
		return CsiiUtils.digest(value + ABC_SEED);
	}
	public static String getCurrentDateString() {
		Calendar calendar = Calendar.getInstance();
		int month = calendar.get(Calendar.MONTH) + 1;
		int date = calendar.get(Calendar.DATE);
		return ""
			+ calendar.get(Calendar.YEAR)
			+ (month < 10 ? "0" + month : "" + month)
			+ (date < 10 ? "0" + date : "" + date);
	}

	public static boolean isNullOrEmpty(String orgStr) {
		return (orgStr == null || orgStr.trim().length() == 0);
	}
	public static boolean isNullOrEmpty(Object obj) {
		if (obj instanceof Object[]) {
			Object[] o = (Object[]) obj;
			for (int i = 0; i < o.length; i++) {
				Object object = o[i];
				if ((object == null) || (("").equals(object))) {
					return true;
				}
			}
		} else {
			if ((obj == null) || (("").equals(obj))) {
				return true;
			}
		}

		return false;
	}

	public static String filterSBCCase(String str) {
		char[] ch = str.toCharArray();
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < ch.length; i++) {
			if (!Character.isWhitespace(ch[i])) {
				sb.append(String.valueOf(ch[i]));
			}
		}
		return sb.toString();
	}
	/**
	 * 
	 * @param str
	 * @return
	 */
	public static boolean isDigit(String str) {
		char[] ch = str.toCharArray();
		for (int i = 0; i < ch.length; i++) {
			if (!Character.isDigit(ch[i])) {
				return false;
			}
		}
		return true;
	}
	/**
	 * 
	 * @param str
	 * @param length
	 * @return
	 */
	public static boolean isOverLong(String str, int length) {
		if (filterSBCCase(str).length() > length) {
			return true;
		}
		return false;
	}
	//判断是否为全角
	public static boolean isChinese(String str) {
		byte[] bt = str.getBytes();
		for (int i = 0; i < bt.length; i++) {
			if (!(new Byte(bt[i]).toString()).startsWith("-")) {
				return false;
			}
		}
		return true;
	}

	/**
	 * get substring in bytes length
	 * @param orgString			original string
	 * @param lengthInBytes			bytes length
	 * @return				substring
	 */
	public static final String subStringInBytes(
		String orgString,
		int startPos,
		int lengthInBytes) {

		if (orgString == null)
			return null;

		byte[] orgBytes = orgString.getBytes();
		if (startPos < 0 || startPos > orgBytes.length)
			return null;
		else if (lengthInBytes < startPos)
			return null;

		byte[] newBytes;
		int newLength = orgBytes.length - startPos;
		if (lengthInBytes < newLength)
			newLength = lengthInBytes;

		newBytes = new byte[newLength];
		System.arraycopy(orgBytes, startPos, newBytes, 0, newLength);

		return new String(newBytes);
	}
	public static java.util.Date getToDate(String s) {
		StringBuffer sb = new StringBuffer();
		sb
			.append(s.substring(0, 4))
			.append("-")
			.append(s.substring(4, 6))
			.append("-")
			.append(s.substring(6, 8));
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		java.util.Date obj = null;
		try {
			obj = sdf.parse(sb.toString());
		} catch (ParseException e) {
			// TODO 自动生成 catch 块
			e.printStackTrace();
			System.err.println("change date type error");
		}
		return obj;
	}

	/**
	 * 将日期的字符串转化为日期类型
	 * 格式为"2004-10-10" --> Date
	 * <p><code> checkStartEndDate </code></p>
	 * @param context
	 * @throws ValidationException
	 * @author Songyi 2004-12-15
	 * @since 1.1
	 */
	public static java.util.Date getString2Date(String sDate) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		java.util.Date obj = null;

		try {
			obj = sdf.parse(sDate);
		} catch (ParseException e) {
			e.printStackTrace();
			System.err.println("change date type error");
		}

		return obj;
	}

	/**
	 * 开始日期应大于等于结束日期
	 * <p><code> checkStartEndDate </code></p>
	 * @param context
	 * @throws ValidationException
	 * @author Songyi 2004-12-15
	 * @since 1.1
	 */
	public static void checkStartEndDate(Context context)
		throws ValidationException {
		if ((context.getData(Dict.STARTDATE).toString().length() > 0)
			&& (context.getData(Dict.ENDDATE).toString().length() > 0)) {

			Date startDate = (Date) context.getData(Dict.STARTDATE);
			Date endDate = (Date) context.getData(Dict.ENDDATE);

            
			if (startDate.getTime() > endDate.getTime()) {
				throw new ValidationException("validation.startEndDate");
			}
		}
	}

	public static String parseStringPattern(Object v, int scale) {
		String temp = "###,###,###,###,###,###,###,##0.";
		for (int i = 0; i < scale; i++) {
			temp += "0";
		}
		DecimalFormat format = new DecimalFormat(temp);
		return format.format(v).toString();
	}
	//	
	public static boolean isCurrentDate(String strDate) {
		return strDate == null
			|| !strDate.equals(Util.getCurrentDateString()) ? false : true;
	}
	public static String rollDate(String strDate, boolean up) {
		return Util.rollDate(Util.getToDate(strDate), up);
	}
	public static String rollDate(Date date, boolean up) {

		if (date == null)
			return null;
		String returnString = null;

		GregorianCalendar beforeCalendar = new GregorianCalendar();
		beforeCalendar.setTime(date);
		beforeCalendar.add(Calendar.DATE, up ? +1 : -1);
		int beforeDate = beforeCalendar.get(Calendar.DATE);
		int beforeMonth = beforeCalendar.get(Calendar.MONTH) + 1;
		int beforeYear = beforeCalendar.get(Calendar.YEAR);

		return ""
			+ beforeYear
			+ (beforeMonth < 10 ? "0" + beforeMonth : "" + beforeMonth)
			+ (beforeDate < 10 ? "0" + beforeDate : "" + beforeDate);

	}

	public static String getDateString(String dateStr) {
		StringBuffer sb = new StringBuffer();
		dateStr = dateStr.trim();
		return sb
			.append(dateStr.substring(0, 4))
			.append(dateStr.substring(5, 7))
			.append(dateStr.substring(8, 10))
			.toString();
	}
	public static String getTimeString(String timeStr) {
		StringBuffer sb = new StringBuffer();
		timeStr = timeStr.trim();
		return sb
			.append(timeStr.substring(0, 2))
			.append(timeStr.substring(3, 5))
			.append(timeStr.substring(6, 8))
			.toString();
	}

	public static String formatDateString(String strDate, char splitChar) {
		if (strDate == null || strDate.length() < 8)
			return null;
		StringBuffer sb = new StringBuffer();
		sb
			.append(strDate.substring(0, 4))
			.append(splitChar)
			.append(strDate.substring(4, 6))
			.append(splitChar)
			.append(strDate.substring(6, 8));
		return sb.toString();
	}
	public static java.util.Date getDate(String s) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		java.util.Date obj = null;
		try {
			obj = sdf.parse(s);
		} catch (ParseException e) {

			e.printStackTrace();
		}
		return obj;
	}


	public static String[] getStringArray(Object object) {
        if (object ==null) return null;
		if (object.getClass().isArray()) {
			return (String[]) object;
		} else {
			String tmpStrs[] = new String[1];
			tmpStrs[0] = (String) object;
			return tmpStrs;
		}
	}

	public static BigDecimal[] getBigDecimalArray(Object object) {
		if (object ==null) return null;
		if (object.getClass().isArray()) {
			return (BigDecimal[]) object;
		} else {
			BigDecimal tmpStrs[] = new BigDecimal[1];
			tmpStrs[0] = (BigDecimal) object;
			return tmpStrs;
		}
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
			throw new PeRuntimeException(
				"unsupported_bigdecimal_convert",
				new Object[] { object });

		return result;

	}
	public static BigDecimal str2BigDecimal(String input){
		return new BigDecimal(input);
	}

	public static void main(String[] args)// throws java.io.IOException
	{
	   System.out.println(Util.digest("12345678"+"88888888"));
	   System.out.println(Util.digest("user01"+"88888888")); 
	   System.out.println(Util.digest("user02"+"88888888")); 
	}

}
