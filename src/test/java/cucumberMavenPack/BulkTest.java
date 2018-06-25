package cucumberMavenPack;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BulkTest {

	@Given("^Internet explore browser$")
	public void Internet_explore_browser() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	 System.out.println("Internet explorer should be open");
	}
	@Given("^a bulk string is available as below$")
	public void a_bulk_string_is_available_as_below(String inputStream) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		 System.out.println("Input stream of text is \n"+inputStream);
	}
	@When("^google is launched$")
	public void google_is_launched() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		 System.out.println("Google page should be open");

	}
	@And("^keyword field is available$")
	public void keyword_field_is_available() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	   // throw new PendingException();
	//	if (driver.findElement(By.xpath("//input[@name='q']")).isDisplayed()){
			System.out.println("The Search feature is available on Google Home page");
	//	}
	//	else{
		//	System.out.println("The Search feature is not available on Google Home page");
	//	}
	}
	@When("^the browser is maximized$")
	public void maximize_browser() throws Throwable {//the_browser_is_maximized
	    // Express the Regexp above with the code you wish you had
	    System.out.println("The browser is maximized and activated");
	}
	@Then("^type a \"([^\"]*)\" and hit search$")
	public void searhHitButton(String keyword) throws Throwable {
		 System.out.println("A keyword should be sent"+keyword);
	  
	}

	@Then("^close the internet explore browser$")
	public void close_the_internet_explore_browser() throws Throwable {
		 System.out.println("Internet explorer browser should be closed");	   
	}

	
}
