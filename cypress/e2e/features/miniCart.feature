@miniCart @regression
Feature: Minicart
    As user, I want to see the cart, So I can interact with it

  Background: 
  Given the user navigates to opencart
    
  @smoke
  Scenario: Validate the view on the minicart
    When clicks on Add to Cart button of the item "iPhone"
    And clicks in the minicart
    Then the item "iPhone" is shown in the cart with all the details

  @smoke
  Scenario: Validate the user can delete a product
    When clicks on Add to Cart button of the item "iPhone"
    And clicks in the minicart
    And clicks on the cross in order to delete a product
    Then the item is successfully deleted


