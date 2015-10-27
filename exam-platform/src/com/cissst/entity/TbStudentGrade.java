package com.cissst.entity;


public class TbStudentGrade implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer stuGraId;
	private TbStateflag tbStateflag;
	private TbDel tbDel;
	private TbStudent tbStudent;
	private TbPlan tbPlan;
	private String examGrade;
	private String col1;
	private String col2;
	private String col3;

	public TbStudentGrade() {
	}


	public TbStudentGrade(TbStateflag tbStateflag, TbDel tbDel,
			TbStudent tbStudent, TbPlan tbPlan, String examGrade, String col1,
			String col2, String col3) {
		this.tbStateflag = tbStateflag;
		this.tbDel = tbDel;
		this.tbStudent = tbStudent;
		this.tbPlan = tbPlan;
		this.examGrade = examGrade;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
	}

	// Property accessors

	public Integer getStuGraId() {
		return this.stuGraId;
	}

	public void setStuGraId(Integer stuGraId) {
		this.stuGraId = stuGraId;
	}

	public TbStateflag getTbStateflag() {
		return this.tbStateflag;
	}

	public void setTbStateflag(TbStateflag tbStateflag) {
		this.tbStateflag = tbStateflag;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public TbStudent getTbStudent() {
		return this.tbStudent;
	}

	public void setTbStudent(TbStudent tbStudent) {
		this.tbStudent = tbStudent;
	}

	public TbPlan getTbPlan() {
		return this.tbPlan;
	}

	public void setTbPlan(TbPlan tbPlan) {
		this.tbPlan = tbPlan;
	}

	public String getExamGrade() {
		return this.examGrade;
	}

	public void setExamGrade(String examGrade) {
		this.examGrade = examGrade;
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

}