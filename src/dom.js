import { formatCountryName } from "./utils.js";

// Create one country card
export function createCountryElement(country) {
  const div = document.createElement("div");

  div.className = "country";

  const countryName = country.name.common;

  const capital = country.capital?.[0] || "No capital";

  const region = country.region || "Unknown region";

  const population = country.population?.toLocaleString() || "Unknown";

  const flag = country.flags?.png || "";

  div.innerHTML = `
    <img
      class="flag"
      src="${flag}"
      alt="${countryName} flag"
    />

    <div>
      <h3>${formatCountryName(countryName)}</h3>

      <p><strong>Capital:</strong> ${capital}</p>

      <p><strong>Region:</strong> ${region}</p>

      <p><strong>Population:</strong> ${population}</p>
    </div>
  `;

  return div;
}

// Render countries to page
export function renderCountries(countries, container) {
  container.innerHTML = "";

  if (countries.length === 0) {
    container.innerHTML = `<p class="empty-message">No countries found.</p>`;

    return;
  }

  countries.slice(0, 12).forEach((country) => {
    const countryElement = createCountryElement(country);

    container.appendChild(countryElement);
  });
}
