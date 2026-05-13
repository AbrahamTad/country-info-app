// Import Vitest functions
import { describe, it, expect, vi } from "vitest";

// Import API function
import { fetchCountries } from "../src/api.js";

// Group API tests
describe("API tests", () => {
  // Test API request
  it("should fetch countries from API", async () => {
    // Fake API response
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              name: { common: "Sweden" },
            },
          ]),
      }),
    );

    const countries = await fetchCountries();

    expect(countries[0].name.common).toBe("Sweden");
  });
});
