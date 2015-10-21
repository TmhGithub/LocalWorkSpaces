package com.kriss.review.util;

import java.util.List;

public class PageBean {
	//当前页码数
	private int pageNo = 1;
	//每页的大小数
	private int pageSize = 10;
	//总页数
	private int allPages;
	//总记录数
	private int allRecs;
	//值对象的集合
	List<?> data ;
	
	public List<?> getData() {
		return data;
	}

	public void setData(List<?> data) {
		this.data = data;
	}

	public int getPageNo() {
		return pageNo;
	}

	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getAllPages() {
		return allPages;
	}

	public void setAllPages(int allPages) {
		this.allPages = allPages;
	}

	public int getAllRecs() {
		return allRecs;
	}

	public void setAllRecs(int allRecs) {
		this.allRecs = allRecs;
		//根据总记录数来计算总页数
		this.allPages  = (allRecs+this.pageSize-1)/this.pageSize;
//		this.allPages = (int) (Math.ceil(allRecs/this.pageSize));
	}
	
	
}
