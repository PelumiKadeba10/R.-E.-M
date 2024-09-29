import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white pr-5 py-2 pl-7 flex justify-between items-center border-b-2 border-slate-900 font-inter sticky top-0 z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-16 md:h-24 md:w-24" />
        <p className="text-sm md:text-lg lg:text-xl text-[#382a76] font-semibold pl-3">
          The Redeemed Christian Church of God
        </p>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden sm:flex space-x-8 md:space-x-14 text-xs md:text-sm lg:text-base text-slate-950">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#upcoming" className="hover:underline">Upcoming Events</a>
        <a href="#all" className="hover:underline">All Events</a>
        <Link to="/admin" className="hover:underline">Admin</Link> {/* Link to Admin page */}
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden flex items-center">
        <button className="text-[#382a76] focus:outline-none" onClick={toggleMenu}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 right-0 bg-white w-full shadow-lg sm:hidden">
          <div className="flex flex-col space-y-4 py-5 px-6 text-sm text-slate-950">
            <a href="#home" className="hover:underline" onClick={toggleMenu}>Home</a>
            <hr className="border-slate-300" />
            <a href="#upcoming" className="hover:underline" onClick={toggleMenu}>Upcoming Events</a>
            <hr className="border-slate-300" />
            <a href="#all" className="hover:underline" onClick={toggleMenu}>All Events</a>
            <hr className="border-slate-300" />
            <Link to="/admin" className="hover:underline" onClick={toggleMenu}>Admin</Link> {/* Link to Admin page */}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
