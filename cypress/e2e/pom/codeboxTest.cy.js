/// <reference types="Cypress" />
import PracticePage from '../pages/PracticPage/practicPage';
import RegistrationPage from '../pages/PracticPage/RegistrationPage'

describe('My test suite', function(){

 before(function(){
     PracticePage.loadHomePage();
 })  


    it('practice page test casse', function(){
        PracticePage.getTitle();
        PracticePage.getDropdownOption();
        PracticePage.searchCountry();
        PracticePage.clickonRegForm();
    })


    it('registration page test casse', function(){
        RegistrationPage.getFirstName("sam");
        RegistrationPage.getLastName("jecksion");
        RegistrationPage.getEmail("sam@test.com");
        RegistrationPage.selectDropdown();
        RegistrationPage.selectCheckbox();
        RegistrationPage.submitForm();

        
    })





})