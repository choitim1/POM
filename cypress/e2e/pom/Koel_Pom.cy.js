//import { describe } from "mocha";
/// <reference types="Cypress" />
import KoelRegistrationPage from "../pages/KOEL/Koel_Registration_page";
import LogInPage from "../pages/KOEL/Log_in_Page";
//import deletePlayList from "../pages/KOEL/addNewPiayList";



describe('My test suite', () => {
    before(function () {
        KoelRegistrationPage.loadHomePage()
    })
    it('registration', () => {
        KoelRegistrationPage.inputEmail();
        KoelRegistrationPage.RegisterButton();
        KoelRegistrationPage.getElement();
        KoelRegistrationPage.LogIn();
    });
    it('Login', () => {
        LogInPage.InputEmail()
        LogInPage.InputPassword();
        LogInPage.LogIn()
        LogInPage.StudentPresent()

    })
    // it('add play list', () => {
    //     deletePlayList.selectPlayList(); 
            
    //     // deletePlayList.type_name();
    //     // deletePlayList.assert()

    // });

})

