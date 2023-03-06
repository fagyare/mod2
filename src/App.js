import './App.css';
import { Route, Routes, } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav"
import Header from './components/Header';
import SearchWeather from './components/SearchWeather';
import  { useState, useEffect } from "react";
import RandomWeather from "./components/RandomWeather"
import HistoricalWeather from './components/HistoricalWeather';
import Contacts from './pages/Contacts';
import Forecast from "./components/Forecast";



function App() {
//   const defaultState = "New York";

//   let [data1, setData] = useState(null);
//   let [input, setInput] = useState(defaultState);

//   async function getWeather(){
//     // let key = process.env.API_WEATHER_KEY
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=f799f8912929b70d50f5271d4c903276`

//     try {
//         let response = await fetch(url)
//         let data = await response.json()
//         setData(data)
//         console.log(data)

//     } catch (error) {
//         console.log(error)  
//     }
// }

// function handleChange(e){
//   setInput(e.target.value)
// }

// useEffect(() => {
//   (async () => getWeather())();
// },[])
  return (
    
    <div className="App">
      <h2 className='h2'> The Weather Channel !</h2>
       <div className='main-body'>

    
      <Header /> 
      <Nav/>
{/*       
      <input className='input-btn' type="text" placeholder='City Name' onChange={handleChange} />
      <button className='search' onClick={getWeather}> Search </button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Forecast" element={<Forecast />} />
        <Route path="Random" element={<RandomWeather />} />
        <Route path="Historical" element={<HistoricalWeather />} />
        <Route path="Contacts" element={<Contacts />} />
      </Routes>
      
      </div> 
      <Footer /> 
      
      
      </div>
  );
}

export default App;
