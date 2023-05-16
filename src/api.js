export const getApioptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '55d9e97377msh32b2d5f3749dea0p1165dbjsn42e105997e19',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

export const GEO_API_URL= 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
export const WEATHER_API_URL ='https://api.openweathermap.org/data/2.5';
export const API_KEY = 'YOUR API';


export async function getCities(inputValue) {
  const response = await fetch(`${GEO_API_URL}/?minPopulation=10000000&namePrefix=${inputValue}`, getApioptions);
  const data = await response.json();
  return data.data.map(city => ({
    value: `${city.latitude} ${city.longitude}`,
    label: `${city.name} ${city.countryCode}`
  }));
}


