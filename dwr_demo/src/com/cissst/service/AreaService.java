package com.cissst.service;

import java.util.ArrayList;
import java.util.List;

import com.cissst.vo.City;
import com.cissst.vo.Province;

public class AreaService {

	
	public List getAllPros(){
		List ls = new ArrayList();	
	    Province p1 = new Province("610000","����ʡ");
	    Province p2 = new Province("430000","����ʡ");
	    ls.add(p1);
	    ls.add(p2);    
	    return ls; 
	}
	
	
	public List getCitiesByPcode(String pcode){
		List ls = new ArrayList();	
		if("610000".equals(pcode)){
			City c1 = new City("610100","������");
			City c2 = new City("610200","������");
			ls.add(c1);
			ls.add(c2);
		}else if("430000".equals(pcode)){
			City c1 = new City("430100","��ɳ��");
			City c2 = new City("430200","������");
			ls.add(c1);
			ls.add(c2);
		}
		return ls;
	}
}
