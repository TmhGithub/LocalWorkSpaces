package com.cissst.iService;

import java.util.List;

import com.cissst.dao.ExampaperManagerDao;
import com.cissst.service.ExampaperManagerService;

/**
 * @ģ�����ƣ�ExampaperManagerService(������ģ��ӿ�ʵ����)
 * @���������ƣ�tmh
 * @����ʱ�䣺2012-8-20
 */
public class IExampaperManagerService implements ExampaperManagerService{
	private  ExampaperManagerDao  exampaperManagerDao;

	public ExampaperManagerDao getExampaperManagerDao() {
		return exampaperManagerDao;
	}

	public void setExampaperManagerDao(ExampaperManagerDao exampaperManagerDao) {
		this.exampaperManagerDao = exampaperManagerDao;
	}

	public void delete(Object object) {
		exampaperManagerDao.delete(object);
		
	}

	public int findAllCount(String HQL) {
		return exampaperManagerDao.findAllCount(HQL);
		
	}

	public Object findByHQL(String HQL) {
		return exampaperManagerDao.findByHQL(HQL);
	}

	public List<?> findList(String HQL) {
		return exampaperManagerDao.findList(HQL);
	}

	public Iterable<?> findWithPage(int startPage, int pageSize, String HQL) {
		return exampaperManagerDao.findWithPage(startPage, pageSize, HQL);
	}

	public Object getByOne(Object object, int id) {
		return exampaperManagerDao.getByOne(object, id);
	}

	public void save(Object object) {
		exampaperManagerDao.save(object);
	}

	public void update(Object object) {
		exampaperManagerDao.update(object);
	}

}
