package com.cissst.utils;
/**
 * ������Pager ��ҳ������;
 * ���ܣ���Ҫ���ڷ�ҳʱ��ҳ,��ҳ,��ҳ,βҳ�ļ���;
 * ���ߣ�tmh;
 * ����ʱ�䣺2010-11-05;
 */
public class Pager {
	/**������*/
	private int totalRows; 
	/**ÿҳ��ʾ��������Ĭ��Ϊ5����¼����ֵ��������Ŀ��������и���*/
	private int pageSize = 5; 
	/**��ǰҳ��*/
	private int currentPage; 
	/**��ҳ��*/
	private int totalPages; 
	/**��ǰҳ�����ݿ��е���ʼ��*/
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
	
	/**��ҳ*/
	public void first() {  
		currentPage = 1;
		startRow = 0;
	}
	/**��һҳ*/
	public void previous() {  
		if (currentPage == 1) {
			return;
		}
		currentPage--;
		startRow = (currentPage - 1) * pageSize;
	}
	/**��һҳ*/
	public void next() {  
		if (currentPage < totalPages) {
			currentPage++;
		}
		startRow = (currentPage - 1) * pageSize;
	}
	/**βҳ*/
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
