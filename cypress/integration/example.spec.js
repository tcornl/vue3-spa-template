// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("navigate the app and verify elements", () => {
    cy.visit("/");
    cy.contains("h1", "You did it!").should("be.visible");
    cy.contains("a", "About").click();
    cy.contains("h1", "This is an about page").should("be.visible");
    cy.contains("a", "Sentry").click();
    cy.contains("button", "Throw error").should("be.visible");
  });
});
