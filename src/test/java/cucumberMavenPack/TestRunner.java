package cucumberMavenPack;

import org.junit.runner.RunWith;
//import net.serenitybdd.cucumber.CucumberWithSerenity;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
//@RunWith(Cucumber)
//@RunWith(CucumberWithSerenity.class)
//@CucumberOptions
@Cucumber.Options(features={"features/BDDtestDatatableSet.feature"},
glue="cucumberMavenPack",
format={"html:target/cucumber-html-report","pretty:target/cucumber-pretty-report.txt","junit:target/cucumber-results.xml","json:C:\\java-workspace\\MavenProject\\target\\cucumber.json"
//format={"pretty:target/cucumber-pretty-report.txt"}
})
//format={"junit:target/cucumber-results.xml"}
//public class TestRunner extends AbstractTestNGCucumberTests{	
	public class TestRunner{	

}
//googlesearch.feature