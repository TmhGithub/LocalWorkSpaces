package cn.javass.web.endsample.back.goods.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import cn.javass.web.endsample.back.goods.dao.dao.GoodsDAO;
import cn.javass.web.endsample.back.goods.vo.GoodsModel;
import cn.javass.web.endsample.back.goods.vo.GoodsQueryModel;
import cn.javass.web.endsample.back.util.dbutil.DbConn;

public class JdbcImpl implements GoodsDAO{
	public static void main(String[] args) {
		//
	}
	@Override
	public void create(GoodsModel gm) {
		Connection conn = null;
		try{
			//1：得到数据库连接
			conn = DbConn.getConn();
			//2:拼接sql语句
			String sql = "insert into tbl_goods values(?,?,?,?)";
			//3:得到预处理对象
			PreparedStatement pstmt = conn.prepareStatement(sql);
			//4:给预处理对象传递指定的值
			pstmt.setInt(1, gm.getUuid());
			pstmt.setString(2, gm.getName());
			pstmt.setString(3,gm.getDescription());
			pstmt.setFloat(4,gm.getPrice());
			//5:执行sql语句
			pstmt.executeUpdate();
			//6:关闭所使用的相关对象
			pstmt.close();			
		}catch(Exception err){
			err.printStackTrace();
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	@Override
	public void update(GoodsModel gm) {
		Connection conn = null;
		try{
			//1
			conn = DbConn.getConn();
			//2:
			String sql = "update tbl_goods set name=?,description=?,price=? where uuid=?";
			//3:
			PreparedStatement pstmt = conn.prepareStatement(sql);
			//4:
			pstmt.setString(1, gm.getName());
			pstmt.setString(2,gm.getDescription());
			pstmt.setFloat(3,gm.getPrice());
			pstmt.setInt(4, gm.getUuid());
			
			//5:
			pstmt.executeUpdate();
			
			//6:
			pstmt.close();
		}catch(Exception err){
			err.printStackTrace();
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
	}

	@Override
	public void delete(int uuid) {
		Connection conn = null;
		try{
			//1
			conn = DbConn.getConn();
			//2:
			String sql = "delete from tbl_goods where uuid=?";
			//3:
			PreparedStatement pstmt = conn.prepareStatement(sql);
			//4:
			pstmt.setInt(1, uuid);
			
			//5:
			pstmt.executeUpdate();
			
			//6:
			pstmt.close();
			
		}catch(Exception err){
			err.printStackTrace();
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
	}

	@Override
	public GoodsModel getByUuid(int uuid) {
		GoodsModel gm = new GoodsModel();
		Connection conn = null;
		try{
			//1
			conn = DbConn.getConn();
			//2:
			String sql = "select * from tbl_goods where uuid=?";
			//3:
			PreparedStatement pstmt = conn.prepareStatement(sql);
			//4:
			pstmt.setInt(1, uuid);
			//5:
			ResultSet rs = pstmt.executeQuery();
			if(rs.next()){
				gm = this.rs2model(rs);
			}
			//6:
			rs.close();
			pstmt.close();			
		}catch(Exception err){
			err.printStackTrace();
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return gm;
	}
	private GoodsModel rs2model(ResultSet rs) throws SQLException{
		GoodsModel gm = new GoodsModel();
		
		gm.setUuid(rs.getInt("uuid"));
		gm.setName(rs.getString("name"));
		gm.setDescription(rs.getString("description"));
		gm.setPrice(rs.getFloat("price"));		
		
		return gm;
	}
	

	@Override
	public List<GoodsModel> getAll() {
		List<GoodsModel> list = new ArrayList<GoodsModel>();
		Connection conn = null;
		try{
			//1
			conn = DbConn.getConn();
			//2:
			String sql = "select * from tbl_goods";
			//3:
			PreparedStatement pstmt = conn.prepareStatement(sql);
			//4:
			
			//5:
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()){
				GoodsModel gm = this.rs2model(rs);
				list.add(gm);
			}
			
			//6:
			rs.close();
			pstmt.close();
		}catch(Exception err){
			err.printStackTrace();
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return list;
	}

	@Override
	public List<GoodsModel> getByCondition(GoodsQueryModel gqm) {
		List<GoodsModel> list = new ArrayList<GoodsModel>();
		Connection conn = null;
		try{
			//1
			conn = DbConn.getConn();
			//2:
			String sql = "select * from tbl_goods where 1=1 ";
			sql = this.prepareSql(sql, gqm);
			//3:
			PreparedStatement pstmt = conn.prepareStatement(sql);
			//4:
			this.setValue(pstmt, gqm);
			//5:
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()){
				GoodsModel gm = this.rs2model(rs);
				list.add(gm);
			}
			
			//6:
			rs.close();
			pstmt.close();
		}catch(Exception err){
			err.printStackTrace();
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return list;
	}
	private void setValue(PreparedStatement pstmt,GoodsQueryModel gqm) throws SQLException{
		int count = 1;
		//锟斤拷锟狡ワ拷锟�
		if(gqm.getUuid()>0){
			pstmt.setInt(count, gqm.getUuid());
			count++;
		}
		//模锟斤拷匹锟斤拷
		if(gqm.getName()!=null && gqm.getName().trim().length()>0){
			pstmt.setString(count, "%"+gqm.getName()+"%");
			count++;
		}
		if(gqm.getDescription()!=null && gqm.getDescription().trim().length()>0){
			pstmt.setString(count, "%"+gqm.getDescription()+"%");
			count++;
		}
		//锟斤拷锟狡ワ拷锟�
		if(gqm.getPrice()>0){
			pstmt.setFloat(count, gqm.getPrice());
			count++;
		}
		if(gqm.getPrice2()>0){
			pstmt.setFloat(count, gqm.getPrice2());
			count++;
		}
	}
	
	private String prepareSql(String sql,GoodsQueryModel gqm){
		StringBuffer buffer = new StringBuffer(sql);
		
		//锟斤拷锟狡ワ拷锟�
		if(gqm.getUuid()>0){
			buffer.append(" and uuid=? ");
		}
		//模锟斤拷匹锟斤拷
		if(gqm.getName()!=null && gqm.getName().trim().length()>0){
			buffer.append(" and name like ? ");
		}
		if(gqm.getDescription()!=null && gqm.getDescription().trim().length()>0){
			buffer.append(" and description like ? ");
		}
		//锟斤拷锟狡ワ拷锟�
		if(gqm.getPrice()>0){
			buffer.append(" and price >=? ");
		}
		if(gqm.getPrice2()>0){
			buffer.append(" and price <? ");
		}		
		
		return buffer.toString();		
	}

}
