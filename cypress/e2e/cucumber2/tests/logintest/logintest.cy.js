import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

Before({ tags: "@TC123 or @TC122" }, () => {
  cy.visit("https://www.saucedemo.com");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
});

Given("user opens SauceDemo website", () => {
  cy.visit("https://www.saucedemo.com");
});

When("the user types {string} in username input field", (username) => {
  cy.get("#user-name").type(username);
});

When("the user types {string} in password input field", (password) => {
  cy.get("#password").type(password);
});

When("the user clicks on login button", () => {
  cy.get("#login-button").click();
});

Then("user should be redirected to inventory page", () => {
  cy.url().should("include", "inventory.html");
});

When("user adds product to cart", () => {
  cy.get(".inventory_item").first().find("button").click();
  cy.get(".shopping_cart_link").click();
});

When("user starts checkout", () => {
  cy.get("#checkout").click();
});

Then("checkout page should be displayed", () => {
  cy.url().should("include", "checkout-step-one");
});
When("user logs out", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
});

Then("user should be redirected to login page", () => {
  cy.url().should("eq", "https://www.saucedemo.com/");
});
