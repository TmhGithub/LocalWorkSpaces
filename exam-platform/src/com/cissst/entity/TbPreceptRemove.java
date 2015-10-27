package com.cissst.entity;


public class TbPreceptRemove implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer preRemId;
	private TbDel tbDel;
	private TbPrecept tbPrecept;
	private String remIdea;
	private String col1;
	private String col2;
	private String col3;

	
	public TbPreceptRemove() {
	}

	
	public TbPreceptRemove(TbDel tbDel, TbPrecept tbPrecept, String remIdea,
			String col1, String col2, String col3) {
		this.tbDel = tbDel;
		this.tbPrecept = tbPrecept;
		this.remIdea = remIdea;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
	}

	// Property accessors

	public Integer getPreRemId() {
		return this.preRemId;
	}

	public void setPreRemId(Integer preRemId) {
		this.preRemId = preRemId;
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

	public String getRemIdea() {
		return this.remIdea;
	}

	public void setRemIdea(String remIdea) {
		this.remIdea = remIdea;
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