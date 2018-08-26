package com.olib.rss.server;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=OlibRssServerApplication.class)
public class OlibRssServerApplicationTests {

	@Test
	public void contextLoads() {
	}

	public void encryptionTest() {
		StandardPBEStringEncryptor jasypt = new StandardPBEStringEncryptor();
        jasypt.setPassword("olib1234%^&*");      //암호화 키(password)
        jasypt.setAlgorithm("PBEWithMD5AndDES");
 
        String encryptedText = jasypt.encrypt("sa");    //암호화
        String plainText = jasypt.decrypt(encryptedText);  //복호화
 
        System.out.println("encryptedText:  " + encryptedText); //암호화된 값
        System.out.println("plainText:  " + plainText);         //복호화된 값
	}
}
