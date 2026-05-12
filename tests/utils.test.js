import { describe, it, expect } from "vitest";
import { formatCountryName, countCountries } from "../src/utils.js";

describe("utils functions", () => {
  it("should format country name to uppercase", () => {
    expect(formatCountryName("Sweden")).toBe("SWEDEN");
  });

  it("should count countries", () => {
    const countries = ["Sweden", "Norway", "Denmark"];

    expect(countCountries(countries)).toBe(3);
  });
});
