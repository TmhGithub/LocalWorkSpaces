package com.kriss.review.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.kriss.review.util.PageBean;
import com.kriss.review.vo.Businfo;

public class BusinfoDAO{
	
	public void findBus(String stype,String keys,PageBean pb){
		List<Businfo> ls =new ArrayList<Businfo>();
		
		String sql ="";
		String sql2="";
		//position代表从第几个记录开始（重点）
		int postion = (pb.getPageNo()-1)*pb.getPageSize();
		
		if("byNo".equals(stype)){
			sql2 = "select rownum as rm,t.* from businfo t where bus_no like '%"+keys+"%'";
		}else if("byStop".equals(stype)){
			sql2 = "select rownum as rm,t.* from businfo t where go_stops like '%"+keys+"%'";
		}
			
		sql="select * from ("+sql2+")  where  rm <="+(postion+pb.getPageSize())+" and rm > "+postion;
		System.out.println("求结果集的sql:"+sql);
		
		ResultSet rs = DBUtil.executeQuery(sql);
		try {
			while(rs.next()){
				Businfo  vo =new Businfo();
				vo.setBackStops(rs.getString("back_Stops"));
				vo.setBusNO(rs.getString("bus_NO"));
				vo.setBusType(rs.getString("bus_Type"));
				vo.setEndPoint(rs.getString("end_Point"));
				vo.setEndTime(rs.getString("end_Time"));
				vo.setGoStops(rs.getString("go_Stops"));
				vo.setStartTime(rs.getString("start_Time"));
				vo.setStartPoint(rs.getString("start_Point"));
				ls.add(vo);
			}
			pb.setData(ls);
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			DBUtil.close();
		}	
		pb.setAllRecs(getAllRes(sql2));
	}
	/*
	 * 根据一个关键字，查到的总记录数
	 */
	public int getAllRes(String sql2){
		String cntSql ="select count(*) as cnt from ("+sql2+")";
		System.out.println("求总记录数的语句:"+cntSql);
		ResultSet rs = DBUtil.executeQuery(cntSql);
		int result = 0;
		try {
			if(rs.next())
			result =rs.getInt("cnt");
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return result;
	}
}
