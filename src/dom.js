import { formatCountryName } from "./utils.js";

export function createCountryElement(country) {
  const div = document.createElement("div");

  div.className = "country";

  const countryName = country.name.common;

  div.textContent = formatCountryName(countryName);

  return div;
}

export function renderCountries(countries, container) {
  container.innerHTML = "";

  countries.slice(0, 5).forEach((country) => {
    const countryElement = createCountryElement(country);

    container.appendChild(countryElement);
  });
}
