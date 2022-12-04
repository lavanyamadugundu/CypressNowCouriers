/// <reference types="cypress" />

describe("Contact Page Tests", () => {
  beforeEach(() => {
    cy.visit("/contact/");
  });

  // Contact Page Tests
  it("Contact page - logo and banner", () => {
    // Now logo
    cy.get('[title="Now Couriers"]').should("be.visible");

    // Cover banner
    cy.get(".wp-block-column").eq(0).should("be.visible");
  });

  // REQUEST A CALLBACK
  it("Contact page - REQUEST A CALLBACK", () => {
    // Application for credit - click

    //Please fill out the form
    cy.get('[name="input_1"]').type("FIS QA Team");

    cy.get("#input_18_16").type("Freightways Information Services");

    cy.get("#input_18_18").type("32 Botha Road");

    cy.get("#input_18_20").type("Auckland");

    cy.get("#input_18_13").type("0224266470");

    cy.get("#input_18_14").type(
      "fis-automationtesting-admin@freightways.co.nz"
    );

    cy.get("#input_18_21").type(
      "This is FIS automated test generated call back request"
    );

    cy.get("#input_18_23").type(
      "FIS automated test"
    );

    cy.get('select').select('Other');

    cy.get("#input_18_6").type(
      "FIS automated test"
    );

    cy.get('[type="submit"]').click();
    cy.wait(12000);
    // Confirmation message 
    cy.get('.wp-block-group__inner-container > .is-layout-flex')
      .contains("Thank you, we’ll be in touch shortly");
  });

  it("Contact page - footer", () => {
    cy.footerValidation();
  });
});
