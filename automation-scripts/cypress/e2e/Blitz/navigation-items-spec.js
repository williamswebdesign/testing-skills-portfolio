
import navigation from "../../pages/navigation.po";
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
    const navbar = new navigation();
    it('check all links including dropdown', () => {
        cy.visit('/');
        navbar.handlePages(pages, dropdownMapping, dropdownUrlsMapping, urlNav);
    });
});