/// <reference types="cypress" />
describe("Inspect automation test store first item using chain of commands", () => {
  it("Click on first item using item header", () => {
    cy.visit("http://automationteststore.com/");
    cy.get("#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname").click();
  });

  it.only("Click on first item using item text", () => {
    cy.visit("http://automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(($itemHeader) => {
        // console.log("Header is " + $itemHeader.text());
        const headerText = $itemHeader.text();
        cy.log("Header is " + headerText);
      });
  });

  it("click on first item using index", () => {
    cy.visit("http://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
