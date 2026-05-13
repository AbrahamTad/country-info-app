// Convert name to uppercase
export function formatCountryName(name) {
  return name.toUpperCase();
}

// Count countries
export function countCountries(countries) {
  return countries.length;
}

// Filter countries
export function filterCountries(countries, searchText) {
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase()),
  );
}
