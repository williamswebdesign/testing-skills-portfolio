class bookingForm {
    fillEmail() {
        return cy.get('input[name="email"]');
    }

    fillFirstName() {
        return cy.get('input[name="firstname"]');
    }

    fillLastName() {
        return cy.get('input[name="lastname"]');
    }

    fillCompany() {
        return cy.get('input[name="0-2/name"]');
    }

    fillCompanyCashLaunch(){
        return cy.get('input[name="company"]');
    }

    fillPhone() {
        return cy.get('input[name="phone"]');
    }

    submitForm() {
        return cy.get('.hs-button').contains('GET STARTED');
    }

    verifySubmitButton() {
        return cy.get('.hs-button');
    }
    checkErrorMessage(selector) {
        return cy.get(selector);
    }

    clickInputsForm(elements) {
        // Loop through the array and perform the click action for the booking form
        return elements.forEach(selector => {
            cy.get(selector).click();
        });
    }

    getPreheaderElement(){
        return cy.get('.kl-rich-text__preheader')
    }
}

export default bookingForm;
