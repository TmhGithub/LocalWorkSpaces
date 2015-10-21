/*
 * @(#)EntUserManager.java	1.0 2004-5-17
 *
 * Copyright 2004 Client Server International, Inc. All rights reserved.
 * CSII PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.csii.ibs.common;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.orm.ibatis.SqlMapClientOperations;

import com.csii.ibs.CifImpl;
import com.csii.pe.accesscontrol.rc.support.TransactionGroupRole;
import com.csii.pe.config.support.SqlMapAware;
import com.csii.pe.core.AbstractUserManager;
import com.csii.pe.core.Context;
import com.csii.pe.core.PeException;
import com.csii.pe.core.RoleGroup;
import com.csii.pe.core.User;

/**
 * Enterprise User Manager
 * <p>
 * Created on 2004-5-17 Modification history
 * <p>
 * 
 * @author Larry Dai. CSII
 * @version 1.0
 * @since 1.0
 */
public class EntUserManager extends AbstractUserManager implements SqlMapAware {
	private static Log log = LogFactory.getLog(EntUserManager.class);
	private SqlMapClientOperations sqlMapExecutor;

	public EntUserManager() {
		super();
	}

	/*
	 * override
	 * 
	 * @see
	 * com.csii.pe.core.AbstractUserManager#getUserInternal(com.csii.pe.core
	 * .User, com.csii.pe.core.Context)
	 */

	protected User getUserInternal(User user, Context context) {

		Map dataMap = context.getDataMap();

		Map entUserInfo = (Map) sqlMapExecutor.queryForObject(
				"common.loadUserInfo", dataMap);

		if (entUserInfo == null) {
			return null;
		}
		user.setPassword((String) entUserInfo.get(Dict.PASSWORD));

		EntUser entUser = (EntUser) user;

		entUser.setUserSeqNo((String) entUserInfo.get(Dict.USERSEQNO));

		CifImpl cif = new CifImpl();

		cif.setId((String) entUserInfo.get(Dict.CIFNO));

		entUser.setCif(cif);

		entUser.setUserId((String) context.getData(Dict.USERID));
		entUser.setCifName((String) entUserInfo.get(Dict.NAME));
		entUser.setName((String) entUserInfo.get(Dict.USERNAME));

		return user;
	}

	/*
	 * override
	 * 
	 * @see com.csii.pe.core.UserManager#authenticate(com.csii.pe.core.User,
	 * com.csii.pe.core.Context)
	 */
	public boolean authenticate(User user, Context context) throws PeException {

		// System.err.println("client Cert:"+user.getClientCertificate());
		String password = (String) context.getData(Dict.PASSWORD);
		String shadow = Util.digest(user.getUniqueId() + password);
		if (!shadow.equals(user.getPassword())) {
			return false;
		}
		return true;
	}

	/*
	 * override
	 * 
	 * @see com.csii.pe.core.UserManager#initUser(com.csii.pe.core.User,
	 * com.csii.pe.core.Context)
	 */
	public void initUser(User usr, Context context) throws PeException {
		// get user info

		Map dataMap = context.getDataMap();

		EntUser user = (EntUser) usr;
		// get current user's accounts.
		dataMap.put(Dict.CIFNO, user.getCif().getId());

		List accounts = (List) sqlMapExecutor.queryForList(
				"common.queryUserAc", dataMap);

		user.setAccounts(accounts);

		user.setTransferAccounts(accounts);

		// set user's role dynamically
		RoleGroup userRole = new TransactionGroupRole();
		// add user role to operator

		// add common role to all users.
		userRole.addMember(getRolePool().getRole("9999"));

		List roleIds = (List) sqlMapExecutor.queryForList(
				"common.queryUserRoleList", dataMap);
		System.err.println(roleIds);
		for (Iterator it = roleIds.iterator(); it.hasNext();) {
			userRole.addMember(getRolePool().getRole((String) it.next()));
		}

		user.setRole(userRole);

	}

	/**
	 * @param template
	 */
	public void setSqlMap(SqlMapClientOperations operations) {
		sqlMapExecutor = operations;
	}

}
