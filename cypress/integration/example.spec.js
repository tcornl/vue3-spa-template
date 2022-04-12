// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "You did it!");
  });
});

describe("App Navigation", () => {
  it("navigates the app views and verifies page content", () => {
    cy.visit("/");
    cy.url().should("eq", "http://localhost:5050/vue3-spa-template/#/");
    cy.contains("h1", "You did it!").should("be.visible");
    cy.contains("a", "About").click();
    cy.url().should("eq", "http://localhost:5050/vue3-spa-template/#/about");
    cy.contains("h1", "This is an about page").should("be.visible");
    cy.contains("a", "Sentry").click();
    cy.url().should("eq", "http://localhost:5050/vue3-spa-template/#/sentry");
    cy.contains("button", "Throw error").should("be.visible");
  });
});

describe("Dynamic Route Matching", () => {
  it("directly navigates to non-home pages", () => {
    cy.visit("/#/about");
    cy.url().should("eq", "http://localhost:5050/vue3-spa-template/#/about");
  });
});

describe("Page Not Found", () => {
  it("indicates the page does not exist and provides a button link to home ", () => {
    cy.visit("/#/abc123");
    cy.contains("h1", "Sorry, this page does not exist!").should("be.visible");
    cy.contains("a", "Back To Home").click();
    cy.url().should("eq", "http://localhost:5050/vue3-spa-template/#/");
  });
});
