package com.kriss.album.actions;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.kriss.album.dao.PhotoDAO;
import com.kriss.album.util.PicTools;
import com.kriss.album.util.StringUtil;
import com.kriss.album.vo.Photo;

public class AlbumServlet extends HttpServlet {

	private static final long serialVersionUID = -2858805623643824399L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
                 this.doPost(request, response);
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		  request.setCharacterEncoding("UTF-8");
          String m =request.getParameter("m");
          PhotoDAO  dao =new PhotoDAO();
          
          
		  if("upload".equals(m)){
			  PicTools pt =new PicTools();
			  //�õ���WEBӦ�õľ���·��
			  String appPath = this.getServletContext().getRealPath("/");
			  DiskFileItemFactory factory = new DiskFileItemFactory();
			  
			  factory.setSizeThreshold(1024*1024*4);
			  factory.setRepository(new File("c:\\temp"));
			  
			  ServletFileUpload upload = new ServletFileUpload(factory);
			  upload.setSizeMax(1024*1024*20);
			  Photo  photo=new Photo();
			  try {
				List<FileItem> items = upload.parseRequest(request);
				
				for (FileItem item : items) {
					if("title".equals(item.getFieldName())){
						photo.setTitle(item.getString());
					}else if("type".equals(item.getFieldName())){
						photo.setType(item.getString());
					}else if("pic".equals(item.getFieldName())){
						//item.getName() �õ��ϴ����ļ���ԭʼ·��
						//������Ƭ��ԭʼ�ļ���
						photo.setFileName(StringUtil.getFileName(item.getName()));
						//�����洢�ϴ���������Ƭ���ļ���·��
					    String storePath = StringUtil.getStoreDir(appPath);
					    //�õ�һ�������Ĵ洢�ڷ������ϵľ���λ�õ��ļ���ȫ·�����ڱ�WEBӦ���£�
					    String fileName = storePath+StringUtil.makeFileName(item.getName());
					    //�õ��洢��Ƭλ�õľ���·��
					    String realPath =appPath+"/"+fileName;
					    //�����Ƭ���ϴ����ܣ��ϴ�������·������
						item.write(new File(realPath));
						//�õ�һ��������Ŀ��·�����洢�ڷ������ϵľ���λ�õ��ļ���ȫ·�����ڱ�WEBӦ���£�
						String targetDir = storePath+StringUtil.makeFileName(item.getName());
						//���ϴ�������ͼƬ���еȱ�������С�ͱ��룬Ȼ��洢��ָ����λ��
						pt.uploadPic(realPath, 400,appPath+"/"+targetDir);
						//�����ϴ���������Ƭ�Ĵ�С
						photo.setSizeStr(StringUtil.getFileSizeStr(new File(appPath+"/"+targetDir).length()));
						new File(realPath).delete();
						//�����ϴ���������Ƭ�Ĵ洢·�����ڱ�WEBӦ���£�
						photo.setStorePath(targetDir); //  uploadImages/"+getDate("yyyy/MM/dd/")/2012/07/25/dghdfghdg.jpg
					}
				}
				//�ɹ����ı�־λ
				boolean isSuccessed = dao.save(photo);
				//�ض���չʾ��Ƭǽ
				response.sendRedirect("album?m=list");
			} catch (FileUploadException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			} 
		  }else if("list".equals(m)){
			  String type = request.getParameter("type");
			  List  ls = dao.gatPotosByType(type);
			  request.setAttribute("ls", ls);
			  request.getRequestDispatcher("index.jsp").forward(request, response); 
		  }
	}
}
