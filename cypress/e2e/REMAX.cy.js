/// <reference types="Cypress" />



describe('Remax', () => {

    beforeEach(() => {
        cy.visit('https://www.remax.com/')
    })
    it('Registration', () => {
        let email = Math.floor(Math.random() * 100 + 1)
        //cy.visit('https://www.remax.com/')
        cy.get('[data-test="account-side-menu-button"] > .hidden').click()
        cy.get('.auth-menu__tabs > .active').click()
        cy.get('[data-test="registration-input-email"] > .dinput > [data-test="d-input"]').type(`TesT!${email}@gmail.com`)
        cy.get('.relative > .dinput > [data-test="d-input"]').type(`Password${email}`)
        cy.get('[data-test="registration-button-continue"]').click()
    });
    it('SignIn', () => {
        //cy.visit('https://www.remax.com/')
        cy.get('[data-test="account-side-menu-button"] > .hidden').click()
        cy.get('[data-test="login-tab"]').click()
        cy.get('[data-test="login-email"] > .dinput > [data-test="d-input"]').type('choitim@mail.ru')
        cy.get('[data-test="login-password"] > .dinput > [data-test="d-input"]').type('333Test777!')
        cy.wait(2000)
        cy.get('[data-test="login-button"]').click()
        cy.wait(5000)
        cy.get('[data-test="account-side-menu-button"]').click()
        cy.wait(5000)
        cy.get('[data-test="account-settings-link"]').click()
        cy.wait(5000)
        cy.get('[data-test="account-settings-email"]').should('have.text', 'choitim@mail.ru')
        cy.get('.form-name > .detailContainer > p').should('be.visible')
        cy.get('[data-test="account-side-menu-button"] > .hidden').click()
        cy.wait(2000)
        cy.get('[data-test="logout-button"]').click()
        cy.wait(2000)
    });

    it('BUY', () => {
        //cy.visit('https://www.remax.com/')
        cy.get('[data-test="account-side-menu-button"] > .hidden').click()
        cy.get('[data-test="login-tab"]').click()
        cy.get('[data-test="login-email"] > .dinput > [data-test="d-input"]').type('choitim@mail.ru')
        cy.get('[data-test="login-password"] > .dinput > [data-test="d-input"]').type('333Test777!')
        cy.wait(2000)
        cy.get('[data-test="login-button"]').click()
        cy.wait(2000)
        cy.get('.utilities-button > [data-test="d-button"]').click()
        cy.get(':nth-child(1) > ul > :nth-child(1) > a').click()
        cy.get('[data-test="standalone-search-title"]').invoke('text').then((variable) =>variable.trim()).should("equal", "Homes for Sale")
        cy.get('.placeholder').type('74132{enter}')//.trigger('input')//{force:True})
        cy.get('[data-test="autocomplete-result-cat-zips"] > .w-full > [data-test="auto-complete-result"]').as('item')
        cy.get('@item').should('contain', '74132')
        cy.get('[data-test="autocomplete-result-cat-zips"] > .w-full > [data-test="auto-complete-result"] > p').click()
        cy.get('[data-test="min-bed-filter-3"]').click()
        cy.get('[data-test="max-bed-filter-3"]').click()
        cy.get('[data-test="min-baths-filter-2"]').click()
        cy.get('[data-test="standalone-search-submit-btn"]').click()
        cy.wait(3000)
        cy.get('.remove-place-pill-icon').click()
        //.type('{enter}').trigger('input')
    });
    it('NewWindow', () => {

        //cy.visit('https://www.remax.com/')
        //Cypress.config('chromeWebSecurity', false);
        cy.get('[data-test="account-side-menu-button"] > .hidden').click()
        cy.get('[data-test="login-tab"]').click()
        cy.get('[data-test="login-email"] > .dinput > [data-test="d-input"]').type('choitim@mail.ru')
        cy.get('[data-test="login-password"] > .dinput > [data-test="d-input"]').type('333Test777!')
        cy.wait(2000)
        cy.get('[data-test="login-button"]').click()
        cy.wait(4000)
        cy.get('[href="https://tech.remax.com/"]').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })


        //cy.get('#someLocator').invoke('removeAttr','target').click()


    });
    it('BackForward', () => {
        //cy.visit('https://www.remax.com/')

        cy.get('[data-test="account-side-menu-button"] > .hidden').click()
        cy.get('[data-test="login-tab"]').click()
        cy.get('[data-test="login-email"] > .dinput > [data-test="d-input"]').type('choitim@mail.ru')
        cy.get('[data-test="login-password"] > .dinput > [data-test="d-input"]').type('333Test777!')
        cy.wait(2000)
        cy.get('[data-test="login-button"]').click()
        cy.wait(4000)
        cy.get('.utilities-button > [data-test="d-button"]').as('menu')
        cy.get('@menu').click()
        cy.get(':nth-child(3) > ul > :nth-child(2) > a').click({ force: true })
        cy.go("back")
        cy.get('.logo-img').should("be.visible")
        cy.go("forward")
        cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').as("map")
        cy.get("@map").should("be.visible")

    });

})



