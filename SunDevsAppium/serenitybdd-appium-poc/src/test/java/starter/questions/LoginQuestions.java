package starter.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import starter.ui.LoginView;

public class LoginQuestions implements Question {
    @Override
    public String answeredBy(Actor actor) {
        return LoginView.confirmUser.resolveFor(actor).getText();
    }

    public static Question<String> value(){
        return new LoginQuestions();
    }
}
