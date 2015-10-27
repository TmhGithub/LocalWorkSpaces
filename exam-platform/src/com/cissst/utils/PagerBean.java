package com.cissst.utils;
/**
 * 类名：Pager 分页计算类;
 * 功能：主要用于分页时上页,下页,首页,尾页的计算;
 * 作者：tmh;
 * 创建时间：2012-09-01;
 */
public class PagerBean {
	/**总行数*/
	private int totalRows; 
	/**每页显示的行数，默认为5条记录，此值可以随项目的需求进行更改*/
	private int pageSize = 5; 
	/**当前页号*/
	private int currentPage; 
	/**总页数*/
	private int totalPages; 
	/**当前页在数据库中的起始行*/
	private int startRow;
	
	public PagerBean(){
	}
	public PagerBean(int _totalRows) {
		totalRows = _totalRows;
		totalPages=totalRows/pageSize;
		int mod=totalRows%pageSize;
		if(mod>0){
			totalPages++;
		}
		currentPage = 1;
		startRow = 0;
	}
	
	public int getTotalRows() {
		return totalRows;
	}
	public void setTotalRows(int totalRows) {
		this.totalRows = totalRows;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		if(currentPage<1){
			this.currentPage = 1;
		}else if(currentPage>totalPages){
			this.currentPage = totalPages;
		}else{
			this.currentPage = currentPage;
		}
	}
	public int getTotalPages() {
		return totalPages;
	}
	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}
	public int getStartRow() {
		this.startRow = (this.currentPage-1)*pageSize;
		return startRow;
	}
	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}
	@Override
	public String toString() {
		return "PagerBean [currentPage=" + currentPage + ", pageSize="
				+ pageSize + ", startRow=" + startRow + ", totalPages="
				+ totalPages + ", totalRows=" + totalRows + "]";
	}  
	
}
