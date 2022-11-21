import homeSausePageCy from "../pages/saucedemo/homeSausePage.cy";
import inventoryPageCy from "../pages/inventoryPage";
//import { describe } from "mocha";

describe ('POM',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })
    it('Should login to inventory', () => {
        homeSausePageCy.typeRightUserName('standard_user')
        inventoryPageCy.typeRightPassword('secret_sauce')
        homeSausePageCy.clickLogin()
        inventoryPageCy.elements.asserts().should('have.text', 'Product')
    });
})