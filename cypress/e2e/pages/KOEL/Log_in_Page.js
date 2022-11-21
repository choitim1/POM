/// <reference types="Cypress" />

class LogInPage {

    static InputEmail(email) {
        cy.get('input[type="email"]').type('timurtsoi@yahoo.com', { delay: 30 }).should('have.value', 'timurtsoi@yahoo.com')
    }
    static InputPassword(password) {
        cy.get('input[type="password"]').type('te$t$tudent', { delay: 30 }).should('have.value', 'te$t$tudent')
    }
    static LogIn(){
        cy.get ('button').click()
    }
    static  StudentPresent (){
        cy.get('span[class="name"]').should('have.text', 'student')
    }
}
//export default LogInPage()
//module.exports =  new LogInPage()
export default LogInPage;



