import pageCinemark from "./pageObjects/pageCinemark";


describe('Cinemark E2E Tests', () => {
    beforeEach(() => {
      pageCinemark.visit();
    });

    it ('login', () => {
        // login 
        pageCinemark.login()

        // Assert
        cy.get('span[class="jsx-271142912 user-name"]')
        .should('have.text', 'Sundevs QA Automation BC')        
    })

    it('Select movie and schedule', () => {
        pageCinemark.login()
        pageCinemark.selectMovieAndSchedule()

        // Assert
        cy.get('div[class="jsx-347696487 column-movie"]')
        .should('exist').and('contain', 'Wifi Ralph')
    })

    it('Select type of seats', () =>{
        pageCinemark.login()
        pageCinemark.selectMovieAndSchedule()
        pageCinemark.selectTypeOfSeats()

        //Assert
        cy.get('span[class="jsx-1369409061 shopping-cart__badge-car"]')
        .should('not.contain', '0')
        cy.get('span[class="jsx-1369409061"]')
        .should('not.contain', '$0')
    })

    it('Continue without selecting a seat', () =>{
        pageCinemark.login()
        pageCinemark.selectMovieAndSchedule()
        pageCinemark.selectTypeOfSeats()
        pageCinemark.continueWithoutSelectingSeat()

        //Assert
        cy.get('h3[class="jsx-1774195522 text--sentence-case"]')
        .should('contain', 'Faltan ubicaciones por seleccionar')
        pageCinemark.closeAlert()
    })

    it('Select a seat', () =>{
        pageCinemark.login()
        pageCinemark.selectMovieAndSchedule()
        pageCinemark.selectTypeOfSeats()
        pageCinemark.selectSeat()

        //Assert
        cy.get('div[class="jsx-3807652267"]').find('button')
        .should('have.class', 'seat-item--my-selected')
    })
 
    it ('Select food', () => {
        pageCinemark.login()
        pageCinemark.selectMovieAndSchedule()
        pageCinemark.selectTypeOfSeats()
        pageCinemark.selectSeat()
        pageCinemark.selectFood()

        //Assert
        cy.get('span[class="jsx-1369409061 shopping-cart__badge-car"]')
        .should('not.contain', '0')
        cy.get('span[class="jsx-1369409061"]')
        .should('not.contain', '$0')
    })
    
    it('View summary', () => {
        pageCinemark.login()
        pageCinemark.selectMovieAndSchedule()
        pageCinemark.selectTypeOfSeats()
        pageCinemark.selectSeat()
        pageCinemark.selectFood()

        //Assert
        cy.get('div[class="jsx-1774195522 shopping-cart__section-content"]')
        .should('contain', 'película').and('contain', 'teatro').and('contain', 'tarifas/entradas').and('contain', 'sillas')
    })

    it('Enter payment data', () => {
        pageCinemark.login()
        pageCinemark.selectMovieAndSchedule()
        pageCinemark.selectTypeOfSeats()
        pageCinemark.selectSeat()
        pageCinemark.selectFood()
        pageCinemark.enterPaymentData()

        //Assert
        cy.get('input[id="payment_name"]').should('have.attr', 'value').and('not.be.empty')
        cy.get('input[id="payment_lastName"]').should('have.attr', 'value').and('not.be.empty')
        cy.get('input[id="payment_dniNumber"]').should('have.attr', 'value').and('not.be.empty')
        cy.get('input[id="payment_address"]').should('have.attr', 'value').and('not.be.empty')
        cy.get('input[id="payment_contactPhone"]').should('have.attr', 'value').and('not.be.empty')
    })

    it('Select payment method', () =>{
        pageCinemark.login()
        pageCinemark.selectMovieAndSchedule()
        pageCinemark.selectTypeOfSeats()
        pageCinemark.selectSeat()
        pageCinemark.selectFood()
        pageCinemark.enterPaymentData()
        pageCinemark.selectPaymentMethod()
        
        //Assert
        cy.get('input[id="payment_creditCard.securityCode"]').should('have.attr', 'value').and('not.be.empty')
        cy.get('input[id="payment_agreement"]').should('be.checked')
    })

    it('Create an order', () => {
        pageCinemark.login()
        pageCinemark.selectMovieAndSchedule()
        pageCinemark.selectTypeOfSeats()
        pageCinemark.selectSeat()
        pageCinemark.selectFood()
        pageCinemark.enterPaymentData()
        pageCinemark.selectPaymentMethod()
        pageCinemark.finishOrder()

        //Assert
        cy.get('div[class="jsx-335671319 text-center information-order"]').should('contain', 'código de confirmación')
    })

/*
it ('Successfully login, complete ticket purchase, and view QR code', () => {

    // Search a movie and select the city and schedule
    pageCinemark.clickViewAllMovies()
    pageCinemark.clickViewSchedule()
    pageCinemark.clickSelectCity()
    pageCinemark.clickCity()
    pageCinemark.selectDate()
    pageCinemark.selectHour()
    pageCinemark.clickConfirmSchedule()

    // Choose and search de seats
    pageCinemark.closePopUp()
    pageCinemark.selectTypeChair()
    pageCinemark.selectAmountOfChairs()
    pageCinemark.viewCart()
    pageCinemark.closeCart()
    pageCinemark.clickContinue()
    pageCinemark.selectChairs()
    pageCinemark.clickContinue()
    pageCinemark.clickConfirmTheChairs()

    // Choose a drink
    pageCinemark.selectDrink()
    pageCinemark.viewCart()
    pageCinemark.closeCart()
    pageCinemark.clickContinue()
    pageCinemark.clickContinue()

    //Billing and Payment
    pageCinemark.enterBillingData({
        name: "David", 
        lastname: "Rivera QA", 
        dniNumber: "9999999", 
        address: "Calle falsa 123", 
        contactPhone: "3149999999"
    })
    pageCinemark.selectCardMethodPayment()
    pageCinemark.selectCard()
    pageCinemark.clickConfirmCard()
    pageCinemark.enterCardData({CVV:"123"})
    pageCinemark.clickPaymentAgreement()
    pageCinemark.confirmOrder()

    // Confirm that the order was create
    pageCinemark.viewQRCode()
    
 })
    */

})