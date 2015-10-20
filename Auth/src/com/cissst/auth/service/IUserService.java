package com.cissst.auth.service;

import com.cissst.auth.vo.TbUser;

public interface IUserService {

	public void save(TbUser user);
	
	public TbUser login(TbUser user);
}
