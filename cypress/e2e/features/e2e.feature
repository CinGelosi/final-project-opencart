@e2e @regression
Feature: End to end
    As user, I want to add to cart an iPhone, So I can buy the item

  Background: 
  Given the user navigates to opencart
    
  Scenario: Validate the user can buy an iPhone
    When clicks on Add to Cart button of the item "iPhone"
    And clicks in the minicart
    And the item "iPhone" is shown in the cart with all the details
    And clicks on view cart
    And clicks on checkout
    And select guest checkout
    And click on continue
    And enter the name "Cintia"
    And enter the lastname "Gelosi"
    And enter an email "cintiagelosi@gmail.com"
    And enter a telephone "2236635648"
    And enter the address 1 "Alfahuir 39"
    And enter the city "Valencia"
    And enter the CP "46019"
    And choose the country "Spain"
    And choose the region "Valencia"
    And click on continue from the billing details
    And click on continue from the Delivery Method
    And click on checkbox in order to accept terms and conditions
    And click on continue from the Payment Method
    And click on confirm order
    Then a "Your order has been placed!" message is displayed

