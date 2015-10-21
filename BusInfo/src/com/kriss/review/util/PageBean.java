package com.kriss.review.util;

import java.util.List;

public class PageBean {
	//��ǰҳ����
	private int pageNo = 1;
	//ÿҳ�Ĵ�С��
	private int pageSize = 10;
	//��ҳ��
	private int allPages;
	//�ܼ�¼��
	private int allRecs;
	//ֵ����ļ���
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
		//�����ܼ�¼����������ҳ��
		this.allPages  = (allRecs+this.pageSize-1)/this.pageSize;
//		this.allPages = (int) (Math.ceil(allRecs/this.pageSize));
	}
	
	
}
