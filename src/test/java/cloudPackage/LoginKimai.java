package cloudPackage;

import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.Test;

//import com.web.login.com.LoadProperty;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginKimai {
	static WebDriver driver;
	@Test(priority=1)
	@Given("^I am on home page of Kimai Application$")
	public static void I_am_on_home_page_of_Kimai_Application() throws Throwable {
		//System.setProperty("webdriver.ie.driver", LoadProperty.readProperty("IEdriver"));
		DesiredCapabilities cap = new DesiredCapabilities();
		cap.setCapability("browserName", "chrome");
		driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"),cap);
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);
		driver.get("https://demo.kimai.org/");
		//ExtentReport rep = new ExtentReports
	}
	@Test(priority=2)
	@When("^I login with valid credentials$")
	public void I_login_with_valid_credentials() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		driver.findElement(By.id("kimaiusername")).sendKeys("admin");
		driver.findElement(By.id("kimaipassword")).sendKeys("changeme");
		driver.findElement(By.id("loginButton")).click();
	}
	@Test(priority=3)
	@Then("^I should see home page$")
	public void I_should_see_home_page() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		System.out.println("The Browser title is "+driver.getTitle());
		System.out.println("The logged in user is "+driver.findElement(By.xpath("//a[@id='main_tools_button']/following-sibling::b")).getText());
		// Add customer
		driver.findElement(By.xpath("//div[@id='customers_foot']/a[@class='addLink']")).click();
		if (driver.findElement(By.xpath("//span[@id='floater_title' and text()='add customer']")).isDisplayed()){
			
			System.out.println("Add customer window id displayed");
			// General Entry
			driver.findElement(By.xpath("//label[contains(text(),'Customer')]/following-sibling::input[@id='name']")).sendKeys("TestCustomer");
			
		//	driver.findElement(By.id("loginButton")).click();
			
			driver.findElement(By.id("vat")).sendKeys("4");
			
			// Address Entry
			driver.findElement(By.xpath("//span[text()='Address']")).click();
			
			driver.findElement(By.id("company")).sendKeys("Automation Solutions");
			driver.findElement(By.id("contactPerson")).sendKeys("Devon Smith");
			driver.findElement(By.id("street")).sendKeys("161 Lexington Street");
			driver.findElement(By.id("city")).sendKeys("Kolkata");
			
			Select countryObj = new Select(driver.findElement(By.id("country")));
			countryObj.selectByVisibleText("India");
			driver.findElement(By.xpath("//input[@class='btn_ok' and @value='OK']")).click();
			//driver.findElement(By.id("zipcode")).sendKeys("90078");
			Thread.sleep(5000);
			
		}
		
		
	}
	@Test(priority=4)
	@Then("^I logout of the application$")
	public void I_logout_of_the_application() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		driver.findElement(By.id("main_logout_button")).click();
		driver.quit();
	}
	
	
}
