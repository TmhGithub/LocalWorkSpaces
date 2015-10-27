package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;
@SuppressWarnings("unchecked")
public class TbStudentType implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private Integer stuTypeId;
	private TbDel tbDel;
	private String stutypeId;
	private String stutypeName;
	private String clo1;
	private String clo2;
	private String clo3;
	private Set tbStudents = new HashSet(0);

	public TbStudentType() {
	}

	
	public TbStudentType(TbDel tbDel, String stutypeId, String stutypeName,
			String clo1, String clo2, String clo3, Set tbStudents) {
		this.tbDel = tbDel;
		this.stutypeId = stutypeId;
		this.stutypeName = stutypeName;
		this.clo1 = clo1;
		this.clo2 = clo2;
		this.clo3 = clo3;
		this.tbStudents = tbStudents;
	}


	public Integer getStuTypeId() {
		return this.stuTypeId;
	}

	public void setStuTypeId(Integer stuTypeId) {
		this.stuTypeId = stuTypeId;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public String getStutypeId() {
		return this.stutypeId;
	}

	public void setStutypeId(String stutypeId) {
		this.stutypeId = stutypeId;
	}

	public String getStutypeName() {
		return this.stutypeName;
	}

	public void setStutypeName(String stutypeName) {
		this.stutypeName = stutypeName;
	}

	public String getClo1() {
		return this.clo1;
	}

	public void setClo1(String clo1) {
		this.clo1 = clo1;
	}

	public String getClo2() {
		return this.clo2;
	}

	public void setClo2(String clo2) {
		this.clo2 = clo2;
	}

	public String getClo3() {
		return this.clo3;
	}

	public void setClo3(String clo3) {
		this.clo3 = clo3;
	}

	public Set getTbStudents() {
		return this.tbStudents;
	}

	public void setTbStudents(Set tbStudents) {
		this.tbStudents = tbStudents;
	}

}