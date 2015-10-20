package com.cissst.auth.vo;

import java.util.HashSet;
import java.util.Set;

/**
 * TbRole entity. @author MyEclipse Persistence Tools
 */

public class TbRole implements java.io.Serializable {

	// Fields

	private Integer uuid;
	private String roleName;
	private Set tbRoleActions = new HashSet(0);
	private Set tbUsers = new HashSet(0);

	// Constructors

	/** default constructor */
	public TbRole() {
	}

	/** full constructor */
	public TbRole(String roleName, Set tbRoleActions, Set tbUsers) {
		this.roleName = roleName;
		this.tbRoleActions = tbRoleActions;
		this.tbUsers = tbUsers;
	}

	// Property accessors

	public Integer getUuid() {
		return this.uuid;
	}

	public void setUuid(Integer uuid) {
		this.uuid = uuid;
	}

	public String getRoleName() {
		return this.roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Set getTbRoleActions() {
		return this.tbRoleActions;
	}

	public void setTbRoleActions(Set tbRoleActions) {
		this.tbRoleActions = tbRoleActions;
	}

	public Set getTbUsers() {
		return this.tbUsers;
	}

	public void setTbUsers(Set tbUsers) {
		this.tbUsers = tbUsers;
	}

	@Override
	public String toString() {
		return "TbRole [roleName=" + roleName +
		", tbUsers=" + tbUsers + ", uuid=" + uuid
				+ "]";
	}
	
}