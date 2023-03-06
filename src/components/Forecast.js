import { useState, useEffect } from "react";
function Forecast() {

    let [forecast, setForecast] = useState(null);
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=newyork&cnt=6&appid=f2955663debb66831c20addbd14c738`

    const fetchforecast = async () => {
        try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        setForecast(data)
        console.log(forecast)

        } catch (error){
            console.log(error);
        }
    }
    
    const handleChange = (e) => setForecast(e.target.value);
  
    useEffect(() => {
        // Assuming you know the state

        // NICE TO HAVE == GET USER LOCATION VIA PERMISSOINS


            // IN CASE USER DENIES LOCATION PERMISSION == SHOW DEFAULT STATE (NY)

        (async () => fetchforecast())()
    }, [])

    return (

        <div>

        <input className='input' type="text" placeholder='Enter City Name' onChange={handleChange} />
        <button onClick={fetchforecast}> Search </button>


        </div>

    );
} export default Forecast;

