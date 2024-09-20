import { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white pr-5 py- pl-7 flex justify-between items-center border-b-2 border-slate-900 font-inter sticky top-0">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-16 md:h-24 md:w-24" />
        <p className="text-sm md:text-lg lg:text-xl text-[#382a76] font-semibold pl-3">
          The Redeemed Christian Church of God
        </p>
      </div>

      {/* Desktop Navigation Links */}
      <ol className="hidden sm:flex space-x-8 md:space-x-14 text-xs md:text-sm lg:text-base text-slate-950">
        <a href="#home" className="hover:underline"><li>Home</li></a>
        <a href="#previous-events" className="hover:underline"><li>Previous Events</li></a>
        <a href="#upcoming-events" className="hover:underline"><li>Upcoming Events</li></a>
      </ol>

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
          <ol className="flex flex-col space-y-4 py-5 px-6 text-sm text-slate-950">
            <a href="#home" className="hover:underline" onClick={toggleMenu}><li>Home</li></a>
            <hr className="border-slate-300" />
            <a href="#previous-events" className="hover:underline" onClick={toggleMenu}><li>Previous Events</li></a>
            <hr className="border-slate-300" />
            <a href="#upcoming-events" className="hover:underline" onClick={toggleMenu}><li>Upcoming Events</li></a>
          </ol>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
