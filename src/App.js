
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';
import Forecast from './components/forecast/forecast';
import { WEATHER_API_URL, API_KEY } from './api.js';
import { useState } from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecast] = useState(null);


  const handleonSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);


    Promise.all([CurrentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
        console.log(currentWeather);
        console.log(forecastWeather);
      })

      .catch((err) => console.log(err));

  
  }

  return (
    <div className="container">
      <Search onSearchChange={handleonSearchChange} />
      {currentWeather &&<CurrentWeather data = {currentWeather} />} 
      {forecastWeather&&<Forecast data = {forecastWeather}/>}
    </div>
  );
}

export default App;
