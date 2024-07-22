package starter.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import starter.ui.HomeView;

public class HomeQuestions implements Question {
    @Override
    public Boolean answeredBy(Actor actor) {
        return HomeView.continueToDashboard.resolveFor(actor).isEnabled();
    }


    public static Question<Boolean> value(){
        return new HomeQuestions();
    }
}
