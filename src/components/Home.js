import  { useState, useEffect } from "react";
import SearchWeather from "./SearchWeather";

function Home ({weather}){

        const defaultState = "New York";
      
        let [data1, setData] = useState(null);
        let [input, setInput] = useState(defaultState);
      
        async function getWeather(){
          // let key = process.env.API_WEATHER_KEY
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=f799f8912929b70d50f5271d4c903276`
      
          try {
              let response = await fetch(url)
              let data = await response.json()
              setData(data)
              console.log(data)
      
          } catch (error) {
              console.log(error)  
          }
      }
      
      function handleChange(e){
        setInput(e.target.value)
      }
      
      useEffect(() => {
        (async () => getWeather())();
      },[])

    console.log(data1)
    return (
        <div>
            
      <input className='input-btn' type="text" placeholder='City Name' onChange={handleChange} />
      <button className='search' onClick={getWeather}> Search </button>
      <SearchWeather weather={data1} /> 
      </div>
    );
}
export default Home; 
