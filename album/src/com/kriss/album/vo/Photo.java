package com.kriss.album.vo;

public class Photo {
	
	private int uuid;// ����
	
	private String title;// ��Ƭ����

	private String type;// ����

	private String fileName;// ԭʼ�ļ���

	private String sizeStr;// �ļ���С

	private String storePath;// �洢·��

	
	public int getUuid() {
		return uuid;
	}

	public void setUuid(int uuid) {
		this.uuid = uuid;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getSizeStr() {
		return sizeStr;
	}

	public void setSizeStr(String sizeStr) {
		this.sizeStr = sizeStr;
	}

	public String getStorePath() {
		return storePath;
	}

	public void setStorePath(String storePath) {
		this.storePath = storePath;
	}

}
