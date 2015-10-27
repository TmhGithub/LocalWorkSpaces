package cn.javass.web.endsample.back.util.dbutil;

public class ClassToolKit {
	@SuppressWarnings("unchecked")
	public static Class loadClass(String className)
			throws ClassNotFoundException {

		Class cls = null;
		try {
			// 首先尝试用当前ClassLoader加载
			cls = Thread.currentThread().getContextClassLoader().loadClass(
					className);
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (cls == null) {
			// 如果通过当前ClassLoader加载失败，使用系统ClassLoader加载
			cls = Class.forName(className);
		}
		return cls;
	}

}
