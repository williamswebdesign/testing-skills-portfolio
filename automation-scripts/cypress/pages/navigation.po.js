import 'cypress-real-events/support';
class navigation {
    hoverOverPage(page) {
        cy.get('.kl-navbar').contains(page).focus().realHover();
    }

    clickDropDownItem(dropdownPage) {
        cy.get('li.kl-navbar-submenu__item').contains(dropdownPage).click();
    }

    clickPage(page) {
        cy.get('.kl-navbar').contains(page).click();
    }

    verifyUrl(expectedUrl) {
        cy.location('pathname').should('eq', `/${expectedUrl}`.toLowerCase());
    }

    navigateBack() {
        cy.go('back');
    }

    handlePages(pages, dropdownMapping, dropdownUrlsMapping, urlNav) {
        pages.forEach((page, index) => {
            if (page in dropdownMapping){
                this.hoverOverPage(page);
                cy.wait(500);
                dropdownMapping[page].forEach((dropdownPage, dropdownIndex) => {
                    const expectedUrl = dropdownUrlsMapping[page][dropdownIndex];
                    this.clickDropDownItem(dropdownPage);
                    this.verifyUrl(expectedUrl);
                    this.navigateBack();
                    cy.wait(500);
                });
            } else {
                this.clickPage(page);
                this.verifyUrl(urlNav[index]);
                this.navigateBack();
                cy.wait(500);
            }
        });
    }
}

export default navigation;