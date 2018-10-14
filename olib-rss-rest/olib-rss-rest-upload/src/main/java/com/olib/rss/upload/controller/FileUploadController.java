package com.olib.rss.upload.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import com.olib.rss.core.controller.AbstractOlibRestController;
import com.olib.rss.upload.enums.FilePathType;
import com.olib.rss.upload.service.FileUploadService;

@Controller
@RequestMapping(value="/api/file")
public class FileUploadController extends AbstractOlibRestController<String>{
	
	@Autowired
	private FileUploadService fileUploadService;
	
	List<String> files = new ArrayList<String>();
	
	@PostMapping(value="")
	public ResponseEntity<String> uploadFile(
			@RequestParam("file") MultipartFile file
			){
		
		try {
			
			String fileName = fileUploadService.store(FilePathType.IMG_PATH.toString(), file);
			files.add(fileName);
			return responseOk(fileName);
		} catch (Exception e) {
			e.printStackTrace();
			return responseException();
		}
	}
	
	@GetMapping("")
	@ResponseBody
	public ResponseEntity<Resource> getFile(
			@RequestParam(value="filename") String filename)  {
		
		try {
			Resource file = fileUploadService.loadFile(FilePathType.IMG_PATH.toString(),filename);
			
			return ResponseEntity.ok()
					.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
					.body(file);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
	}
	
	@GetMapping("/getallfiles")
	public ResponseEntity<List<String>> getListFiles(Model model) {
		List<String> fileNames = files
				.stream().map(fileName -> MvcUriComponentsBuilder
						.fromMethodName(FileUploadController.class, "getFile", fileName).build().toString())
				.collect(Collectors.toList());
 
		return ResponseEntity.ok().body(fileNames);
	}
	
}
