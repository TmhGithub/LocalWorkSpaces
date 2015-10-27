package cn.javass.web.endsample.back.util.dbutil;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Properties;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.igfay.jfig.JFig;
import org.igfay.jfig.JFigIF;
import org.igfay.jfig.JFigLocator;

public class DaoConfig {
	private  static Logger logger = LogManager.getLogger(DaoConfig.class);
	private static final String DAO_CONFIG_FILE = "dao.xml";
	private static final String DAO_CONFIG_SECTION = "DAO";

	@SuppressWarnings("unchecked")
	public static synchronized HashMap<?, ?> load() {
		HashMap map = new HashMap();

		JFigLocator jfigLocator = new JFigLocator(DAO_CONFIG_FILE);
		JFigIF daoConfig = JFig.getInstance(jfigLocator);
		Properties prop = daoConfig.getSectionAsProperties(DAO_CONFIG_SECTION);

		Enumeration enumSection = prop.keys();
		while (enumSection.hasMoreElements()) {
			String daoIface = (String) enumSection.nextElement();
			String daoImpl = prop.getProperty(daoIface);
			try {
				Class iface = ClassToolKit.loadClass(daoIface);
				Class impl = ClassToolKit.loadClass(daoImpl);
				// 将接口作为HashMap索引，实现类作为值
				map.put(iface, impl);
			} catch (ClassNotFoundException e) {
				logger.debug("No Class Found" + e);
			}
		}// while enumSection
		return map;

	}
}
