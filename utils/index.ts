export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "7e4f925935msh1580f97ec8903a9p1e59cbjsn5017422f95ff",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?modal=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
