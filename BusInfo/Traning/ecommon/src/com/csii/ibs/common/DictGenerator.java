package com.csii.ibs.common;


import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Date;
import java.util.Iterator;
import java.util.Properties;
import java.util.TreeSet;
/**
 * Insert the type's description here.
 * Creation date: (2001-11-26 9:56:23)
 * @author: David Zheng,Lawrence Dai
 */
public class DictGenerator {
	static java.util.HashMap keys = new java.util.HashMap();
	static java.util.HashMap comments = new java.util.HashMap();

	/**
	 * DictGenerator constructor comment.
	 */
	public DictGenerator() {
		super();
	}
	/**
	 * Generates a dictionary class from a properties-file
	 * Creation date: (2002-8-29 18:16:57)
	 * @param args java.lang.String[]
	 */
	public static void main(String[] args) {
		//FileProperties fp = new FileProperties("/dictionary_zh_CN.properties");
		Properties fp = new KeyCheckProperties();
		String fileName = "/config/msg/dictionary_zh_CN.properties";
		String targetName = "Dict.java";
		try {
			// fetch properties from file.
			InputStream in = DictGenerator.class.getResourceAsStream(fileName);
			fp.load(in);
			in.close();

			// find the target java file.
			String dictName = "/" + DictGenerator.class.getName().replace('.', '/');
			dictName = dictName.substring(0, dictName.lastIndexOf('/') + 1);
			dictName += targetName;

			java.net.URL outUrl = DictGenerator.class.getResource(dictName);
			String realPath = URLDecoder.decode(outUrl.getFile());

			PrintWriter prt = new PrintWriter(new OutputStreamWriter(new java.io.FileOutputStream(realPath),"UTF-8"));

			prt.println("package com.csii.ibs.custom.core;");
			prt.println("/**");
			prt.println(" * Insert the type's description here.");
			prt.println(" * Creation date: (" + new Date() + ")");
			prt.println(" * @author: Auto Generated");
			prt.println(" */");
			prt.println("public class Dict {");

			java.util.Set set = new TreeSet(fp.keySet());

			for (Iterator i = set.iterator(); i.hasNext();) {
				String name = (String)i.next();
				String value = fp.getProperty(name);

				//skip index type name. Lawrence Dai 2002/11/4
				if (name.indexOf('[') == -1 && name.indexOf(']') == -1) {
					StringBuffer buffer = new StringBuffer("    public static final String ");
					buffer.append(name.toUpperCase());
					buffer.append("=\"").append(name).append("\";");

					int chars = 20 - buffer.length() % 20;

					buffer.append(nchar(' ', chars));

					String comment = new String(value.getBytes("8859_1"),"UTF-8");
					buffer.append("//").append(comment);
                    if(!name.equals("茂禄驴"))
                    	prt.println(buffer);
				}
			}
			prt.println("}");

			prt.flush();
			prt.close();

			System.out.println("finished dictionary generation.\njava file:" + dictName + "\nproperties:" + fileName);

			if (keys.size() > 0) {
				System.err.println("[WARN] --- Found " + keys.size() + " duplicate key.");
				for (java.util.Iterator i = keys.entrySet().iterator(); i.hasNext();) {
					java.util.Map.Entry entry = (java.util.Map.Entry)i.next();
					System.err.println(entry.getKey() + " = " + entry.getValue());
				}
			}

			if (comments.size() > 0) {
				System.err.println("[WARN] --- Found " + comments.size() + "duplidate comment.");
				for (java.util.Iterator i = comments.entrySet().iterator(); i.hasNext();) {
					java.util.Map.Entry entry = (java.util.Map.Entry)i.next();
					System.err.println(entry.getKey() + " = " + entry.getValue());
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private static StringBuffer nchar(char c, int n) {
		StringBuffer b = new StringBuffer();
		for (int i = 0; i < n; i++)
			b.append(c);
		return b;
	}

	protected static class KeyCheckProperties extends Properties {

		public Object put(Object key, Object value) {
			String valStr = null;
			try {
				valStr = new String(((String)value).getBytes("8859_1"),"UTF-8").trim();
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
			if (super.containsKey(key)) {
				java.util.List l = (java.util.List)keys.get(key);
				if (l == null) {
					l = new java.util.ArrayList();
					keys.put(key, l);
					try {
						String valStr0 = new String(((String)get(key)).getBytes("8859_1"),"UTF-8");
						l.add(valStr0);
					} catch (UnsupportedEncodingException e) {
						e.printStackTrace();
					}
				}
				l.add(valStr);
			}
			if (super.containsValue(valStr)) {
				java.util.List l = (java.util.List)comments.get(valStr);
				if (l == null) {
					l = new java.util.ArrayList();
					comments.put(valStr, l);

					Object keyStr0 = null;
					for (java.util.Iterator i = this.entrySet().iterator(); i.hasNext();) {
						java.util.Map.Entry entry = (java.util.Map.Entry)i.next();
						if (entry.getValue().equals(value)) {
							keyStr0 = entry.getKey();
						}
					}
					l.add(keyStr0);

				}
				l.add(key);
			}

			return super.put(key, value);
		}

	}
}