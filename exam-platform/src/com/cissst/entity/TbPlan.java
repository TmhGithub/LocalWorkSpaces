package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;
@SuppressWarnings("unchecked")
public class TbPlan implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer planTbId;
	private TbUser tbUser;
	private TbStateflag tbStateflag;
	private TbDel tbDel;
	private TbPrecept tbPrecept;
	private TbClass tbClass;
	private String planId;
	private String planName;
	private String planDesc;
	private String planStarttime;
	private String planEndtime;
	private String palnEnddate;
	private String modType;
	private String modState;
	private String col1;
	private String col2;
	private String col3;
	private Set tbGradePutouts = new HashSet(0);
	private Set tbPlanPutouts = new HashSet(0);
	private Set tbStudentGrades = new HashSet(0);
	private Set tbExamCommits = new HashSet(0);
	private Set tbPlanRemoves = new HashSet(0);

	
	public TbPlan() {
	}


	public TbPlan(TbUser tbUser, TbStateflag tbStateflag, TbDel tbDel,
			TbPrecept tbPrecept, TbClass tbClass, String planId,
			String planName, String planDesc, String planStarttime,
			String planEndtime, String palnEnddate, String modType,
			String modState, String col1, String col2, String col3,
			Set tbGradePutouts, Set tbPlanPutouts, Set tbStudentGrades,
			Set tbExamCommits, Set tbPlanRemoves) {
		this.tbUser = tbUser;
		this.tbStateflag = tbStateflag;
		this.tbDel = tbDel;
		this.tbPrecept = tbPrecept;
		this.tbClass = tbClass;
		this.planId = planId;
		this.planName = planName;
		this.planDesc = planDesc;
		this.planStarttime = planStarttime;
		this.planEndtime = planEndtime;
		this.palnEnddate = palnEnddate;
		this.modType = modType;
		this.modState = modState;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbGradePutouts = tbGradePutouts;
		this.tbPlanPutouts = tbPlanPutouts;
		this.tbStudentGrades = tbStudentGrades;
		this.tbExamCommits = tbExamCommits;
		this.tbPlanRemoves = tbPlanRemoves;
	}

	// Property accessors

	public Integer getPlanTbId() {
		return this.planTbId;
	}

	public void setPlanTbId(Integer planTbId) {
		this.planTbId = planTbId;
	}

	public TbUser getTbUser() {
		return this.tbUser;
	}

	public void setTbUser(TbUser tbUser) {
		this.tbUser = tbUser;
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

	public TbPrecept getTbPrecept() {
		return this.tbPrecept;
	}

	public void setTbPrecept(TbPrecept tbPrecept) {
		this.tbPrecept = tbPrecept;
	}

	public TbClass getTbClass() {
		return this.tbClass;
	}

	public void setTbClass(TbClass tbClass) {
		this.tbClass = tbClass;
	}

	public String getPlanId() {
		return this.planId;
	}

	public void setPlanId(String planId) {
		this.planId = planId;
	}

	public String getPlanName() {
		return this.planName;
	}

	public void setPlanName(String planName) {
		this.planName = planName;
	}

	public String getPlanDesc() {
		return this.planDesc;
	}

	public void setPlanDesc(String planDesc) {
		this.planDesc = planDesc;
	}

	public String getPlanStarttime() {
		return this.planStarttime;
	}

	public void setPlanStarttime(String planStarttime) {
		this.planStarttime = planStarttime;
	}

	public String getPlanEndtime() {
		return this.planEndtime;
	}

	public void setPlanEndtime(String planEndtime) {
		this.planEndtime = planEndtime;
	}

	public String getPalnEnddate() {
		return this.palnEnddate;
	}

	public void setPalnEnddate(String palnEnddate) {
		this.palnEnddate = palnEnddate;
	}

	public String getModType() {
		return this.modType;
	}

	public void setModType(String modType) {
		this.modType = modType;
	}

	public String getModState() {
		return this.modState;
	}

	public void setModState(String modState) {
		this.modState = modState;
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

	public Set getTbGradePutouts() {
		return this.tbGradePutouts;
	}

	public void setTbGradePutouts(Set tbGradePutouts) {
		this.tbGradePutouts = tbGradePutouts;
	}

	public Set getTbPlanPutouts() {
		return this.tbPlanPutouts;
	}

	public void setTbPlanPutouts(Set tbPlanPutouts) {
		this.tbPlanPutouts = tbPlanPutouts;
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

	public Set getTbPlanRemoves() {
		return this.tbPlanRemoves;
	}

	public void setTbPlanRemoves(Set tbPlanRemoves) {
		this.tbPlanRemoves = tbPlanRemoves;
	}

}