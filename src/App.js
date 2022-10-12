import React from "react";

import "./styles.css";
import "./scripts";

import NavBar from "./NavBar";
import BannerSection from "./Banner";
import PortfolioCards from "./PortfolioCards";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return(
    <div>
     
      <NavBar />
      <BannerSection />
      <PortfolioCards />
      <About />
      <Contact />
     <Footer />
    </div>
  )
}

export default App;