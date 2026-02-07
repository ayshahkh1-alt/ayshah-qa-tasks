Feature: SauceDemo Automation Testing
Scenario Outline: Login with multiple users
  Given user opens SauceDemo website
  When the user types <username> in username input field
  And the user types <password> in password input field
  And the user clicks on login button
  Then user should be redirected to inventory page

Examples:
  | username       | password       |
  | "standard_user"  | "secret_sauce"   |
  | "problem_user"   | "secret_sauce" |
  | "error_user"     | "secret_sauce"   |
  @TC123
Scenario: Checkout flow
      When user adds product to cart
      And user starts checkout
      Then checkout page should be displayed
      @TC122
Scenario: Logout flow
    When user logs out
    Then user should be redirected to login page
