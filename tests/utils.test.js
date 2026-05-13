import { describe, it, expect } from "vitest";
import {
  formatCountryName,
  countCountries,
  filterCountries,
} from "../src/utils.js";

describe("utils functions", () => {
  it("should format country name to uppercase", () => {
    expect(formatCountryName("Sweden")).toBe("SWEDEN");
  });

  it("should count countries", () => {
    const countries = ["Sweden", "Norway", "Denmark"];
    expect(countCountries(countries)).toBe(3);
  });

  it("should filter countries by search text", () => {
    const countries = [
      { name: { common: "Sweden" } },
      { name: { common: "Norway" } },
      { name: { common: "Denmark" } },
    ];

    const result = filterCountries(countries, "swe");

    expect(result[0].name.common).toBe("Sweden");
  });
});
