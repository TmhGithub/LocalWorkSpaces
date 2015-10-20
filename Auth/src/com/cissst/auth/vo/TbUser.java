package com.cissst.auth.vo;

/**
 * TbUser entity. @author MyEclipse Persistence Tools
 */

public class TbUser implements java.io.Serializable {

	// Fields

	private Integer uuid;
	private TbRole tbRole;
	private String username;
	private String userpass;

	// Constructors

	/** default constructor */
	public TbUser() {
	}

	/** full constructor */
	public TbUser(TbRole tbRole, String username, String userpass) {
		this.tbRole = tbRole;
		this.username = username;
		this.userpass = userpass;
	}

	// Property accessors

	public Integer getUuid() {
		return this.uuid;
	}

	public void setUuid(Integer uuid) {
		this.uuid = uuid;
	}

	public TbRole getTbRole() {
		return this.tbRole;
	}

	public void setTbRole(TbRole tbRole) {
		this.tbRole = tbRole;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserpass() {
		return this.userpass;
	}

	public void setUserpass(String userpass) {
		this.userpass = userpass;
	}

	@Override
	public String toString() {
		return "TbUser [tbRole=" + tbRole + ", username=" + username
				+ ", userpass=" + userpass + ", uuid=" + uuid + "]";
	}

}