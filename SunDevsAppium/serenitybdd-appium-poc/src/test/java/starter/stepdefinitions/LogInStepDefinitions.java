package starter.stepdefinitions;

import io.appium.java_client.android.AndroidDriver;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import jdk.jpackage.internal.Log;
import net.serenitybdd.core.environment.WebDriverConfiguredEnvironment;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;
import net.serenitybdd.screenplay.actors.OnStage;
import net.serenitybdd.screenplay.actors.OnlineCast;
import net.serenitybdd.screenplay.ensure.Ensure;
import net.thucydides.core.annotations.Managed;
import org.openqa.selenium.WebDriver;
import starter.questions.HomeQuestions;
import starter.tasks.Login;
import starter.tasks.NavigateTo;

import java.net.MalformedURLException;
import java.net.URL;

import static net.serenitybdd.core.environment.WebDriverConfiguredEnvironment.getEnvironmentVariables;
import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorCalled;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;
import static org.hamcrest.Matchers.equalTo;

public class LogInStepDefinitions {


    //@Managed(driver = "Appium")
    //public WebDriver hisMobileDevice;

    @Before
    public void set_the_stage() throws MalformedURLException {
        OnStage.setTheStage(new OnlineCast());
    }



    @Given("A user wants to enter to the system")
    public void user_want_to_the_system() {
        theActorCalled("David").attemptsTo(
                new NavigateTo()
        );
    }

    @When("The user sends his credentials")
    public void sends_his_credentials(){
        theActorInTheSpotlight().attemptsTo(
                new Login()
        );
    }

    @Then("The user is logged in")
    public void should_see_the_dashboard(){
        String expectedButtonText = "SA";

        theActorInTheSpotlight().should(
                seeThat("The text", HomeQuestions.value(),
                        equalTo(expectedButtonText))
        );
    }
}
