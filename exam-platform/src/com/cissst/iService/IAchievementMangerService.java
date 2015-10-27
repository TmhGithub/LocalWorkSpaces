package com.cissst.iService;

import com.cissst.dao.AchievementMangerDao;
import com.cissst.service.AchievementMangerService;


/**
 * @模块名称：AchievementMangerService(成绩管理模块接口实现类)
 * @开发人名称：
 * @开发时间：
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
