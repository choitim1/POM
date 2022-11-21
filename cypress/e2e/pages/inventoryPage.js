<reference type = 'Cypress'/>

class inventoryPage {
    elements = {
        assert : ()=> cy.get ('.title')
    }


}
module.exports() = new inventoryPage ()