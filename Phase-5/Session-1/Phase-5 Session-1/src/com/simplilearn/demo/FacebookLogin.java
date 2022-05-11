package com.simplilearn.demo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class FacebookLogin {
	
	public static void main(String[] args) {
		//step:1 Declare the Path of Chromedriver
				String path="D:\\Phase-5\\chromedriver_win32_latest\\chromedriver.exe";
				System.setProperty("webdriver.chrome.driver", path);
				
				//step:2 initiate the driver
				WebDriver driver= new ChromeDriver();
				
				//step:3 base url
				String base_url="http://www.facebook.com/";
				
				
				//step: 4 Launching Facebook
				driver.get(base_url);
				
				
				//finding webelements from webpage
				WebElement email= driver.findElement(By.id("email"));
				System.out.println(email.getAttribute("placeholder"));

				
				WebElement password= driver.findElement(By.id("pass"));
				System.out.println(password.getAttribute("placeholder"));
				
				
				email.sendKeys("nikunj@gmail.com");
				password.sendKeys("Nikunj@123");
				
				
				//in facebook there is no id for button but it has name so we will get button by name
				
				WebElement login= driver.findElement(By.name("login"));
				login.click();
				
				//driver.close();
	}

}
