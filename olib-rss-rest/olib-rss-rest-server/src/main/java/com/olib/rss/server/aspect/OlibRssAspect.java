package com.olib.rss.server.aspect;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class OlibRssAspect {

	@Around("@annotation(com.olib.rss.core.annotation.Logable)")
	public Object loggableAnnotationAdvice(ProceedingJoinPoint joinPoint){
		System.out.println("---------------------------------------------------");
		
		Object returnObj = null;
		try {
			returnObj = joinPoint.proceed();
			System.out.println(String.format("[%s][%s]",
					LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")),
					returnObj));
		} catch (Throwable e) {
			e.printStackTrace();
		}
 
		System.out.println("---------------------------------------------------");
		return returnObj;
	}
}
