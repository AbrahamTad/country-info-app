import { fetchCountries } from "./api.js";

import {
  renderCountries
} from "./dom.js";

import {
  filterCountries
} from "./utils.js";

// Select elements
const button =
  document.querySelector("#loadCountriesBtn");

const container =
  document.querySelector("#countries");

const searchInput =
  document.querySelector("#searchInput");

// Store countries
let allCountries = [];

// Load countries
button.addEventListener("click", async () => {

container.innerHTML = `<p class="loading">Loading countries...</p>`;

  try {

    allCountries =
      await fetchCountries();

    const searchText =
      searchInput.value;

    const filteredCountries =
      filterCountries(allCountries, searchText);

    renderCountries(
      filteredCountries,
      container
    );

  } catch (error) {

    container.textContent =
      "Something went wrong";
  }
});

// Search while typing
searchInput.addEventListener("input", () => {

  const searchText =
    searchInput.value;

  const filteredCountries =
    filterCountries(allCountries, searchText);

  renderCountries(
    filteredCountries,
    container
  );
});