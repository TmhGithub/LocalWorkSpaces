package com.cissst.utils;
/**
 * 类名：Pager 分页计算类;
 * 功能：主要用于分页时上页,下页,首页,尾页的计算;
 * 作者：tmh;
 * 创建时间：2010-11-05;
 */
public class Pager {
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
	public Pager() {
	}
	public Pager(int _totalRows) {
		totalRows = _totalRows;
		totalPages=totalRows/pageSize;
		int mod=totalRows%pageSize;
		if(mod>0){
			totalPages++;
		}
		currentPage = 1;
		startRow = 0;
	}
	public void goPage(int page){
		if(page<1){
			this.setCurrentPage(1); 
		}else if(page>this.getTotalPages()){
			this.setCurrentPage(this.getTotalPages());
		}else{
			this.setCurrentPage(page);
		}
		startRow = (currentPage - 1) * pageSize;
	}
	
	/**首页*/
	public void first() {  
		currentPage = 1;
		startRow = 0;
	}
	/**上一页*/
	public void previous() {  
		if (currentPage == 1) {
			return;
		}
		currentPage--;
		startRow = (currentPage - 1) * pageSize;
	}
	/**下一页*/
	public void next() {  
		if (currentPage < totalPages) {
			currentPage++;
		}
		startRow = (currentPage - 1) * pageSize;
	}
	/**尾页*/
	public void last() { 
		currentPage = totalPages;
		startRow = (currentPage - 1) * pageSize;
	}
	public void refresh(int _currentPage) {
		currentPage = _currentPage;
		if (currentPage > totalPages) {
			last();
		}
	}
	
	public int getStartRow() {
		return startRow;
	}
	public int getTotalPages() {
		return totalPages;
	}
	public int getCurrentPage() {
		return currentPage;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setTotalRows(int totalRows) {
		this.totalRows = totalRows;
	}
	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}
	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getTotalRows() {
		return totalRows;
	}

}
