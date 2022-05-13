package com.simplilearn.demo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;

public class GroupTest {
	
	WebDriver driver=null;
	
	@Test(groups="Chrome")
	public void launchChrome() {
		
		System.setProperty("webdriver.chrome.driver", "D:\\Phase-5\\chromedriver_win32_latest\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("https://www.facebook.com/");
		
		try {
			
			Thread.sleep(3000);
			
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	@Test(groups="Chrome",dependsOnMethods = {"launchChrome"})
	public void loginwithChrome() {
		driver.findElement(By.id("email")).sendKeys("nikunj@gmail.com");
		driver.findElement(By.id("pass")).sendKeys("Nikunj@1234");
		driver.findElement(By.name("login")).submit();
		driver.close();
		
	}
	
	@Test(groups="firefox")
	public void launchFirefox() {
		
		System.setProperty("webdriver.gecko.driver", "firefox_driver_path");
		driver= new FirefoxDriver();
		driver.get("https://www.facebook.com/");
		
		try {
			
			Thread.sleep(3000);
			
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	@Test(groups="firefox",dependsOnMethods = {"launchFirefox"})
	public void loginwithFirefox() {
		driver.findElement(By.id("email")).sendKeys("nikunj@gmail.com");
		driver.findElement(By.id("pass")).sendKeys("Nikunj@1234");
		driver.findElement(By.name("login")).submit();
		driver.close();
		
	}
   
}
