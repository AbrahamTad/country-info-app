// Group E2E tests
describe("World Explorer App", () => {
  // Test loading countries
  it("should load many countries when user clicks button", () => {
    cy.visit("http://localhost:5173");

    cy.get("#loadCountriesBtn").click();

    cy.get(".country").should("have.length", 12);
  });

  // Test search function
  it("should search country by name", () => {
    cy.visit("http://localhost:5173");

    cy.get("#searchInput").type("Sweden");

    cy.get("#loadCountriesBtn").click();

    cy.get(".country").should("contain.text", "SWEDEN");
  });

  // Test intro text
  it("should show country intro", () => {
    cy.visit("http://localhost:5173");

    cy.get("#loadCountriesBtn").click();

    cy.get(".country").first().should("contain.text", "located in");
  });
});
