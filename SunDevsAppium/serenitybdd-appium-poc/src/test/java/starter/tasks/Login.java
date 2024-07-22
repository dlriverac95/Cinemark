package starter.tasks;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.SendKeys;
import starter.ui.LoginView;


public class Login implements Task {
    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(LoginView.EnterLogin),
                SendKeys.of("automationtestbc@yopmail.com").into(LoginView.username),
                SendKeys.of("Colombia2024#").into(LoginView.password),
                Click.on(LoginView.login)
        );
    }
}
