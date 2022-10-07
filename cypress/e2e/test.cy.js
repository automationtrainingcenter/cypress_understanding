/// <reference types="cypress" />

describe('first spec', () => {
  it('navigate to webdriver university home page', () => {
    cy.visit('http://www.webdriveruniversity.com/')
  })

  it('click on contact us button in the home page', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#contact-us .section-title').click()
  })

  it('fill the contact us form', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name=first_name]').type('Surya')
    cy.get('[name=last_name]').type('Prakash')
    cy.get('[name=email]').type('suryap@gmail.com')
    cy.get('[name=message]').type('Cypress is fun')
    cy.get('[value=SUBMIT]').click()
  })
})