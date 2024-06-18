@addToCart @regression
Feature: Add to cart
    As user, I want to add to cart any product from the page, So that I be able to have a cart with items

  Background: 
  Given the user navigates to opencart
  And the user has no item added, with the cart message "0 item(s)"
 
  Scenario Outline: Add to cart a product from the homepage that doesn't need specifications
    When clicks on Add to Cart button of the item "<index>"
    Then a message is displayed saying "Success: You have added" and then the product name
    And the cart has "1 item(s)" added
    Examples:
        | index |
        | 1     |
        | 2     |
  
  @smoke
  Scenario: Add to cart a product from the Desktops section
    When a user choose an available product from dropdown section "Desktops"
    And clicks on Add to Cart button of the item "1"
    Then a message is displayed saying "Success: You have added" and then the product name
    And the cart has "1 item(s)" added

  @smoke
  Scenario: Add to cart multiples products from the homepage that doesn't need specifications
    When clicks on Add to Cart button of the item "iPhone"
    And clicks on Add to Cart button of the item "MacBook"
    Then the cart has "2 item(s)" added