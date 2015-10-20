package com.cissst.auth.vo;

import java.util.HashSet;
import java.util.Set;

/**
 * TbActions entity. @author MyEclipse Persistence Tools
 */

public class TbActions implements java.io.Serializable {

	// Fields

	private Integer uuid;
	private String actionName;
	private String actionPath;
	private TbActions father;
	private Set tbRoleActions = new HashSet(0);

	// Constructors

	/** default constructor */
	public TbActions() {
	}

	/** full constructor */
	public TbActions(String actionName, String actionPath,
			TbActions father, Set tbRoleActions) {
		this.actionName = actionName;
		this.actionPath = actionPath;
		this.father = father;
		this.tbRoleActions = tbRoleActions;
	}

	// Property accessors

	public Integer getUuid() {
		return this.uuid;
	}

	public void setUuid(Integer uuid) {
		this.uuid = uuid;
	}

	public String getActionName() {
		return this.actionName;
	}

	public void setActionName(String actionName) {
		this.actionName = actionName;
	}

	public String getActionPath() {
		return this.actionPath;
	}

	public void setActionPath(String actionPath) {
		this.actionPath = actionPath;
	}

	public TbActions getFather() {
		return father;
	}

	public void setFather(TbActions father) {
		this.father = father;
	}

	public Set getTbRoleActions() {
		return this.tbRoleActions;
	}

	public void setTbRoleActions(Set tbRoleActions) {
		this.tbRoleActions = tbRoleActions;
	}

}