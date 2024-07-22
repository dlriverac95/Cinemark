class pageCinemark{
    
    static visit(){
       cy.visit("https://cinemark-colombia-dev-staging-gzs859bsx-cinemark-colombia.vercel.app/")
       cy.wait(2000)
       cy.get('button[class="ant-modal-close"]').click()
    }


    static clickLogin(){
        cy.get('button[class="ant-btn primary small  ant-btn-primary ant-btn-sm"]').eq(0).click()
    }


    static enterLoginData(email, password){
        cy.get('input[id="MemberEmail"]').type(email)
        cy.get('input[id="MemberPassword"]').type(password)
        cy.get('button[class="ant-btn primary default  ant-btn-primary"]').eq(6).click()
    }


    static clickViewAllMovies(){
        cy.contains('ver todas las películas').click()
        cy.wait(5000)
    }


    static clickViewSchedule(movie){
        cy.contains(movie).click()
        cy.wait(3000)
    }


    static clouseCityAlert(){
        cy.get('i[class="anticon anticon-close"]').eq(1).click()
    }


    static clickSelectCity(){
        cy.get('div[class="ant-select ant-select-enabled"]').eq(0).click()
        cy.wait(2000)
    }


    static clickCity(){
        cy.get('li[class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active"]').click()
        cy.wait(2000)
    }


    static selectDate(){
        cy.get('span[class="jsx-4289254067 week__date week__date--bold"]').last().click()
        cy.wait(2000)
    }


    static selectHour(){
        cy.get('div[class="jsx-1092747776 sessions__button--runtime "]').last().click()
        cy.wait(2000)
    }


    static clickConfirmSchedule(){
        cy.get('button[class="ant-btn primary medium  ant-btn-primary ant-btn-block"]').click()
        cy.wait(8000)
    }


    static closePopUp(){
        cy.get('button[class="ant-modal-close"]').eq(0).click({force: true})
        cy.wait(4000)
    }


    static selectTypeChair(){
        cy.get('div[class="select-seat-format ant-select ant-select-enabled"]').eq(3).click()
    }


    static selectAmountOfChairs(){
        cy.get('li[class="ant-select-dropdown-menu-item"]').eq(0).click()
    }


    static viewCart(){
        cy.get('span[class="jsx-1369409061 shopping-cart__badge-car"]').click()
        cy.wait(3000)
    }


    static closeCart(){
        cy.get('span[class="jsx-516516810 snackbar__name-close"]').click()
    }


    static clickContinue(){
        cy.get('button[class="ant-btn primary default  ant-btn-primary"]').eq(1).click()
        cy.wait(2000)
    }


    static selectChairs(){
        cy.get('div[class="jsx-3807652267"]').find('button').filter(".seat-item--available").eq(0).click()
        cy.wait(2000)
    }


    static clickConfirmTheChairs(){
        cy.get('button[class="ant-btn primary default  ant-btn-primary"]').eq(2).click()
        cy.wait(6000)
    }


    static selectDrink(){
        cy.get('button[class="jsx-1346325705 candy-store__btn-control candy-store__btn-control--left-space  candy-store__btn-control__enabled"]').last().click()
        cy.wait(2000)
    }


    static clickPaymentAgreement(){
        cy.get('span[class="ant-checkbox-inner"]').click({force: true})
        cy.wait(1000)
    }


    static selectCardMethodPayment(){
        cy.get('button[class="jsx-1652500618 panel__btn-cart text--uppercase "]').click()
        cy.wait(1000)
    }


    static selectCard(){
        cy.contains('6260').click()
        cy.wait(1000)
    }


    static clickConfirmCard(){
        cy.get('button[class="ant-btn primary default  ant-btn-primary"]').eq(5).click({force: true})
        cy.wait(1000)
    }


    static enterCardData(CVV){
        cy.get('input[id="payment_creditCard.securityCode"]').type(CVV)
        cy.get('div[class="ant-select-selection__rendered"]').eq(5).click()
        cy.get('li[class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active"]').click()
    }


    static enterBillingData(name, lastname, dniNumber, address, contactPhone){
        cy.get('input[id="payment_name"]')
        .then(($input) => {
            if ($input.val()) {
                cy.get('input[id="payment_name"]').clear();
            }
            cy.get('input[id="payment_name"]').type(name);
        });

        cy.get('input[id="payment_lastName"]')
        .then(($input) => {
            if ($input.val()) {
                cy.get('input[id="payment_lastName"]').clear();
            }
            cy.get('input[id="payment_lastName"]').type(lastname);
        });

        cy.get('input[id="payment_dniNumber"]')
        .then(($input) => {
            if ($input.val()) {
                cy.get('input[id="payment_dniNumber"]').clear();
            }
            cy.get('input[id="payment_dniNumber"]').type(dniNumber);
        });

        cy.get('input[id="payment_address"]')
        .then(($input) => {
            if ($input.val()) {
                cy.get('input[id="payment_address"]').clear();
            }
            cy.get('input[id="payment_address"]').type(address);
        });

        cy.get('input[id="payment_contactPhone"]')
        .then(($input) => {
            if ($input.val()) {
                cy.get('input[id="payment_contactPhone"]').clear();
            }
            cy.get('input[id="payment_contactPhone"]').type(contactPhone);
        });
    }


    static confirmOrder(){
        cy.get('button[class="ant-btn primary default  ant-btn-primary"]').eq(3).click()
        cy.wait(200)
        cy.get('button[class="ant-btn primary default  ant-btn-primary"]').eq(6).click()
        cy.wait(90000)
    }


    static closeAlert(){
        cy.get('button[title="Aceptar"]').click()
    }


    static login() {
        pageCinemark.clickLogin();
        pageCinemark.enterLoginData(
            "automationtestbc@yopmail.com",
            "Colombia2024#")
   }


   static selectMovieAndSchedule(){
        pageCinemark.clickViewAllMovies()
        pageCinemark.clickViewSchedule("Wifi Ralph")
        pageCinemark.clickSelectCity()
        pageCinemark.clickCity()
        pageCinemark.clouseCityAlert()
        pageCinemark.selectDate()
        pageCinemark.selectHour()
        pageCinemark.clickConfirmSchedule()
        pageCinemark.closePopUp()
   }


   static selectTypeOfSeats(){
        pageCinemark.selectTypeChair()
        pageCinemark.selectAmountOfChairs()
        pageCinemark.viewCart()
   }


   static continueWithoutSelectingSeat(){
        pageCinemark.closeCart()
        pageCinemark.clickContinue()
        pageCinemark.clickContinue()
   }


   static selectSeat(){
        pageCinemark.closeCart()
        pageCinemark.clickContinue()
        pageCinemark.selectChairs()
   }


   static selectFood(){
        pageCinemark.clickContinue()
        pageCinemark.clickConfirmTheChairs()
        pageCinemark.selectDrink()
        pageCinemark.viewCart()
        pageCinemark.closeCart()
        pageCinemark.clickContinue()
   }


   static enterPaymentData(){
        pageCinemark.clickContinue()
        pageCinemark.enterBillingData(
            "David", 
            "Rivera QA", 
            "9999999", 
            "Calle falsa 123", 
            "3149999999")
    }

    static selectPaymentMethod(){
        pageCinemark.selectCardMethodPayment()
        pageCinemark.selectCard()
        pageCinemark.clickConfirmCard()
        pageCinemark.enterCardData("123")
        pageCinemark.clickPaymentAgreement()
    }

    static finishOrder(){
        pageCinemark.confirmOrder()
    }
}

export default pageCinemark