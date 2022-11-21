


/// <reference types="Cypress" />


class  KoelRegistrationPage {

    static loadHomePage (){
        cy.visit('https://bbb.testpro.io/registration.php')
        cy.url().should('include', 'registration')
    }

    static inputEmail (){
        let email = Math.floor(Math.random()*1000+1)
        cy.get ('#email').type(`${email}qwer@gmail.com`,{delay:30}).should('be.visible')
    }
    static RegisterButton (){
        cy.get ('#button').click()
    }
    static getElement (){
        cy.get('h3').should('have.text', 'Registration Successful')
    }
    static LogIn(){
        cy.get('a[class="button"]').click()
    }
    

}
export default KoelRegistrationPage;
//module.exports =  new  KoelRegistrationPage()