package com.cissst.utils;
import javax.servlet.http.HttpServletRequest;
/**
 * ������PagerHelper,�����������ҳ������;
 * ���ܣ���Ҫ�������HttpServletRequest�����ҳ���ϴ��ݷ�ҳ�ĸ�������;
 * ���ߣ�tmh;
 * ����ʱ�䣺2010-11-05;
 */
public class PagerHelper {
	public static Pager getPager(HttpServletRequest request,int totalRows) {
		/**����pager����,���ڴ���ҳ��*/
		Pager pager = new Pager(totalRows);
		/**��Request�����л�ȡ��ǰҳ��*/
		String currentPage = request.getParameter("currentPage");
		/**�����ǰҳ��Ϊ��,��ʾΪ�״β�ѯ��ҳ,�����Ϊ��,��ˢ��pager�������뵱ǰҳ�ŵ���Ϣ*/
		if (currentPage != null) {
			pager.refresh(Integer.parseInt(currentPage));
		}
		/**��ȡ��ǰִ�еķ���,��ҳ,ǰһҳ,��һҳ,βҳ*/
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
