import { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white pr-5 py-2 pl-7 flex justify-between items-center border-b-1 font-inter sticky">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-16 md:h-24 md:w-24" />
        <p className="text-sm md:text-lg lg:text-xl text-[#382a76] font-semibold pl-3">
          The Redeemed Christian Church of God
        </p>
      </div>

      {/* Desktop Navigation Links */}
      <ol className="hidden sm:flex space-x-8 md:space-x-14 text-xs md:text-sm lg:text-base text-slate-950">
        <button className='hover:underline'><li>Home</li></button>
        <button className='hover:underline'><li>Previous Events</li></button>
        <button className='hover:underline'><li>Upcoming Events</li></button>
      </ol>

      {/* Mobile Menu Icon (Hamburger) */}
      <div className="sm:hidden flex items-center">
        <button className="text-[#382a76] focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 right-0 bg-white w-full shadow-lg sm:hidden">
          <ol className="flex flex-col space-y-4 py-5 px-6 text-sm text-slate-950">
            <button className="hover:underline" onClick={toggleMenu}><li>Home</li></button>            
            <hr className="border-slate-300" />
            <button className="hover:underline" onClick={toggleMenu}><li>Previous Events</li></button>
            <hr className="border-slate-300" />
            <button className="hover:underline" onClick={toggleMenu}><li>Upcoming Events</li></button>
          </ol>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
