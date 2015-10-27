package com.cissst.entity;


public class TbPolicyThemes implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer polTheId;
	private TbPolicy tbPolicy;
	private TbDel tbDel;
	private TbTheme tbTheme;
	private String col1;
	private String col2;
	private String col3;


	public TbPolicyThemes() {
	}


	public TbPolicyThemes(TbPolicy tbPolicy, TbDel tbDel, TbTheme tbTheme,
			String col1, String col2, String col3) {
		this.tbPolicy = tbPolicy;
		this.tbDel = tbDel;
		this.tbTheme = tbTheme;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
	}

	// Property accessors

	public Integer getPolTheId() {
		return this.polTheId;
	}

	public void setPolTheId(Integer polTheId) {
		this.polTheId = polTheId;
	}

	public TbPolicy getTbPolicy() {
		return this.tbPolicy;
	}

	public void setTbPolicy(TbPolicy tbPolicy) {
		this.tbPolicy = tbPolicy;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public TbTheme getTbTheme() {
		return this.tbTheme;
	}

	public void setTbTheme(TbTheme tbTheme) {
		this.tbTheme = tbTheme;
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