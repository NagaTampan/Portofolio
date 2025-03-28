import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Portofolio from './components/Portofolio.jsx'
import Certificate from './components/Certificate.jsx'
import Testimoni from './components/Testimoni.jsx'
import Contact from './components/Contact.jsx'




function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Experience/>
      <Portofolio/>
      <Certificate/>
      <Testimoni/>
      <Contact/>
    </div>
  );
}

export default App;
