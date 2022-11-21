/// <reference types="Cypress" />
//import { describe } from "mocha";
import RegistrationRemaxPage from "../pages/REMAX/Registration";
import SignIN from "../pages/REMAX/SignInRemax";
import Buy_Remax from "../pages/REMAX/Buy_Remax"
import New_Window from "../pages/REMAX/newWindow"
import back from "../pages/REMAX/BackForward"

describe("My test Remax suite", () => {
    beforeEach(() => {
        cy.visit('https://www.remax.com/')
    })
    it('Registration', () => {
        RegistrationRemaxPage.clickForAccess();
        RegistrationRemaxPage.Input_Email();
        RegistrationRemaxPage.Input_Password()
    });
    it('SignIN', () => {
        SignIN.Click();
        SignIN.Email();
        SignIN.password();
        SignIN.assertion()

    });
    it('Buy', () => {
        SignIN.Click();
        SignIN.Email();
        SignIN.password();
        Buy_Remax.Get_Click();
        Buy_Remax.assert();
        Buy_Remax.type_13274();
        Buy_Remax.assert_contain()
    });
    it('window', () => {
        New_Window.reg();
        New_Window.move();

    });
    it('Back', () => {
        back.reg1();
        back.force();
        back.assert();


    });






})