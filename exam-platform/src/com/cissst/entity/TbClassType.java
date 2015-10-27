package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("unchecked")
public class TbClassType implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private Integer classTypeId;
	private TbDel tbDel;
	private String clatypeId;
	private String clatypeName;
	private String col1;
	private String col2;
	private String col3;
	private Set tbClasses = new HashSet(0);
	public TbClassType() {
	}

	public TbClassType(TbDel tbDel, String clatypeId, String clatypeName,
			String col1, String col2, String col3, Set tbClasses) {
		this.tbDel = tbDel;
		this.clatypeId = clatypeId;
		this.clatypeName = clatypeName;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbClasses = tbClasses;
	}
	public Integer getClassTypeId() {
		return this.classTypeId;
	}

	public void setClassTypeId(Integer classTypeId) {
		this.classTypeId = classTypeId;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public String getClatypeId() {
		return this.clatypeId;
	}

	public void setClatypeId(String clatypeId) {
		this.clatypeId = clatypeId;
	}

	public String getClatypeName() {
		return this.clatypeName;
	}

	public void setClatypeName(String clatypeName) {
		this.clatypeName = clatypeName;
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

	public Set getTbClasses() {
		return this.tbClasses;
	}

	public void setTbClasses(Set tbClasses) {
		this.tbClasses = tbClasses;
	}

}