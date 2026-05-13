import { describe, it, expect, vi } from "vitest";

import { fetchCountries } from "../src/api.js";

describe("API tests", () => {
  it("should fetch countries", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
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

    expect(countries[0].name.common).toBe("Sweden");
  });
});
