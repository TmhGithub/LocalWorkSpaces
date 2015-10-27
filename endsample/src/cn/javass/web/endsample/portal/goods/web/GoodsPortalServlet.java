package cn.javass.web.endsample.portal.goods.web;

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

public class GoodsPortalServlet extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		this.doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		String submitFlag = req.getParameter("submitFlag");
		if("toGoodsView".equals(submitFlag)){
			this.toGoodsView(req, resp);
		}else if("toCart".equals(submitFlag)){
			this.toCart(req, resp);
		}else if("viewCart".equals(submitFlag)){
			this.viewCart(req,resp);
		}
	
	}
	@SuppressWarnings("unchecked")
	private void viewCart(HttpServletRequest req, HttpServletResponse resp)
	throws ServletException, IOException {
		Object obj = req.getSession().getAttribute("MyCart");
		Map<Integer,GoodsModel> map = null;
		List<GoodsModel> list = new ArrayList<GoodsModel>();
		if(obj == null){
			//
		}else{
			map = (Map<Integer,GoodsModel>)obj;
			//得到购物对象的集合
			list = (List<GoodsModel>)map.values();
		}
		
		req.setAttribute("viewCart", list);
		req.getRequestDispatcher("/portal/goods/viewCart.jsp").forward(req, resp);
		
	}
	private void toCart(HttpServletRequest req, HttpServletResponse resp)
	throws ServletException, IOException {
		String uuid = req.getParameter("uuid");
		
		//光存放uuid ，以时间换空间
		//存放model， 以空间换时间
		GoodsModel gm = GoodsFactory.getGoodsEbi().getByUuid(Integer.parseInt(uuid));
		//得到指定名称的当前用户的session的对象
		Object obj = req.getSession().getAttribute("MyCart");
		Map<Integer,GoodsModel> map = null;
		//如果是第一次加入，那么就创建一个新的集合对象进行存储
		if(obj == null){
			map = new HashMap<Integer,GoodsModel>();
		//如果已经存在，那么就强转为集合对象，进行存储
		}else{
			map = (Map<Integer,GoodsModel>)obj;
		}
		map.put(gm.getUuid(), gm);
		//把造好的集合对象存储在指定名称的session里面
		req.getSession().setAttribute("MyCart",map);
		
		this.toGoodsView(req, resp);
	}
	private void toGoodsView(HttpServletRequest req, HttpServletResponse resp)
	throws ServletException, IOException {
		//1
		List<GoodsModel> list = GoodsFactory.getGoodsEbi().getAll();
		//2
		//3:
		req.setAttribute("goodsViewList", list);
		req.getRequestDispatcher("/portal/goods/goodsView.jsp").forward(req,resp);
	}
}
