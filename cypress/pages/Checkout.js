class Checkout{
    elements ={
        checkoutButton: ()=> cy.get('.buttons .btn-primary'),
        panelCheckoutOptions: ()=> cy.get('#accordion #collapse-checkout-option'),
        guestCheckout: ()=> cy.get('[value="guest"]'),
        continueButtonNewCostumer: ()=> cy.get('[type="button"]#button-account'),           
        panelBillingDetails: ()=> cy.get('.panel-default #collapse-payment-address'),
        firstName: ()=> cy.get('#input-payment-firstname'),
        lastName: ()=> cy.get('#input-payment-lastname'),
        email: ()=> cy.get('#input-payment-email'),
        phone: ()=> cy.get('#input-payment-telephone'),
        adress: ()=> cy.get('#input-payment-address-1'),
        city: ()=> cy.get('#input-payment-city'),
        cp: ()=> cy.get('#input-payment-postcode'),
        countryDropdown: ()=> cy.get('#input-payment-country'),
        regionDropdown: ()=> cy.get('#input-payment-zone'),
        continueButtonBillingDetails: ()=> cy.get('.panel-body #button-guest'),
        panelDeliveryMethod: ()=> cy.get('.panel-default #collapse-shipping-method'),
        continueButtonDeliveryMethod: ()=> cy.get('.panel-body #button-shipping-method'),
        panelPaymentMethod: ()=> cy.get('.panel-default #collapse-payment-method'),
        termsAndConditions: ()=> cy.get('.pull-right [type="checkbox"]'),
        continuePaymentMethod: ()=> cy.get('.pull-right #button-payment-method'),
        panelConfirmOrder:()=> cy.get('.panel-collapse .well'),
        confirmOrder: ()=> cy.get('.pull-right #button-confirm'),
        messageConfirm: ()=> cy.get('#content')
    }

    clickCheckoutButton(){
        this.elements.checkoutButton().click()
    }

    panelCheckoutOptions(){
        return this.elements.panelCheckoutOptions()
    }

    clickGuestCheckout(){
        this.elements.guestCheckout().check()
    }

    clickContinueButtonNewCostumer(){
        this.elements.continueButtonNewCostumer().click()
    }

    panelBillingDetails(){
        return this.elements.panelBillingDetails()
    }

    typeFirstName(name){
        this.elements.firstName().type(name)
    }

    typeLastName(lastname){
        this.elements.lastName().type(lastname)
    }

    typeEmail(email){
        this.elements.email().type(email)
    }

    typePhone(phone){
        this.elements.phone().type(phone)
    }

    typeAdress(adress){
        this.elements.adress().type(adress)
    }

    typeCity(city){
        this.elements.city().type(city)
    }

    typeCP(cp){
        this.elements.cp().type(cp)
    }

    chooseCountry(country){
        this.elements.countryDropdown().select(country)
    }

    chooseRegion(region){
        this.elements.regionDropdown().select(region)
    }

    clickContinueButtonBillingDetails(){
        this.elements.continueButtonBillingDetails().click()
    }

    panelDeliveryMethod(){
        return this.elements.panelDeliveryMethod()
    }

    clickContinueButtonDeliveryMethod(){
        this.elements.continueButtonDeliveryMethod().click()
    }

    panelPaymentMethod(){
        return this.elements.panelPaymentMethod()
    }

    acceptTermsAndConditions(){
        this.elements.termsAndConditions().click()
    }

    clickContinuePaymentMethod(){
        this.elements.continuePaymentMethod().click()
    }

    panelConfirmOrder(){
        return this.elements.panelConfirmOrder()
    }

    confirmOrder(){
        this.elements.confirmOrder().click()
    }

    messageConfirm(){
        return this.elements.messageConfirm()
    }



    
}

module.exports = new Checkout();