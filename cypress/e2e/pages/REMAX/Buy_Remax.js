/// <reference types="Cypress" />

class Buy_Remax{
    static Get_Click (){
        
        //cy.get('[data-test="login-button"]').click()
        cy.get('.utilities-button > [data-test="d-button"]').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > ul > :nth-child(1) > a').click() 
    }
    static assert(){
        cy.get('[data-test="standalone-search-title"]').invoke('text').then((variable) =>variable.trim()).should("equal", "Homes for Sale")

    }
    static type_13274 (){
        cy.get('.placeholder').type('74132{enter}')//.trigger('input')//{force:True})
        cy.get('[data-test="autocomplete-result-cat-zips"] > .w-full > [data-test="auto-complete-result"]').as('item')
    }static assert_contain(){
        cy.get('@item').should('contain', '74132')
        cy.get('[data-test="autocomplete-result-cat-zips"] > .w-full > [data-test="auto-complete-result"] > p').click()
        cy.get('[data-test="min-bed-filter-3"]').click()
        cy.get('[data-test="max-bed-filter-3"]').click()
        cy.get('[data-test="min-baths-filter-2"]').click()
        cy.get('[data-test="standalone-search-submit-btn"]').click()
        cy.wait(3000)
        cy.get('.remove-place-pill-icon').click()
    }

}
export default Buy_Remax