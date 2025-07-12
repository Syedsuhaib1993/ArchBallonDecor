import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton ";


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Slider/>
      <Contact />
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App;
