// Import functions
import { fetchCountries } from "./api.js";
import { renderCountries } from "./dom.js";
import { filterCountries } from "./utils.js";

// Select HTML elements
const button = document.querySelector("#loadCountriesBtn");

const container = document.querySelector("#countries");

const searchInput = document.querySelector("#searchInput");

// Store all countries
let allCountries = [];

// Load countries when button is clicked
button.addEventListener("click", async () => {
  container.textContent = "Loading...";

  try {
    // Fetch countries from API
    allCountries = await fetchCountries();

    // Get search text
    const searchText = searchInput.value;

    // Filter countries
    const filteredCountries = filterCountries(allCountries, searchText);

    // Show countries on page
    renderCountries(filteredCountries, container);
  } catch (error) {
    // Show error message
    container.textContent = "Something went wrong";
  }
});

// Search countries while typing
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value;

  const filteredCountries = filterCountries(allCountries, searchText);

  renderCountries(filteredCountries, container);
});
