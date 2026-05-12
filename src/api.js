export async function fetchCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital",
  );

  if (!response.ok) {
    throw new Error("Could not fetch countries");
  }

  return response.json();
}
