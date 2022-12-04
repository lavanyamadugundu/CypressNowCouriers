/// <reference types="cypress" />

describe("About Page Tests", () => {
  beforeEach(() => {
    cy.visit("/about/");
  });

  // About Page Tests
  it("About page - logo and cover banner", () => {
    // logo visiblity
    cy.get('[title="Now Couriers"]').should("be.visible");

    // cover banner visible
    cy.get(".wp-block-cover").should("be.visible");
  });

  it("About page - Our Partner network", () => {
    // Our Partner network
    cy.get('[class="wp-block-group__inner-container"]').eq(1).should("be.visible");

    // Post Haster
    cy.get('[class="wp-block-image"]').eq(1).should("be.visible");

    // NZ Couriers
    cy.get('[class="wp-block-image"]').eq(2).should("be.visible");

    // Castle Parcel
    cy.get('[class="wp-block-image"]').eq(3).should("be.visible");

    // Sub 60
    cy.get('[class="wp-block-image"]').eq(4).should("be.visible");

    // Security express
    cy.get('[class="wp-block-image"]').eq(5).should("be.visible");

    // Kiwi express
    cy.get('[class="wp-block-image"]').eq(6).should("be.visible");
  });

  it("About page - footer", () => {
    cy.footerValidation();
  });
});
