package SuiteBase;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseTest {
	
	static String browser = System.getProperty("browser");
	
	public static WebDriver driver;

	public BaseTest() {
	}

	public static WebDriver getDriver() {
        switch (browser) {	    
        case "Firefox" : 
        	FirefoxOptions firefoxOptions = new FirefoxOptions();
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver(firefoxOptions);
	    	break;
        case "Chrome" : 
        	ChromeOptions chromeOptions = new ChromeOptions();
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver(chromeOptions);
    		break;
    	default:
    		throw new IllegalArgumentException("Must supply a supported Browser type!");
        }
        driver.manage().window().maximize();
       return driver;
	}	

	public static void closeDriver() {
		driver.close();
	}

}