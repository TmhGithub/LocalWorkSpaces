package com.kriss.review.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.kriss.review.util.StringUtil;

public class DBUtil {
	
	private static Connection conn = null;
	
	private static Statement st = null;
	
	
	public static void getConn(){
		try {
			Class.forName(StringUtil.getConfig("db_driver"));
			conn = DriverManager.getConnection(StringUtil.getConfig("db_url"),
					StringUtil.getConfig("db_user"),
					StringUtil.getConfig("db_pass"));
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
		
	public static ResultSet executeQuery(String sql){
		ResultSet rs = null; 
		getConn();
		try {
			st = conn.createStatement();
			rs =  st.executeQuery(sql);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return rs;
	}
	
	
	
	public static void close(){
		try {
			if(st!=null){
				st.close();
			}
			if(conn!=null){
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
