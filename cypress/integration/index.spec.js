// https://docs.cypress.io/api/introduction/api.html

describe("Index", () => {
  it("visits the project entry point", () => {
    cy.visit(Cypress.config().baseUrl);
    cy.title().should("eq", "Vue SPA App");
    cy.get("[data-cy=app]").should("be.visible");
  });
});
