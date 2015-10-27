package cn.javass.web.endsample.back.goods.business.ebo;

import java.util.List;

import cn.javass.web.endsample.back.goods.business.ebi.GoodsEbi;
import cn.javass.web.endsample.back.goods.dao.factory.DbFactory;
import cn.javass.web.endsample.back.goods.vo.GoodsModel;
import cn.javass.web.endsample.back.goods.vo.GoodsQueryModel;

public class GoodsEbo implements GoodsEbi{
	/*
	 * 这个方法相当于一个代理类，把在业务逻辑的方法中得到实现类的对象拿出来，达到解耦
	 * 这个就相当于Spring的Ioc/DI的思想，利用代理来管理对象
	 */
	public static GoodsEbi getGoodsDaoProxy(){
		final GoodsEbi gEbo = ((GoodsEbi) DbFactory.getDAO(GoodsEbi.class));
		return gEbo; 
	}
	@Override
	public void create(GoodsModel gm) {
		//为了在业务逻辑中完全剔除关于数据逻辑层
		//的调用，利用代理类来处理，返回一个接口
		//类型的实现类，达到业务逻辑和数据逻辑的完全解耦
		//((GoodsEbi) DbFactory.getDAO(GoodsEbi.class)).create(gm);
		GoodsEbo.getGoodsDaoProxy().create(gm);
	}

	@Override
	public void update(GoodsModel gm) {
		GoodsEbo.getGoodsDaoProxy().update(gm);
		
	}

	@Override
	public void delete(int uuid) {
		GoodsEbo.getGoodsDaoProxy().delete(uuid);
		
	}

	@Override
	public GoodsModel getByUuid(int uuid) {
		return GoodsEbo.getGoodsDaoProxy().getByUuid(uuid);
	}

	@Override
	public List<GoodsModel> getAll() {
		return GoodsEbo.getGoodsDaoProxy().getAll();
	}

	@Override
	public List<GoodsModel> getByCondition(GoodsQueryModel gqm) {
		return GoodsEbo.getGoodsDaoProxy().getByCondition(gqm);
	}

}
