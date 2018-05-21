package cloudPackage;

import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//pwd browser stack - shankar15
public class RunGoogleSearchOnCloud {
	public static final String USERNAME = "";
	  public static final String AUTOMATE_KEY = "";
	  public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
	WebDriver driver;
	
	  int var;
	
	@Given("^Launch browser$")
	public void Launch_browser() throws Throwable {
		 DesiredCapabilities caps = new DesiredCapabilities();
		    //********* For Desktop Browser emulation *********//
		 	caps.setCapability("browser", "Safari");
		 	caps.setCapability("browser_version", "10.0");
		    caps.setCapability("os", "OS X");
		    caps.setCapability("os_version", "Sierra");
		    caps.setCapability("browserstack.debug", "true");
		    
		    //****************************************************///
//		    //************* For Mobile Browser emulation *******************//
//		    caps.setCapability("browserName", "android");
//		    caps.setCapability("platform", "ANDROID");
//		    caps.setCapability("device", "Samsung Galaxy S5");
		    
		    //**************************************************//
		     driver = new RemoteWebDriver(new URL(URL), caps);
		    //New Comment added 
		
		//driver = new HtmlUnitDriver();
	}
	@When("^browser is launched$")
	public  void browser_is_launched() throws Throwable {
		
		driver.get("http://www.google.com");
		var=8;
		System.out.println("The value of var is "+var);
	}

	@Then("^Send a \"([^\"]*)\"$")
	public void Send_a_keyword(String keywordName) throws Throwable {
	  driver.findElement(By.xpath("//input[@name='q']")).sendKeys(keywordName);
	  driver.findElement(By.xpath("//button[@value='Search']")).click();
	  Thread.sleep(1000);
	  System.out.print("the Browser title is "+driver.getTitle());
	  
	}
	
	@Then("^close the Browser$")
	public void close_the_Browser() throws Throwable {
		driver.quit();
	//	SendLog.sendEmail();
	}
	
}
