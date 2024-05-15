import React, { useState } from "react";
import logo from "../../assets/logo.png";
import header from "../../assets/header.png";
import rectangle from '../../assets/Rectangle.png'
import blue from "../../assets/blue.png"
import { Link } from "react-router-dom";
import Why from "../Home/Why"
import  About from "../Body/About"
import Achievements from "../Body/Achievements";
import AI from "../Body/AI"
import Testimonial from "../Body/Testimonial";
import Demo from "../Footer/Demo"
import Footer from "../Footer/Footer";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen" id="home">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${header})`,
          height: '87vh' // Adjust this value as needed
        }}
      ></div>
      <header className="relative z-10">
        <nav className="flex items-center justify-between py-6 mx-auto px-4 sm:px-8">
          {" "}
          {/* Reduced padding for small screens */}
          <div className="flex gap-2 items-center pl-36">
            <img src={logo} alt="NexCent Logo" className="w-10 h-10" />
            <p className="text-white font-bold text-3xl">Legalia</p>
          </div>
          <div
            className={`xl:static absolute  xl:min-h-fit min-h-[38vh] ${
              isMenuOpen ? "left-0" : "left-[-340px]"
            } top-[70px] xl:w-auto w-20% flex items-center px-5 transition-all duration-300 z-10`}
          >
            <ul className="flex xl:flex-row flex-col xl:items-center xl:gap-5 gap-8">
              <li className="font-[500] text-[24] hover:opacity-50">
                <a href="#home" className="text-white ">
                  Home
                </a>
              </li>
              <li className="font-[500] text-[24] hover:opacity-50">
                <a href="#services" className="text-white ">
                  Services
                </a>
              </li>
              <li className="font-[500] text-[24] hover:opacity-50">
                <a href="#about" className="text-white ">
                  About
                </a>
              </li>
              <li className="font-[500] text-[24] hover:opacity-50">
                <a href="#testimonial" className="text-white ">
                  Testimonial
                </a>
              </li>
              <li className="font-[500] text-[24] hover:opacity-50">
                <a href="#achievements" className="text-white ">
                  Achievements
                </a>
              </li>
              <li className="font-[500] text-[24] hover:opacity-50">
                <a href="#product" className="text-white ">
                  Product
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-[2px] z-10 pr-36">
            <Link to="/login" className="bg-transparent text-white px-6 py-3 smallest:max-sm:py-3">
              Login
            </Link>
            <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded smallest:max-sm:hidden hover:bg-opacity-75 transition-opacity duration-300 bg-opacity-50">
              Sign Up
            </Link>
            <div className="block xl:hidden">
              <ion-icon
                onClick={toggleMenu}
                name={isMenuOpen ? "close" : "menu"}
                className="cursor-pointer"
              />
            </div>
          </div>
        </nav>
        <div className="flex flex-row  items-center px-48 mt-40">
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-7xl font-semibold mb-4 text-white max-w-3xl opacity-75">
              LegalAdvocate insights <span className="text-blue-700">from 8 years</span>
            </h1>
            <p className="text-gray-400 mb-8">
            Where to seek legal help as a victim: we got you covered!
            </p>
            <button className="bg-blue-700 hover:bg-blue-600 text-white py-3 px-8 rounded">
              Register
            </button>
          </div>
        </div>
      </header>
      <div className='absolute pt-14 left-10 ml-64'>
        <img src={rectangle} alt="ship-logo" />
       <img src={blue} alt="" className="absolute top-8 right-52" />
     </div>


      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <Why />
      <About />
      <Testimonial />
      <Achievements />
      <AI />
      <Demo />
      <Footer />
    </div>
  );
};

export default Home;
