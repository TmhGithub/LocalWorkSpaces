package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("unchecked")
public class TbStudent implements java.io.Serializable {
	private static final long serialVersionUID = 1L;

	private Integer stuId;
	private TbStudentType tbStudentType;
	private TbDel tbDel;
	private TbClass tbClass;
	private String stuAccount;
	private String stuPassword;
	private String stuName;
	private String stuSex;
	private String stuIndate;
	private String stuExamtime;
	private String stuLasttime;
	private String stuState;
	private String col1;
	private String col2;
	private String col3;
	private Set tbStudentGrades = new HashSet(0);
	private Set tbExamCommits = new HashSet(0);

	public TbStudent() {
	}

	public TbStudent(TbStudentType tbStudentType, TbDel tbDel, TbClass tbClass,
			String stuAccount, String stuPassword, String stuName,
			String stuSex, String stuIndate, String stuExamtime,
			String stuLasttime, String stuState, String col1, String col2,
			String col3, Set tbStudentGrades, Set tbExamCommits) {
		this.tbStudentType = tbStudentType;
		this.tbDel = tbDel;
		this.tbClass = tbClass;
		this.stuAccount = stuAccount;
		this.stuPassword = stuPassword;
		this.stuName = stuName;
		this.stuSex = stuSex;
		this.stuIndate = stuIndate;
		this.stuExamtime = stuExamtime;
		this.stuLasttime = stuLasttime;
		this.stuState = stuState;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbStudentGrades = tbStudentGrades;
		this.tbExamCommits = tbExamCommits;
	}

	// Property accessors

	public Integer getStuId() {
		return this.stuId;
	}

	public void setStuId(Integer stuId) {
		this.stuId = stuId;
	}

	public TbStudentType getTbStudentType() {
		return this.tbStudentType;
	}

	public void setTbStudentType(TbStudentType tbStudentType) {
		this.tbStudentType = tbStudentType;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public TbClass getTbClass() {
		return this.tbClass;
	}

	public void setTbClass(TbClass tbClass) {
		this.tbClass = tbClass;
	}

	public String getStuAccount() {
		return this.stuAccount;
	}

	public void setStuAccount(String stuAccount) {
		this.stuAccount = stuAccount;
	}

	public String getStuPassword() {
		return this.stuPassword;
	}

	public void setStuPassword(String stuPassword) {
		this.stuPassword = stuPassword;
	}

	public String getStuName() {
		return this.stuName;
	}

	public void setStuName(String stuName) {
		this.stuName = stuName;
	}

	public String getStuSex() {
		return this.stuSex;
	}

	public void setStuSex(String stuSex) {
		this.stuSex = stuSex;
	}

	public String getStuIndate() {
		return this.stuIndate;
	}

	public void setStuIndate(String stuIndate) {
		this.stuIndate = stuIndate;
	}

	public String getStuExamtime() {
		return this.stuExamtime;
	}

	public void setStuExamtime(String stuExamtime) {
		this.stuExamtime = stuExamtime;
	}

	public String getStuLasttime() {
		return this.stuLasttime;
	}

	public void setStuLasttime(String stuLasttime) {
		this.stuLasttime = stuLasttime;
	}

	public String getStuState() {
		return this.stuState;
	}

	public void setStuState(String stuState) {
		this.stuState = stuState;
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

	public Set getTbExamCommits() {
		return this.tbExamCommits;
	}

	public void setTbExamCommits(Set tbExamCommits) {
		this.tbExamCommits = tbExamCommits;
	}

}