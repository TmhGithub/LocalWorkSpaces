package com.cissst.auth.dao;

import com.cissst.auth.vo.TbUser;

public interface IUserDao {
   
	public void save(TbUser user);
	
	public TbUser login(TbUser user) ;
}
