package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;
@SuppressWarnings("unchecked")
public class TbStateflag implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer staId;
	private TbDel tbDel;
	private String stateId;
	private String stateFlag;
	private String col1;
	private String col2;
	private String col3;
	private Set tbStudentGrades = new HashSet(0);
	private Set tbPlans = new HashSet(0);
	private Set tbExamCommits = new HashSet(0);
	private Set tbThemes = new HashSet(0);
	private Set tbPrecepts = new HashSet(0);

	public TbStateflag() {
	}

	public TbStateflag(TbDel tbDel, String stateId, String stateFlag,
			String col1, String col2, String col3, Set tbStudentGrades,
			Set tbPlans, Set tbExamCommits, Set tbThemes, Set tbPrecepts) {
		this.tbDel = tbDel;
		this.stateId = stateId;
		this.stateFlag = stateFlag;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbStudentGrades = tbStudentGrades;
		this.tbPlans = tbPlans;
		this.tbExamCommits = tbExamCommits;
		this.tbThemes = tbThemes;
		this.tbPrecepts = tbPrecepts;
	}

	// Property accessors

	public Integer getStaId() {
		return this.staId;
	}

	public void setStaId(Integer staId) {
		this.staId = staId;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public String getStateId() {
		return this.stateId;
	}

	public void setStateId(String stateId) {
		this.stateId = stateId;
	}

	public String getStateFlag() {
		return this.stateFlag;
	}

	public void setStateFlag(String stateFlag) {
		this.stateFlag = stateFlag;
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

	public Set getTbStudentGrades() {
		return this.tbStudentGrades;
	}

	public void setTbStudentGrades(Set tbStudentGrades) {
		this.tbStudentGrades = tbStudentGrades;
	}

	public Set getTbPlans() {
		return this.tbPlans;
	}

	public void setTbPlans(Set tbPlans) {
		this.tbPlans = tbPlans;
	}

	public Set getTbExamCommits() {
		return this.tbExamCommits;
	}

	public void setTbExamCommits(Set tbExamCommits) {
		this.tbExamCommits = tbExamCommits;
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

}