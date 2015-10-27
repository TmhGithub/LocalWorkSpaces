package cn.javass.web.endsample.back.goods.business.factory;

import cn.javass.web.endsample.back.goods.business.ebi.GoodsEbi;
import cn.javass.web.endsample.back.goods.business.ebo.GoodsEbo;

public class GoodsFactory {
	
	private GoodsFactory(){
		
	}
	public static GoodsEbi getGoodsEbi(){
		return new GoodsEbo();
	}
}
