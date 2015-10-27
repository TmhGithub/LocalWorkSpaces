package com.cissst.entity;


public class TbPreceptPolicy implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer prePolId;
	private TbPolicy tbPolicy;
	private TbDel tbDel;
	private TbPrecept tbPrecept;
	private String col1;
	private String col2;
	private String col3;


	public TbPreceptPolicy() {
	}

	public TbPreceptPolicy(TbPolicy tbPolicy, TbDel tbDel, TbPrecept tbPrecept,
			String col1, String col2, String col3) {
		this.tbPolicy = tbPolicy;
		this.tbDel = tbDel;
		this.tbPrecept = tbPrecept;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
	}
	public Integer getPrePolId() {
		return this.prePolId;
	}

	public void setPrePolId(Integer prePolId) {
		this.prePolId = prePolId;
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

	public TbPrecept getTbPrecept() {
		return this.tbPrecept;
	}

	public void setTbPrecept(TbPrecept tbPrecept) {
		this.tbPrecept = tbPrecept;
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