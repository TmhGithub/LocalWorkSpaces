package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("unchecked")
public class TbThemeType implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer themeTypeId;
	private TbDel tbDel;
	private String thetypeId;
	private String thetypeName;
	private String col1;
	private String col2;
	private String col3;
	private Set tbPolicies = new HashSet(0);
	private Set tbThemes = new HashSet(0);

	public TbThemeType() {
	}

	public TbThemeType(String thetypeName) {
		this.thetypeName = thetypeName;
	}
	
	public TbThemeType(TbDel tbDel, String thetypeId, String thetypeName,
			String col1, String col2, String col3, Set tbPolicies, Set tbThemes) {
		this.tbDel = tbDel;
		this.thetypeId = thetypeId;
		this.thetypeName = thetypeName;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbPolicies = tbPolicies;
		this.tbThemes = tbThemes;
	}

	// Property accessors

	public Integer getThemeTypeId() {
		return this.themeTypeId;
	}

	public void setThemeTypeId(Integer themeTypeId) {
		this.themeTypeId = themeTypeId;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public String getThetypeId() {
		return this.thetypeId;
	}

	public void setThetypeId(String thetypeId) {
		this.thetypeId = thetypeId;
	}

	public String getThetypeName() {
		return this.thetypeName;
	}

	public void setThetypeName(String thetypeName) {
		this.thetypeName = thetypeName;
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
		return "TbThemeType [tbDel=" + tbDel + 
				", themeTypeId=" + themeTypeId + ", thetypeId=" + thetypeId
				+ ", thetypeName=" + thetypeName + "]";
	}

	
}