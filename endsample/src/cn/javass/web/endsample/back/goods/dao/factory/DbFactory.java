package cn.javass.web.endsample.back.goods.dao.factory;

import java.util.HashMap;
import cn.javass.web.endsample.back.util.dbutil.DaoConfig;

/**
 * 这是个Db工厂，利用XML配置文件的读取来返回一个实现类，达到了 业务逻辑和数据逻辑的分离，可配置性。
 * 
 * @author tmh
 */
public class DbFactory {

	private static HashMap<?, ?> daoMap = null;

	private DbFactory() {

	}
	/*
	 * 利用jFig加载配置文件（XML形式）
	 */
	public static synchronized void Initial() {
		if (null == daoMap) {
			daoMap = DaoConfig.load();// 根据配置文件加载DAO实现配置
		}
	}

	/*
	 * 根据加载的配置文件来返回对应的实现类
	 */
	@SuppressWarnings("unchecked")
	public static Object getDAO(Class daoInterface) {
		Initial();

		Object dao = daoMap.get(daoInterface);

		if (null == dao) {
			try {
				throw new Exception("No Implemention "
						+ "found of dao interface" + daoInterface.getName());
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return dao;
	}
}
