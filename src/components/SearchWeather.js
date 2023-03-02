// import  { useState } from "react";


function SearchWeather({weather}){
    // let [temp, ] = useState(location.temp);
    // let temp = location.main.temp

    // console.log(location.weather[0].icon);
    console.log(weather.main.temp);

//     function temperatureConverter(num) {
//         num = parseFloat(num);
//         return ((num-273.15)*1.8)+32;
        
//       } 
// let num2 = {location.main.temp}
//        num2 =  ((num2-273.15)*1.8)+32;
// 275-273.15 *1.8 + 32 = 35.33 


    return (
        <div className="search-weather">
            <h2>Current Weather: {((((parseFloat(weather.main.temp-273.18)*1.8)+32).toFixed())) } &#8451; </h2>
            <p>Current Location: {weather.name}</p>
            <h4>Real feel: {((((parseFloat(weather.main.feels_like-273.18)*1.8)+32).toFixed())) } &#8451; </h4>
            <p>Humidity: {weather.main.humidity}</p>
            {/* change Kelvin to Celsius & give user option to change */}
            <p>Clouds: {weather.weather[0].main}</p>
            <p>Weather description: {weather.weather[0].description}</p>
            {/* {temperatureConverter} */}
            {/* <h1> getWeather {getWeather}</h1> */}
        </div>
    );
}
export default SearchWeather;
