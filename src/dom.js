import { formatCountryName } from "./utils.js";

// Create intro text
export function createCountryIntro(country) {
  const countryName = country.name.common;
  const region = country.region || "Unknown";
  const subregion = country.subregion || "Unknown";

  return `${countryName} is located in ${region}, specifically in ${subregion}.`;
}

// Create country card
export function createCountryElement(country) {
  const div = document.createElement("div");

  div.className = "country";

  const countryName = country.name.common;

  const capital = country.capital?.[0] || "No capital";

  const region = country.region || "Unknown";

  const population = country.population?.toLocaleString() || "Unknown";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "Unknown";

  const flag = country.flags?.png || "";

  div.innerHTML = `
    <img src="${flag}" class="flag" />

    <div>
      <h3>${formatCountryName(countryName)}</h3>

      <p><strong>Capital:</strong> ${capital}</p>

      <p><strong>Region:</strong> ${region}</p>

      <p><strong>Population:</strong> ${population}</p>

      <p><strong>Languages:</strong> ${languages}</p>

      <p class="intro">
        ${createCountryIntro(country)}
      </p>
    </div>
  `;

  return div;
}

// Render countries to page
export function renderCountries(countries, container) {
  if (countries.length === 0) {
    container.innerHTML = `<p class="empty-message">No countries found.</p>`;
    return;
  }

  countries.slice(0, 12).forEach((country) => {
    const countryElement = createCountryElement(country);

    container.appendChild(countryElement);
  });
}
