package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features/", plugin = { "pretty", "html: cucumber-html-reports",
		"json: cucumber-html-reports/cucumber.json" }, glue = { "stepdefinition" }, monochrome = true, dryRun = false)
public class TestRunner {

	
}