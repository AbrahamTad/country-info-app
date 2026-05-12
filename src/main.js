import { fetchCountries } from "./api.js";
import { renderCountries } from "./dom.js";

const button = document.querySelector("#loadCountriesBtn");

const container = document.querySelector("#countries");

button.addEventListener("click", async () => {
  container.textContent = "Loading...";

  try {
    const countries = await fetchCountries();

    renderCountries(countries, container);
  } catch (error) {
    container.textContent = "Something went wrong";
  }
});
