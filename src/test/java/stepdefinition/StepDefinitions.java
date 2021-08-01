package stepdefinition;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.Calendar;

import org.openqa.selenium.WebDriver;

import SuiteBase.BaseTest;
import cucumber.api.java.*;
import cucumber.api.java.en.*;
import pageObjects.Page;

public class StepDefinitions extends BaseTest{

	Page page;
	WebDriver driver;
	
	
	@Given("^NHS Cost Checker Tool is open$")
	public void nhs_Cost_Checker_Tool_is_open() throws Throwable {
	   driver.get("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start");
	}

	@Then("^User cannot use NHS Cost Checker Tool$")
	public void user_cannot_use_NHS_Cost_Checker_Tool() throws Throwable {
		assertEquals("Verify that the resident of Northern Ireland is not suitable to use the NHS Cost Checker Tool", page.getResultHeader(), "You cannot use this service because you live in Northern Ireland");
	}

	@When("^User enters the age as under sixteen")
	public void user_enters_the_age_as_under_sixteen() throws Throwable {
		page.day.sendKeys(String.valueOf(17));
		page.month.sendKeys(String.valueOf(10));
		page.year.sendKeys(String.valueOf(Calendar.getInstance().get(Calendar.YEAR)-15));
		page.clickOn_Next();
	}

	@Then("^User is eligible for Free NHS$")
	public void user_is_eligible_for_Free_NHS() throws Throwable {
		assertTrue("Verify that user get helps with NHS costs",page.getResultHelp().contains("You get help with NHS costs"));
	}
	
	@When("^User is an adult$")
	public void user_is_an_adult() throws Throwable {
		page.day.sendKeys(String.valueOf(17));
		page.month.sendKeys(String.valueOf(10));
		page.year.sendKeys(String.valueOf(Calendar.getInstance().get(Calendar.YEAR)-30));
		page.clickOn_Next();
	}
	
	@When("^User enters the country as \"(.*?)\"$")
	public void user_enters_the_country_as(String country) throws Throwable {
		page.clickOn_AcceptCookies();
	    page.clickOn_Start();
	    page.select_Country(country);
	    page.clickOn_Next();
	}
	
	@When("^User GP Practice \"(.*?)\" in England$")
	public void user_GP_Practice_in_England(String arg1) throws Throwable {
		if(arg1.equals("is"))
			 page.clickOn_No();
			else
				page.clickOn_Yes();
			 page.clickOn_Next();
	}
	

	@When("^User lives \"(.*?)\" a partner$")
	public void user_lives_a_partner(String arg1) throws Throwable {
		if(arg1.equals("with"))
		 page.clickOn_Yes();
		else
			page.clickOn_No();
		 page.clickOn_Next();
	}

	@When("^User \"(.*?)\" any benefits or tax credits$")
	public void user_any_benefits_or_tax_credits(String arg1) throws Throwable {
		if(arg1.equals("claims"))
			 page.clickOn_Yes();
			else
				page.clickOn_No();
			 page.clickOn_Next();
	}

	@When("^User gets \"(.*?)\" Credit$")
	public void user_gets_Credit(String arg1) throws Throwable {
		if(arg1.equals("Universal"))
		page.radio_Universal.click();
		else if(arg1.equals("Different"))
			page.radio_DifferentBenefit.click();
		else
			page.radio_appliedUniversal.click();
	    page.clickOn_Next();
	}

	@When("^User \"(.*?)\" LCW As part of the joint Universal Credit$")
	public void user_LCW_As_part_of_the_joint_Universal_Credit(String arg1) throws Throwable {
		if(arg1.equals("gets"))
			 page.clickOn_Yes();
			else
				page.clickOn_No();
			 page.clickOn_Next();
	}

	@When("^User enters the combined take-home pay as Less Than \"(.*?)\"$")
	public void user_enters_the_combined_take_home_pay_as_Less_Than(String arg1) throws Throwable {
		if(arg1.equals("435"))
			page.clickOn_Yes();
		else
			page.clickOn_Yes();
	    page.clickOn_Next();
	}
	
	@When("^User \"(.*?)\" in the Highlands and Islands$")
	public void user_in_the_Highlands_and_Islands(String arg1) throws Throwable {
		if(arg1.equals("lives"))
			 page.clickOn_Yes();
			else
				page.clickOn_No();
			 page.clickOn_Next();
	}

	@When("^User \"(.*?)\" pregnant or not given birth in the last year$")
	public void user_pregnant_or_not_given_birth_in_the_last_year(String arg1) throws Throwable {
		if(arg1.equals("is"))
			 page.clickOn_Yes();
			else
				page.clickOn_No();
			 page.clickOn_Next();
	}

	@When("^User \"(.*?)\" injury or illness caused by serving in the armed forces$")
	public void user_injury_or_illness_caused_by_serving_in_the_armed_forces(String arg1) throws Throwable {
		if(arg1.equals("have"))
			 page.clickOn_Yes();
			else
				page.clickOn_No();
			 page.clickOn_Next();
	}

	@When("^User \"(.*?)\" permanently in a care home$")
	public void user_permanently_in_a_care_home(String arg1) throws Throwable {
		if(arg1.equals("lives"))
			 page.clickOn_Yes();
			else
				page.clickOn_No();
			 page.clickOn_Next();
	}

	@When("^User \"(.*?)\" savings of more than sixteen thousand pounds$")
	public void user_savings_of_more_than_sixteen_thousand_pounds(String arg1) throws Throwable {
		if(arg1.equals("has"))
			 page.clickOn_Yes();
			else
				page.clickOn_No();
			 page.clickOn_Next();
	}
	
	@Then("^User gets help with NHS costs$")
	public void user_gets_help_with_NHS_costs() throws Throwable {
		assertTrue("Verify that the user gets help with the NHS costs", page.getResultHeader().contains("You get help with NHS costs"));
	}

	@When("^User is above sixty$")
	public void user_is_above_sixty() throws Throwable {
		page.day.sendKeys(String.valueOf(17));
		page.month.sendKeys(String.valueOf(10));
		page.year.sendKeys(String.valueOf(Calendar.getInstance().get(Calendar.YEAR)-61));
		page.clickOn_Next();
	}

	@When("^User \"(.*?)\" help from local council$")
	public void user_help_from_local_council(String arg1) throws Throwable {
		if(arg1.equals("gets"))
			 page.clickOn_Yes();
			else
				page.clickOn_No();
			 page.clickOn_Next();
	}

	@Then("^User can apply for help with NHS costs$")
	public void user_can_apply_for_help_with_NHS_costs() throws Throwable {
		assertTrue("Verify that the user gets help with the NHS costs", page.applyForHelp.getText().contains("You can apply for help with NHS costs"));
	}
	
//	@Then("^User gets help with NHS costs$")
//	public void user_gets_help_with_NHS_costs() throws Throwable {
//		List<String> results = new ArrayList<>();
//		page.resultPage.stream().forEach(element -> results.add(element.getText()));
//		File file1 = new File("README.txt");
//		FileWriter fw = new FileWriter(file1);
//		fw.write(results.toString());
//		fw.close();
//	}
	
	@Before 
	public void setUp() {
		driver = BaseTest.getDriver();
		page = new Page(driver);
	}
	
	@After
	public void cleanUp() {
		BaseTest.closeDriver();
	}
}