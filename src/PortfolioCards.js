import React from "react";

import cabin from "./assets/img/portfolio/cabin.png";
import cake from "./assets/img/portfolio/cake.png";
import circus from "./assets/img/portfolio/circus.png";
import game from './assets/img/portfolio/game.png';
import safe from "./assets/img/portfolio/safe.png";
import submarine from "./assets/img/portfolio/submarine.png";

import PortfolioPopup from "./ProffolioPopup";
import Card from "./Card";


const PortfolioCards = () => {
  return (
    <>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row justify-content-center">

            <div className="col-md-6 col-lg-4 mb-5">          

              <Card modalTarget="#portfolioModal1" cardImage={cabin}/>
            </div>

            <div className="col-md-6 col-lg-4 mb-5">          
            <Card modalTarget="#portfolioModal2" cardImage={cake}/>
            </div>

            <div className="col-md-6 col-lg-4 mb-5">           
             <Card modalTarget="#portfolioModal3" cardImage={circus}/>
            </div>

            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">            
              <Card modalTarget="#portfolioModal4" cardImage={game}/>
            </div>

            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <Card modalTarget="#portfolioModal5" cardImage={safe}/>
            </div>

            <div className="col-md-6 col-lg-4">             
              <Card modalTarget="#portfolioModal6" cardImage={submarine}/>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popups*/ }
      
     <PortfolioPopup 
     madalTarget="portfolioModal1"
     modalTitle ="Cabin"
     modalImage = {cabin}
     modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque"/>

     <PortfolioPopup 
     madalTarget="portfolioModal2"
     modalTitle ="Cake"
     modalImage = {cake}
     modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque"/>

     <PortfolioPopup 
     madalTarget="portfolioModal3"
     modalTitle ="Circus"
     modalImage = {circus}
     modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque"/>

     <PortfolioPopup 
     madalTarget="portfolioModal4"
     modalTitle ="Game"
     modalImage = {game}
     modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque"/>

     <PortfolioPopup 
     madalTarget="portfolioModal5"
     modalTitle ="Safe"
     modalImage = {safe}
     modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque"/>

     <PortfolioPopup 
     madalTarget="portfolioModal6"
     modalTitle ="Submarine"
     modalImage = {submarine}
     modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque"/>
     
    </>
  )
}

export default PortfolioCards;