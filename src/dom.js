import { formatCountryName } from "./utils.js";

export function createCountryElement(country) {
  const div = document.createElement("div");

  div.className = "country";

  const countryName = country.name.common;
  const capital = country.capital?.[0] || "No capital";

  div.innerHTML = `
    <h3>${formatCountryName(countryName)}</h3>
    <p>Capital: ${capital}</p>
  `;

  return div;
}

export function renderCountries(countries, container) {
  container.innerHTML = "";

  countries.slice(0, 12).forEach((country) => {
    const countryElement = createCountryElement(country);
    container.appendChild(countryElement);
  });
}
