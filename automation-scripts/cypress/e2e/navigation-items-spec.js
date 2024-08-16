import 'cypress-real-events/support';
const pages = ['Product', 'FAQs', 'Company', 'Resources']
const urlNav = ['product', 'blytzpaty-faq', 'company', 'resources']
const dropdownMapping = {
    'Product': ['Solutions', 'BlytzCash'],
    'Resources': ['Blog', 'Events']
};

const dropdownUrlsMapping = {
    'Product': ['product', 'cash-launch'],
    'Resources': ['blog', 'events']
};

describe("navigation is working correctly", function () {
    it('check all links including dropdown', () => {
        cy.visit('/');

        pages.forEach((page, index) => {
            if (page in dropdownMapping) {
                cy.get('.kl-navbar').contains(page).realHover();
                dropdownMapping[page].forEach((dropdownPage, dropdownIndex) => {
                    const expectedUrl = dropdownUrlsMapping[page][dropdownIndex];
                    cy.get('li.kl-navbar-submenu__item').contains(dropdownPage).click();
                    cy.wait(1000);
                    cy.location('pathname').should('eq', `/${expectedUrl}`.toLowerCase());
                    cy.go('back')
                })
            } else {
                cy.get('.kl-navbar').contains(page).click();
                cy.log('url is ' + urlNav[index]);
                cy.location('pathname').should('eq', `/${urlNav[index]}`.toLowerCase());
                cy.go('back');
            }
        });
    });
});