package com.cissst.action;

import com.cissst.service.AchievementMangerService;
import com.opensymphony.xwork2.ActionSupport;
/**
 * @ģ�����ƣ�AchievementMangerAction(�ɼ�����)
 * @���������ƣ�
 * @��          �ܣ�
 * @����   ʱ�䣺
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
