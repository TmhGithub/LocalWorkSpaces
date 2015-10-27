package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;
@SuppressWarnings("unchecked")
public class TbThemeDifficulty implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer themeDifId;
	private TbDel tbDel;
	private String thedifId;
	private String thedifName;
	private String col1;
	private String col2;
	private String col3;
	private Set tbPolicies = new HashSet(0);
	private Set tbThemes = new HashSet(0);

	public TbThemeDifficulty() {
	}
	
	public TbThemeDifficulty(String thedifName) {
		this.thedifName = thedifName;
	}
	public TbThemeDifficulty(TbDel tbDel, String thedifId, String thedifName,
			String col1, String col2, String col3, Set tbPolicies, Set tbThemes) {
		this.tbDel = tbDel;
		this.thedifId = thedifId;
		this.thedifName = thedifName;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbPolicies = tbPolicies;
		this.tbThemes = tbThemes;
	}

	// Property accessors

	public Integer getThemeDifId() {
		return this.themeDifId;
	}

	public void setThemeDifId(Integer themeDifId) {
		this.themeDifId = themeDifId;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public String getThedifId() {
		return this.thedifId;
	}

	public void setThedifId(String thedifId) {
		this.thedifId = thedifId;
	}

	public String getThedifName() {
		return this.thedifName;
	}

	public void setThedifName(String thedifName) {
		this.thedifName = thedifName;
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

	public Set getTbPolicies() {
		return this.tbPolicies;
	}

	public void setTbPolicies(Set tbPolicies) {
		this.tbPolicies = tbPolicies;
	}

	public Set getTbThemes() {
		return this.tbThemes;
	}

	public void setTbThemes(Set tbThemes) {
		this.tbThemes = tbThemes;
	}

	@Override
	public String toString() {
		return "TbThemeDifficulty [tbDel=" + tbDel +
				", thedifId=" + thedifId + ", thedifName=" + thedifName
				+ ", themeDifId=" + themeDifId + "]";
	}

	
}