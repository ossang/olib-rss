package com.olib.rss.server.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mobile.device.Device;
import org.springframework.mobile.device.DevicePlatform;

import com.olib.security.jwt.auth.TokenHelper;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.ApiKeyVehicle;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {       
	
	@Autowired
	private TokenHelper tokenHelper;
	 
    @Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2)  
          .select()                                  
          .apis(RequestHandlerSelectors.any())              
          .paths(PathSelectors.any())                          
          .build();                                           
    }
    /*
     * jwt 연동시 swagger-ui 로 api 테스트를 하기위해 토큰 값 설정 부분
     */
    @Bean
    public SecurityConfiguration security() {
    	Device device = new Device() {
			@Override
			public boolean isTablet() {
				return false;
			}
			@Override
			public boolean isNormal() {
				return true;
			}
			@Override
			public boolean isMobile() {
				return false;
			}
			@Override
			public DevicePlatform getDevicePlatform() {
				return null;
			}
		};
		String token = this.tokenHelper.generateToken("admin", device);
    	return new SecurityConfiguration(null, null, null, null, "Bearer "+token, ApiKeyVehicle.HEADER, "Authorization", ",");
    }
}