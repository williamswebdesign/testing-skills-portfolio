import { userData, inputSelectors } from "../../fixtures/userFormData";
import bookingForm from "../../pages/booking-form.po";
describe('Verifys Book Demo ', () => {
    const demoBookingForm = new bookingForm();
    beforeEach(function () {
        cy.visit('/demo')
    });
    it('verifys that no error when filling filed correctly', () => {
        demoBookingForm.fillEmail().should('be.visible').click().clear().type(userData.email);
        demoBookingForm.fillFirstName().should('be.visible').click().clear().type(userData.firstname)
        demoBookingForm.fillLastName().should('be.visible').click().clear().type(userData.lastname)
        demoBookingForm.fillCompany().should('be.visible').click().clear().type(userData.company)
        demoBookingForm.fillPhone().should('be.visible').click().clear().type(userData.phone)
        demoBookingForm.verifySubmitButton().should('have.value', 'GET STARTED')
            .and('have.class', 'large')
            .and('be.visible');

    })

    it('verifys that errors appear when filled incorrectly', () => {
        demoBookingForm.clickInputsForm(inputSelectors);

        demoBookingForm.checkErrorMessage('.hs_email > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        demoBookingForm.checkErrorMessage('.hs_lastname > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        demoBookingForm.checkErrorMessage('.hs_firstname > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        demoBookingForm.checkErrorMessage('.hs_0-2\\/name > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
        demoBookingForm.checkErrorMessage('.hs_phone > .no-list > li > .hs-error-msg').should('have.class', 'hs-error-msg');
    })

    it('verifys that incorrect emails are not allowed', () => {
        demoBookingForm.fillEmail().should('be.visible').click().clear().type(userData.incorrectEmail);
        demoBookingForm.checkErrorMessage('.hs-error-msg').should('have.text', 'Please enter a valid email address.').should('have.class', 'hs-error-msg');
    })
})