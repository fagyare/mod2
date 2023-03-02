import './App.css';
import { Route, Routes, } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav"
import Header from './components/Header';
import SearchWeather from './components/SearchWeather';
import  { useState } from "react";
import RandomWeather from "./components/RandomWeather"
import HistoricalWeather from './components/HistoricalWeather';
import Contacts from './pages/Contacts';

function App() {

  let [data1, setData] = useState(null);
  let [input, setInput] = useState();

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
  return (
    <div className="App">
      <h2 className='h2'> The Weather Channel !</h2>
     {/* {(typeof data1.main != 'undefined') ? (
      <SearchWeather weatherData={data1}/>
      ): (
        <div></div>
      )} */}  
      <div className='main-body'>

    
      <Header /> 
      <Nav/>
      
      <input className='input' type="text" placeholder='City Name' onChange={handleChange} />
      <button onClick={getWeather}> Search </button>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Random" element={<RandomWeather />} />
      <Route path="Historical" element={<HistoricalWeather />} />
      {/* <Route path="Historical" element={<HistoricalWeather />} /> */}

      </Routes>

      {data1 && <SearchWeather weather={data1}/> }
      </div> 
      <Footer /> 
       {/* <Contacts /> */}
      
      
      </div>
  );
}

export default App;
