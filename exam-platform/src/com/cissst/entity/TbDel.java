package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("unchecked")
public class TbDel implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer delTbId;
	private String delId;
	private String delFlag;
	private String col1;
	private String col2;
	private String col3;
	private Set tbStudentTypes = new HashSet(0);
	private Set tbUsers = new HashSet(0);
	private Set tbStudents = new HashSet(0);
	private Set tbThemeKeies = new HashSet(0);
	private Set tbPolicyThemeses = new HashSet(0);
	private Set tbPlanPutouts = new HashSet(0);
	private Set tbClasses = new HashSet(0);
	private Set tbClassTypes = new HashSet(0);
	private Set tbThemes = new HashSet(0);
	private Set tbPlanRemoves = new HashSet(0);
	private Set tbPrecepts = new HashSet(0);
	private Set tbPreceptPolicies = new HashSet(0);
	private Set tbExamCommits = new HashSet(0);
	private Set tbGradePutouts = new HashSet(0);
	private Set tbStudentGrades = new HashSet(0);
	private Set tbStateflags = new HashSet(0);
	private Set tbPreceptRemoves = new HashSet(0);
	private Set tbPreceptAuditings = new HashSet(0);
	private Set tbThemeDifficulties = new HashSet(0);
	private Set tbThemeTypes = new HashSet(0);
	private Set tbThemeAreas = new HashSet(0);
	private Set tbThemeAuditings = new HashSet(0);
	private Set tbThemeRemoves = new HashSet(0);
	private Set tbPlans = new HashSet(0);
	private Set tbPolicies = new HashSet(0);
	public TbDel() {
	}

	
	public TbDel(String delId, String delFlag, String col1, String col2,
			String col3, Set tbStudentTypes, Set tbUsers, Set tbStudents,
			Set tbThemeKeies, Set tbPolicyThemeses, Set tbPlanPutouts,
			Set tbClasses, Set tbClassTypes, Set tbThemes, Set tbPlanRemoves,
			Set tbPrecepts, Set tbPreceptPolicies, Set tbExamCommits,
			Set tbGradePutouts, Set tbStudentGrades, Set tbStateflags,
			Set tbPreceptRemoves, Set tbPreceptAuditings,
			Set tbThemeDifficulties, Set tbThemeTypes, Set tbThemeAreas,
			Set tbThemeAuditings, Set tbThemeRemoves, Set tbPlans,
			Set tbPolicies) {
		this.delId = delId;
		this.delFlag = delFlag;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbStudentTypes = tbStudentTypes;
		this.tbUsers = tbUsers;
		this.tbStudents = tbStudents;
		this.tbThemeKeies = tbThemeKeies;
		this.tbPolicyThemeses = tbPolicyThemeses;
		this.tbPlanPutouts = tbPlanPutouts;
		this.tbClasses = tbClasses;
		this.tbClassTypes = tbClassTypes;
		this.tbThemes = tbThemes;
		this.tbPlanRemoves = tbPlanRemoves;
		this.tbPrecepts = tbPrecepts;
		this.tbPreceptPolicies = tbPreceptPolicies;
		this.tbExamCommits = tbExamCommits;
		this.tbGradePutouts = tbGradePutouts;
		this.tbStudentGrades = tbStudentGrades;
		this.tbStateflags = tbStateflags;
		this.tbPreceptRemoves = tbPreceptRemoves;
		this.tbPreceptAuditings = tbPreceptAuditings;
		this.tbThemeDifficulties = tbThemeDifficulties;
		this.tbThemeTypes = tbThemeTypes;
		this.tbThemeAreas = tbThemeAreas;
		this.tbThemeAuditings = tbThemeAuditings;
		this.tbThemeRemoves = tbThemeRemoves;
		this.tbPlans = tbPlans;
		this.tbPolicies = tbPolicies;
	}

	// Property accessors

	public Integer getDelTbId() {
		return this.delTbId;
	}

	public void setDelTbId(Integer delTbId) {
		this.delTbId = delTbId;
	}

	public String getDelId() {
		return this.delId;
	}

	public void setDelId(String delId) {
		this.delId = delId;
	}

	public String getDelFlag() {
		return this.delFlag;
	}

	public void setDelFlag(String delFlag) {
		this.delFlag = delFlag;
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

	public Set getTbStudentTypes() {
		return this.tbStudentTypes;
	}

	public void setTbStudentTypes(Set tbStudentTypes) {
		this.tbStudentTypes = tbStudentTypes;
	}

	public Set getTbUsers() {
		return this.tbUsers;
	}

	public void setTbUsers(Set tbUsers) {
		this.tbUsers = tbUsers;
	}

	public Set getTbStudents() {
		return this.tbStudents;
	}

	public void setTbStudents(Set tbStudents) {
		this.tbStudents = tbStudents;
	}

	public Set getTbThemeKeies() {
		return this.tbThemeKeies;
	}

	public void setTbThemeKeies(Set tbThemeKeies) {
		this.tbThemeKeies = tbThemeKeies;
	}

	public Set getTbPolicyThemeses() {
		return this.tbPolicyThemeses;
	}

	public void setTbPolicyThemeses(Set tbPolicyThemeses) {
		this.tbPolicyThemeses = tbPolicyThemeses;
	}

	public Set getTbPlanPutouts() {
		return this.tbPlanPutouts;
	}

	public void setTbPlanPutouts(Set tbPlanPutouts) {
		this.tbPlanPutouts = tbPlanPutouts;
	}

	public Set getTbClasses() {
		return this.tbClasses;
	}

	public void setTbClasses(Set tbClasses) {
		this.tbClasses = tbClasses;
	}

	public Set getTbClassTypes() {
		return this.tbClassTypes;
	}

	public void setTbClassTypes(Set tbClassTypes) {
		this.tbClassTypes = tbClassTypes;
	}

	public Set getTbThemes() {
		return this.tbThemes;
	}

	public void setTbThemes(Set tbThemes) {
		this.tbThemes = tbThemes;
	}

	public Set getTbPlanRemoves() {
		return this.tbPlanRemoves;
	}

	public void setTbPlanRemoves(Set tbPlanRemoves) {
		this.tbPlanRemoves = tbPlanRemoves;
	}

	public Set getTbPrecepts() {
		return this.tbPrecepts;
	}

	public void setTbPrecepts(Set tbPrecepts) {
		this.tbPrecepts = tbPrecepts;
	}

	public Set getTbPreceptPolicies() {
		return this.tbPreceptPolicies;
	}

	public void setTbPreceptPolicies(Set tbPreceptPolicies) {
		this.tbPreceptPolicies = tbPreceptPolicies;
	}

	public Set getTbExamCommits() {
		return this.tbExamCommits;
	}

	public void setTbExamCommits(Set tbExamCommits) {
		this.tbExamCommits = tbExamCommits;
	}

	public Set getTbGradePutouts() {
		return this.tbGradePutouts;
	}

	public void setTbGradePutouts(Set tbGradePutouts) {
		this.tbGradePutouts = tbGradePutouts;
	}

	public Set getTbStudentGrades() {
		return this.tbStudentGrades;
	}

	public void setTbStudentGrades(Set tbStudentGrades) {
		this.tbStudentGrades = tbStudentGrades;
	}

	public Set getTbStateflags() {
		return this.tbStateflags;
	}

	public void setTbStateflags(Set tbStateflags) {
		this.tbStateflags = tbStateflags;
	}

	public Set getTbPreceptRemoves() {
		return this.tbPreceptRemoves;
	}

	public void setTbPreceptRemoves(Set tbPreceptRemoves) {
		this.tbPreceptRemoves = tbPreceptRemoves;
	}

	public Set getTbPreceptAuditings() {
		return this.tbPreceptAuditings;
	}

	public void setTbPreceptAuditings(Set tbPreceptAuditings) {
		this.tbPreceptAuditings = tbPreceptAuditings;
	}

	public Set getTbThemeDifficulties() {
		return this.tbThemeDifficulties;
	}

	public void setTbThemeDifficulties(Set tbThemeDifficulties) {
		this.tbThemeDifficulties = tbThemeDifficulties;
	}

	public Set getTbThemeTypes() {
		return this.tbThemeTypes;
	}

	public void setTbThemeTypes(Set tbThemeTypes) {
		this.tbThemeTypes = tbThemeTypes;
	}

	public Set getTbThemeAreas() {
		return this.tbThemeAreas;
	}

	public void setTbThemeAreas(Set tbThemeAreas) {
		this.tbThemeAreas = tbThemeAreas;
	}

	public Set getTbThemeAuditings() {
		return this.tbThemeAuditings;
	}

	public void setTbThemeAuditings(Set tbThemeAuditings) {
		this.tbThemeAuditings = tbThemeAuditings;
	}

	public Set getTbThemeRemoves() {
		return this.tbThemeRemoves;
	}

	public void setTbThemeRemoves(Set tbThemeRemoves) {
		this.tbThemeRemoves = tbThemeRemoves;
	}

	public Set getTbPlans() {
		return this.tbPlans;
	}

	public void setTbPlans(Set tbPlans) {
		this.tbPlans = tbPlans;
	}

	public Set getTbPolicies() {
		return this.tbPolicies;
	}

	public void setTbPolicies(Set tbPolicies) {
		this.tbPolicies = tbPolicies;
	}

}