package com.csii.ibs.common;

public class Constants {

	//数据库Id. 用于设置Action默认访问的数据源。
	public static final String DB_ID_IBSDB = "demodb";

	public static final String AC_TYPE_SAV = "0"; //活期账号
	public static final String AC_TYPE_TIM = "1"; //定期账号
	public static final String AC_TYPE_LNS = "2"; //贷款帐户

	//网银客户状态 0：正常 1：冻结 2：销户
	public static final String CIF_STATUS_OK = "0"; //正常
	public static final String CIF_STATUS_LOCK = "1"; //冻结
	public static final String CIF_STATUS_CLOSE = "2"; //销户

	//交易状态
	public static final String JNL_STATUS_OK = "0"; //交易成功
	public static final String JNL_STATUS_COMM_FAIL = "1"; //通讯失败
	public static final String JNL_STATUS_HOST_REJECT = "2"; //主机拒绝
	public static final String JNL_STATUS_IBS_FAIL = "3"; //网银异常
	public static final String JNL_STATUS_INIT = "9"; //初始状态	

	//交易复核状态：
	public static final String TRS_STATUS_ENTRY = "00"; //待复核
	public static final String TRS_STATUS_DONE = "99"; //处理结束

	public static final String USER_AC_RIGHT_QUERY = "1"; //查询
	public static final String USER_AC_RIGHT_TRANSFER = "1"; //转帐
	
    public static final String RESETPASSWORD_NO="0"; //不重置	
    public static final String RESETPASSWORD_YES="1"; //重置	
    
	//default password for teller

	public static final String DEFAULTPASSWORD = "88888888";
	
    public static final String HQ_BRANCHID = "999";

}
