import './App.css';
import { Route, Routes, } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">

      <p>
      Let's get started on MOD 2 Project!!! 
      </p>
      
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
