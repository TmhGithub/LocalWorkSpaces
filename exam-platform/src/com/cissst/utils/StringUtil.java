package com.cissst.utils;

public class StringUtil {
	public static String generateRightKey(String str1,String str2){
		String []str3 = str2.split(",");
		for (int i = 0; i < str3.length; i++) {
			if(str3[i].equals(str1)){
				str3[i]="";
			}
		}
		StringBuffer str4 = new StringBuffer();
		for(int i = 0; i < str3.length; i++){
			if(!"".equals(str3[i])){
				str4.append(str3[i]);
				if(i!=str3.length-1){
					str4.append(",");
				}
			}
		}
		return str4.toString();
	}
}
