/// <reference types='Cypress' />
class New_Window {
    static reg(){
        cy.get('[data-test="account-side-menu-button"] > .hidden').click()
        cy.get('[data-test="login-tab"]').click()
        cy.get('[data-test="login-email"] > .dinput > [data-test="d-input"]').type('choitim@mail.ru')
        cy.get('[data-test="login-password"] > .dinput > [data-test="d-input"]').type('333Test777!')
        cy.wait(2000)
        cy.get('[data-test="login-button"]').click()
        cy.wait(4000) 
    }
    static move (){
        cy.get('[href="https://tech.remax.com/"]').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
    }


}
export default New_Window;