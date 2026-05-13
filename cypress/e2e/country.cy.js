describe("World Explorer App", () => {
  it("should load many countries when user clicks button", () => {
    cy.visit("http://localhost:5173");

    cy.get("#loadCountriesBtn").click();

    cy.get(".country").should("have.length", 12);
    cy.get(".country").first().should("contain.text", "Capital");
  });

  it("should search country by name", () => {
    cy.visit("http://localhost:5173");

    cy.get("#searchInput").type("Sweden");
    cy.get("#loadCountriesBtn").click();

    cy.get(".country").should("contain.text", "SWEDEN");
  });
});
