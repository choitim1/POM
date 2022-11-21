class homeSausePage {
    element = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMesssage: () => cy.get('h3[data-test = "error"]')

    }
    typeUserName(username) {
        this.element.usernameInput().type(username)
    }
    typePassword(password) {
        this.element.passwordInput().type(password)
    }
    clickLogin(){
        this.clickLogin().click()
    }

}

    module.exports() =  new homeSausePage();