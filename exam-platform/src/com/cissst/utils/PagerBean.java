package com.cissst.utils;
/**
 * ������Pager ��ҳ������;
 * ���ܣ���Ҫ���ڷ�ҳʱ��ҳ,��ҳ,��ҳ,βҳ�ļ���;
 * ���ߣ�tmh;
 * ����ʱ�䣺2012-09-01;
 */
public class PagerBean {
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
