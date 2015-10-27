package com.cissst.action;

import com.cissst.service.AchievementMangerService;
import com.opensymphony.xwork2.ActionSupport;
/**
 * @模块名称：AchievementMangerAction(成绩管理)
 * @开发人名称：
 * @功          能：
 * @开发   时间：
 */

public class AchievementMangerAction extends ActionSupport{

	private static final long serialVersionUID = 1L;
	
	private AchievementMangerService achievementMangerService;
	
			
	public AchievementMangerService getAchievementMangerService() {
		return achievementMangerService;
	}
	public void setAchievementMangerService(
			AchievementMangerService achievementMangerService) {
		this.achievementMangerService = achievementMangerService;
	}

}
