import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const HOMEPAGE = require("../../pages/HomePage")
const SECTIONS = require("../../pages/Sections")
const MINICART = require("../../pages/miniCart")
const CHECKOUT = require("../../pages/Checkout")

Given('the user navigates to opencart', ()=>{
   cy.visit('/')
})

Given('the user has no item added, with the cart message {string}', (zeroProducts)=>{
    HOMEPAGE.itemsCartButton().should('contain',zeroProducts)
})

 
When("clicks on Add to Cart button of the item {string}", (index)=>{
    if (!isNaN(index)) {
        HOMEPAGE.clickAddToCartButton(index - 1);
    } else {
        HOMEPAGE.clickAddToCartOnSpecificItem(index);
    }    
})

When("a user choose an available product from dropdown section {string}", (section)=>{
    SECTIONS.hoverDropdownSection(section)
    SECTIONS.clickAvailableProduct()
})


When("clicks in the minicart",()=>{
    MINICART.clickMiniCartButton()
    MINICART.cartBeVisible().should('be.visible')
})

When("clicks on the cross in order to delete a product",()=>{
    MINICART.deleteItemMiniCart()
})

When("clicks on view cart",()=>{
    MINICART.viewCartButton().click()

    
})

When("clicks on checkout",()=>{
    CHECKOUT.clickCheckoutButton()
})

When("select guest checkout",()=>{
    CHECKOUT.clickGuestCheckout()
})

When("click on continue",()=>{
    CHECKOUT.clickContinueButtonNewCostumer()
    CHECKOUT.panelBillingDetails().should('be.visible')
})

When("enter the name {string}",(name)=>{
    CHECKOUT.typeFirstName(name)
})

When("enter the lastname {string}",(lastname)=>{
    CHECKOUT.typeLastName(lastname)
})

When("enter an email {string}",(email)=>{
    CHECKOUT.typeEmail(email)
})

When("enter a telephone {string}",(phone)=>{
    CHECKOUT.typePhone(phone)
})

When("enter the address 1 {string}",(adress)=>{
    CHECKOUT.typeAdress(adress)
})

When("enter the city {string}",(city)=>{
    CHECKOUT.typeCity(city)
})

When("enter the CP {string}",(cp)=>{
    CHECKOUT.typeCP(cp)
})

When("choose the country {string}",(country)=>{
    CHECKOUT.chooseCountry(country)
})

When("choose the region {string}",(region)=>{
    CHECKOUT.chooseRegion(region)
})
When("click on continue from the billing details",()=>{
    CHECKOUT.clickContinueButtonBillingDetails()
    CHECKOUT.panelDeliveryMethod().should('be.visible')
})
When("click on continue from the Delivery Method",()=>{
    CHECKOUT.clickContinueButtonDeliveryMethod()
    CHECKOUT.panelPaymentMethod().should('be.visible')
})

When("click on checkbox in order to accept terms and conditions",()=>{
    CHECKOUT.acceptTermsAndConditions()
})

When("click on continue from the Payment Method",()=>{
    CHECKOUT.clickContinuePaymentMethod()
    CHECKOUT.panelConfirmOrder().scrollIntoView().should('be.visible')
})

When("click on confirm order",()=>{
    CHECKOUT.confirmOrder()
})


Then("a message is displayed saying {string} and then the product name", (successMessage)=>{
    HOMEPAGE.successMessage().should('contain',successMessage)    
})

Then("the cart has {string} added", (itemAdded)=>{
    HOMEPAGE.itemsCartButton().should('contain',itemAdded)   
})

Then("the item {string} is shown in the cart with all the details", (item1)=>{     
    MINICART.findItemInCart(item1).should('contain.text', item1)
    MINICART.viewCartButton().should('be.visible')
    MINICART.checkoutButton().should('be.visible')
    MINICART.tableCart().contains('Sub-Total').should('be.visible')
    MINICART.tableCart().contains('Eco Tax (-2.00)').should('be.visible')
    MINICART.tableCart().contains('VAT (20%)').should('be.visible')
    MINICART.tableCart().contains('Total').should('be.visible')

})

Then("the item is successfully deleted", ()=>{
    HOMEPAGE.itemsCartButton().should('contain','0')
})

Then("a {string} message is displayed", (message)=>{
    CHECKOUT.messageConfirm().should('contain', message)
})