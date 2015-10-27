package com.cissst.utils;
import javax.servlet.http.HttpServletRequest;
/**
 * 类名：PagerHelper,公共基础类分页帮助类;
 * 功能：主要借借助于HttpServletRequest对象从页面上传递分页的各个参数;
 * 作者：tmh;
 * 创建时间：2010-11-05;
 */
public class PagerHelper {
	public static Pager getPager(HttpServletRequest request,int totalRows) {
		/**定义pager对象,用于传到页面*/
		Pager pager = new Pager(totalRows);
		/**从Request对象中获取当前页号*/
		String currentPage = request.getParameter("currentPage");
		/**如果当前页号为空,表示为首次查询该页,如果不为空,则刷新pager对象，输入当前页号等信息*/
		if (currentPage != null) {
			pager.refresh(Integer.parseInt(currentPage));
		}
		/**获取当前执行的方法,首页,前一页,后一页,尾页*/
		String pagerMethod = request.getParameter("pageMethod");
		if (pagerMethod != null) { 
			if (pagerMethod.equals("first")) {
				pager.first();}
			else if (pagerMethod.equals("previous")){pager.previous();}
			else if (pagerMethod.equals("next")){pager.next();} 
			else if (pagerMethod.equals("last")) { pager.last();}
			else{
				pager.goPage(Integer.valueOf(pagerMethod));
			}
		}
		return pager;
	}
}
