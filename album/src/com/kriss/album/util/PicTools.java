package com.kriss.album.util;

import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import javax.imageio.ImageIO;

import com.sun.image.codec.jpeg.ImageFormatException;
import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGImageEncoder;

public class PicTools {

	Random random=new Random();
	/**
	 * 
	 * @param source
	 * @param width
	 * @param targetDir
	 */
	public void  uploadPic(String source,int width,String targetDir){
		
		String newurl=null;
		try {
			File file = new File(source);        //����ղ��ϴ����ļ�
		    newurl=targetDir; 
		    //�µ�����ͼ�����ַ
			Image src = ImageIO.read(file);     //����Image����
			float tagsize=width;
			int old_w=src.getWidth(null);       //�õ�Դͼ��
			int old_h=src.getHeight(null);    //�õ�Դͼ��
			
			int new_w=0;
			int new_h=0;   
			
			int tempsize;
			
			float tempdouble; 
			
			if(old_w>old_h){
			 tempdouble=old_w/tagsize;
			}else{
			 tempdouble=old_h/tagsize;
			}
			
			new_w=Math.round(old_w/tempdouble);
			new_h=Math.round(old_h/tempdouble);//������ͼ����
			
			
			BufferedImage tag = new BufferedImage(new_w,new_h,BufferedImage.TYPE_BYTE_GRAY);
			
			tag.getGraphics().drawImage(src,0,0,new_w,new_h,null); 
			
			//������С���ͼ
			FileOutputStream newimage=new FileOutputStream(newurl);
			//������ļ���
			JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(newimage);       
			encoder.encode(tag);                                               //��JPEG����
			newimage.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (ImageFormatException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}    
	}
}
