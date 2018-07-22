package com.olib.rss.core.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;

/*
 * T : response data Type
 */
public abstract class AbstractOlibRestController<T> {

	public ResponseEntity<T> responseOk(){
		return new ResponseEntity<T>(HttpStatus.OK);
	}
	public ResponseEntity<T> responseOk(T t){
		return new ResponseEntity<T>(t,HttpStatus.OK);
	}
	public ResponseEntity<Void> responseOkVoid(){
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	public ResponseEntity<T> responseNotFound(){
		return new ResponseEntity<T>(HttpStatus.NOT_FOUND);
	}
	public ResponseEntity<T> responseException(MultiValueMap<String,String> headers){
		return new ResponseEntity<T>(headers,HttpStatus.EXPECTATION_FAILED);
	}
	public ResponseEntity<T> responseException(){
		return new ResponseEntity<T>(HttpStatus.EXPECTATION_FAILED);
	}
	public ResponseEntity<Void> responseNotFoundVoid(){
		return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
	}
	public ResponseEntity<List<T>> responseOkList(List<T> list){
		return new ResponseEntity<List<T>>(list,HttpStatus.OK);
	}
	public ResponseEntity<List<T>> responseNotFoundList(){
		return new ResponseEntity<List<T>>(HttpStatus.NOT_FOUND);
	}
	public ResponseEntity<T> responseConflict(){
		return new ResponseEntity<T>(HttpStatus.CONFLICT);
	}
	public ResponseEntity<List<T>> responseConflictList(){
		return new ResponseEntity<List<T>>(HttpStatus.CONFLICT);
	}
	public ResponseEntity<Void> responseConflictVoid(){
		return new ResponseEntity<Void>(HttpStatus.CONFLICT);
	}
}
