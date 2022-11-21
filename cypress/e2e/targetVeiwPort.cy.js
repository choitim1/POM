describe('diff viewPOrts', () => {
    before(() => {
        cy.log('run my test')
    })
    beforeEach(() => {
        cy.visit('https://www.target.com/')
        
    })

    // it('iphone-6', () => {
    //     cy.viewport('iphone-6')
    //     cy.wait(2000)
    //     cy.get('[data-test="@web/AccountLinkMobile"] > .styles__LinkContainer-sc-u2k6h-2 > img').click()
    //     cy.wait(2000)
    //     cy.get('[data-test="accountNav-signIn"] > .styles__ListItemText-sc-5oc0g9-1').click()
    //     cy.contains('Sign in').click()
    //     cy.wait(2000);
    //     cy.get('#username').type('choitim2010@gmail.com')
    //     cy.get('#password').type('333TargeT777!')
    //     cy.get('#login').click()
    //     cy.wait(2000)
    //     cy.get('.styles__LinkText-sc-u2k6h-3').should('contain', 'Hi, Timur')
    //     cy.get('[data-test="@web/AccountLinkMobile"] > .styles__LinkContainer-sc-u2k6h-2 > img').click()
    //     cy.get('[data-test="accountNav-guestSignOut"] > .styles__ListItemText-sc-5oc0g9-1').click()
    //     cy.log(' Iphone-6 DONE')
    // })
    // it('ipad2', () => {
    //     cy.viewport('ipad-2')
    //     cy.wait(200)
    //     cy.get('.styles__LinkText-sc-u2k6h-3').click()
    //     cy.get('[data-test="accountNav-signIn"] > .styles__ListItemText-sc-5oc0g9-1').click()
       
    //     cy.contains('Sign in').click()
    //     cy.wait(2000);
    //     cy.get('#username').type('choitim2010@gmail.com')
    //     cy.get('#password').type('333TargeT777!')
    //     cy.get('#login').click()
    //     cy.wait(2000)
    //     cy.get('.styles__LinkText-sc-u2k6h-3').should('contain', 'Hi, Timur')
    //     cy.get('.styles__LinkText-sc-u2k6h-3').click()
    //     cy.get('[data-test="accountNav-guestSignOut"] > .styles__ListItemText-sc-5oc0g9-1').click()
    //     cy.log('Ipad-2 DONE')

    // });
    it('macbook 13', () => {
        cy.viewport('macbook-13')
        cy.wait(200)
        cy.get('.styles__LinkText-sc-u2k6h-3').click()
      
        cy.get('[data-test="accountNav-signIn"] > .styles__ListItemText-sc-5oc0g9-1').click()
        cy.contains('Sign in').click()
        cy.wait(2000);
        cy.get('#username').type('choitim2010@gmail.com')
        cy.get('#password').type('333TargeT777!')
        cy.get('#login').click()
        cy.wait(2000)
        cy.get('.styles__LinkText-sc-u2k6h-3').should('contain', 'Hi, Timur')
        cy.get('.styles__LinkText-sc-u2k6h-3').click()
        cy.get('[data-test="accountNav-guestSignOut"] > .styles__ListItemText-sc-5oc0g9-1').click()
        cy.log(' mac -13 DONE')

    });
    // it ('iphone-3',()=>{
    //     cy.viewport('iphone-3')
    //     cy.wait(2000)
    //     cy.get('[data-test="@web/AccountLinkMobile"] > .styles__LinkContainer-sc-u2k6h-2 > img').click()
    //     cy.wait(2000)
    //     cy.get('[data-test="accountNav-signIn"] > .styles__ListItemText-sc-5oc0g9-1').click()
    //     cy.contains('Sign in').click()
    //     cy.wait(2000);
    //     cy.get('#username').type('choitim2010@gmail.com')
    //     cy.get('#password').type('333TargeT777!')
    //     cy.get('#login').click()
    //     cy.wait(2000)
    //     cy.get('.styles__LinkText-sc-u2k6h-3').should('contain', 'Hi, Timur')
    //     cy.get('[data-test="@web/AccountLinkMobile"] > .styles__LinkContainer-sc-u2k6h-2 > img').click()
    //     cy.get('[data-test="accountNav-guestSignOut"] > .styles__ListItemText-sc-5oc0g9-1').click()
    //     cy.log(' Iphone-3 DONE')

    // })

})

