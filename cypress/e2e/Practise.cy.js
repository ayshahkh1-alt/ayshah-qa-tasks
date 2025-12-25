/// <reference types="cypress"/>
describe('practice', () => {
    it('first', () => {
        cy.visit('https://www.telerik.com/support/demos')
      cy.get('.u-s-mb0')
      cy.get('[id="web"]')
      cy.get('.TK--Footer-Desktop .TK-Footer-List-Social').find('li')
    });
});

