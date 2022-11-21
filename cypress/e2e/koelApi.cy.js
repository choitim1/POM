/// <reference types="Cypress" />

// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// // })

// const { expect } = require("chai");
let   ID_Play_list
let token
let List_Name
let url = "https://bbb.testpro.io/api/"
describe('Api Request', function () {
    it('Should Send Request', () => {
        cy.request('Post', 'https://bbb.testpro.io/api/me', {
            email: 'timurtsoi@yahoo.com',
            password: 'te$t$tudent'
        })
            .its('body')
            .then(function (res) {
                cy.log(res);
                token = res.token
                cy.log(token)

            })
         
    });

    it('create playList', function () {
        cy.request({
            method: 'POST',
            url: `${url}playlist`,
            auth: {
                bearer: token
            },
            body: {
                name: 'tim111'
            },
        })
                
            .then((data) => {
                cy.log(data)
                expect(data.body.name).to.be.equal(data.allRequestResponses[0]["Response Body"].name)

            })
            .its('body')
            //cy.log('body')

            .then((data) => {
                expect(data.id).is.not.null
                expect(data.is_smart).is.not.true
                ID_Play_list = data.id
                List_Name = data.name
                cy.log(data)
                cy.log(ID_Play_list)
                cy.log(List_Name)

            })
    });


    it('Get Play List', () => {
        cy.request({
            method: 'Get',
            url: `${url}playlist`,
            auth: {bearer: token}
        })
        

            .then((data) => {
            cy.log(data)

            expect(data.status).to.equal(200)
            expect(data.statusText).to.equal("OK")
            // .should('have.text',"OK")

                expect(data.body[0]).to.deep.equal({
                    id: 13977,
                    is_smart: false,
                    name: "sdfasd",
                    rules: []
  })
            })
            .its('body')
            .then((data)=>{
                cy.log(data)
                expect(data[0].id).to.equal( 13977)


            })
           

            
         


            //.its ('body')
        //
        //     .should('deep.equal',[
        //     {
        //     id: 9690,
        //     name: 'list 5',
        //     rules: Array(0),
        //     is_smart: false,
        //   },
        //     {
        //     id: 9654,
        //     name: 'NEW PLAYLIST',
        //     rules: Array(0),
        //     is_smart: false
        //     }
        // ])


    });
    it('Rename', function () {
        cy.request({
            method: 'PATCH',
            url: `${url}playlist/${ID_Play_list}`,
            auth: {bearer: token},
            body: {name: 'NAr1'},
        })
            .then((data)=>{

                expect(data.status).to.equal(200)
        })
            .its('body')
            .then((data)=>{
                cy.log(data)
                //expect(data.name).to.not.equal(List_Name)

            })

    });
    it('add song ', function () {
        cy.request({
            method : 'PUT',
            url :`${url}playlist/${ID_Play_list}/sync`,
            auth :{bearer : token},
            body: {songs: ['ee80373e0aa5855c50e4baa6f730ad8b']},

        })

            .then((data)=>{
                cy.log(data)
                expect(data.status).to.equal(200)
            })
            .its('body')
            .then((data)=>{
                cy.log(data)
            })

    });
    it('Get song', function () {
        cy.request({
            auth : {bearer : token},
            url : `${url}playlist/${ID_Play_list}/songs`,
            method : 'Get'

        })

            .then((data)=>{
                cy.log(data)
                expect(data.status).to.equal(200)
            })
            .its ('body')
            .then ((data)=>{
                cy.log(data)
            })
    });
    it('Delete Play LISt', function () {
        cy.request({
            auth :{bearer : token},
            method : 'delete',
            url : `${url}playlist/${ID_Play_list}`
        })
            .then((data)=>{
                cy.log(data)
                expect(data.status).to.equal(200)
            })
            .its('body')

    });
    it('get rest of play list', function () {
        cy.request({
            auth : {bearer : token},
            url : `${url}playlist`,
        })
            .then((data)=>{
                cy.log(data)
                expect(data.status).to.equal(200)
            })
            .its("body")
            .then((data)=>{
                cy.log(data)


            })
    });


})




// let token
// c
// let ID_Play_list
// let NewPlay
// describe('Api request', function () {
//     it('POst ', function () {
//     cy.request('POST', "https://bbb.testpro.io/api/me",{
//         email: 'timurtsoi@yahoo.com',
//         password:'te$t$tudent'
//     })
//         .its('body')
//         .then((res)=>{
//             cy.log(res)
//             token = res.token
//             cy.log(token)
//             //cy.log(`token=${token}`)
//     })
// });
//     it('create playList', function () {
//         cy.request({
//             method : 'POST',
//             url: `${url}playlist`,
//             auth :{
//                 bearer : token
//             },
//             body : {
//                 name : 'list 5'
//                     },
//         })

//             .then((data)=>{
//                cy.log(data)
//             })
//             .its('body')
//             .then((data)=>{
//                 expect(data.id).is.not.null
//                 ID_Play_list = data.id
//                 cy.log(data)
//                 cy.log(ID_Play_list)
//                 //expect(data.status).to.equals(200)
//             })


//     });
//     it('get play list', function () {
//         cy.request({
//             method : 'Get',
//             url : 'https://bbb.testpro.io/api/playlist',
//             auth : {
//                 bearer : token
//             }
//         }).then((data)=>{
//             cy.log(data)
//             expect(data.status).to.equals(200)

//         })
//             .its('body')
//             //expect(body.status).to.equals(200)
//             .then((data)=>{
//                 cy.log(data)

//             })

//     });
//     it('rename', function () {
//         cy.request({
//             method : 'PUT',
//             url : `${url}playlist/${ID_Play_list}`,
//             auth : {
//                 bearer : token},
//             body : {
//                 name :' renamed play list'
//             }
//         })

//             .then((data)=>{
//                 cy.log(data)
//                 expect(data.status).to.equals(200)
//             })
//             .its('body')
//             .then((data)=>{
//                 cy.log(data.id)
//                 NewPlay = data.id
//                 cy.log(NewPlay)
//                 expect(data.name).to.not.equal(ID_Play_list)
//             })

//     });
//     // it('Add song ', () => {
//     //     cy.request({
//     //         method: 'PUT',
//     //         url : `${url}playlist${NewPlay}/sync`,
//     //         auth : {
//     //             bearer : token
//     //         },
//     //         body: {
//     //             'song' : ["ee80373e0aa5855c50e4baa6f730ad8b"]
//     //         }
//     //         .then((data)=>{
//     //             cy.log(data)
//     //         })

//     // })
        
//     // });
//     it('delete', function () {
//         cy.request({
//             method : 'DELETE',
//             url : `${url}playlist/${ID_Play_list}`,
//             auth : {
//                 bearer : token},
//             body : {
//                 name :' renamed play list'
//             }

//         })

//     });
//     it('get play list', function () {
//         cy.request({
//             method : 'GET',
//             url : `${url}playlist`,
//             auth : {bearer : token}
//         })
//             .its('body')

//     });

// });