import { userData, inputSelectorsCashLaunch } from "../../fixtures/userFormData";
import bookingForm from "../../pages/booking-form.po";

describe('Cash Launch form is working correctly',()=>{
    const cashLaunchForm = new bookingForm();

    beforeEach(function(){
        cy.visit('/cash-launch')
    });
    it('Can fill out form correctly', ()=>{
        cashLaunchForm.getPreheaderElement().should('have.text', '\n        UPGRADE NOW\n      ');
        cashLaunchForm.fillEmail().should('be.visible').click().clear().type(userData.email);
        cashLaunchForm.fillFirstName().should('be.visible').click().clear().type(userData.firstname)
        cashLaunchForm.fillCompanyCashLaunch().should('be.visible').click().clear().type(userData.company)
        cashLaunchForm.fillPhone().should('be.visible').click().clear().type(userData.phone)
        cashLaunchForm.verifySubmitButton().should('have.value', 'Submit')
            .and('have.class', 'large')
            .and('be.visible');
    });

    it('Filling out form incorrectly gives errors', ()=>{
        cashLaunchForm.clickInputsForm(inputSelectorsCashLaunch);
        cashLaunchForm.checkErrorMessage('.hs_firstname > .no-list > li > .hs-error-msg').should('have.text', 'Please complete this required field.');
        cashLaunchForm.checkErrorMessage('.hs_firstname > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        cashLaunchForm.checkErrorMessage('.hs_email > .no-list > li > .hs-error-msg').should('have.text', 'Please complete this required field.');
        cashLaunchForm.checkErrorMessage('.hs_email > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        cashLaunchForm.checkErrorMessage('.hs_phone > .no-list > li > .hs-error-msg').should('have.text', 'Please complete this required field.');
        cashLaunchForm.checkErrorMessage('.hs_phone > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
    });

    it('verifys that incorrect emails and short phone numbers are not allowed' , ()=>{
        cashLaunchForm.fillEmail().should('be.visible').click().clear().type(userData.incorrectEmail);
        cashLaunchForm.checkErrorMessage('.hs_email .hs-error-msg').should('have.text', 'Please enter a valid email address.').should('have.class', 'hs-error-msg');
        cashLaunchForm.fillPhone().should('be.visible').click().clear().type(userData.shortPhone);
        cashLaunchForm.checkErrorMessage('.hs_phone .hs-error-msg').should('have.text', 'The number you entered is not in range.').should('have.class', 'hs-error-msg');
    })
})

