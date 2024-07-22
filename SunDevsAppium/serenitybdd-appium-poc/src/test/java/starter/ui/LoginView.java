package starter.ui;

import io.appium.java_client.AppiumBy;
import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.screenplay.targets.Target;

public class LoginView {

    public static Target EnterLogin = Target
            .the("Login")
            .located(By.xpath("//android.widget.Button"));

    public static Target username = Target.the("username")
            .located(By.xpath("//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[1]"));

    public static Target password = Target.the("password")
            .located(By.xpath("//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]"));

    public static Target login = Target.the("login button")
            .located(AppiumBy.accessibilityId("INICIAR SESIÓN"));

    public static Target confirmUser = Target.the("confirm user")
            .located(AppiumBy.accessibilityId("SA"));

}
