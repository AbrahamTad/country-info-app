// Group all E2E tests
describe("World Explorer App", () => {
  // Test loading countries from API
  it("should load many countries when user clicks button", () => {
    // Open homepage
    cy.visit("http://localhost:5173");

    // Click load button
    cy.get("#loadCountriesBtn").click();

    // Check if countries are displayed
    cy.get(".country").should("have.length", 12);
  });

  // Test country search
  it("should search country by name", () => {
    // Open homepage
    cy.visit("http://localhost:5173");

    // Type search text
    cy.get("#searchInput").type("Sweden");

    // Click load button
    cy.get("#loadCountriesBtn").click();

    // Check if Sweden exists
    cy.get(".country").should("contain.text", "SWEDEN");
  });

  // Test intro text rendering
  it("should show intro text", () => {
    // Open homepage
    cy.visit("http://localhost:5173");

    // Load countries
    cy.get("#loadCountriesBtn").click();

    // Check intro text
    cy.get(".country").first().should("contain.text", "located in");
  });

  // Test About page navigation
  it("should open about page and go back home", () => {
    // Open homepage
    cy.visit("http://localhost:5173");

    // Open about page
    cy.contains("About page").click();

    // Check URL and content
    cy.url().should("include", "/about.html");

    cy.contains("About World Explorer App").should("be.visible");

    // Go back home
    cy.contains("Back home").click();

    // Check homepage
    cy.url().should("include", "/index.html");

    cy.contains("World Explorer App").should("be.visible");
  });

  // Test Contact page navigation
  it("should open contact page and go back home", () => {
    // Open homepage
    cy.visit("http://localhost:5173");

    // Open contact page
    cy.contains("Contact").click();

    // Check URL and content
    cy.url().should("include", "/contact.html");

    cy.contains("Contact Page").should("be.visible");

    // Check email text
    cy.contains("Email: world@app.com").should("be.visible");

    // Go back home
    cy.contains("Back home").click();

    // Check homepage
    cy.url().should("include", "/index.html");

    cy.contains("World Explorer App").should("be.visible");
  });
  // Test loading state
  it("should show loading text when user clicks button", () => {
    cy.visit("http://localhost:5173");

    cy.get("#loadCountriesBtn").click();

    cy.contains("Loading countries").should("exist");
  });

  // Test no results search 
  it("should show no countries found when search has no result", () => {
    cy.visit("http://localhost:5173");

    cy.get("#searchInput").type("zzzzzz");
    cy.get("#loadCountriesBtn").click();

    cy.contains("No countries found.").should("be.visible");
  });
});
