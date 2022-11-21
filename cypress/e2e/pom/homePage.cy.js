

import homeSaucePage from "../pages/saucedemo/homeSaucePage";
import inventoryPage from "../pages/inventoryPage";
//import { before } from "mocha";
//import { describe } from "mocha";

describe ('POM',()=>{
    before(()=>{
        cy.visit('https://www.saucedemo.com/')
      
    });
    
    it('Should login to inventory', () => {
        //cy.visit('https://www.saucedemo.com/')
        homeSaucePage.typeUserName('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin()
        inventoryPage.elements.assert().should('have.text', 'Product')
    });
})