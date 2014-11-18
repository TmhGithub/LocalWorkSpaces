package com.kriss.album.util;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

public class StringUtil {
	/**
	 * 创建储存上传上来的照片的文件夹
	 * @param appPath
	 * @return
	 */
	public static String  getStoreDir(String appPath){
		String path = "uploadImages/"+getDate("yyyy/MM/dd/");
		File  f =new File(appPath+path);
		if(!f.exists()){
			f.mkdirs();
		}
		return path;
	}
	/**
	 * 格式化当前的日期
	 * @param pattern
	 * @return
	 */
	public static String getDate(String pattern){
		SimpleDateFormat sdf =new SimpleDateFormat(pattern);
		return sdf.format(new Date());
	}
	/**
	 * 根据原始文件路径得到一个随机编号的带后缀的文件名
	 * @param filePath
	 * @return
	 */
	public static String makeFileName(String filePath){
		String uuid = UUID.randomUUID().toString();
		return uuid+getFileExt(filePath);
	}
	/**
	 * 根据原始文件路径得到文件的后缀名
	 * @param filePath
	 * @return
	 */
	public static String getFileExt(String filePath){
		String ext = "";
		int pos = filePath.lastIndexOf(".");
		if(pos>=0){
			ext=filePath.substring(pos);
		}
		return ext;
	}
	
	public static String getFileSizeStr(long size){
		String sizeStr ="";
		if(size<1024){
			sizeStr=size+"b";
		}else if(size<1024*1024){
			sizeStr=size/1024.0+"kb";
		}else if(size<1024*1024*1024){
			sizeStr=size/(1024.0*1024)+"M";
		}
		return sizeStr;
	}
	
	public static void main(String[] args) {
//		long size = 1085;	
//		System.out.println(size/1024.0);
		
	}
	/**
	 * 根据原始文件的路径得到原始文件的文件名
	 * @param filePath
	 * @return
	 */
	public static  String getFileName(String filePath){
		File temp =new File(filePath);
		return temp.getName();
	} 
}
