import { fetchCountries } from "./api.js";
import { renderCountries } from "./dom.js";
import { filterCountries } from "./utils.js";

const button = document.querySelector("#loadCountriesBtn");
const container = document.querySelector("#countries");
const searchInput = document.querySelector("#searchInput");

let allCountries = [];

button.addEventListener("click", async () => {
  container.textContent = "Loading...";

  try {
    allCountries = await fetchCountries();
    renderCountries(allCountries, container);
  } catch (error) {
    container.textContent = "Something went wrong";
  }
});

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value;
  const filteredCountries = filterCountries(allCountries, searchText);

  renderCountries(filteredCountries, container);
});
