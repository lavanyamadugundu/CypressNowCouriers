/// <reference types="cypress" />

describe("Services Page Tests", () => {
  beforeEach(() => {
    cy.visit("/services/");
  });

  // Services Page Tests
  it("Services page - logo and cover banner", () => {
    // logo visiblity
    cy.get('[title="Now Couriers"]').should("be.visible");

    // cover banner visible
    cy.get(".wp-block-cover").should("be.visible");
  });

  it("About page - footer", () => {
    cy.footerValidation();
  });
});
