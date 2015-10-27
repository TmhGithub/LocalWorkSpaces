package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;
@SuppressWarnings("unchecked")
public class TbClass implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private Integer classId;
	private TbUser tbUser;
	private TbDel tbDel;
	private TbClassType tbClassType;
	private String claId;
	private String claName;
	private String claDesc;
	private String claState;
	private String claIndate;
	private String claOutdate;
	private String col1;
	private String col2;
	private String col3;
	private Set tbStudents = new HashSet(0);
	private Set tbPlans = new HashSet(0);
	public TbClass() {
	}
	public TbClass(TbUser tbUser, TbDel tbDel, TbClassType tbClassType,
			String claId, String claName, String claDesc, String claState,
			String claIndate, String claOutdate, String col1, String col2,
			String col3, Set tbStudents, Set tbPlans) {
		this.tbUser = tbUser;
		this.tbDel = tbDel;
		this.tbClassType = tbClassType;
		this.claId = claId;
		this.claName = claName;
		this.claDesc = claDesc;
		this.claState = claState;
		this.claIndate = claIndate;
		this.claOutdate = claOutdate;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbStudents = tbStudents;
		this.tbPlans = tbPlans;
	}

	

	public Integer getClassId() {
		return this.classId;
	}

	public void setClassId(Integer classId) {
		this.classId = classId;
	}

	public TbUser getTbUser() {
		return this.tbUser;
	}

	public void setTbUser(TbUser tbUser) {
		this.tbUser = tbUser;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public TbClassType getTbClassType() {
		return this.tbClassType;
	}

	public void setTbClassType(TbClassType tbClassType) {
		this.tbClassType = tbClassType;
	}

	public String getClaId() {
		return this.claId;
	}

	public void setClaId(String claId) {
		this.claId = claId;
	}

	public String getClaName() {
		return this.claName;
	}

	public void setClaName(String claName) {
		this.claName = claName;
	}

	public String getClaDesc() {
		return this.claDesc;
	}

	public void setClaDesc(String claDesc) {
		this.claDesc = claDesc;
	}

	public String getClaState() {
		return this.claState;
	}

	public void setClaState(String claState) {
		this.claState = claState;
	}

	public String getClaIndate() {
		return this.claIndate;
	}

	public void setClaIndate(String claIndate) {
		this.claIndate = claIndate;
	}

	public String getClaOutdate() {
		return this.claOutdate;
	}

	public void setClaOutdate(String claOutdate) {
		this.claOutdate = claOutdate;
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

	public Set getTbStudents() {
		return this.tbStudents;
	}

	public void setTbStudents(Set tbStudents) {
		this.tbStudents = tbStudents;
	}

	public Set getTbPlans() {
		return this.tbPlans;
	}

	public void setTbPlans(Set tbPlans) {
		this.tbPlans = tbPlans;
	}

}