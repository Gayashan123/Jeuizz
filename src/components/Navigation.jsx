import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-scroll';

import Login from './Login';


function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [iconShow, setIconshow] = useState(true);
  const [lopop, setlopop] = useState(false);  // Track whether the login modal should be open
  


  const menuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIconshow(!iconShow);
  };

  const openLogin = () => {
    setlopop(true);  // Open login modal
    setsignup(false); // Ensure signup modal is closed
    setIsMenuOpen(false)
  };

  const openSignup = () => {
    setsignup(true);  // Open signup modal
    setlopop(false); // Ensure login modal is closed
  };

  const closeModals = () => {
    setlopop(false);
    setsignup(false); // Close both modals
  };









  

  return (
    <div className='fixed top-0 left-0 z-30 w-full'>
      <div className='flex items-center justify-between px-6 py-4 mx-auto bg-black opacity-65 lg:px-20'>
        {/* Left side: Logo and Text */}
        <div className='flex items-center gap-4 '>
          <img src={logo} alt="Hospital Care Logo" className='h-10 mt-0 bg-yellow-400' />
          <p className='font-semibold text-white'>Hospital Care</p>
        </div>

        {/* Right side: Navigation Links */}
        <div className='items-center hidden gap-6 ml-auto lg:flex'>
          <ul className='flex text-white gap-7'>
  <li>
    <Link
      to="header"
      smooth={true}
      duration={500}
      className='cursor-pointer hover:text-gray-400'
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="about"
      smooth={true}
      duration={500}
      className='cursor-pointer hover:text-gray-400'
    >
      About
    </Link>
  </li>
  <li>
    <Link
      to="contact"
      smooth={true}
      duration={500}
      className='cursor-pointer hover:text-gray-400'
    >
      Contact Us
    </Link>
  </li>
  <li>
    <Link
      to="services"
      smooth={true}
      duration={500}
      className='cursor-pointer hover:text-gray-400'
    >
      Services
    </Link>
  </li>
</ul>


          {/* Buttons */}
          <div className='flex gap-4'>
            <button className='px-6 py-2 font-semibold text-gray-800 uppercase bg-white rounded-full hover:bg-gray-200' onClick={openLogin}>
              Sign in
            </button>
           
          </div>
        </div>

        {/* Hamburger Menu */}
        {iconShow && (
          <div className='flex lg:hidden'>
            <button className='text-white' onClick={menuClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
       
        
      {isMenuOpen && !lopop &&  (
        <div className="absolute z-40 w-full px-5 py-5 text-white transition-all duration-500 ease-in-out bg-black opacity-90 rounded-xl lg:hidden">
          <button className="absolute text-white top-4 right-4" onClick={() => { setIsMenuOpen(false); setIconshow(true); }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <ul className="flex flex-col items-center py-4 uppercase">
            <li className="py-2"><a href = "#header" className="cursor-pointer hover:text-gray-400">Home</a></li>
            <li className="py-2"><a href="#about" className="cursor-pointer hover:text-gray-400">About</a></li>
            <li className="py-2"><a href="#contact" className="cursor-pointer hover:text-gray-400">Contact Us</a></li>
            <li className="py-2"><a href="#services" className="cursor-pointer hover:text-gray-400">Services</a></li>
          </ul>

          <div className='flex justify-center gap-4'>
            <button className='px-6 py-2 font-semibold text-gray-800 uppercase bg-white rounded-full hover:bg-gray-200' onClick={openLogin}>
              Signin
            </button>
           
          </div>
        </div>
      )}

      {/* Modals */}
      {lopop && <Login closeLogin={closeModals} />}
     


      
     </div>
  );
}

export default Navigation;
