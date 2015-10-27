package com.cissst.entity;

public class TbPlanPutout implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer plaPutId;
	private TbDel tbDel;
	private TbPlan tbPlan;
	private String col1;
	private String col2;
	private String col3;

	public TbPlanPutout() {
	}

	
	public TbPlanPutout(TbDel tbDel, TbPlan tbPlan, String col1, String col2,
			String col3) {
		this.tbDel = tbDel;
		this.tbPlan = tbPlan;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
	}

	public Integer getPlaPutId() {
		return this.plaPutId;
	}

	public void setPlaPutId(Integer plaPutId) {
		this.plaPutId = plaPutId;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public TbPlan getTbPlan() {
		return this.tbPlan;
	}

	public void setTbPlan(TbPlan tbPlan) {
		this.tbPlan = tbPlan;
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