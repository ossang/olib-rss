package com.olib.rss.upload.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import com.olib.rss.upload.enums.FilePathType;

@Service
public class FileUploadService implements InitializingBean{

	@Override
	public void afterPropertiesSet() throws Exception {
		createDirectory(FilePathType.ROOT_PATH.toString());		
		createDirectory(FilePathType.IMG_PATH.toString());		
	}
	
	public String generateFileName(String fileName) {
		StringBuffer sb = new StringBuffer();
		sb.append(fileName);
		sb.append("_");
		sb.append(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss")));
		return sb.toString();
	}
	
	public String store(String path, MultipartFile file) throws Exception {
		String fileName = generateFileName(file.getOriginalFilename());
		Files.copy(file.getInputStream(), Paths.get(path).resolve(fileName));
		return fileName; 
	}
	
	public String store(String path, String fileName, MultipartFile file) throws Exception {
		Files.copy(file.getInputStream(), Paths.get(path).resolve(fileName));
		return fileName;
	}
	
	public Resource loadFile(String path,String filename) throws Exception {
		Path file = Paths.get(path).resolve(filename);
		Resource resource = new UrlResource(file.toUri());
		if (resource.exists() || resource.isReadable()) {
			return resource;
		} else {
			throw new RuntimeException("FAIL!");
		}
	}
	
	public void deleteAll(String path) {
		FileSystemUtils.deleteRecursively(Paths.get(path).toFile());
	}
	
	public void createDirectory(String dir) throws Exception{
		Path path = Paths.get(dir);
		Resource resource = new UrlResource(path.toUri());
		if(!resource.exists()) {
			Files.createDirectory(path);
		}
	}
	
}
