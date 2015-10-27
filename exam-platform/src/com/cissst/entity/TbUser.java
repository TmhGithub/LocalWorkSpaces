package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("unchecked")
public class TbUser implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer userId;
	private TbDel tbDel;
	private String userAccount;
	private String userPassword;
	private String userName;
	private String userEmail;
	private String userSex;
	private String userType;
	private String userIndate;
	private String userLasttime;
	private String col1;
	private String col2;
	private String col3;
	private Set tbPlans = new HashSet(0);
	private Set tbThemeAuditings = new HashSet(0);
	private Set tbPreceptAuditings = new HashSet(0);
	private Set tbThemes = new HashSet(0);
	private Set tbPrecepts = new HashSet(0);
	private Set tbClasses = new HashSet(0);

	
	public TbUser() {
	}

	
	public TbUser(TbDel tbDel, String userAccount, String userPassword,
			String userName, String userEmail, String userSex, String userType,
			String userIndate, String userLasttime, String col1, String col2,
			String col3, Set tbPlans, Set tbThemeAuditings,
			Set tbPreceptAuditings, Set tbThemes, Set tbPrecepts, Set tbClasses) {
		this.tbDel = tbDel;
		this.userAccount = userAccount;
		this.userPassword = userPassword;
		this.userName = userName;
		this.userEmail = userEmail;
		this.userSex = userSex;
		this.userType = userType;
		this.userIndate = userIndate;
		this.userLasttime = userLasttime;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbPlans = tbPlans;
		this.tbThemeAuditings = tbThemeAuditings;
		this.tbPreceptAuditings = tbPreceptAuditings;
		this.tbThemes = tbThemes;
		this.tbPrecepts = tbPrecepts;
		this.tbClasses = tbClasses;
	}

	// Property accessors

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public String getUserAccount() {
		return this.userAccount;
	}

	public void setUserAccount(String userAccount) {
		this.userAccount = userAccount;
	}

	public String getUserPassword() {
		return this.userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return this.userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserSex() {
		return this.userSex;
	}

	public void setUserSex(String userSex) {
		this.userSex = userSex;
	}

	public String getUserType() {
		return this.userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getUserIndate() {
		return this.userIndate;
	}

	public void setUserIndate(String userIndate) {
		this.userIndate = userIndate;
	}

	public String getUserLasttime() {
		return this.userLasttime;
	}

	public void setUserLasttime(String userLasttime) {
		this.userLasttime = userLasttime;
	}

	public String getCol1() {
		return this.col1;
	}

	public void setCol1(String col1) {
		this.col1 = col1;
	}

	public String getCol2() {
		return this.col2;
	}

	public void setCol2(String col2) {
		this.col2 = col2;
	}

	public String getCol3() {
		return this.col3;
	}

	public void setCol3(String col3) {
		this.col3 = col3;
	}

	public Set getTbPlans() {
		return this.tbPlans;
	}

	public void setTbPlans(Set tbPlans) {
		this.tbPlans = tbPlans;
	}

	public Set getTbThemeAuditings() {
		return this.tbThemeAuditings;
	}

	public void setTbThemeAuditings(Set tbThemeAuditings) {
		this.tbThemeAuditings = tbThemeAuditings;
	}

	public Set getTbPreceptAuditings() {
		return this.tbPreceptAuditings;
	}

	public void setTbPreceptAuditings(Set tbPreceptAuditings) {
		this.tbPreceptAuditings = tbPreceptAuditings;
	}

	public Set getTbThemes() {
		return this.tbThemes;
	}

	public void setTbThemes(Set tbThemes) {
		this.tbThemes = tbThemes;
	}

	public Set getTbPrecepts() {
		return this.tbPrecepts;
	}

	public void setTbPrecepts(Set tbPrecepts) {
		this.tbPrecepts = tbPrecepts;
	}

	public Set getTbClasses() {
		return this.tbClasses;
	}

	public void setTbClasses(Set tbClasses) {
		this.tbClasses = tbClasses;
	}

}