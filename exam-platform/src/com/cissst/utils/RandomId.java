package com.cissst.utils;

import org.apache.commons.lang.RandomStringUtils;

public class RandomId {
	/**
	 * �������һ��8λ��
	 * @return
	 */
	public static String generateRandomId(){
		return RandomStringUtils.randomAlphanumeric(8);
	}
	public static String generateAnswerId(){
		return RandomStringUtils.randomNumeric(3);
	}
	public static void main(String[] args) {
		System.out.println(generateRandomId());
	}
}
