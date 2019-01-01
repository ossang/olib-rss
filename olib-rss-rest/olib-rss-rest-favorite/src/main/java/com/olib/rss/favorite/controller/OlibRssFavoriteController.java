package com.olib.rss.favorite.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.olib.rss.core.controller.AbstractOlibRestController;
import com.olib.rss.favorite.model.OlibRssFavorite;
import com.olib.rss.favorite.service.OlibRssFavoriteService;

@RestController
@RequestMapping(value="/api/rss/favorite")
public class OlibRssFavoriteController extends AbstractOlibRestController<OlibRssFavorite>{

	@Autowired
	private OlibRssFavoriteService service;
	
	@GetMapping(value="")
	public ResponseEntity<List<OlibRssFavorite>> load(){
		Optional<List<OlibRssFavorite>> optList = service.load();
		
		if(optList.isPresent()){
			return responseOkList(optList.get());
		}else{
			return responseNotFoundList();
		}
	}
	
	@PostMapping(value="")
	public ResponseEntity<OlibRssFavorite> save(
			@RequestBody OlibRssFavorite entity
			){
		
			return responseOk(service.save(entity));
	}
	
	@DeleteMapping(value="/{id}")
	public ResponseEntity<Void> deleteBookmark(
			@PathVariable(value = "id") int id
			){
		
		service.delete(id);
		return responseOkVoid();
	}
}
