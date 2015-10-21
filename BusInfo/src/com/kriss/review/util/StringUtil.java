package com.kriss.review.util;

import java.util.ResourceBundle;
/**
 * 用StringUtil这个类加载资源文件
 * @author tmh
 */
public class StringUtil {

	static ResourceBundle bundle=ResourceBundle.getBundle("config"); 
	
	public static String getConfig(String key){
		return bundle.getString(key);
	}
}
