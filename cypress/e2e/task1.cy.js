/// <reference types="cypress"/>

describe('Task 1 - Selectors only', () => {

 
    

  it('Using different selectors for required elements', () => {
cy.visit('https://demo.productionready.io/#/register')
    cy.get('.navbar-brand')
    cy.get('ul.navbar-nav a[href="#/"]')
    cy.get('a[href="#/register"]').first
    cy.get('h1.text-xs-center')
    cy.get('p.text-xs-center a')
    cy.get('input[placeholder="Username"]')
    cy.get('input[type="email"]')
    cy.get('input[type="password"]')
    cy.contains('button', 'Sign up')
    cy.get('footer a.logo-font')
    cy.get('footer span.attribution')

  })

})
