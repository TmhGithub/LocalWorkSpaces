package com.cissst.action;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import com.cissst.entity.TbDel;
import com.cissst.entity.TbStateflag;
import com.cissst.entity.TbTheme;
import com.cissst.entity.TbThemeArea;
import com.cissst.entity.TbThemeAuditing;
import com.cissst.entity.TbThemeDifficulty;
import com.cissst.entity.TbThemeKey;
import com.cissst.entity.TbThemeRemove;
import com.cissst.entity.TbThemeType;
import com.cissst.entity.TbUser;
import com.cissst.service.ExampaperManagerService;
import com.cissst.utils.PagerBean;
import com.cissst.utils.RandomId;
import com.cissst.utils.StringUtil;
import com.opensymphony.xwork2.ActionSupport;
/**
 * @模块名称：ExampaperManagerAction(题库管理)
 * @开发人名称：tmh
 * @功 能：
 * @开发时间：2012-8-20
 */
public class ExampaperManagerAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private TbTheme theme = new TbTheme();
	private TbThemeType tbThemeType;
	private TbThemeDifficulty tbThemeDifficulty;
	private TbThemeArea tbThemeArea;
	private TbThemeKey tbThemeKey = new TbThemeKey();             //只做收集参数用
	private TbThemeRemove tbThemeRemove = new TbThemeRemove();
	private ExampaperManagerService exampaperManagerService;

	public ExampaperManagerService getExampaperManagerService() {
		return exampaperManagerService;
	}

	public void setExampaperManagerService(
			ExampaperManagerService exampaperManagerService) {
		this.exampaperManagerService = exampaperManagerService;
	}

	private Object[] ajaxResultArea;
	private Object[] ajaxResultType;
	private Object[] ajaxResultDif;
	//ajax的范围查询
	@SuppressWarnings("unchecked")
	public String ajaxQueryArea() throws Exception {
		String HQL = "select new TbThemeArea(ta.theareaName) from TbThemeArea as ta";
		List<TbThemeArea> list = (List<TbThemeArea>)exampaperManagerService.findList(HQL);
		for (TbThemeArea tbThemeArea : list) {
			System.out.println(tbThemeArea.toString());
		}
		ajaxResultArea = list.toArray();
		return SUCCESS;
	}

	// ajax的难度查询
	@SuppressWarnings("unchecked")
	public String ajaxQueryDifficulty() throws Exception {
		String HQL = "select new TbThemeDifficulty(td.thedifName) from TbThemeDifficulty as td";
		List<TbThemeDifficulty> list = (List<TbThemeDifficulty>)exampaperManagerService.findList(HQL);
		for (TbThemeDifficulty tbThemeDif : list) {
			System.out.println(tbThemeDif.toString());
		}
		ajaxResultDif = list.toArray();
		return SUCCESS;
	}

	// ajax的类型查询
	@SuppressWarnings("unchecked")
	public String ajaxQueryType() throws Exception {
		String HQL = "select new TbThemeType(tt.thetypeName) from TbThemeType as tt";
		List<TbThemeType> list = (List<TbThemeType>)exampaperManagerService.findList(HQL);
		for (TbThemeType tbThemeType : list) {
			System.out.println(tbThemeType.toString());
		}
		ajaxResultType = list.toArray();
		return SUCCESS;
	}

	// 跳转到新增页面第二步
	public String toList() throws Exception {
		// 得到页面上提交的参数
		// 设置的属性帮我们收集了提交的参数
		// 得到随机的题目编号
		String randomThemeId = RandomId.generateRandomId();
		theme.setTheId(randomThemeId);
		//根据题目的类型展示不同的页面
		String type = theme.getTbThemeType().getThetypeName();
		if("选择题".equals(type)){
			return "toChoice";
		}else{
			return "toText";
		}
	}
	private TbDel tbDel;
	
	public TbDel getTbDel() {
		return tbDel;
	}
	public void setTbDel(TbDel tbDel) {
		this.tbDel = tbDel;
	}

	//跳到新增备选答案
	public String toaddThemeAnswer() throws Exception{
		return SUCCESS;
	}
	//新增备选答案
	public String addThemeAnswer() throws Exception{
		//随机获得一个备选答案编号
		String thekeyId = RandomId.generateAnswerId();
		//先查看删除标记在删除标记表里面是否存在？存在，只是进行关联；不存在，那么就要级联保存
		String HQL = "from TbDel as tdel where tdel.delId='0'";
		tbDel = (TbDel)exampaperManagerService.findByHQL(HQL);
		//每一次都要新建一个题目答案的对象，把选择题的选项进行保存
		TbThemeKey tk = new TbThemeKey();
		tk.setThekeyId(thekeyId);
		//类型：
//		TbThemeType type;
		String tHQL ="from TbThemeType as ttype where ttype.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'"; 
		tbThemeType = (TbThemeType)exampaperManagerService.findByHQL(tHQL);
		//难度：
//		TbThemeDifficulty dif;
		String dHQL ="from TbThemeDifficulty as tdif where tdif.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		tbThemeDifficulty = (TbThemeDifficulty)exampaperManagerService.findByHQL(dHQL);
		//范围：TbThemeArea tbThemeArea
//		TbThemeArea area;
		String aHQL ="from TbThemeArea as tarea where tarea.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'"; 
		tbThemeArea = (TbThemeArea)exampaperManagerService.findByHQL(aHQL);
		theme.setTbThemeType(tbThemeType);
		theme.setTbThemeDifficulty(tbThemeDifficulty);
		theme.setTbThemeArea(tbThemeArea);
		
		tk.setTbTheme(theme);
//		tk.setTbDel(tbDel); 这一行会出现问题（session没结束之前关联同一个标示符对象）
//							级联保存时（即就是嵌套保存时）会出现上述问题，解决办法：
//							在级联保存【不包含同一个对象的这一列】完以后，分别按顺序去更新
//							(按主表->字表)含有这同一个对象标示符的这一列。
		tk.setTheAllkey(tbThemeKey.getTheAllkey());
		exampaperManagerService.save(tk);
		//按顺序分别去保存相关的这一列
		theme.setTbDel(tbDel);
		exampaperManagerService.update(theme);
		tk.setTbDel(tbDel);
		exampaperManagerService.update(tk);
		return SUCCESS;
	}
	
	private List<TbThemeKey> listKey;
	
	public List<TbThemeKey> getListKey() {
		return listKey;
	}
	//标志位，判断跳转页面
	private String Flag;
	
	public String getFlag() {
		return Flag;
	}
	public void setFlag(String flag) {
		Flag = flag;
	}
	//得到所有答案
	@SuppressWarnings("unchecked")
	public String getAllAnswer()throws Exception{
		System.out.println(Flag);
		//首先根据这个题目编号在题目表里面查到那个题目的id
		String HQL1 = "from TbTheme as tt where tt.theId='"+theme.getTheId()+"'";
		TbTheme tbTheme = (TbTheme)exampaperManagerService.findByHQL(HQL1);
		if(tbTheme==null){
			if("add".equals(Flag)){
				return "addAnswer";
			}else if("query".equals(Flag)){
				return "queryAnswer";
			}
		}
		//然后再到题目答案表里面查到这个题目id的备选答案
		String HQL = "from TbThemeKey as tk where tk.tbTheme.themeId="+tbTheme.getThemeId();
		listKey = (List<TbThemeKey>) exampaperManagerService.findList(HQL);
		if("add".equals(Flag)){
			return "addAnswer";
		}else if("query".equals(Flag)){
			return "queryAnswer";
		}
		return SUCCESS;
	}

	// 删除备选答案deleteTheAnswer
	public String deleteTheAnswer() throws Exception {
		System.out.println(tbThemeKey.getThemeKeyId());
		//如果删除的是正确答案，那么就要在题目表里把正确答案所对应的这个题目答案选项的编号删除
		//先通过题目答案编号，拿到所对应的题目正确选项的编号
		String HQL = "from TbThemeKey as tk where tk.themeKeyId="+ tbThemeKey.getThemeKeyId();
		TbThemeKey tKey1 = (TbThemeKey)exampaperManagerService.findByHQL(HQL);
		String rightkeyone = tKey1.getThekeyId();
		//然后查到这个题目编号所对应的题目的正确答案
		//在第一次添加题目答案时，题目表里面的对应题目还没有正确答案，所以要判断有没有正确答案
		String HQL1 = "from TbTheme as tt where tt.theId='"+theme.getTheId()+"'";
		TbTheme tbTheme = (TbTheme)exampaperManagerService.findByHQL(HQL1);
		String tRightKey = tbTheme.getTheRightkey();
		if("".equals(tRightKey) && tRightKey.trim().length()!=0){
			//最后在这个正确答案中把这个选项的编号去掉
			tRightKey = StringUtil.generateRightKey(rightkeyone, tRightKey);
			//更新正确答案
			tbTheme.setTheRightkey(tRightKey);
			//在题目表里面更新这条记录
			exampaperManagerService.update(tbTheme);
		}
		//到题目答案表里面把该题目答案的Id所对应的记录删除掉
		TbThemeKey tKey = new TbThemeKey();
		tKey.setThemeKeyId(tbThemeKey.getThemeKeyId());
		exampaperManagerService.delete(tKey);
		return this.deleteDisplay();
	}
	@SuppressWarnings("unchecked")
	public String deleteDisplay() throws Exception{
		//首先根据这个题目编号在题目表里面查到那个题目的id
		String HQL1 = "from TbTheme as tt where tt.theId='"+theme.getTheId()+"'";
		TbTheme tbTheme = (TbTheme)exampaperManagerService.findByHQL(HQL1);
		System.out.println(tbTheme.getThemeId());//测试
		//然后再到题目答案表里面查到这个题目id的备选答案
		String HQL = "from TbThemeKey as tk where tk.tbTheme.themeId="+tbTheme.getThemeId();
		listKey = (List<TbThemeKey>) exampaperManagerService.findList(HQL);
		System.out.println(Flag);
		if("add".equals(Flag)){
			return "addAnswer";
		}else if("query".equals(Flag)){
			return "queryAnswer";
		}
		return SUCCESS;
	}
	private String [] theRightkey;
	public String[] getTheRightkey() {
		return theRightkey;
	}

	public void setTheRightkey(String[] theRightkey) {
		this.theRightkey = theRightkey;
	}
	//保存试题及相关内容
	public String saveTheme() throws Exception{
		//构造一个试题的对象（设置的属性帮我们搜集了）
		//构造一个状态对象
		TbStateflag stateFlag;
		//保存状态标记
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='已保存'";
		stateFlag = (TbStateflag)exampaperManagerService.findByHQL(HQL);
		//构造一个删除标记
		//保存删除标记
		String HQL1 = "from TbDel as tdel where tdel.delId='0'";
		tbDel = (TbDel)exampaperManagerService.findByHQL(HQL1);
		stateFlag.setTbDel(tbDel);
		theme.setTbStateflag(stateFlag);
		//录入人，从登录时存储在session里的登录人的信息取值（待实现）
		
		//录入日期
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//保存类型
		String HQL2 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType ttype = (TbThemeType)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeType(ttype);
		//保存难度
		String HQL3 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty tdif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL3);
		theme.setTbThemeDifficulty(tdif);
		//保存范围
		String HQL4 = "from TbThemeArea as ta where ta.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'";
		TbThemeArea tarea = (TbThemeArea)exampaperManagerService.findByHQL(HQL4);
		theme.setTbThemeArea(tarea);		
		//保存正确答案
		for (int i = 0; i < theRightkey.length; i++) {
			System.out.println(theRightkey[i]);
		}
		String rightKey = "";
		StringBuffer sbuf = new StringBuffer(rightKey);
		for(int i = 0;i<theRightkey.length;i++){
			sbuf.append(theRightkey[i]);
			if(i!=theRightkey.length-1){
				sbuf.append(",");
			}
		}
		rightKey = sbuf.toString();
		theme.setTheRightkey(rightKey);
		exampaperManagerService.save(theme);
		//注意：提交后，返回之前一定要清空值栈，否则下一次进来会带上 上一次的值栈里面的值而出现错误
		theme = null;
		listKey = null;
		return SUCCESS;
	}
	//提交试题及相关类容
	public String commitTheme() throws Exception{
		TbStateflag stateFlag;
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='已提交'";
		stateFlag = (TbStateflag)exampaperManagerService.findByHQL(HQL);

		String HQL1 = "from TbDel as tdel where tdel.delId='0'";
		tbDel = (TbDel)exampaperManagerService.findByHQL(HQL1);
		stateFlag.setTbDel(tbDel);
		theme.setTbStateflag(stateFlag);
		// 录入人，从登录时存储在session里的登录人的信息取值（待实现）

		// 录入日期
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//保存类型
		String HQL2 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType ttype = (TbThemeType)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeType(ttype);
		//保存难度
		String HQL3 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty tdif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL3);
		theme.setTbThemeDifficulty(tdif);
		//保存范围
		String HQL4 = "from TbThemeArea as ta where ta.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'";
		TbThemeArea tarea = (TbThemeArea)exampaperManagerService.findByHQL(HQL4);
		theme.setTbThemeArea(tarea);
		// 保存正确答案
		for (int i = 0; i < theRightkey.length; i++) {
			System.out.println(theRightkey[i]);
		}
		String rightKey = "";
		StringBuffer sbuf = new StringBuffer(rightKey);
		for (int i = 0; i < theRightkey.length; i++) {
			sbuf.append(theRightkey[i]);
			if (i != theRightkey.length - 1) {
				sbuf.append(",");
			}
		}
		rightKey = sbuf.toString();
		theme.setTheRightkey(rightKey);
		exampaperManagerService.save(theme);
		//注意：提交后，返回之前一定要清空值栈，否则下一次进来会带上 上一次的值栈里面的值而出现错误
		theme = null;
		listKey = null;
		return SUCCESS;
	}
	public String saveQueTheme() throws Exception{
		TbStateflag stateFlag;
		//保存状态标记
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='已保存'";
		stateFlag = (TbStateflag)exampaperManagerService.findByHQL(HQL);
		//构造一个删除标记
		//保存删除标记
		String HQL1 = "from TbDel as tdel where tdel.delId='0'";
		tbDel = (TbDel)exampaperManagerService.findByHQL(HQL1);
		stateFlag.setTbDel(tbDel);
		theme.setTbStateflag(stateFlag);
		//录入人，从登录时存储在session里的登录人的信息取值（待实现）
		
		//录入日期
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//保存类型
		String HQL2 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType ttype = (TbThemeType)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeType(ttype);
		//保存难度
		String HQL3 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty tdif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL3);
		theme.setTbThemeDifficulty(tdif);
		//保存范围
		String HQL4 = "from TbThemeArea as ta where ta.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'";
		TbThemeArea tarea = (TbThemeArea)exampaperManagerService.findByHQL(HQL4);
		theme.setTbThemeArea(tarea);
		//保存正确答案
		//	属性帮我们收集了
		exampaperManagerService.save(theme);
		//注意：提交后，返回之前一定要清空值栈，否则下一次进来会带上 上一次的值栈里面的值而出现错误
		theme = null;
		listKey = null;
		return SUCCESS;	
	}
	public String commitQueTheme() throws Exception{
		TbStateflag stateFlag;
		//保存状态标记
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='已提交'";
		stateFlag = (TbStateflag)exampaperManagerService.findByHQL(HQL);
		//构造一个删除标记
		//保存删除标记
		String HQL1 = "from TbDel as tdel where tdel.delId='0'";
		tbDel = (TbDel)exampaperManagerService.findByHQL(HQL1);
		stateFlag.setTbDel(tbDel);
		theme.setTbStateflag(stateFlag);
		//录入人，从登录时存储在session里的登录人的信息取值（待实现）
		
		//录入日期
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//保存类型
		String HQL2 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType ttype = (TbThemeType)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeType(ttype);
		//保存难度
		String HQL3 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty tdif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL3);
		theme.setTbThemeDifficulty(tdif);
		//保存范围
		String HQL4 = "from TbThemeArea as ta where ta.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'";
		TbThemeArea tarea = (TbThemeArea)exampaperManagerService.findByHQL(HQL4);
		theme.setTbThemeArea(tarea);
		//保存正确答案
		//	属性帮我们收集了
		exampaperManagerService.save(theme);
		//注意：提交后，返回之前一定要清空值栈，否则下一次进来会带上 上一次的值栈里面的值而出现错误
		theme = null;
		listKey = null;
		return SUCCESS;	
	}
	private String theIndate1;
	private String theIndate2;
	
	public String getTheIndate1() {
		return theIndate1;
	}
	public void setTheIndate1(String theIndate1) {
		this.theIndate1 = theIndate1;
	}
	public String getTheIndate2() {
		return theIndate2;
	}
	public void setTheIndate2(String theIndate2) {
		this.theIndate2 = theIndate2;
	}
	
	List<TbTheme> qlist;
	
	public List<TbTheme> getQlist() {
		return qlist;
	}
	//构造pagerBean
	private PagerBean pagerBean;
	
	public PagerBean getPagerBean() {
		return pagerBean;
	}
	public void setPagerBean(PagerBean pagerBean) {
		this.pagerBean = pagerBean;
	}

	private int currentPage;
	
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	private TbUser tbUser;
	public TbUser getTbUser() {
		return tbUser;
	}

	public void setTbUser(TbUser tbUser) {
		this.tbUser = tbUser;
	}
	//按条件查找题目的相关信息(带翻页)
	@SuppressWarnings("unchecked")
	public String queryTheTheme()throws Exception{
		System.out.println(Flag);
		String HQL="from TbTheme as tt where 1=1 "; 
		String hql = this.generateHQL(HQL);
		//算出总行数
		String RHQL="select count(*) as cnt from TbTheme as tt where 1=1 ";
		String rhql=this.generateHQL(RHQL);
		System.out.println("rhql:"+rhql);
		int totalRows = exampaperManagerService.findAllCount(rhql);
//		HttpServletRequest hsr = ServletActionContext.getRequest();
//		pager = PagerHelper.getPager(hsr, totalRows);
		//构造pageBean
		pagerBean = new PagerBean(totalRows);
		System.out.println(currentPage);//测试
		pagerBean.setCurrentPage(currentPage);
		System.out.println(pagerBean.toString());
		qlist = (List<TbTheme>) exampaperManagerService.findWithPage(pagerBean.getStartRow(),pagerBean.getPageSize(), hql);
		System.out.println("ssssss:"+theme.toString());//测试
		if("tocancel".equals(Flag)){
			return "tocancel";
		}else if("toquery".equals(Flag)){
			return "toquery";
		}
		else{
			return "toaudit";
		}
	}
	private TbThemeAuditing themeAud;
	
	public TbThemeAuditing getThemeAud() {
		return themeAud;
	}
	public void setThemeAud(TbThemeAuditing themeAud) {
		this.themeAud = themeAud;
	}
	//根据id号得到单个题目，状态标记不同，返回不同的页面，然后对单个题目进行维护
	@SuppressWarnings("unchecked")
	public String toTheDisplay() throws Exception{
		int themeId = theme.getThemeId();
		System.out.println(themeId);
		theme = (TbTheme)exampaperManagerService.getByOne(theme,themeId);
		//把字符串形式的正确答案信息解析成字符串的数组
		String bufrightkey = theme.getTheRightkey();
		theRightkey = bufrightkey.split(",");
		//查出题目答案的相关信息
		String theId = theme.getTheId();
		String HQL = "from TbThemeKey as tk where tk.tbTheme.theId='"+theId+"'";
		listKey= (List<TbThemeKey>)exampaperManagerService.findList(HQL);
		//查出审核题目的相关信息
		String HQL1 = "from TbThemeAuditing as ta where ta.tbTheme.themeId="+themeId;
		themeAud = (TbThemeAuditing)exampaperManagerService.findByHQL(HQL1);
		if("已通过".equals(theme.getTbStateflag().getStateFlag())){
			return "tomaintain";
		}else{
			return "tocheck";
		}
	}
	//根据id号得到单个题目,然后进行审核
	@SuppressWarnings("unchecked")
	public String toAudDisplay() throws Exception{
		int themeId = theme.getThemeId();
		System.out.println(themeId);
		String HQL = "from TbTheme as tt where tt.themeId="+themeId;
		theme = (TbTheme)exampaperManagerService.findByHQL(HQL);
		System.out.println("###########:"+theme.toString());
		//把字符串形式的正确答案信息解析成字符串的数组
		String bufrightkey = theme.getTheRightkey();
		theRightkey = bufrightkey.split(",");
		
		String HQL1 = "from TbThemeKey as tk where tk.tbTheme.themeId="+themeId;
		listKey= (List<TbThemeKey>)exampaperManagerService.findList(HQL1);
		return SUCCESS;
	}
	//根据id号得到单个题目，然后进行撤销
	@SuppressWarnings("unchecked")
	public String toCancleDisplay() throws Exception{
		int themeId = theme.getThemeId();
		theme = (TbTheme)exampaperManagerService.getByOne(theme,themeId);
		System.out.println("***************:"+theme.toString());
		//查出题目答案的相关信息
		String theId = theme.getTheId();
		//把字符串形式的正确答案信息解析成字符串的数组
		String bufrightkey = theme.getTheRightkey();
		theRightkey = bufrightkey.split(",");
		String HQL = "from TbThemeKey as tk where tk.tbTheme.theId='"+theId+"'";
		listKey= (List<TbThemeKey>)exampaperManagerService.findList(HQL);
		//查出审核题目的相关信息
		String HQL1 = "from TbThemeAuditing as ta where ta.tbTheme.themeId="+themeId;
		themeAud = (TbThemeAuditing)exampaperManagerService.findByHQL(HQL1);
		//根据题目的类型，跳转到不同的撤销页面
		String typeName = theme.getTbThemeType().getThetypeName();
		System.out.println(typeName);
		if("选择题".equals(typeName)){
			return "toChoice";
		}else{
			return SUCCESS;
		}
		
	}
	//删除题目
	public String deleteTheme() throws Exception{
		exampaperManagerService.delete(theme);
		theme = null;
		return SUCCESS;
	}
	//更新题目
	public String themeUpdateSave() throws Exception{
		//修改标志位
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='已保存'";
		TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL);
		theme.setTbStateflag(tsf);
		//更新录入日期
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//更新范围和难度
		String HQL1 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType themeType = (TbThemeType)exampaperManagerService.findByHQL(HQL1);
		theme.setTbThemeType(themeType);
		String HQL2 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty themeDif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeDifficulty(themeDif);
		//更新正确答案
		String rightKey = "";
		StringBuffer sbuf = new StringBuffer(rightKey);
		for(int i = 0;i<theRightkey.length;i++){
			sbuf.append(theRightkey[i]);
			if(i!=theRightkey.length-1){
				sbuf.append(",");
			}
		}
		rightKey = sbuf.toString();
		theme.setTheRightkey(rightKey);
		exampaperManagerService.update(theme);
		//清空值栈里面的相关值
		theme = null;
		//只有‘已通过’的题目才能被审核，‘已保存’的题目不能被审核
		//清空这个题目的审核结果(先判断这个题目有没有被审核)
		if(themeAud==null){
			return SUCCESS;
		}
		exampaperManagerService.delete(themeAud);
		return SUCCESS;
	}
	//更新题目并提交
	public String themeUpdateCommit() throws Exception{
		//修改标志位
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='已提交'";
		TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL);
		theme.setTbStateflag(tsf);
		//更新录入日期
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//更新范围和难度
		String HQL1 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType themeType = (TbThemeType)exampaperManagerService.findByHQL(HQL1);
		theme.setTbThemeType(themeType);
		String HQL2 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty themeDif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeDifficulty(themeDif);
		//更新正确答案
		String rightKey = "";
		StringBuffer sbuf = new StringBuffer(rightKey);
		for(int i = 0;i<theRightkey.length;i++){
			sbuf.append(theRightkey[i]);
			if(i!=theRightkey.length-1){
				sbuf.append(",");
			}
		}
		rightKey = sbuf.toString();
		theme.setTheRightkey(rightKey);
		exampaperManagerService.update(theme);
		//清空值栈里面的相关值
		theme = null;
		//只有‘已通过’的题目才能被审核，‘已保存’的题目不能被审核
		//清空这个题目的审核结果(先判断这个题目有没有被审核)
		if(themeAud==null){
			return SUCCESS;
		}
		exampaperManagerService.delete(themeAud);
		return SUCCESS;
	}
	//题目审核的通过
	public String audTheme() throws Exception{
		//首先判断这个题目在审核表里面存不存在
		int themeId = theme.getThemeId();
		String HQL = "from TbThemeAuditing as taud where taud.tbTheme.themeId="+themeId;
		TbThemeAuditing taud = (TbThemeAuditing)exampaperManagerService.findByHQL(HQL);
		if(taud == null){
			//如果在题目审核表里面不存在，那么就去添加一条记录
			//构造一个新的题目审核对象
			TbThemeAuditing themeAuditing = new TbThemeAuditing();
			//设置审核意见
			themeAuditing.setAudIdea(themeAud.getAudIdea());
			//设置审核编号
			themeAuditing.setAudId(RandomId.generateRandomId());
			//设置审核结果
			themeAuditing.setAudResult("已通过");
			//添加被审核的题目
			themeAuditing.setTbTheme(theme);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String date = sdf.format(new Date());
			//设置审核日期
			themeAuditing.setAutDate(date);
			//审核人，从登录时存储在session里的审核人的信息取值（待实现）
			
			//设置删除标记
			String HQL1 = "from TbDel as tdel where tdel.delTbId=0";
			TbDel tdel = (TbDel)exampaperManagerService.findByHQL(HQL1);
			themeAuditing.setTbDel(tdel);
			exampaperManagerService.save(themeAuditing);
			//修改题目表里面的状态标志位
			theme = (TbTheme)exampaperManagerService.getByOne(theme, themeId);
			String HQL2 = "from TbStateflag as tsf where tsf.stateFlag='已通过'";
			TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL2);
			theme.setTbStateflag(tsf);
			exampaperManagerService.update(theme);
		}else{
			//否则存在这条记录，修改审核结果
			if("已拒绝".equals(taud.getAudResult())){
				taud.setAudResult("已通过");
				taud.setAudIdea(themeAud.getAudIdea());
				exampaperManagerService.update(taud);
				//修改题目表里面的状态标志位
				theme = (TbTheme)exampaperManagerService.getByOne(theme, themeId);
				String HQL3 = "from TbStateflag as tsf where tsf.stateFlag='已通过'";
				TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL3);
				theme.setTbStateflag(tsf);
				exampaperManagerService.update(theme);
			}
		}
		//清空值栈里面的相关值
		theme = null;
		return SUCCESS;
	}
	//题目审核的拒绝
	public String audThemeRe() throws Exception{
		//首先判断这个题目在审核表里面存不存在
		int themeId = theme.getThemeId();
		String HQL = "from TbThemeAuditing as taud where taud.tbTheme.themeId="+themeId;
		TbThemeAuditing taud = (TbThemeAuditing)exampaperManagerService.findByHQL(HQL);
		if(taud == null){
			//如果在题目审核表里面不存在，那么就去添加一条记录
			//构造一个新的题目审核对象
			TbThemeAuditing themeAuditing = new TbThemeAuditing();
			//设置审核意见
			themeAuditing.setAudIdea(themeAud.getAudIdea());
			//设置审核编号
			themeAuditing.setAudId(RandomId.generateRandomId());
			//设置审核结果
			themeAuditing.setAudResult("已拒绝");
			//添加被审核的题目
			themeAuditing.setTbTheme(theme);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String date = sdf.format(new Date());
			//设置审核日期
			themeAuditing.setAutDate(date);
			//审核人，从登录时存储在session里的审核人的信息取值（待实现）
			
			//设置删除标记
			String HQL1 = "from TbDel as tdel where tdel.delTbId=0";
			TbDel tdel = (TbDel)exampaperManagerService.findByHQL(HQL1);
			themeAuditing.setTbDel(tdel);
			exampaperManagerService.save(themeAuditing);
			//修改题目表里面的状态标志位
			theme = (TbTheme)exampaperManagerService.getByOne(theme, themeId);
			String HQL2 = "from TbStateflag as tsf where tsf.stateFlag='已拒绝'";
			TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL2);
			theme.setTbStateflag(tsf);
			exampaperManagerService.update(theme);
		}else{
			//否则存在这条记录，修改审核结果
			if("已通过".equals(taud.getAudResult())){
				taud.setAudResult("已拒绝");
				taud.setAudIdea(themeAud.getAudIdea());
				exampaperManagerService.update(taud);
				//修改题目表里面的状态标志位
				theme = (TbTheme)exampaperManagerService.getByOne(theme, themeId);
				String HQL3 = "from TbStateflag as tsf where tsf.stateFlag='已拒绝'";
				TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL3);
				theme.setTbStateflag(tsf);
				exampaperManagerService.update(theme);
			}
		}
		//清空值栈里面的相关值
		theme = null;
		return SUCCESS;
	}
	//题目撤销
	public String cancleTheme() throws Exception{
		int themeId = theme.getThemeId();
		//根据题目的Id到题目撤销表里面去查看这个题目是否存在
		String HQL = "from TbThemeRemove as tr where tr.tbTheme.themeId="+themeId;
		TbThemeRemove tr = (TbThemeRemove)exampaperManagerService.findByHQL(HQL);
		if(tr==null){
			//如果在题目撤销表里没有这个题目的Id所对应对象，那么就去题目撤销表里面添加这个题目对象，并修改这个题目的状态标记
			tr = new TbThemeRemove();
			tr.setTbTheme(theme);
			exampaperManagerService.save(tr);
			//在状态标记表里面找到‘已撤销’这个状态标记对象，并修改这个题目的状态标记
			String HQL1 = "from TbStateflag as tf where tf.stateFlag='已撤销'";
			TbStateflag tbStateFlag = (TbStateflag)exampaperManagerService.findByHQL(HQL1);
			theme.setTbStateflag(tbStateFlag);
			exampaperManagerService.update(theme);
			exampaperManagerService.save(tr);
			//清空值栈里面的相关值
			theme = null;
		}else{
			//如果在题目撤销表里有这个题目的Id所对应对象,则直接返回
			//清空值栈里面的相关值
			theme = null;
		}
		return SUCCESS;
	}
	public String toBack() throws Exception{
		//清空值栈里面的相关值
		if("tocancel".equals(Flag)){
			theme = null;
			return "tocancel";
		}else if("toaudit".equals(Flag)){
			theme = null;
			return "toaudit";
		}else if("toquery".equals(Flag)){
			theme = null;
			return "toquery";
		}else{
			//因为在第一次添加题目答案的时候已经级联的把题目添加到数据库里面去了，所以此时返回时，
			//要去题目表里面删除这个题目（因为没有对题目进行‘保存’或者‘提交’,所以题目表里面不应该出现这条记录）
			String HQL = "from TbTheme as tt where tt.theId='"+theme.getTheId()+"'";
			TbTheme tt = (TbTheme)exampaperManagerService.findByHQL(HQL);
			exampaperManagerService.delete(tt);
			//清空值栈里面的相关值
			theme = null;
			listKey = null;
			return "toadd";
		}
	}
	//判断查询条件的方法，确定查询条件(八个)的信息
	private String generateHQL(String HQL){
		StringBuffer hql = new StringBuffer(HQL);
		if(theme.getTheId() != null && theme.getTheId().trim().length()>0){
			hql.append(" and tt.theId='"+theme.getTheId().trim()+"'");
		}if(theme.getTbUser() != null){
			if(theme.getTbUser().getUserName() != null && theme.getTbUser().getUserName().trim().length()>0){
				hql.append(" and tt.tbUser.userName='"+theme.getTbUser().getUserName().trim()+"'");
			}
		}if(theme.getTbThemeArea().getTheareaName() != null && theme.getTbThemeArea().getTheareaName().trim().length()>0){
			if("全部".equals(theme.getTbThemeArea().getTheareaName())){
				hql.append(" and 1=1 ");
			}else{
				hql.append(" and tt.tbThemeArea.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'");
			}
		}if(theme.getTbThemeType().getThetypeName() != null && theme.getTbThemeType().getThetypeName().trim().length()>0){
			if("全部".equals(theme.getTbThemeType().getThetypeName())){
				hql.append(" and 1=1 ");
			}else{
				hql.append(" and tt.tbThemeType.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'");
			}
		}if(theme.getTbThemeDifficulty().getThedifName() != null && theme.getTbThemeDifficulty().getThedifName().trim().length()>0){
			if("全部".equals(theme.getTbThemeDifficulty().getThedifName())){
				hql.append(" and 1=1 ");
			}else{
				hql.append(" and tt.tbThemeDifficulty.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'");
			}
		}if(theme.getTbStateflag() != null){
			if(theme.getTbStateflag().getStateFlag() != null && theme.getTbStateflag().getStateFlag().trim().length()>0){
				if("全部".equals(theme.getTbStateflag().getStateFlag())){
					hql.append(" and 1=1 ");
				}else{
					hql.append(" and tt.tbStateflag.stateFlag='"+theme.getTbStateflag().getStateFlag()+"'");
				}
			}	
		}if(theIndate1 != null && theIndate1.trim().length()>0){
			hql.append(" and to_date(tt.theIndate,'yyyy-mm-dd') >= to_date('"+theIndate1.trim()+"','yyyy-mm-dd') " );//有待商榷（日期）
		}if(theIndate2 != null && theIndate2.trim().length()>0){
			hql.append(" and to_date(tt.theIndate,'yyyy-mm-dd') < to_date('"+theIndate2.trim()+"','yyyy-mm-dd') ");//有待商榷（日期）
		}
		return hql.toString();
	}
	public TbTheme getTheme() {
		return theme;
	}

	public void setTheme(TbTheme theme) {
		this.theme = theme;
	}

	public TbThemeDifficulty getTbThemeDifficulty() {
		return tbThemeDifficulty;
	}

	public void setTbThemeDifficulty(TbThemeDifficulty tbThemeDifficulty) {
		this.tbThemeDifficulty = tbThemeDifficulty;
	}

	public TbThemeArea getTbThemeArea() {
		return tbThemeArea;
	}

	public void setTbThemeArea(TbThemeArea tbThemeArea) {
		this.tbThemeArea = tbThemeArea;
	}

	public TbThemeKey getTbThemeKey() {
		return tbThemeKey;
	}

	public void setTbThemeKey(TbThemeKey tbThemeKey) {
		this.tbThemeKey = tbThemeKey;
	}

	public TbThemeRemove getTbThemeRemove() {
		return tbThemeRemove;
	}

	public void setTbThemeRemove(TbThemeRemove tbThemeRemove) {
		this.tbThemeRemove = tbThemeRemove;
	}

	public Object[] getAjaxResultArea() {
		return ajaxResultArea;
	}

	public void setAjaxResultArea(Object[] ajaxResultArea) {
		this.ajaxResultArea = ajaxResultArea;
	}

	public Object[] getAjaxResultType() {
		return ajaxResultType;
	}

	public void setAjaxResultType(Object[] ajaxResultType) {
		this.ajaxResultType = ajaxResultType;
	}

	public Object[] getAjaxResultDif() {
		return ajaxResultDif;
	}

	public void setAjaxResultDif(Object[] ajaxResultDif) {
		this.ajaxResultDif = ajaxResultDif;
	}

	public TbThemeType getTbThemeType() {
		return tbThemeType;
	}

	public void setTbThemeType(TbThemeType tbThemeType) {
		this.tbThemeType = tbThemeType;
	}
}
