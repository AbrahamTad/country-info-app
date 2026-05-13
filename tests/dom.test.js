import { describe, it, expect } from "vitest";
import { Window } from "happy-dom";
import { createCountryElement } from "../src/dom.js";

const window = new Window();
global.document = window.document;

describe("DOM tests", () => {
  it("should create a country element with name and capital", () => {
    const country = {
      name: {
        common: "Sweden",
      },
      capital: ["Stockholm"],
    };

    const element = createCountryElement(country);

    expect(element.nodeName).toBe("DIV");
    expect(element.className).toBe("country");
    expect(element.textContent).toContain("SWEDEN");
    expect(element.textContent).toContain("Capital: Stockholm");
  });
});
