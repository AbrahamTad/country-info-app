// Import helper function
import { formatCountryName } from "./utils.js";

// Create small intro text
export function createCountryIntro(country) {
  const countryName = country.name.common;
  const region = country.region || "unknown region";
  const subregion = country.subregion || "unknown area";

  return `${countryName} is located in ${region}, specifically in ${subregion}.`;
}

// Create HTML element for one country
export function createCountryElement(country) {
  // Create div element
  const div = document.createElement("div");

  div.className = "country";

  // Get country data
  const countryName = country.name.common;
  const capital = country.capital?.[0] || "No capital";

  // Add HTML inside div
  div.innerHTML = `
    <h3>${formatCountryName(countryName)}</h3>
    <p>Capital: ${capital}</p>
  `;

  return div;
}

// Render countries to HTML page
export function renderCountries(countries, container) {
  // Clear old content
  container.innerHTML = "";

  // Loop through countries
  countries.slice(0, 12).forEach((country) => {
    const countryElement = createCountryElement(country);

    // Add country to page
    container.appendChild(countryElement);
  });
}
