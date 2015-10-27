package com.cissst.mapping;

import org.hibernate.cfg.Configuration;
import org.hibernate.tool.hbm2ddl.SchemaExport;
/**
 * 生成表的导入工具类
 * @author Administrator
 *
 */
public class TestMapping {
	
	public static void main(String[] args) {
		Configuration configuration=new Configuration().configure();
		SchemaExport export=new SchemaExport(configuration);
		export.create(true, true);
	}

}
