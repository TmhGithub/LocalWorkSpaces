package com.kriss.album.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBUtil {

	private Connection conn;
	private PreparedStatement st;

	public void getConn() {
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			conn = DriverManager.getConnection("jdbc:sqlserver://127.0.0.1:1433;databaseName=album", "sa", "sasa");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void excuteSql(String sql , Object values[]) throws SQLException{
		this.getConn();
		this.st=conn.prepareStatement(sql);
		if(values!=null&&values.length>0){
			setParam(st,values);
		}
		try{
		   st.execute();
		}finally{
			closeDB();
		}
	}
	
	public void setParam(PreparedStatement st , Object values[]) throws SQLException{
		for (int i=0;i<values.length;i++) {
			st.setObject(i+1, values[i]);
		}
	}
	
	public ResultSet excuteQuery(String sql , Object values[]) throws SQLException{
		this.getConn();
		this.st=conn.prepareStatement(sql);
		if(values!=null&&values.length>0){
			setParam(st,values);
		}
		return st.executeQuery();
	}
	
	public void closeDB(){
		try {
			if(st!=null)
				st.close();
			if(conn!=null)
				conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
