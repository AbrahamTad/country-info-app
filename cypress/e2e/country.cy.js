describe("Country Info App", () => {
  it("should load countries when user clicks button", () => {
    cy.visit("http://localhost:5173");

    cy.get("#loadCountriesBtn").click();

    cy.get("#countries").should("not.be.empty");

    cy.get(".country").should("exist");
  });
});
