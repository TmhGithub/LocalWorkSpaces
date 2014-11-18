package com.kriss.album.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.kriss.album.vo.Photo;

public class PhotoDAO extends DBUtil{

	
	public boolean  save(Photo p){
		boolean result = true;
		String sql = "insert into photos values(?,?,?,?,?)";
		
		try {
			this.excuteSql(sql, new Object[]{p.getTitle()
					,p.getType()
					,p.getFileName()
					,p.getSizeStr()
					,p.getStorePath()});
		} catch (SQLException e) {
			result = false;
			e.printStackTrace();
		}
		
		return result;
	}
	
	
	public List gatPotosByType(String type){
		List ls = new ArrayList();
		String sql ="select * from photos ";
		
	    if(type!=null)
		    sql = "select * from photos where type = '"+type+"'";
	    
		try {
			ResultSet rs = this.excuteQuery(sql, null);
			
			while(rs.next()){
				Photo  p =new Photo();
				p.setUuid(rs.getInt("uuid"));
				p.setFileName(rs.getString("fileName"));
				p.setSizeStr(rs.getString("sizeStr"));
				p.setStorePath(rs.getString("storePath"));
				p.setTitle(rs.getString("name"));
				p.setType(rs.getString("type"));
				ls.add(p);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			this.closeDB();
		}
		
		return ls;
	}
}
