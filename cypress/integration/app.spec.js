// https://docs.cypress.io/api/introduction/api.html

import navigation from "../fixtures/navigation.json";

describe("App Root", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.url().should("eq", Cypress.config().baseUrl + Cypress.env("home"));
    cy.visit("#/");
    cy.url().should("eq", Cypress.config().baseUrl + Cypress.env("home"));
    cy.visit(Cypress.env("home")); // Use this format for app navigation going forward
    cy.url().should("eq", Cypress.config().baseUrl + Cypress.env("home"));
  });
});

describe("Page Not Found", () => {
  it("indicates the page does not exist", () => {
    cy.visit(navigation["not_found_hash"]);
    cy.contains("p", "Page does not exist!").should("be.visible");
  });
});

describe("404", () => {
  it("returns a 404 error", () => {
    cy.request({
      url: Cypress.env("build_domain") + navigation["404_url"],
      failOnStatusCode: false,
    })
      .its("status")
      .should("eq", 404);
  });
});

describe("Header", () => {
  it("tests the app header", () => {
    cy.visit(Cypress.env("home"));
    cy.get("[data-cy=header]")
      .should("be.visible")
      .contains("Home")
      .should("have.attr", "href", Cypress.env("home"))
      .click();
    cy.url().should("eq", Cypress.config().baseUrl + Cypress.env("home"));
  });
});

describe("Footer", () => {
  it("tests the app footer", () => {
    cy.visit(Cypress.env("home"));
    cy.get("[data-cy=footer]")
      .should("be.visible")
      .contains("Source code")
      .should("have.attr", "href", Cypress.env("source_code"));
  });
});
