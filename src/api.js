// Fetch country data from REST Countries API
export async function fetchCountries() {
  // Send request to API
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,languages,flags",
  );

  // Check if request failed
  if (!response.ok) {
    throw new Error("Could not fetch countries");
  }

  // Return JSON data
  return response.json();
}
