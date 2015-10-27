package cn.javass.web.endsample.back.goods.web.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.javass.web.endsample.back.goods.business.factory.GoodsFactory;
import cn.javass.web.endsample.back.goods.vo.GoodsModel;
import cn.javass.web.endsample.back.goods.vo.GoodsQueryModel;

public class GoodsServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		this.doPost(req, resp);
	}
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		String submitFlag = req.getParameter("submitFlag");
		if("add".equals(submitFlag)){
			this.add(req, resp);
		}else if("toList".equals(submitFlag)){
			this.toList(req, resp,null);
		}else if("toUpdate".equals(submitFlag)){
			this.toUpdate(req, resp);
		}else if("update".equals(submitFlag)){
			this.update(req, resp);
		}else if("query".equals(submitFlag)){
			this.query(req, resp);
		}
	}
	private void query(HttpServletRequest req, HttpServletResponse resp)
	throws ServletException, IOException {
		//1://2
		GoodsQueryModel gqm = (GoodsQueryModel)req.getAttribute("gqm");
		//3:
		List<GoodsModel> list = GoodsFactory.getGoodsEbi().getByCondition(gqm);
		//4:
		this.toList(req, resp, list);
	}
	private void update(HttpServletRequest req, HttpServletResponse resp)
	throws ServletException, IOException {
		//1//2
		GoodsModel gm = (GoodsModel)req.getAttribute("updateGm");
		//3:
		GoodsFactory.getGoodsEbi().update(gm);
		//4:
		this.toList(req, resp,null);
	}
	private void toUpdate(HttpServletRequest req, HttpServletResponse resp)
	throws ServletException, IOException {
		//1
		String uuid = req.getParameter("uuid");
		GoodsModel gm = GoodsFactory.getGoodsEbi().getByUuid(Integer.parseInt(uuid));
		
		req.setAttribute("updateModel",gm);
		req.getRequestDispatcher("/back/goods/update.jsp").forward(req, resp);
	}
	
	private void toList(HttpServletRequest req, HttpServletResponse resp,List<GoodsModel> listValue)
	throws ServletException, IOException {
		
		List<GoodsModel> list = null;
		if(listValue != null){
			list = listValue;
		}else{
			list = GoodsFactory.getGoodsEbi().getAll();
		}
		req.setAttribute("listValue", list);
		
		req.getRequestDispatcher("/back/goods/list.jsp").forward(req, resp);
		
	}
	private void add(HttpServletRequest req, HttpServletResponse resp)
	throws ServletException, IOException {
		//1://2:
		GoodsModel gm = (GoodsModel)req.getAttribute("addGm");		
		//3:
		GoodsFactory.getGoodsEbi().create(gm);
		//4:
		this.toList(req, resp,null);
	}

}
