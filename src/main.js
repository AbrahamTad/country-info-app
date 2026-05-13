import { fetchCountries } from "./api.js";
import { renderCountries } from "./dom.js";
import { filterCountries } from "./utils.js";

// Select HTML elements
const button = document.querySelector("#loadCountriesBtn");
const container = document.querySelector("#countries");
const searchInput = document.querySelector("#searchInput");

// Store all countries from API
let allCountries = [];

// Load countries when button is clicked
button.addEventListener("click", async () => {
  container.innerHTML = `<p class="loading">Loading countries...</p>`;

  try {
    allCountries = await fetchCountries();

    const searchText = searchInput.value;
    const filteredCountries = filterCountries(allCountries, searchText);

    renderCountries(filteredCountries, container);
  } catch (error) {
    container.textContent = "Something went wrong";
  }
});

// Search countries while typing
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value;
  const filteredCountries = filterCountries(allCountries, searchText);

  renderCountries(filteredCountries, container);
});
