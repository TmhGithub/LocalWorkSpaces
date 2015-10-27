package cn.javass.web.endsample.back.util.dbutil;

import java.io.IOException;
import java.util.Properties;

public class Env extends Properties{
	
	private static final long serialVersionUID = 1L;
	private static Env instance;

	private Env(){
		try {
			load(getClass().getResourceAsStream("/db.properties"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static Env getInstance(){
		if (instance == null) {
			makeInstance();
		}
		return instance;
	}

	private static synchronized void makeInstance() {
		if (instance == null) {
			instance = new Env();
		}
	}
}
