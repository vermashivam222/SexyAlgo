import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import MarketPlace from "./Components/MarketPlace";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Terms from "./Components/Terms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <>         
       <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/marketplace" element={<MarketPlace />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/terms" element={<Terms />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </>
    </div>
  );
}

export default App;
