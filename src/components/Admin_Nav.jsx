import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Admin_Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white pr-5 py- pl-7 flex justify-between items-center border-b-2 border-slate-900 font-inter sticky top-0 z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-16 md:h-24 md:w-24" />
        <p className="text-sm md:text-lg lg:text-xl text-[#382a76] font-semibold pl-3">
          The Redeemed Christian Church of God
        </p>
      </div>

      {/* Desktop Mode */}
      <ol className="hidden sm:flex space-x-8 md:space-x-14 text-xs md:text-sm lg:text-base text-slate-950">
        <Link to="/Admin" className="hover:underline">Home</Link>          
        <Link to="/edit" className="hover:underline">Edit</Link>          
        <a href="#all" className="hover:underline"><li>Log-Out</li></a>
      </ol>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden flex items-center">
        <button className="text-[#382a76] focus:outline-none" onClick={toggleMenu}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Mode */}
      {isOpen && (
        <div className="absolute top-20 right-0 bg-white w-full shadow-lg sm:hidden">
          <ol className="flex flex-col space-y-4 py-5 px-6 text-sm text-slate-950">
            <Link to="/Admin" className="hover:underline">Home</Link>          
            <hr className="border-slate-300" />
            <Link to="/edit" className="hover:underline">Edit</Link>          
            <hr className="border-slate-300" />
            <a href="#all" className="hover:underline" onClick={toggleMenu}><li>Log-Out</li></a>
          </ol>
        </div>
      )}
    </nav>
  );
}

export default Admin_Nav;
