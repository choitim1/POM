/// <reference types="Cypress"/>
class back {
    static reg1(){
        cy.get('[data-test="account-side-menu-button"] > .hidden').click()
        cy.get('[data-test="login-tab"]').click()
        cy.get('[data-test="login-email"] > .dinput > [data-test="d-input"]').type('choitim@mail.ru')
        cy.get('[data-test="login-password"] > .dinput > [data-test="d-input"]').type('333Test777!')
        cy.wait(2000)
        cy.get('[data-test="login-button"]').click()
        cy.wait(4000)

    }
    static force (){
        cy.get('.utilities-button > [data-test="d-button"]').as('menu')
        cy.get('@menu').click()
        cy.get(':nth-child(3) > ul > :nth-child(2) > a').click({ force: true })
        cy.go("back")
    }
    static assert(){
        cy.get('.logo-img').should("be.visible")
        cy.go("forward")
        cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').as("map")
        cy.get("@map").should("be.visible")

    }

}
export default back