
/// <reference types="Cypress" />
class deletePlayList {
    static selectPlayList() {
        cy.contains('tim').click({force:true}).rightclick()
        cy.get('[data-testid="playlist-context-menu-delete-13379"]').click()
        cy.wait(2000)

        // cy.get('#playlists > ul > :nth-child(3) > a').rightclick().select('Edit').click()
        // cy.contains('Catchy Songs').click({force:true}).clear()
    }
    // static type_name() {
    //     cy.contains('Catchy Songs').click({force:true}).type('my new play list', {delay: 30}).type({enter})
        
    //     cy.get('[data-testid="playlist-context-menu-create-simple"]').type('my new play list', {delay: 30}).type({enter})

    //}
    // static assert() {
    //     cy.get('a').should('have.text', 'my new play list')
    // }

}

export default deletePlayList;