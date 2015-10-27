package cn.javass.web.endsample.back.util.dbutil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.naming.InitialContext;
import javax.sql.DataSource;

public class DbConn {
	
	private DbConn(){}
	/*
	 * 利用tomcat的数据源来获得连接
	 */
	public static Connection getConn(){
		//1:
		Connection conn =  null;
		try{
			//1:
			
			//2:
			InitialContext ctx = new InitialContext();
			//3:
			DataSource ds = (DataSource)ctx.lookup("java:/comp/env/jdbc/testDs");
			
			conn = ds.getConnection();
			System.out.println("now use datasource---");
		}catch(Exception err){
			err.printStackTrace();
		}
		return conn;
	}
	/*
	 * 传统的加载配置信息来获得连接信息
	 */
	public static Connection getConn2(){
		
		Connection conn = null;
		try {
			Class.forName(Env.getInstance().getProperty("DB_DRIVER"));
			conn = DriverManager.getConnection(
					Env.getInstance().getProperty("DB_URL"), 
					Env.getInstance().getProperty("DB_USER"),
					Env.getInstance().getProperty("DB_PASS"));
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}
}
