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
 * @ģ�����ƣ�ExampaperManagerAction(������)
 * @���������ƣ�tmh
 * @�� �ܣ�
 * @����ʱ�䣺2012-8-20
 */
public class ExampaperManagerAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private TbTheme theme = new TbTheme();
	private TbThemeType tbThemeType;
	private TbThemeDifficulty tbThemeDifficulty;
	private TbThemeArea tbThemeArea;
	private TbThemeKey tbThemeKey = new TbThemeKey();             //ֻ���ռ�������
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
	//ajax�ķ�Χ��ѯ
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

	// ajax���ѶȲ�ѯ
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

	// ajax�����Ͳ�ѯ
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

	// ��ת������ҳ��ڶ���
	public String toList() throws Exception {
		// �õ�ҳ�����ύ�Ĳ���
		// ���õ����԰������ռ����ύ�Ĳ���
		// �õ��������Ŀ���
		String randomThemeId = RandomId.generateRandomId();
		theme.setTheId(randomThemeId);
		//������Ŀ������չʾ��ͬ��ҳ��
		String type = theme.getTbThemeType().getThetypeName();
		if("ѡ����".equals(type)){
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

	//����������ѡ��
	public String toaddThemeAnswer() throws Exception{
		return SUCCESS;
	}
	//������ѡ��
	public String addThemeAnswer() throws Exception{
		//������һ����ѡ�𰸱��
		String thekeyId = RandomId.generateAnswerId();
		//�Ȳ鿴ɾ�������ɾ����Ǳ������Ƿ���ڣ����ڣ�ֻ�ǽ��й����������ڣ���ô��Ҫ��������
		String HQL = "from TbDel as tdel where tdel.delId='0'";
		tbDel = (TbDel)exampaperManagerService.findByHQL(HQL);
		//ÿһ�ζ�Ҫ�½�һ����Ŀ�𰸵Ķ��󣬰�ѡ�����ѡ����б���
		TbThemeKey tk = new TbThemeKey();
		tk.setThekeyId(thekeyId);
		//���ͣ�
//		TbThemeType type;
		String tHQL ="from TbThemeType as ttype where ttype.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'"; 
		tbThemeType = (TbThemeType)exampaperManagerService.findByHQL(tHQL);
		//�Ѷȣ�
//		TbThemeDifficulty dif;
		String dHQL ="from TbThemeDifficulty as tdif where tdif.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		tbThemeDifficulty = (TbThemeDifficulty)exampaperManagerService.findByHQL(dHQL);
		//��Χ��TbThemeArea tbThemeArea
//		TbThemeArea area;
		String aHQL ="from TbThemeArea as tarea where tarea.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'"; 
		tbThemeArea = (TbThemeArea)exampaperManagerService.findByHQL(aHQL);
		theme.setTbThemeType(tbThemeType);
		theme.setTbThemeDifficulty(tbThemeDifficulty);
		theme.setTbThemeArea(tbThemeArea);
		
		tk.setTbTheme(theme);
//		tk.setTbDel(tbDel); ��һ�л�������⣨sessionû����֮ǰ����ͬһ����ʾ������
//							��������ʱ��������Ƕ�ױ���ʱ��������������⣬����취��
//							�ڼ������桾������ͬһ���������һ�С����Ժ󣬷ֱ�˳��ȥ����
//							(������->�ֱ�)������ͬһ�������ʾ������һ�С�
		tk.setTheAllkey(tbThemeKey.getTheAllkey());
		exampaperManagerService.save(tk);
		//��˳��ֱ�ȥ������ص���һ��
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
	//��־λ���ж���תҳ��
	private String Flag;
	
	public String getFlag() {
		return Flag;
	}
	public void setFlag(String flag) {
		Flag = flag;
	}
	//�õ����д�
	@SuppressWarnings("unchecked")
	public String getAllAnswer()throws Exception{
		System.out.println(Flag);
		//���ȸ��������Ŀ�������Ŀ������鵽�Ǹ���Ŀ��id
		String HQL1 = "from TbTheme as tt where tt.theId='"+theme.getTheId()+"'";
		TbTheme tbTheme = (TbTheme)exampaperManagerService.findByHQL(HQL1);
		if(tbTheme==null){
			if("add".equals(Flag)){
				return "addAnswer";
			}else if("query".equals(Flag)){
				return "queryAnswer";
			}
		}
		//Ȼ���ٵ���Ŀ�𰸱�����鵽�����Ŀid�ı�ѡ��
		String HQL = "from TbThemeKey as tk where tk.tbTheme.themeId="+tbTheme.getThemeId();
		listKey = (List<TbThemeKey>) exampaperManagerService.findList(HQL);
		if("add".equals(Flag)){
			return "addAnswer";
		}else if("query".equals(Flag)){
			return "queryAnswer";
		}
		return SUCCESS;
	}

	// ɾ����ѡ��deleteTheAnswer
	public String deleteTheAnswer() throws Exception {
		System.out.println(tbThemeKey.getThemeKeyId());
		//���ɾ��������ȷ�𰸣���ô��Ҫ����Ŀ�������ȷ������Ӧ�������Ŀ��ѡ��ı��ɾ��
		//��ͨ����Ŀ�𰸱�ţ��õ�����Ӧ����Ŀ��ȷѡ��ı��
		String HQL = "from TbThemeKey as tk where tk.themeKeyId="+ tbThemeKey.getThemeKeyId();
		TbThemeKey tKey1 = (TbThemeKey)exampaperManagerService.findByHQL(HQL);
		String rightkeyone = tKey1.getThekeyId();
		//Ȼ��鵽�����Ŀ�������Ӧ����Ŀ����ȷ��
		//�ڵ�һ�������Ŀ��ʱ����Ŀ������Ķ�Ӧ��Ŀ��û����ȷ�𰸣�����Ҫ�ж���û����ȷ��
		String HQL1 = "from TbTheme as tt where tt.theId='"+theme.getTheId()+"'";
		TbTheme tbTheme = (TbTheme)exampaperManagerService.findByHQL(HQL1);
		String tRightKey = tbTheme.getTheRightkey();
		if("".equals(tRightKey) && tRightKey.trim().length()!=0){
			//����������ȷ���а����ѡ��ı��ȥ��
			tRightKey = StringUtil.generateRightKey(rightkeyone, tRightKey);
			//������ȷ��
			tbTheme.setTheRightkey(tRightKey);
			//����Ŀ���������������¼
			exampaperManagerService.update(tbTheme);
		}
		//����Ŀ�𰸱�����Ѹ���Ŀ�𰸵�Id����Ӧ�ļ�¼ɾ����
		TbThemeKey tKey = new TbThemeKey();
		tKey.setThemeKeyId(tbThemeKey.getThemeKeyId());
		exampaperManagerService.delete(tKey);
		return this.deleteDisplay();
	}
	@SuppressWarnings("unchecked")
	public String deleteDisplay() throws Exception{
		//���ȸ��������Ŀ�������Ŀ������鵽�Ǹ���Ŀ��id
		String HQL1 = "from TbTheme as tt where tt.theId='"+theme.getTheId()+"'";
		TbTheme tbTheme = (TbTheme)exampaperManagerService.findByHQL(HQL1);
		System.out.println(tbTheme.getThemeId());//����
		//Ȼ���ٵ���Ŀ�𰸱�����鵽�����Ŀid�ı�ѡ��
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
	//�������⼰�������
	public String saveTheme() throws Exception{
		//����һ������Ķ������õ����԰������Ѽ��ˣ�
		//����һ��״̬����
		TbStateflag stateFlag;
		//����״̬���
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='�ѱ���'";
		stateFlag = (TbStateflag)exampaperManagerService.findByHQL(HQL);
		//����һ��ɾ�����
		//����ɾ�����
		String HQL1 = "from TbDel as tdel where tdel.delId='0'";
		tbDel = (TbDel)exampaperManagerService.findByHQL(HQL1);
		stateFlag.setTbDel(tbDel);
		theme.setTbStateflag(stateFlag);
		//¼���ˣ��ӵ�¼ʱ�洢��session��ĵ�¼�˵���Ϣȡֵ����ʵ�֣�
		
		//¼������
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//��������
		String HQL2 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType ttype = (TbThemeType)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeType(ttype);
		//�����Ѷ�
		String HQL3 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty tdif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL3);
		theme.setTbThemeDifficulty(tdif);
		//���淶Χ
		String HQL4 = "from TbThemeArea as ta where ta.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'";
		TbThemeArea tarea = (TbThemeArea)exampaperManagerService.findByHQL(HQL4);
		theme.setTbThemeArea(tarea);		
		//������ȷ��
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
		//ע�⣺�ύ�󣬷���֮ǰһ��Ҫ���ֵջ��������һ�ν�������� ��һ�ε�ֵջ�����ֵ�����ִ���
		theme = null;
		listKey = null;
		return SUCCESS;
	}
	//�ύ���⼰�������
	public String commitTheme() throws Exception{
		TbStateflag stateFlag;
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='���ύ'";
		stateFlag = (TbStateflag)exampaperManagerService.findByHQL(HQL);

		String HQL1 = "from TbDel as tdel where tdel.delId='0'";
		tbDel = (TbDel)exampaperManagerService.findByHQL(HQL1);
		stateFlag.setTbDel(tbDel);
		theme.setTbStateflag(stateFlag);
		// ¼���ˣ��ӵ�¼ʱ�洢��session��ĵ�¼�˵���Ϣȡֵ����ʵ�֣�

		// ¼������
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//��������
		String HQL2 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType ttype = (TbThemeType)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeType(ttype);
		//�����Ѷ�
		String HQL3 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty tdif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL3);
		theme.setTbThemeDifficulty(tdif);
		//���淶Χ
		String HQL4 = "from TbThemeArea as ta where ta.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'";
		TbThemeArea tarea = (TbThemeArea)exampaperManagerService.findByHQL(HQL4);
		theme.setTbThemeArea(tarea);
		// ������ȷ��
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
		//ע�⣺�ύ�󣬷���֮ǰһ��Ҫ���ֵջ��������һ�ν�������� ��һ�ε�ֵջ�����ֵ�����ִ���
		theme = null;
		listKey = null;
		return SUCCESS;
	}
	public String saveQueTheme() throws Exception{
		TbStateflag stateFlag;
		//����״̬���
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='�ѱ���'";
		stateFlag = (TbStateflag)exampaperManagerService.findByHQL(HQL);
		//����һ��ɾ�����
		//����ɾ�����
		String HQL1 = "from TbDel as tdel where tdel.delId='0'";
		tbDel = (TbDel)exampaperManagerService.findByHQL(HQL1);
		stateFlag.setTbDel(tbDel);
		theme.setTbStateflag(stateFlag);
		//¼���ˣ��ӵ�¼ʱ�洢��session��ĵ�¼�˵���Ϣȡֵ����ʵ�֣�
		
		//¼������
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//��������
		String HQL2 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType ttype = (TbThemeType)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeType(ttype);
		//�����Ѷ�
		String HQL3 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty tdif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL3);
		theme.setTbThemeDifficulty(tdif);
		//���淶Χ
		String HQL4 = "from TbThemeArea as ta where ta.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'";
		TbThemeArea tarea = (TbThemeArea)exampaperManagerService.findByHQL(HQL4);
		theme.setTbThemeArea(tarea);
		//������ȷ��
		//	���԰������ռ���
		exampaperManagerService.save(theme);
		//ע�⣺�ύ�󣬷���֮ǰһ��Ҫ���ֵջ��������һ�ν�������� ��һ�ε�ֵջ�����ֵ�����ִ���
		theme = null;
		listKey = null;
		return SUCCESS;	
	}
	public String commitQueTheme() throws Exception{
		TbStateflag stateFlag;
		//����״̬���
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='���ύ'";
		stateFlag = (TbStateflag)exampaperManagerService.findByHQL(HQL);
		//����һ��ɾ�����
		//����ɾ�����
		String HQL1 = "from TbDel as tdel where tdel.delId='0'";
		tbDel = (TbDel)exampaperManagerService.findByHQL(HQL1);
		stateFlag.setTbDel(tbDel);
		theme.setTbStateflag(stateFlag);
		//¼���ˣ��ӵ�¼ʱ�洢��session��ĵ�¼�˵���Ϣȡֵ����ʵ�֣�
		
		//¼������
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//��������
		String HQL2 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType ttype = (TbThemeType)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeType(ttype);
		//�����Ѷ�
		String HQL3 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty tdif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL3);
		theme.setTbThemeDifficulty(tdif);
		//���淶Χ
		String HQL4 = "from TbThemeArea as ta where ta.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'";
		TbThemeArea tarea = (TbThemeArea)exampaperManagerService.findByHQL(HQL4);
		theme.setTbThemeArea(tarea);
		//������ȷ��
		//	���԰������ռ���
		exampaperManagerService.save(theme);
		//ע�⣺�ύ�󣬷���֮ǰһ��Ҫ���ֵջ��������һ�ν�������� ��һ�ε�ֵջ�����ֵ�����ִ���
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
	//����pagerBean
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
	//������������Ŀ�������Ϣ(����ҳ)
	@SuppressWarnings("unchecked")
	public String queryTheTheme()throws Exception{
		System.out.println(Flag);
		String HQL="from TbTheme as tt where 1=1 "; 
		String hql = this.generateHQL(HQL);
		//���������
		String RHQL="select count(*) as cnt from TbTheme as tt where 1=1 ";
		String rhql=this.generateHQL(RHQL);
		System.out.println("rhql:"+rhql);
		int totalRows = exampaperManagerService.findAllCount(rhql);
//		HttpServletRequest hsr = ServletActionContext.getRequest();
//		pager = PagerHelper.getPager(hsr, totalRows);
		//����pageBean
		pagerBean = new PagerBean(totalRows);
		System.out.println(currentPage);//����
		pagerBean.setCurrentPage(currentPage);
		System.out.println(pagerBean.toString());
		qlist = (List<TbTheme>) exampaperManagerService.findWithPage(pagerBean.getStartRow(),pagerBean.getPageSize(), hql);
		System.out.println("ssssss:"+theme.toString());//����
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
	//����id�ŵõ�������Ŀ��״̬��ǲ�ͬ�����ز�ͬ��ҳ�棬Ȼ��Ե�����Ŀ����ά��
	@SuppressWarnings("unchecked")
	public String toTheDisplay() throws Exception{
		int themeId = theme.getThemeId();
		System.out.println(themeId);
		theme = (TbTheme)exampaperManagerService.getByOne(theme,themeId);
		//���ַ�����ʽ����ȷ����Ϣ�������ַ���������
		String bufrightkey = theme.getTheRightkey();
		theRightkey = bufrightkey.split(",");
		//�����Ŀ�𰸵������Ϣ
		String theId = theme.getTheId();
		String HQL = "from TbThemeKey as tk where tk.tbTheme.theId='"+theId+"'";
		listKey= (List<TbThemeKey>)exampaperManagerService.findList(HQL);
		//��������Ŀ�������Ϣ
		String HQL1 = "from TbThemeAuditing as ta where ta.tbTheme.themeId="+themeId;
		themeAud = (TbThemeAuditing)exampaperManagerService.findByHQL(HQL1);
		if("��ͨ��".equals(theme.getTbStateflag().getStateFlag())){
			return "tomaintain";
		}else{
			return "tocheck";
		}
	}
	//����id�ŵõ�������Ŀ,Ȼ��������
	@SuppressWarnings("unchecked")
	public String toAudDisplay() throws Exception{
		int themeId = theme.getThemeId();
		System.out.println(themeId);
		String HQL = "from TbTheme as tt where tt.themeId="+themeId;
		theme = (TbTheme)exampaperManagerService.findByHQL(HQL);
		System.out.println("###########:"+theme.toString());
		//���ַ�����ʽ����ȷ����Ϣ�������ַ���������
		String bufrightkey = theme.getTheRightkey();
		theRightkey = bufrightkey.split(",");
		
		String HQL1 = "from TbThemeKey as tk where tk.tbTheme.themeId="+themeId;
		listKey= (List<TbThemeKey>)exampaperManagerService.findList(HQL1);
		return SUCCESS;
	}
	//����id�ŵõ�������Ŀ��Ȼ����г���
	@SuppressWarnings("unchecked")
	public String toCancleDisplay() throws Exception{
		int themeId = theme.getThemeId();
		theme = (TbTheme)exampaperManagerService.getByOne(theme,themeId);
		System.out.println("***************:"+theme.toString());
		//�����Ŀ�𰸵������Ϣ
		String theId = theme.getTheId();
		//���ַ�����ʽ����ȷ����Ϣ�������ַ���������
		String bufrightkey = theme.getTheRightkey();
		theRightkey = bufrightkey.split(",");
		String HQL = "from TbThemeKey as tk where tk.tbTheme.theId='"+theId+"'";
		listKey= (List<TbThemeKey>)exampaperManagerService.findList(HQL);
		//��������Ŀ�������Ϣ
		String HQL1 = "from TbThemeAuditing as ta where ta.tbTheme.themeId="+themeId;
		themeAud = (TbThemeAuditing)exampaperManagerService.findByHQL(HQL1);
		//������Ŀ�����ͣ���ת����ͬ�ĳ���ҳ��
		String typeName = theme.getTbThemeType().getThetypeName();
		System.out.println(typeName);
		if("ѡ����".equals(typeName)){
			return "toChoice";
		}else{
			return SUCCESS;
		}
		
	}
	//ɾ����Ŀ
	public String deleteTheme() throws Exception{
		exampaperManagerService.delete(theme);
		theme = null;
		return SUCCESS;
	}
	//������Ŀ
	public String themeUpdateSave() throws Exception{
		//�޸ı�־λ
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='�ѱ���'";
		TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL);
		theme.setTbStateflag(tsf);
		//����¼������
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//���·�Χ���Ѷ�
		String HQL1 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType themeType = (TbThemeType)exampaperManagerService.findByHQL(HQL1);
		theme.setTbThemeType(themeType);
		String HQL2 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty themeDif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeDifficulty(themeDif);
		//������ȷ��
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
		//���ֵջ��������ֵ
		theme = null;
		//ֻ�С���ͨ��������Ŀ���ܱ���ˣ����ѱ��桯����Ŀ���ܱ����
		//��������Ŀ����˽��(���ж������Ŀ��û�б����)
		if(themeAud==null){
			return SUCCESS;
		}
		exampaperManagerService.delete(themeAud);
		return SUCCESS;
	}
	//������Ŀ���ύ
	public String themeUpdateCommit() throws Exception{
		//�޸ı�־λ
		String HQL = "from TbStateflag as tsf where tsf.stateFlag='���ύ'";
		TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL);
		theme.setTbStateflag(tsf);
		//����¼������
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		theme.setTheIndate(date);
		//���·�Χ���Ѷ�
		String HQL1 = "from TbThemeType as tt where tt.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'";
		TbThemeType themeType = (TbThemeType)exampaperManagerService.findByHQL(HQL1);
		theme.setTbThemeType(themeType);
		String HQL2 = "from TbThemeDifficulty as td where td.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'";
		TbThemeDifficulty themeDif = (TbThemeDifficulty)exampaperManagerService.findByHQL(HQL2);
		theme.setTbThemeDifficulty(themeDif);
		//������ȷ��
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
		//���ֵջ��������ֵ
		theme = null;
		//ֻ�С���ͨ��������Ŀ���ܱ���ˣ����ѱ��桯����Ŀ���ܱ����
		//��������Ŀ����˽��(���ж������Ŀ��û�б����)
		if(themeAud==null){
			return SUCCESS;
		}
		exampaperManagerService.delete(themeAud);
		return SUCCESS;
	}
	//��Ŀ��˵�ͨ��
	public String audTheme() throws Exception{
		//�����ж������Ŀ����˱�����治����
		int themeId = theme.getThemeId();
		String HQL = "from TbThemeAuditing as taud where taud.tbTheme.themeId="+themeId;
		TbThemeAuditing taud = (TbThemeAuditing)exampaperManagerService.findByHQL(HQL);
		if(taud == null){
			//�������Ŀ��˱����治���ڣ���ô��ȥ���һ����¼
			//����һ���µ���Ŀ��˶���
			TbThemeAuditing themeAuditing = new TbThemeAuditing();
			//����������
			themeAuditing.setAudIdea(themeAud.getAudIdea());
			//������˱��
			themeAuditing.setAudId(RandomId.generateRandomId());
			//������˽��
			themeAuditing.setAudResult("��ͨ��");
			//��ӱ���˵���Ŀ
			themeAuditing.setTbTheme(theme);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String date = sdf.format(new Date());
			//�����������
			themeAuditing.setAutDate(date);
			//����ˣ��ӵ�¼ʱ�洢��session�������˵���Ϣȡֵ����ʵ�֣�
			
			//����ɾ�����
			String HQL1 = "from TbDel as tdel where tdel.delTbId=0";
			TbDel tdel = (TbDel)exampaperManagerService.findByHQL(HQL1);
			themeAuditing.setTbDel(tdel);
			exampaperManagerService.save(themeAuditing);
			//�޸���Ŀ�������״̬��־λ
			theme = (TbTheme)exampaperManagerService.getByOne(theme, themeId);
			String HQL2 = "from TbStateflag as tsf where tsf.stateFlag='��ͨ��'";
			TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL2);
			theme.setTbStateflag(tsf);
			exampaperManagerService.update(theme);
		}else{
			//�������������¼���޸���˽��
			if("�Ѿܾ�".equals(taud.getAudResult())){
				taud.setAudResult("��ͨ��");
				taud.setAudIdea(themeAud.getAudIdea());
				exampaperManagerService.update(taud);
				//�޸���Ŀ�������״̬��־λ
				theme = (TbTheme)exampaperManagerService.getByOne(theme, themeId);
				String HQL3 = "from TbStateflag as tsf where tsf.stateFlag='��ͨ��'";
				TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL3);
				theme.setTbStateflag(tsf);
				exampaperManagerService.update(theme);
			}
		}
		//���ֵջ��������ֵ
		theme = null;
		return SUCCESS;
	}
	//��Ŀ��˵ľܾ�
	public String audThemeRe() throws Exception{
		//�����ж������Ŀ����˱�����治����
		int themeId = theme.getThemeId();
		String HQL = "from TbThemeAuditing as taud where taud.tbTheme.themeId="+themeId;
		TbThemeAuditing taud = (TbThemeAuditing)exampaperManagerService.findByHQL(HQL);
		if(taud == null){
			//�������Ŀ��˱����治���ڣ���ô��ȥ���һ����¼
			//����һ���µ���Ŀ��˶���
			TbThemeAuditing themeAuditing = new TbThemeAuditing();
			//����������
			themeAuditing.setAudIdea(themeAud.getAudIdea());
			//������˱��
			themeAuditing.setAudId(RandomId.generateRandomId());
			//������˽��
			themeAuditing.setAudResult("�Ѿܾ�");
			//��ӱ���˵���Ŀ
			themeAuditing.setTbTheme(theme);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String date = sdf.format(new Date());
			//�����������
			themeAuditing.setAutDate(date);
			//����ˣ��ӵ�¼ʱ�洢��session�������˵���Ϣȡֵ����ʵ�֣�
			
			//����ɾ�����
			String HQL1 = "from TbDel as tdel where tdel.delTbId=0";
			TbDel tdel = (TbDel)exampaperManagerService.findByHQL(HQL1);
			themeAuditing.setTbDel(tdel);
			exampaperManagerService.save(themeAuditing);
			//�޸���Ŀ�������״̬��־λ
			theme = (TbTheme)exampaperManagerService.getByOne(theme, themeId);
			String HQL2 = "from TbStateflag as tsf where tsf.stateFlag='�Ѿܾ�'";
			TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL2);
			theme.setTbStateflag(tsf);
			exampaperManagerService.update(theme);
		}else{
			//�������������¼���޸���˽��
			if("��ͨ��".equals(taud.getAudResult())){
				taud.setAudResult("�Ѿܾ�");
				taud.setAudIdea(themeAud.getAudIdea());
				exampaperManagerService.update(taud);
				//�޸���Ŀ�������״̬��־λ
				theme = (TbTheme)exampaperManagerService.getByOne(theme, themeId);
				String HQL3 = "from TbStateflag as tsf where tsf.stateFlag='�Ѿܾ�'";
				TbStateflag tsf = (TbStateflag)exampaperManagerService.findByHQL(HQL3);
				theme.setTbStateflag(tsf);
				exampaperManagerService.update(theme);
			}
		}
		//���ֵջ��������ֵ
		theme = null;
		return SUCCESS;
	}
	//��Ŀ����
	public String cancleTheme() throws Exception{
		int themeId = theme.getThemeId();
		//������Ŀ��Id����Ŀ����������ȥ�鿴�����Ŀ�Ƿ����
		String HQL = "from TbThemeRemove as tr where tr.tbTheme.themeId="+themeId;
		TbThemeRemove tr = (TbThemeRemove)exampaperManagerService.findByHQL(HQL);
		if(tr==null){
			//�������Ŀ��������û�������Ŀ��Id����Ӧ������ô��ȥ��Ŀ������������������Ŀ���󣬲��޸������Ŀ��״̬���
			tr = new TbThemeRemove();
			tr.setTbTheme(theme);
			exampaperManagerService.save(tr);
			//��״̬��Ǳ������ҵ����ѳ��������״̬��Ƕ��󣬲��޸������Ŀ��״̬���
			String HQL1 = "from TbStateflag as tf where tf.stateFlag='�ѳ���'";
			TbStateflag tbStateFlag = (TbStateflag)exampaperManagerService.findByHQL(HQL1);
			theme.setTbStateflag(tbStateFlag);
			exampaperManagerService.update(theme);
			exampaperManagerService.save(tr);
			//���ֵջ��������ֵ
			theme = null;
		}else{
			//�������Ŀ���������������Ŀ��Id����Ӧ����,��ֱ�ӷ���
			//���ֵջ��������ֵ
			theme = null;
		}
		return SUCCESS;
	}
	public String toBack() throws Exception{
		//���ֵջ��������ֵ
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
			//��Ϊ�ڵ�һ�������Ŀ�𰸵�ʱ���Ѿ������İ���Ŀ��ӵ����ݿ�����ȥ�ˣ����Դ�ʱ����ʱ��
			//Ҫȥ��Ŀ������ɾ�������Ŀ����Ϊû�ж���Ŀ���С����桯���ߡ��ύ��,������Ŀ�����治Ӧ�ó���������¼��
			String HQL = "from TbTheme as tt where tt.theId='"+theme.getTheId()+"'";
			TbTheme tt = (TbTheme)exampaperManagerService.findByHQL(HQL);
			exampaperManagerService.delete(tt);
			//���ֵջ��������ֵ
			theme = null;
			listKey = null;
			return "toadd";
		}
	}
	//�жϲ�ѯ�����ķ�����ȷ����ѯ����(�˸�)����Ϣ
	private String generateHQL(String HQL){
		StringBuffer hql = new StringBuffer(HQL);
		if(theme.getTheId() != null && theme.getTheId().trim().length()>0){
			hql.append(" and tt.theId='"+theme.getTheId().trim()+"'");
		}if(theme.getTbUser() != null){
			if(theme.getTbUser().getUserName() != null && theme.getTbUser().getUserName().trim().length()>0){
				hql.append(" and tt.tbUser.userName='"+theme.getTbUser().getUserName().trim()+"'");
			}
		}if(theme.getTbThemeArea().getTheareaName() != null && theme.getTbThemeArea().getTheareaName().trim().length()>0){
			if("ȫ��".equals(theme.getTbThemeArea().getTheareaName())){
				hql.append(" and 1=1 ");
			}else{
				hql.append(" and tt.tbThemeArea.theareaName='"+theme.getTbThemeArea().getTheareaName()+"'");
			}
		}if(theme.getTbThemeType().getThetypeName() != null && theme.getTbThemeType().getThetypeName().trim().length()>0){
			if("ȫ��".equals(theme.getTbThemeType().getThetypeName())){
				hql.append(" and 1=1 ");
			}else{
				hql.append(" and tt.tbThemeType.thetypeName='"+theme.getTbThemeType().getThetypeName()+"'");
			}
		}if(theme.getTbThemeDifficulty().getThedifName() != null && theme.getTbThemeDifficulty().getThedifName().trim().length()>0){
			if("ȫ��".equals(theme.getTbThemeDifficulty().getThedifName())){
				hql.append(" and 1=1 ");
			}else{
				hql.append(" and tt.tbThemeDifficulty.thedifName='"+theme.getTbThemeDifficulty().getThedifName()+"'");
			}
		}if(theme.getTbStateflag() != null){
			if(theme.getTbStateflag().getStateFlag() != null && theme.getTbStateflag().getStateFlag().trim().length()>0){
				if("ȫ��".equals(theme.getTbStateflag().getStateFlag())){
					hql.append(" and 1=1 ");
				}else{
					hql.append(" and tt.tbStateflag.stateFlag='"+theme.getTbStateflag().getStateFlag()+"'");
				}
			}	
		}if(theIndate1 != null && theIndate1.trim().length()>0){
			hql.append(" and to_date(tt.theIndate,'yyyy-mm-dd') >= to_date('"+theIndate1.trim()+"','yyyy-mm-dd') " );//�д���ȶ�����ڣ�
		}if(theIndate2 != null && theIndate2.trim().length()>0){
			hql.append(" and to_date(tt.theIndate,'yyyy-mm-dd') < to_date('"+theIndate2.trim()+"','yyyy-mm-dd') ");//�д���ȶ�����ڣ�
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
