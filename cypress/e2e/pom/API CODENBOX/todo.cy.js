/// <reference types="Cypress" />

describe('todos API',()=>{
it('return JSON', () => {
    cy.request("https:/localhost:3000/todos")
    .its("headers")
    .its("content-tipe")
    .should("include", "aplication/json")
});

})