export function formatCountryName(name) {
  return name.toUpperCase();
}

export function countCountries(countries) {
  return countries.length;
}

export function filterCountries(countries, searchText) {
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase()),
  );
}
