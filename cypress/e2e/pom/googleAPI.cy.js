/// <reference types="Cypress" />

const { should } = require("chai");


//const { data } = require("cypress/types/jquery");
let place_id
let id
let baseUrl = "https://rahulshettyacademy.com/maps/api/place/"
describe("Google Api", () => {
  it('Post', () => {
    //cy.request(`${baseUrl}/maps/api/place/add/json`)
    cy.request({
      method: "Post",
      url: `${baseUrl}add/json?key=qaclick123`,
      body: {
        "location": {
          "lat": -38.383494,
          "lng": 33.427362
        },
        "accuracy": 50,
        "name": "Frontline house",
        "phone_number": "(+91) 983 893 3937",
        "address": "29, side layout, cohen 09",
        "types": [
          "shoe park",
          "shop"
        ],
        "website": "http://google.com",
        "language": "French-IN"
      }
    })
      .then((data) => {
        cy.log(data)
      })
      .its('body')
      .then((body) => {
        cy.log(body)
        expect(body.status).to.equal("OK")
        expect(body.id).is.not.null
        place_id = body.place_id
        id = (body.id)
        cy.log(place_id)
        cy.log(id)
      })

  });
  it('GET', () => {
    cy.request({
      method: "get",
      url: `${baseUrl}get/json?place_id=${place_id}&key=qaclick123`,
    })
      .then((data) => {
        cy.log(data)
        expect(data.status).to.equal(200)
        expect(data.statusText).to.equal("OK")
      })
      .its('body')
      .then((body) => {
        cy.log(body)
        expect(body.name).to.equal('Frontline house')
      })
  })
  it('PUT', () => {
    cy.request({
      method: "put",
      url: `${baseUrl}get/json?place_id=${place_id}&keyqaclick123`,
      body: {
        "place_id":"8d2573bdf6ceec0e474c5f388fa917fb",
        "address":"Kokchetavskaya 301, Bishkek",
        "key":"qaclick123"
      }
    })
      .then((data) => {
        cy.log(data)
        expect(data.status).to.equal(200)
        expect(data.statusText).to.equal("OK")
        cy.log(data.requestBody)
        expect(data.isOkStatusCode).to.be.true
     })

  })
  it('Delete', () => {
    cy.request({
    url : `${baseUrl}delete/json?keyqaclick123`,
    body :{
      place_id : `${place_id}`
    }
    })
  .then((data)=>{
      expect(data.status).to.equal(200)
      expect(data.statusText).to.equal("OK")

    })
    .its('body')
    


      
  });


})