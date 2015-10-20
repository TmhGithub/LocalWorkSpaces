package com.cissst.auth.dao;

import java.util.Collection;
import java.util.List;

import com.cissst.auth.vo.TbRole;

public interface IRoleDao {

	
	public List listAll();
	
	public TbRole findById(int rid);
	
	public void update(TbRole role);
	
	public void delete(Collection entis) ;
}
