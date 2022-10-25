/// <reference types="cypress" />

describe("first spec", () => {
  it("navigate to webdriver university home page", () => {
    cy.visit("http://www.webdriveruniversity.com/");
  });

  it("click on contact us button in the home page", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us .section-title").click();
  });

  it("fill the contact us form", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get("[name=first_name]").type("Surya");
    cy.get("[name=last_name]").type("Prakash");
    cy.get("[name=email]").type("suryap@gmail.com");
    cy.get("[name=message]").type("Cypress is fun");
    cy.get("[value=SUBMIT]").click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  // to run only one test we can use only feature of mocha after it
  it("fill the contact us form with empty fields", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get("[name=first_name]").type("Surya");
    cy.get("[name=last_name]").type("Prakash");
    cy.get("[name=message]").type("Cypress is fun");
    cy.get("[value=SUBMIT]").click();
    cy.get("body").should("contain.text", "Invalid email address");
  });

  it.only("verify window commands and funcitons", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.document().should("have.property", "charset").and("eq", "UTF-8"); // yields window.document object
    cy.title().should("include", "WebDriver"); // yields title of the current window
    cy.url().should("include", "contactus"); // yields url of the current window
  });
});
