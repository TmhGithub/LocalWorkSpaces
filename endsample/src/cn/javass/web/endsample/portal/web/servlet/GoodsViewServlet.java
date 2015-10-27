package cn.javass.web.endsample.portal.web.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.javass.web.endsample.back.goods.business.factory.GoodsFactory;
import cn.javass.web.endsample.back.goods.vo.GoodsModel;
import cn.javass.web.endsample.back.goods.vo.GoodsQueryModel;

public class GoodsViewServlet extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		this.doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		String submitFlag = req.getParameter("submitFlag");
		if("toList".equals(submitFlag)){
			this.toList(req, resp,null);
		}else if("query".equals(submitFlag)){
			this.query(req, resp);
		}else if("toCart".equals(submitFlag)){
			this.toCart(req, resp);
		}else if("viewCart".equals(submitFlag)){
			this.viewCart(req, resp);
		}
	}
	private void viewCart(HttpServletRequest req, HttpServletResponse resp)
	throws ServletException, IOException {
		Object obj = req.getSession().getAttribute("MyCart");
		Map<Integer,GoodsModel> map = null;
		Collection<GoodsModel> list = null;
		if(obj==null){
			list = new ArrayList<GoodsModel>();
		}else{
			map = (Map<Integer,GoodsModel>)obj;
			list = map.values();
		}
		
		req.setAttribute("viewMyCart", list);
		req.getRequestDispatcher("/portal/goods/viewCart.jsp").forward(req, resp);
		
	}
	private void toCart(HttpServletRequest req, HttpServletResponse resp)
	throws ServletException, IOException {
		//取到放购物车的数据
		String uuid = req.getParameter("uuid");
		GoodsModel gm = GoodsFactory.getGoodsEbi().getByUuid(Integer.parseInt(uuid));
		
		Object obj = req.getSession().getAttribute("MyCart");
		Map<Integer,GoodsModel> map = null;
		if(obj==null){
			map =  new HashMap<Integer,GoodsModel>();
		}else{
			map = (Map<Integer,GoodsModel>)obj;
		}
		
		map.put(gm.getUuid(),gm);
		
		req.getSession().setAttribute("MyCart", map);
		
	}
	private void query(HttpServletRequest req, HttpServletResponse resp)
	throws ServletException, IOException {
		//1://2:
		GoodsQueryModel gqm = (GoodsQueryModel)req.getAttribute("gqm");
		//3:
		List<GoodsModel> list = GoodsFactory.getGoodsEbi().getByCondition(gqm);
		
		this.toList(req, resp, list);
	}
	private void toList(HttpServletRequest req, HttpServletResponse resp , List<GoodsModel> listValue)
	throws ServletException, IOException {
		
		List<GoodsModel> list = null;
		if(listValue==null){
			list =GoodsFactory.getGoodsEbi().getAll(); 
		}else{
			list = listValue;
		}		
		
		req.setAttribute("listValue", list);
		
		req.getRequestDispatcher("/portal/goods/goodsView.jsp").forward(req, resp);
		
	}
}
