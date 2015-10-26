package com.cissst.vo;

public class City {

	private String ccode;
	
	private String cname;

	
	public City() {
	}

	public City(String ccode, String cname) {
		this.ccode = ccode;
		this.cname = cname;
	}

	public String getCcode() {
		return ccode;
	}

	public void setCcode(String ccode) {
		this.ccode = ccode;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}
	
	
}
