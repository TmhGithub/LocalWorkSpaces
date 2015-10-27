package com.cissst.entity;

public class TbPreceptAuditing implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer preAudId;
	private TbUser tbUser;
	private TbDel tbDel;
	private TbPrecept tbPrecept;
	private String audId;
	private String audIdea;
	private String audResult;
	private String autDate;
	private String col1;
	private String col2;
	private String col3;

	
	public TbPreceptAuditing() {
	}

	
	public TbPreceptAuditing(TbUser tbUser, TbDel tbDel, TbPrecept tbPrecept,
			String audId, String audIdea, String audResult, String autDate,
			String col1, String col2, String col3) {
		this.tbUser = tbUser;
		this.tbDel = tbDel;
		this.tbPrecept = tbPrecept;
		this.audId = audId;
		this.audIdea = audIdea;
		this.audResult = audResult;
		this.autDate = autDate;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
	}

	// Property accessors

	public Integer getPreAudId() {
		return this.preAudId;
	}

	public void setPreAudId(Integer preAudId) {
		this.preAudId = preAudId;
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

	public TbPrecept getTbPrecept() {
		return this.tbPrecept;
	}

	public void setTbPrecept(TbPrecept tbPrecept) {
		this.tbPrecept = tbPrecept;
	}

	public String getAudId() {
		return this.audId;
	}

	public void setAudId(String audId) {
		this.audId = audId;
	}

	public String getAudIdea() {
		return this.audIdea;
	}

	public void setAudIdea(String audIdea) {
		this.audIdea = audIdea;
	}

	public String getAudResult() {
		return this.audResult;
	}

	public void setAudResult(String audResult) {
		this.audResult = audResult;
	}

	public String getAutDate() {
		return this.autDate;
	}

	public void setAutDate(String autDate) {
		this.autDate = autDate;
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