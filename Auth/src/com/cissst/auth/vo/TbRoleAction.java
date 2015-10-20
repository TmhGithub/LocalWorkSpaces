package com.cissst.auth.vo;

/**
 * TbRoleAction entity. @author MyEclipse Persistence Tools
 */

public class TbRoleAction implements java.io.Serializable {

	// Fields

	private Integer uuid;
	private TbActions tbActions;
	private TbRole tbRole;

	// Constructors

	/** default constructor */
	public TbRoleAction() {
	}

	/** full constructor */
	public TbRoleAction(TbActions tbActions, TbRole tbRole) {
		this.tbActions = tbActions;
		this.tbRole = tbRole;
	}

	// Property accessors

	public Integer getUuid() {
		return this.uuid;
	}

	public void setUuid(Integer uuid) {
		this.uuid = uuid;
	}

	public TbActions getTbActions() {
		return this.tbActions;
	}

	public void setTbActions(TbActions tbActions) {
		this.tbActions = tbActions;
	}

	public TbRole getTbRole() {
		return this.tbRole;
	}

	public void setTbRole(TbRole tbRole) {
		this.tbRole = tbRole;
	}

}