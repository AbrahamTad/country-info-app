// Convert country name to uppercase
export function formatCountryName(name) {
  return name.toUpperCase();
}

// Count total countries
export function countCountries(countries) {
  return countries.length;
}

// Filter countries by search text
export function filterCountries(countries, searchText) {
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase()),
  );
}
