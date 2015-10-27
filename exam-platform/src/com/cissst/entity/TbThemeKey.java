package com.cissst.entity;

public class TbThemeKey implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private Integer themeKeyId;
	private TbDel tbDel;
	private TbTheme tbTheme;
	private String thekeyId;
	private String theAllkey;
	private String col1;
	private String col2;
	private String col3;

	public TbThemeKey() {
	}

	public TbThemeKey(TbDel tbDel, TbTheme tbTheme, String thekeyId,
			String theAllkey, String col1, String col2, String col3) {
		this.tbDel = tbDel;
		this.tbTheme = tbTheme;
		this.thekeyId = thekeyId;
		this.theAllkey = theAllkey;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
	}

	// Property accessors

	public Integer getThemeKeyId() {
		return this.themeKeyId;
	}

	public void setThemeKeyId(Integer themeKeyId) {
		this.themeKeyId = themeKeyId;
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

	public String getThekeyId() {
		return this.thekeyId;
	}

	public void setThekeyId(String thekeyId) {
		this.thekeyId = thekeyId;
	}

	public String getTheAllkey() {
		return this.theAllkey;
	}

	public void setTheAllkey(String theAllkey) {
		this.theAllkey = theAllkey;
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
	//ต๗สิ
	@Override
	public String toString() {
		return "TbThemeKey [col1=" + col1 + ", col2=" + col2 + ", col3=" + col3
				+ ", tbDel=" + tbDel + ", tbTheme=" + tbTheme + ", theAllkey="
				+ theAllkey + ", thekeyId=" + thekeyId + ", themeKeyId="
				+ themeKeyId + "]";
	}
}