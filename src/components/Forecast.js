import { useState } from "react";

function Forecast () {

    let [forecast, setForecast] = useState({});
    let url = `api.openweathermap.org/data/2.5/forecast/daily?q=${forecast}&appid=f799f8912929b70d50f5271d4c903276`

    async function Fetchforecast (){
        try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        console.log(forecast)
        setForecast(data)
        } catch (error){
            console.log(error);

        }

    }
    
function handleChange(e){
    setForecast(e.target.value)
  }
  
    
    return (

        <div>

        <input className='input' type="text" placeholder='Enter City Name' onChange={handleChange} />
        <button onClick={Forecast}> Search </button>


        </div>

    );
} export default Forecast;

