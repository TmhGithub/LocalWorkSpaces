package com.kriss.review.util;

import java.util.ResourceBundle;
/**
 * ��StringUtil����������Դ�ļ�
 * @author tmh
 */
public class StringUtil {

	static ResourceBundle bundle=ResourceBundle.getBundle("config"); 
	
	public static String getConfig(String key){
		return bundle.getString(key);
	}
}
