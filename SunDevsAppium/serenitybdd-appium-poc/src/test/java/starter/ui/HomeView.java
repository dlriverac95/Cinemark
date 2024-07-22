package starter.ui;

import io.appium.java_client.AppiumBy;
import net.serenitybdd.screenplay.targets.Target;
import org.openqa.selenium.By;

public class HomeView {

    public static Target deniedLocatedPermission = Target
            .the("denied located permission")
            .located(By.xpath("//android.widget.Button[@resource-id=\"com.android.permissioncontroller:id/permission_deny_button\"]"));

    public static Target continueWithoutLocation = Target
            .the("continue without location")
            .located(AppiumBy.accessibilityId("CONTINUAR SIN LOCALIZACIÓN"));

    public static Target city = Target
            .the("city")
            .located(AppiumBy.accessibilityId("Ciudad *"));

    public static Target selectCity = Target
            .the("select city")
            .located(AppiumBy.accessibilityId("Bogota"));

    public static Target continueToDashboard = Target
            .the("continue to dashboard")
            .located(AppiumBy.accessibilityId("CONTINUAR"));

    public static Target closePopup = Target
            .the("close popup")
            .located(By.xpath("//android.widget.ImageView"));


}
