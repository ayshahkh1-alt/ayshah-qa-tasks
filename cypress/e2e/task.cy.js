/// <reference types="cypress" />

describe('Automation Exercise - Functional Tests', () => {


  const email = 'ayshahkh5@gmail.com'
  const password = '1233'

  const slowDown = () => cy.wait(1000)

  it('Create New User Account', () => {
    cy.visit('https://automationexercise.com')
    slowDown()

    cy.contains('Signup / Login').click()
    slowDown()
    
    cy.get('input[name="name"]').type('Ayshah')
    slowDown()

    cy.get('input[data-qa="signup-email"]').type(email)
    slowDown()

    cy.get('button[data-qa="signup-button"]').click()
    slowDown()
   
     cy.get('#id_gender2').check()  
  slowDown()

  cy.get('#password').type(password)
  slowDown()

  cy.get('#days').select('10')
  slowDown()

  cy.get('#months').select('August')
  slowDown()

  cy.get('#years').select('2000')
  slowDown()

  cy.get('#newsletter').check()
  slowDown() 

  cy.get('#first_name').type('Ayshah')
  slowDown()

  cy.get('#last_name').type('Habash')
  slowDown()

  cy.get('#company').type('QA Company')
  slowDown()

  cy.get('#address1').type('Main Street 123')
  slowDown()

  cy.get('#address2').type('Building 5')
  slowDown()

  cy.get('#country').select('Israel')
  slowDown()

  cy.get('#state').type('Nablus')
  slowDown()

  cy.get('#city').type('Nablus')
  slowDown()

  cy.get('#zipcode').type('110001')
  slowDown()

  cy.get('#mobile_number').type('9876543210')
  slowDown()

  cy.get('button[data-qa="create-account"]').click()
  slowDown()

  cy.visit('https://automationexercise.com')
  slowDown()
})
   

  it('User Login', () => {
    cy.visit('https://automationexercise.com/login')
    slowDown()

    cy.get('input[data-qa="login-email"]').type(email)
    slowDown()

    cy.get('input[data-qa="login-password"]').type(password)
    slowDown()

    cy.get('button[data-qa="login-button"]').click()
    slowDown()
  })

  it('Search for a Product', () => {
    cy.visit('https://automationexercise.com/products')
    slowDown()

    cy.get('#search_product').type('Dress')
    slowDown()

    cy.get('#submit_search').click()
    slowDown()
  })

  it('Add Product to Cart', () => {
    cy.visit('https://automationexercise.com/products')
    slowDown()

    cy.contains('View Product').first().click()
    slowDown()

    cy.get('.product-information')
      .find('button')
      .contains('Add to cart')
      .click()
    slowDown()

    cy.contains('Continue Shopping').click()
    slowDown()
  })

  it('Add Product Review', () => {
    cy.visit('https://automationexercise.com/product_details/1')
    slowDown()

    cy.get('#name').type('Ayshah')
    slowDown()

    cy.get('#email').type(email)
    slowDown()

    cy.get('#review').type('Very nice product')
    slowDown()

    cy.get('#button-review').click()
    slowDown()
  })

})
