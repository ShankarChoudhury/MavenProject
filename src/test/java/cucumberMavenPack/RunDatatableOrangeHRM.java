package cucumberMavenPack;

import java.util.List;
import java.util.concurrent.TimeUnit;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RunDatatableOrangeHRM {
	 WebDriver driver;
	static String  username;
	@Given("^A browser is available$")
	public void setUp() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		System.setProperty("webdriver.ie.driver", "C:\\java-workspace\\applications\\New folder\\IEDriverServer.exe");
	   driver = new InternetExplorerDriver();
	}

	@Given("^Login fields are displayed$")
	public  void testLoginFields() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	   driver.get("http://opensource.demo.orangehrmlive.com/index.php/auth/login");
	   
	   driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	   
	   if(driver.findElement(By.cssSelector("input#txtUsername")).isDisplayed()&& driver.findElement(By.cssSelector("input#txtPassword")).isDisplayed() ){
		   System.out.println("The UserName & Password fields are displayed");
	   }
	   else
	   {
		   System.out.println("The UserName field is not displayed ---- Closing Browser session");
		   driver.quit();
	   }
	}

	@When("^valid user id & password is entered$")
	public void enterCredentials(DataTable userData) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		List<List<String>> dataset =  userData.raw();
		String user = dataset.get(0).get(0);
		String password = dataset.get(0).get(1);
		driver.findElement(By.cssSelector("input#txtUsername")).sendKeys(user);
		driver.findElement(By.cssSelector("input#txtPassword")).sendKeys(password);
		driver.findElement(By.cssSelector("input#btnLogin")).click();
	}

	@Then("^User is able to Login$")
	public void testLogin() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	   WebDriverWait wait = new WebDriverWait(driver,30);
	//   FluentWait
	   WebElement loginObj = wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.cssSelector("a#welcome"))));
		if (loginObj.isDisplayed()){
			System.out.println("Login successfull");
		
		}
		else
		{
			
			System.out.println("Login Unsuccessfull - Closing Browser");
		}
	}

	@Then("^Logout of the application$")
	public void logOut() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		driver.findElement(By.cssSelector("a#welcome")).click();
		driver.findElement(By.xpath("//a[text()='Logout']")).click();
	 
	}
	@When("^User Management section is clicked$")
	public void User_Management_section_is_clicked() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	   Actions action = new Actions(driver);
	   action.moveToElement(driver.findElement(By.id("menu_admin_viewAdminModule"))).perform();
	   action.moveToElement(driver.findElement(By.id("menu_admin_UserManagement"))).perform();
	   driver.findElement(By.id("menu_admin_viewSystemUsers")).click();
	   //Thread.sleep(000);
	}

	@Then("^System users must be displayed$")
	public void System_users_must_be_displayed() throws Throwable {
	  if(driver.findElement(By.xpath("//h1[.='System Users']")).isDisplayed()){
		  
		  System.out.println("System Users are displayed");
	  }
	  else
	  {
		  System.out.println("System Users are not displayed");
	  }
	    
	}
	
	@Then("^new user field must be displayed$")
	public void new_user_field_must_be_displayed() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	   
	}

	@When("^user details are added and saved$")
	public void user_details_are_added_and_saved(DataTable referDetail) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		List<List<String>> refData = referDetail.raw();
		String refUser = refData.get(0).get(0);
		username = refData.get(0).get(1);
		//username = newUser;
		WebElement userRole = driver.findElement(By.id("systemUser_userType"));
		Select userDD = new Select(userRole);
		userDD.selectByVisibleText("Admin");
		driver.findElement(By.id("systemUser_employeeName_empName")).sendKeys(refUser);
		driver.findElement(By.id("systemUser_userName")).sendKeys(username);
		WebElement Userstatus = driver.findElement(By.id("systemUser_status"));
		Select userStatus = new Select(Userstatus);
		userStatus.selectByVisibleText("Enabled");
		driver.findElement(By.id("systemUser_password")).sendKeys("Password1");
		driver.findElement(By.id("systemUser_confirmPassword")).sendKeys("Password1");
		driver.findElement(By.id("btnSave")).click();
	}
 
	@Then("^System displays the user  save confirmation message$")
	public void System_displays_the_user_save_confirmation_message() throws Throwable {
		
	//	List<List<String>> newUser = createdUser.raw();
		
	//	String userName = newUser.get(0).get(0);
		 if(driver.findElement(By.xpath("//a[text()='"+username+"']")).isDisplayed()){
			  
			  System.out.println("New User ----- "+username+ "----- is created");
		  }
		  else
		  {
			  System.out.println("New User ----- "+username+ "----- is not created!!!");
		  }
	   
	}
	@When("^add button is clicked$")
	public void add_button_is_clicked() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath("//input[@id='btnAdd' and @value='Add']")).click();
		
		if(driver.findElement(By.xpath("//h1[text()='Add User' and @id='UserHeading']")).isDisplayed()){
			
			System.out.println("Add User Page is displayed");
	}
		else {
			System.out.println("Add User Page is not displayed");
		}
}
	
	public void DelUser(){
		
	
	}
	@When("^User is select & deleted from the system$")
	public void User_is_select_deleted_from_the_system() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		if(driver.findElement(By.xpath("//a[text()='"+username+"']/../preceding-sibling::td/input[@type='checkbox']")).isDisplayed()){
			driver.findElement(By.xpath("//a[text()='"+username+"']/../preceding-sibling::td/input[@type='checkbox']")).click();
			driver.findElement(By.cssSelector("input[id='btnDelete']")).click();
			driver.findElement(By.cssSelector("input[id='dialogDeleteBtn']")).click();
		
		}
		else
		{
			
			System.out.println("User is not availabe,please check if it is created");
		}
	}

	@Then("^user should not be displayed under User management screen$")
	public  void user_should_not_be_displayed_under_User_management_screen() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		
		WebDriverWait wait = new WebDriverWait(driver,1000);
		boolean isDeleted = wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath("//a[text()='"+username+"']")));
		if(isDeleted){
			
			System.out.println("User is deleted successfully");
		}
		else
		{
			System.out.println("User is not deleted successfully");
		}
	}
	@Then("^Login page should not be displayed$")
	public void Login_page_should_nor_be_displayed() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		WebDriverWait wait = new WebDriverWait(driver,1000);
		boolean isLoggedOff = driver.findElement(By.cssSelector("input#txtUsername")).isDisplayed()&& driver.findElement(By.cssSelector("input#txtPassword")).isDisplayed();
		if(isLoggedOff){
			
			System.out.println("User is logged off successfully");
		}
		else
		{
			System.out.println("User is logged off successfully");
		}
		   driver.quit();
	}
}