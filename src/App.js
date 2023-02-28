import './App.css';
import { Route, Routes, } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav"
import Header from './components/Header';
import SearchWeather from './components/SearchWeather';


function App() {

  

  return (
    <div className="App">

      <h2> The Weather and News site!!!</h2>

      <Header /> 
      <SearchWeather /> 
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      </Routes>
      <Footer /> 
      
      
        
    </div>
  );
}

export default App;
