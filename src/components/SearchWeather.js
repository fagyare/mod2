// import  { useState } from "react";


function SearchWeather({weather}){
    return (
        <div>
        {weather && 
              <div className="search-weather">
        {/* <img src="weather.jpg" alt="Weather"/> */}
              <h1> {((((parseFloat(weather.main.temp-273.18)*1.8)+32).toFixed())) } &#8451; </h1>
              <p><h4>{weather.name}</h4></p>
              <p>Real feel: {((((parseFloat(weather.main.feels_like-273.18)*1.8)+32).toFixed())) } &#8451; </p>
              <p>Humidity: {weather.main.humidity}</p>
              {/* change Kelvin to Celsius & give user option to change */}
              <p>Clouds: {weather.weather[0].main}</p>
              <p>Weather description: {weather.weather[0].description}</p>
              {/* {temperatureConverter} */}
              {/* <h1> getWeather {getWeather}</h1> */}
          </div>
        }
        </div>
    )
}
export default SearchWeather;
