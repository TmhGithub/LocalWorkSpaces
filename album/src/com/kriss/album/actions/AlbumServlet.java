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
			  //得到本WEB应用的绝对路径
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
						//item.getName() 得到上传的文件的原始路径
						//设置照片的原始文件名
						photo.setFileName(StringUtil.getFileName(item.getName()));
						//创建存储上传上来的照片的文件夹路径
					    String storePath = StringUtil.getStoreDir(appPath);
					    //得到一个完整的存储在服务器上的具体位置的文件的全路径（在本WEB应用下）
					    String fileName = storePath+StringUtil.makeFileName(item.getName());
					    //得到存储照片位置的绝对路径
					    String realPath =appPath+"/"+fileName;
					    //完成照片的上传功能（上传到绝对路径处）
						item.write(new File(realPath));
						//得到一个完整的目标路径，存储在服务器上的具体位置的文件的全路径（在本WEB应用下）
						String targetDir = storePath+StringUtil.makeFileName(item.getName());
						//对上传上来的图片进行等比例的缩小和编码，然后存储到指定的位置
						pt.uploadPic(realPath, 400,appPath+"/"+targetDir);
						//设置上传上来的照片的大小
						photo.setSizeStr(StringUtil.getFileSizeStr(new File(appPath+"/"+targetDir).length()));
						new File(realPath).delete();
						//设置上传上来的照片的存储路径（在本WEB应用下）
						photo.setStorePath(targetDir); //  uploadImages/"+getDate("yyyy/MM/dd/")/2012/07/25/dghdfghdg.jpg
					}
				}
				//成功与否的标志位
				boolean isSuccessed = dao.save(photo);
				//重定向到展示照片墙
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
