package com.cissst.auth.service;

import java.util.Collection;
import java.util.List;

import com.cissst.auth.vo.TbRole;

public interface IRoleService {

	public List getAll();
	
	public TbRole findById(int rid);
	
	public void update(TbRole role) ;
	
	public void delete(Collection entis);
}
