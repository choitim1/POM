/// <reference types="Cypress" />

class RegistrationRemaxPage {
   
 
    static clickForAccess() {
        cy.get('[data-test="account-side-menu-button"] > .hidden').click()
        cy.get('.auth-menu__tabs > .active').click()
    }
    static Input_Email() {
        let email = Math.floor(Math.random() * 100 + 1)
        cy.get('[data-test="registration-input-email"] > .dinput > [data-test="d-input"]').type(`TesT!${email}@gmail.com`)
    }
    static Input_Password (){
        let email = Math.floor(Math.random() * 100 + 1)
        cy.get('.relative > .dinput > [data-test="d-input"]').type(`Password${email}`)
        cy.get('[data-test="registration-button-continue"]').click()
    }


}
export default RegistrationRemaxPage;