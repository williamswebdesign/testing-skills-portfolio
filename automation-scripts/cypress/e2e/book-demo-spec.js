/**
 * this is test that book demo test but don't click the get started
 * Just check that
 * email cant be blank
 * first name cant be blank
 * last name cant be blank
 * company  name cant be blank
 * phone number can't be blank
 * checks that get started button is not there
 * https://www.blytzpay.com/demo
 */

describe('Verifys Book Demo ', ()=>{
    beforeEach(function () {
        cy.visit('/demo')
      });
    it('verifys that no error when filling filed correctly', () =>{
        cy.get('input[name="email"]').should('be.visible');
        cy.get('input[name="email"]').click();
        cy.get('input[name="email"]').clear();
        cy.get('input[name="email"]').type('staheliwebdesign@gmali.com');
        
        cy.get('input[name="firstname"]').should('be.visible');
        cy.get('input[name="firstname"]').click();
        cy.get('input[name="firstname"]').clear();
        cy.get('input[name="firstname"]').type('Test');

        cy.get('input[name="lastname"]').should('be.visible');
        cy.get('input[name="lastname"]').click();
        cy.get('input[name="lastname"]').clear();
        cy.get('input[name="lastname"]').type('Test');

        cy.get('input[name="0-2/name"]').should('be.visible');
        cy.get('input[name="0-2/name"]').click();
        cy.get('input[name="0-2/name"]').clear();
        cy.get('input[name="0-2/name"]').type('Test Company');

        
        cy.get('input[name="phone"]').should('be.visible');
        cy.get('input[name="phone"]').click();
        cy.get('input[name="phone"]').clear();
        cy.get('input[name="phone"]').type('555-555-1234');

        cy.get('.actions').click();
        cy.get('.hs-button').should('have.value', 'GET STARTED');
        cy.get('.hs-button').should('have.class', 'large');
        cy.get('.hs-button').should('be.visible');
    })

    it('verifys that errors appear when filled incorrectly', () =>{
        cy.get('input[name="email"]').click();
        cy.get('input[name="firstname"]').click();
        cy.get('input[name="lastname"]').click();
        cy.get('input[name="0-2/name"]').click();
        cy.get('input[name="phone"]').click();
        cy.get('input[name="phone"]').clear();
        cy.get('.hs_recaptcha > .input').click();
        cy.get('.hs_email > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        cy.get('.hs_firstname > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        cy.get('.hs_lastname > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        cy.get('.hs_0-2\\/name > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        cy.get('.hs_phone > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
    })

    it('verifys that incorrect emails are not allowed' , ()=>{
        cy.get('input[name="email"]').should('be.visible');
        cy.get('input[name="email"]').click();
        cy.get('input[name="email"]').clear();
        cy.get('input[name="email"]').type('test@test.com');
        cy.get('.hs-error-msg').should('have.text', 'Please enter a valid email address.').should('have.class', 'hs-error-msg');
    })
})