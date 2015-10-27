package cn.javass.web.endsample.back.goods.business.ebi;

import java.util.List;

import cn.javass.web.endsample.back.goods.vo.GoodsModel;
import cn.javass.web.endsample.back.goods.vo.GoodsQueryModel;

public interface GoodsEbi {
	public void create(GoodsModel gm);
	public void update(GoodsModel gm);
	public void delete(int uuid);
	
	public GoodsModel getByUuid(int uuid);
	public List<GoodsModel> getAll();
	public List<GoodsModel> getByCondition(GoodsQueryModel gqm);
}
