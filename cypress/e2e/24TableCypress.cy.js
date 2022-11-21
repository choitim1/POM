/// <reference types="Cypress"/>

describe('My first test',function(){
it('Visit Codenbox', () => {
    cy.visit("https://codenboxautomationlab.com/practice/")
    cy.url().should("include", "codenbox")
    cy.wait(3000)
});
// find "Appium course name"
it('verify value from anywhere in the table', () => {
    cy.get('table >tbody >tr').contains("td", "Appium").should("be.visible")

    
});
it('check conditional logic in the table', () => {
    cy.get('table >tbody >tr td:nth-child(2)').each(($el, index, $list)=>{
      let  test = $el.text()
      let line = index

// cy.log(test)
// cy.log(line)

      if (test.includes("WebServices")) {
        cy.get("table >tbody >tr td:nth-child(3)").eq(index).then((price)=>{
             let ActualPrice =  price.text()
             expect(ActualPrice.trim()).to.equal("30")
        })
      }
    })
    
});


})





