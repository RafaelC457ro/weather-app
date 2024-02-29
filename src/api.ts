const apikey = ''; // get from env next time
export async function getGeoLocation({ limit = 10, search }: { limit?: number; search: string }) {
  const request = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=${limit}&appid=${apikey}`,
  );
  const response = await request.json();
  return response;
}

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  // https://api.openweathermap.org/data/3.0/onecall?lat=-28.48&lon=-49.00&appid=25ef542799c468209677e5c1b1c07564
  const request = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}${apikey}`,
  );
  const response = await request.json();
  return response;
}
