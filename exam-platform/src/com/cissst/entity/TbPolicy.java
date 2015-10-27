package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("unchecked")
public class TbPolicy implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer policyId;
	private TbDel tbDel;
	private TbThemeType tbThemeType;
	private TbThemeArea tbThemeArea;
	private TbThemeDifficulty tbThemeDifficulty;
	private String examMode;
	private String polId;
	private String polOnescore;
	private String polThemecount;
	private String polReworkmode;
	private String col1;
	private String col2;
	private String col3;
	private Set tbPreceptPolicies = new HashSet(0);
	private Set tbPolicyThemeses = new HashSet(0);

	
	public TbPolicy() {
	}

	public TbPolicy(TbDel tbDel, TbThemeType tbThemeType,
			TbThemeArea tbThemeArea, TbThemeDifficulty tbThemeDifficulty,
			String examMode, String polId, String polOnescore,
			String polThemecount, String polReworkmode, String col1,
			String col2, String col3, Set tbPreceptPolicies,
			Set tbPolicyThemeses) {
		this.tbDel = tbDel;
		this.tbThemeType = tbThemeType;
		this.tbThemeArea = tbThemeArea;
		this.tbThemeDifficulty = tbThemeDifficulty;
		this.examMode = examMode;
		this.polId = polId;
		this.polOnescore = polOnescore;
		this.polThemecount = polThemecount;
		this.polReworkmode = polReworkmode;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbPreceptPolicies = tbPreceptPolicies;
		this.tbPolicyThemeses = tbPolicyThemeses;
	}

	// Property accessors

	public Integer getPolicyId() {
		return this.policyId;
	}

	public void setPolicyId(Integer policyId) {
		this.policyId = policyId;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public TbThemeType getTbThemeType() {
		return this.tbThemeType;
	}

	public void setTbThemeType(TbThemeType tbThemeType) {
		this.tbThemeType = tbThemeType;
	}

	public TbThemeArea getTbThemeArea() {
		return this.tbThemeArea;
	}

	public void setTbThemeArea(TbThemeArea tbThemeArea) {
		this.tbThemeArea = tbThemeArea;
	}

	public TbThemeDifficulty getTbThemeDifficulty() {
		return this.tbThemeDifficulty;
	}

	public void setTbThemeDifficulty(TbThemeDifficulty tbThemeDifficulty) {
		this.tbThemeDifficulty = tbThemeDifficulty;
	}

	public String getExamMode() {
		return this.examMode;
	}

	public void setExamMode(String examMode) {
		this.examMode = examMode;
	}

	public String getPolId() {
		return this.polId;
	}

	public void setPolId(String polId) {
		this.polId = polId;
	}

	public String getPolOnescore() {
		return this.polOnescore;
	}

	public void setPolOnescore(String polOnescore) {
		this.polOnescore = polOnescore;
	}

	public String getPolThemecount() {
		return this.polThemecount;
	}

	public void setPolThemecount(String polThemecount) {
		this.polThemecount = polThemecount;
	}

	public String getPolReworkmode() {
		return this.polReworkmode;
	}

	public void setPolReworkmode(String polReworkmode) {
		this.polReworkmode = polReworkmode;
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

	public Set getTbPreceptPolicies() {
		return this.tbPreceptPolicies;
	}

	public void setTbPreceptPolicies(Set tbPreceptPolicies) {
		this.tbPreceptPolicies = tbPreceptPolicies;
	}

	public Set getTbPolicyThemeses() {
		return this.tbPolicyThemeses;
	}

	public void setTbPolicyThemeses(Set tbPolicyThemeses) {
		this.tbPolicyThemeses = tbPolicyThemeses;
	}

}