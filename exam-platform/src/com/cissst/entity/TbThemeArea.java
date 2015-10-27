package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("unchecked")
public class TbThemeArea implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer themeAreaId;
	private TbDel tbDel;
	private String theareaId;
	private String theareaName;
	private String col1;
	private String col2;
	private String col3;
	private Set tbThemes = new HashSet(0);
	private Set tbPolicies = new HashSet(0);

	public TbThemeArea() {
	}
	
	public TbThemeArea(String theareaName) {
		this.theareaName = theareaName;
	}
	
	public TbThemeArea(TbDel tbDel, String theareaId, String theareaName,
			String col1, String col2, String col3, Set tbThemes, Set tbPolicies) {
		this.tbDel = tbDel;
		this.theareaId = theareaId;
		this.theareaName = theareaName;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbThemes = tbThemes;
		this.tbPolicies = tbPolicies;
	}


	public Integer getThemeAreaId() {
		return this.themeAreaId;
	}

	public void setThemeAreaId(Integer themeAreaId) {
		this.themeAreaId = themeAreaId;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public String getTheareaId() {
		return this.theareaId;
	}

	public void setTheareaId(String theareaId) {
		this.theareaId = theareaId;
	}

	public String getTheareaName() {
		return this.theareaName;
	}

	public void setTheareaName(String theareaName) {
		this.theareaName = theareaName;
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

	public Set getTbThemes() {
		return this.tbThemes;
	}

	public void setTbThemes(Set tbThemes) {
		this.tbThemes = tbThemes;
	}

	public Set getTbPolicies() {
		return this.tbPolicies;
	}

	public void setTbPolicies(Set tbPolicies) {
		this.tbPolicies = tbPolicies;
	}
	//ต๗สิ

	@Override
	public String toString() {
		return "TbThemeArea [tbDel=" + tbDel + ", theareaId=" + theareaId + ", theareaName=" + theareaName
				+ ", themeAreaId=" + themeAreaId + "]";
	}
	
}