// Import Vitest functions
import { describe, it, expect } from "vitest";

// Import happy-dom
import { Window } from "happy-dom";

// Import DOM functions
import { createCountryElement } from "../src/dom.js";

// Create fake browser window
const window = new Window();

global.document = window.document;

// Group DOM tests
describe("DOM tests", () => {
  // Test country element creation
  it("should create country element", () => {
    const country = {
      name: { common: "Sweden" },
      capital: ["Stockholm"],
    };

    const element = createCountryElement(country);

    expect(element.className).toBe("country");

    expect(element.textContent).toContain("SWEDEN");
  });
});
