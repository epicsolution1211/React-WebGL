import React from "react";
import Nova from "./Nova";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div>
        <Nova />
      </div>
      
      <div className="flex flex-row">
        <div
          className="hero flex h-screen flex-col justify-center hero-left"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="">
            <div className="hero-title font-['SpaceGrotesk'] text-5xl font-bold text-white md:text-7xl hero-title-restyle">
              <h1>AIfolio</h1>
            </div>
            <p className="mt-[24px] w-2/3 max-w-[380px] font-['Inter'] text-base md:text-lg font-semibold md:font-normal text-white">
              Empower Your Business with Cutting-Edge AI Solutions
            </p>
            <div className="flex gap-x-3 pt-5  font-['Inter'] hero-3-button " >
              <a href="#contact">
                <input
                  type="button"
                  className="btn border-btn normal-btn"
                  value="Family Offices"
                />
              </a>
              <a href="#services">
                <input
                  type="button"
                  className="btn border-btn normal-btn"
                  value="Private Equity"
                />
              </a>
              <a href="#services">
                <input
                  type="button"
                  className="btn border-btn normal-btn"
                  value="Venture Capital"
                />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="flex flex-col" style={{marginTop:"100px"}}>
            <a href="#contact" style={{paddingBottom:"10px"}}>
                    <input
                      type="button"
                      className="btn orange-btn get-demo"
                      value="Get Demo "
                      style={{width:"219.03px"}}
                    />
            </a>
            <a href="#contact" style={{paddingBottom:"10px"}}>
                    <input
                      type="button"
                      className="btn orange-btn"
                      value="Book Discovery Call "
                      // style={{width:"185px"}}
                    />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
