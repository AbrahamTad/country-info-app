import { describe, it, expect, vi } from "vitest";
import { fetchCountries } from "../src/api.js";

describe("API integration test", () => {
  it("should fetch countries from REST API", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              name: {
                common: "Sweden",
              },
              capital: ["Stockholm"],
            },
          ]),
      }),
    );

    const countries = await fetchCountries();

    expect(countries[0].name.common).toBe("Sweden");
    expect(fetch).toHaveBeenCalledOnce();
  });
});
