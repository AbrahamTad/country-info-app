import { describe, it, expect, vi } from "vitest";
import { fetchCountries } from "../src/api.js";

// API tests
describe("API tests", () => {
  // Test fetching countries
  it("should fetch countries", async () => {
    // Fake fetch request
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,

        // Fake API response
        json: () =>
          Promise.resolve([
            {
              name: {
                common: "Sweden",
              },
            },
          ]),
      }),
    );

    const countries = await fetchCountries();

    // Check result
    expect(countries[0].name.common).toBe("Sweden");
  });
});
