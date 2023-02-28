import  { useState } from "react";


function SearchWeather(){
    // let [imput, setInput] = useState();
    let [data, setData] = useState();

    
    // function handleChange(e){
    //     setInput(e.target.value)
    // }



    async function getWeather(){
        let key = "process.env.API_WEATHER_KEY"
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${key}`

        try {
            let response = await fetch(url)
            let data = await response.json()
            setData(data)
            let url = data.current

        } catch (error) {
            console.log('error')
            
        }

    }


    return (
        <div>
            {data}
            <h1> getWeather {getWeather}</h1>
            {/* <input value={input} onChange={handleChange} /> */}
            {/* <button onClick={Search}> Search </button> */}
        </div>
    );
}
export default SearchWeather;
