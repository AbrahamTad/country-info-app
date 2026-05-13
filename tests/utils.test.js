import { describe, it, expect } from "vitest";
import {
  formatCountryName,
  countCountries,
  filterCountries,
} from "../src/utils.js";

// Group utility tests
describe("utils functions", () => {
  // Test uppercase function
  it("should format country name to uppercase", () => {
    expect(formatCountryName("Sweden")).toBe("SWEDEN");
  });

  // Test count function
  it("should count countries", () => {
    const countries = ["Sweden", "Norway", "Denmark"];

    expect(countCountries(countries)).toBe(3);
  });

  // Test filter function
  it("should filter countries by search text", () => {
    const countries = [
      { name: { common: "Sweden" } },
      { name: { common: "Norway" } },
    ];

    const result = filterCountries(countries, "swe");

    expect(result[0].name.common).toBe("Sweden");
  });
});
