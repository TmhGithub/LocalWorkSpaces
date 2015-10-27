package com.tmh.exam.comm.serviceimpl;

import java.util.Collection;

import org.hibernate.criterion.DetachedCriteria;

import com.tmh.exam.comm.idao.ExamDao;
import com.tmh.exam.comm.iservice.ExamService;

public class ExamServiceImpl implements ExamService {
	
	private ExamDao ed;	

	public <T> boolean delete(T t) {
		ed.delete(t);
		return false;
	}

	public <T> Collection<T> getAll(Object exampleEntity,int firstRecord, int maxRecords) {
		ed.getAll(exampleEntity,firstRecord, maxRecords);
		return null;
	}

	public <T> int getAllCount() {
		ed.getAllCount();
		return 0;
	}

	public <T> Collection<T> getCriteria(DetachedCriteria dc, int firstRecord,
			int maxRecords) {
		ed.getCriteria(dc, firstRecord, maxRecords);
		return null;
	}

	public <T> int getCriteriaCount(DetachedCriteria dc) {
		ed.getCriteriaCount(dc);
		return 0;
	}

	public <T> T getSingle(Class<T> cls, Integer id) {
		ed.getSingle(cls, id);
		return null;
	}

	public <T> boolean save(T t) {
		ed.save(t);
		return false;
	}

	public <T> boolean update(T t) {
		ed.update(t);
		return false;
	}

	public ExamDao getEd() {
		return ed;
	}

	public void setEd(ExamDao ed) {
		this.ed = ed;
	}
}
