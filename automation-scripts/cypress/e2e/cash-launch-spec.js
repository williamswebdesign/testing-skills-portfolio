
/**
 * This test would be to verify that the BlytzPage Cash launch app form is working
 */

describe('Cash Launch form is working correctly',()=>{
    beforeEach(function(){
        cy.visit('/cash-launch')
    });
    it('Can fill out form correctly', ()=>{
        cy.get('input[name="email"]').should('be.visible');
        cy.get('input[name="email"]').click();
        cy.get('input[name="email"]').clear();
        cy.get('input[name="email"]').type('staheliwebdesign@gmali.com');

        cy.get('input[name="firstname"]').should('be.visible');
        cy.get('input[name="firstname"]').click();
        cy.get('input[name="firstname"]').clear();
        cy.get('input[name="firstname"]').type('Test');

        cy.get('input[name="company"]').should('be.visible');
        cy.get('input[name="company"]').click();
        cy.get('input[name="company"]').clear();
        cy.get('input[name="company"]').type('Test');

        cy.get('input[name="phone"]').should('be.visible');
        cy.get('input[name="phone"]').click();
        cy.get('input[name="phone"]').clear();
        cy.get('input[name="phone"]').type('555-555-1234');

        cy.get('.actions').click();
        cy.get('.hs-button').should('have.value', 'Submit');
        cy.get('.hs-button').should('be.visible');
        cy.get('.kl-rich-text__preheader').should('have.text', '\n        UPGRADE NOW\n      ');
    });

    it('Filling out form incorrectly gives errors', ()=>{
        cy.get('input[name="email"]').click();
        cy.get('input[name="firstname"]').click();
        cy.get('input[name="company"]').click();
        cy.get('input[name="phone"]').click();
        cy.get('.widget-type-form').click();
        cy.get('.hs_firstname > .no-list > li > .hs-error-msg').should('have.text', 'Please complete this required field.');
        cy.get('.hs_firstname > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        cy.get('.hs_email > .no-list > li > .hs-error-msg').should('have.text', 'Please complete this required field.');
        cy.get('.hs_email > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        cy.get('.hs_phone > .no-list > li > .hs-error-msg').should('have.text', 'Please complete this required field.');
        cy.get('.hs_phone > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
    });

    it('verifys that incorrect emails and short phone numbers are not allowed' , ()=>{
        cy.get('input[name="email"]').should('be.visible');
        cy.get('input[name="email"]').click();
        cy.get('input[name="email"]').clear();
        cy.get('input[name="email"]').type('test@test.com');
        cy.get('.hs-error-msg').should('have.text', 'Please enter a valid email address.').should('have.class', 'hs-error-msg');

        cy.get('input[name="phone"]').should('be.visible');
        cy.get('input[name="phone"]').click();
        cy.get('input[name="phone"]').clear();
        cy.get('input[name="phone"]').type('1');
        cy.get('.hs_phone > .no-list > li > .hs-error-msg').should('have.text', 'The number you entered is not in range.');
    })
})

