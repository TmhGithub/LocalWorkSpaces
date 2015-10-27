package com.cissst.entity;

import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("unchecked")
public class TbTheme implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private Integer themeId;
	private TbUser tbUser;
	private TbStateflag tbStateflag;
	private TbDel tbDel;
	private TbThemeType tbThemeType;
	private TbThemeArea tbThemeArea;
	private TbThemeDifficulty tbThemeDifficulty;
	private String theId;
	private String theContent;
	private String theRightkey;
	private String theIndate;
	private String col1;
	private String col2;
	private String col3;
	private Set tbThemeRemoves = new HashSet(0);
	private Set tbThemeAuditings = new HashSet(0);
	private Set tbExamCommits = new HashSet(0);
	private Set tbThemeKeies = new HashSet(0);
	private Set tbPolicyThemeses = new HashSet(0);

	
	public TbTheme() {
	}

	
	public TbTheme(TbUser tbUser, TbStateflag tbStateflag, TbDel tbDel,
			TbThemeType tbThemeType, TbThemeArea tbThemeArea,
			TbThemeDifficulty tbThemeDifficulty, String theId,
			String theContent, String theRightkey, String theIndate,
			String col1, String col2, String col3, Set tbThemeRemoves,
			Set tbThemeAuditings, Set tbExamCommits, Set tbThemeKeies,
			Set tbPolicyThemeses) {
		this.tbUser = tbUser;
		this.tbStateflag = tbStateflag;
		this.tbDel = tbDel;
		this.tbThemeType = tbThemeType;
		this.tbThemeArea = tbThemeArea;
		this.tbThemeDifficulty = tbThemeDifficulty;
		this.theId = theId;
		this.theContent = theContent;
		this.theRightkey = theRightkey;
		this.theIndate = theIndate;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.tbThemeRemoves = tbThemeRemoves;
		this.tbThemeAuditings = tbThemeAuditings;
		this.tbExamCommits = tbExamCommits;
		this.tbThemeKeies = tbThemeKeies;
		this.tbPolicyThemeses = tbPolicyThemeses;
	}


	public Integer getThemeId() {
		return this.themeId;
	}

	public void setThemeId(Integer themeId) {
		this.themeId = themeId;
	}

	public TbUser getTbUser() {
		return this.tbUser;
	}

	public void setTbUser(TbUser tbUser) {
		this.tbUser = tbUser;
	}

	public TbStateflag getTbStateflag() {
		return this.tbStateflag;
	}

	public void setTbStateflag(TbStateflag tbStateflag) {
		this.tbStateflag = tbStateflag;
	}

	public TbDel getTbDel() {
		return this.tbDel;
	}

	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	public TbThemeType getTbThemeType() {
		return this.tbThemeType;
	}

	public void setTbThemeType(TbThemeType tbThemeType) {
		this.tbThemeType = tbThemeType;
	}

	public TbThemeArea getTbThemeArea() {
		return this.tbThemeArea;
	}

	public void setTbThemeArea(TbThemeArea tbThemeArea) {
		this.tbThemeArea = tbThemeArea;
	}

	public TbThemeDifficulty getTbThemeDifficulty() {
		return this.tbThemeDifficulty;
	}

	public void setTbThemeDifficulty(TbThemeDifficulty tbThemeDifficulty) {
		this.tbThemeDifficulty = tbThemeDifficulty;
	}

	public String getTheId() {
		return this.theId;
	}

	public void setTheId(String theId) {
		this.theId = theId;
	}

	public String getTheContent() {
		return this.theContent;
	}

	public void setTheContent(String theContent) {
		this.theContent = theContent;
	}

	public String getTheRightkey() {
		return this.theRightkey;
	}

	public void setTheRightkey(String theRightkey) {
		this.theRightkey = theRightkey;
	}

	public String getTheIndate() {
		return this.theIndate;
	}

	public void setTheIndate(String theIndate) {
		this.theIndate = theIndate;
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

	public Set getTbThemeRemoves() {
		return this.tbThemeRemoves;
	}

	public void setTbThemeRemoves(Set tbThemeRemoves) {
		this.tbThemeRemoves = tbThemeRemoves;
	}

	public Set getTbThemeAuditings() {
		return this.tbThemeAuditings;
	}

	public void setTbThemeAuditings(Set tbThemeAuditings) {
		this.tbThemeAuditings = tbThemeAuditings;
	}

	public Set getTbExamCommits() {
		return this.tbExamCommits;
	}

	public void setTbExamCommits(Set tbExamCommits) {
		this.tbExamCommits = tbExamCommits;
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


	@Override
	public String toString() {
		return "TbTheme [tbDel=" + tbDel + ", tbStateflag=" + tbStateflag
				+ ", tbThemeArea=" + tbThemeArea + ", tbThemeDifficulty=" + tbThemeDifficulty
				+ ", tbThemeType=" + tbThemeType
				+ ", theContent=" + theContent + ", theId=" + theId
				+ ", theIndate=" + theIndate + ", theRightkey=" + theRightkey
				+ ", themeId=" + themeId + "]";
	}

	//ต๗สิ
	
}