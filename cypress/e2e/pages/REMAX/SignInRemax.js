/// <reference types="Cypress" />
class SignIN{
    static Click (){
        cy.get('[data-test="account-side-menu-button"] > .hidden').click()
        cy.get('[data-test="login-tab"]').click()
    }
    static Email (){
        cy.get('[data-test="login-email"] > .dinput > [data-test="d-input"]').type('choitim@mail.ru') 
    }
    static password (){
        cy.get('[data-test="login-password"] > .dinput > [data-test="d-input"]').type('333Test777!')
        cy.wait(2000)
        cy.get('[data-test="login-button"]').click()
        cy.wait(5000)
        cy.get('[data-test="account-side-menu-button"]').click()
        cy.wait(5000)
        cy.get('[data-test="account-settings-link"]').click()
        cy.wait(5000)
    }
    static assertion (){
        cy.get('[data-test="account-settings-email"]').should('have.text', 'choitim@mail.ru')
        cy.get('.form-name > .detailContainer > p').should('be.visible')
        cy.get('[data-test="account-side-menu-button"] > .hidden').click()
        cy.wait(2000)
        cy.get('[data-test="logout-button"]').click()
        cy.wait(2000)
    }

}
export default SignIN;