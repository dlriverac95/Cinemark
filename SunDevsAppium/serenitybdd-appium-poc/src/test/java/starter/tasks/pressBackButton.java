package starter.tasks;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Interaction;
import net.serenitybdd.screenplay.Tasks;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.util.concurrent.TimeUnit;

public class pressBackButton implements Interaction {

    @Override
    public <T extends Actor> void performAs(T actor) {
        RemoteWebDriver driver = (RemoteWebDriver) actor.recall("driver");

        if (driver instanceof AndroidDriver) {
            AndroidDriver androidDriver = (AndroidDriver) driver;
            androidDriver.pressKey(new KeyEvent(AndroidKey.BACK));
            androidDriver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
        }
        else {
            //throw new UnsupportedOperationException("This interaction is only supported for AndroidDriver.");
            try {
                driver.navigate().back();
            }
            catch (Exception e) {}
        }
    }

    public static pressBackButton press() {
        return Tasks.instrumented(pressBackButton.class);
    }

}
