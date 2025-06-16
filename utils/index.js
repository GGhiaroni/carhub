export async function fetchCarros() {
  const headers = {
    "x-rapidapi-key": "f9fb169dfdmshbb09a40a4ce2292p1be1f6jsn8b15f2be40b0",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const data = response.json();

  return data;
}
