package com.cissst.iService;

import com.cissst.dao.AchievementMangerDao;
import com.cissst.service.AchievementMangerService;


/**
 * @ģ�����ƣ�AchievementMangerService(�ɼ�����ģ��ӿ�ʵ����)
 * @���������ƣ�
 * @����ʱ�䣺
 */
public class IAchievementMangerService implements AchievementMangerService {

	private  AchievementMangerDao  iAchievementMangerDao;

	public AchievementMangerDao getiAchievementMangerDao() {
		return iAchievementMangerDao;
	}

	public void setiAchievementMangerDao(AchievementMangerDao iAchievementMangerDao) {
		this.iAchievementMangerDao = iAchievementMangerDao;
	}



}
