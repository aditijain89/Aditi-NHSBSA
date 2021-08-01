package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class Page {
	WebDriver driver;

	public Page(WebDriver driver) {
		this.driver = driver;
	     PageFactory.initElements(driver, this);
	 }
	
	@FindBy(how = How.XPATH, using = "//input[@value='Start']") 
	  WebElement btn_Start;
		
	@FindBy(how = How.XPATH, using = "//button[contains(@id,'analytics')]")
	WebElement btn_AcceptCookies;
	
	@FindBy(how = How.XPATH, using = "//input[@value='Next']") 
	  WebElement btn_Next;
	
	@FindBy(how = How.XPATH, using = "//label[@id = 'label-yes']") 
	  WebElement radio_Yes;
	
	@FindBy(how = How.XPATH, using = "//label[@id = 'label-no']") 
	  WebElement radio_No;
	
	@FindBy(how = How.XPATH, using = "//input[@id='dob-day']") 
	 public WebElement day;
	
	@FindBy(how = How.XPATH, using = "//input[@id='dob-month']") 
	public WebElement month;
	
	@FindBy(how = How.XPATH, using = "//label[@for='yes-universal']") 
	public WebElement radio_Universal;
	
	@FindBy(how = How.XPATH, using = "//label[@for='not-yet']") 
	public WebElement radio_appliedUniversal;
	
	@FindBy(how = How.XPATH, using = "//label[@for='different-benefit']") 
	public WebElement radio_DifferentBenefit;
	
	@FindBy(how = How.XPATH, using = "//input[@id='dob-year']") 
	public WebElement year;	
	
	@FindBy(how = How.XPATH, using = "//h1[@id='result-heading']")
		WebElement resultHeading;
	
	@FindBy(how = How.XPATH, using = "//h2[@class='heading-large']")
	WebElement resultGetHelp;
	
	@FindBy(how = How.XPATH, using = "//h1[@class='heading-large']")
	public WebElement applyForHelp;
	
	@FindBy(how = How.XPATH, using = "//div[@class='column-two-thirds']/*[not(a[@id='back-button'])]")
	public List<WebElement> resultPage;
	
	public void clickOn_AcceptCookies() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(btn_AcceptCookies));
		btn_AcceptCookies.click();
	}
	
	public void clickOn_Start() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(btn_Start));
		btn_Start.click();
	}
	
	public void select_Country(String country) {		
		String locator = "//label[text()[normalize-space()='"+country+"']]";
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(locator)));
		driver.findElement(By.xpath(locator)).click();;
	}
	
	public void clickOn_Next() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(btn_Next));
		btn_Next.click();
	}
	
	public void clickOn_Yes() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(radio_Yes));
		radio_Yes.click();
	}
	
	public void clickOn_No() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(radio_No));
		radio_No.click();
	}
	
	public String getResultHeader() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(resultHeading));
		return resultHeading.getText().trim();
	}
	
	public String getResultHelp() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(resultGetHelp));
		return resultGetHelp.getText().trim();
	}
}
