import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full shadow-sm">
      {/* Top bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-gray-50">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhone size={16} />
            <span className="text-sm">+91-XXXXX XXXXX</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope size={16} />
            <span className="text-sm">info@domain.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt size={16} />
          <span className="text-sm">
            JP Colony, Shastri Nagar, Jaipur, Rajasthan -302016
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">Zippty</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-[#FF7629] hover:text-[#FF7629]">
            Home
          </Link>
          <Link to="/shop" className="hover:text-[#FF7629]">
            Shop
          </Link>
          <Link to="/about" className="hover:text-[#FF7629]">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-[#FF7629]">
            Contact Us
          </Link>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-4 pr-10 py-2 rounded-full bg-gray-100 focus:outline-none"
            />
            <FaSearch className="absolute right-3 text-gray-400" size={20} />
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative">
              <FaHeart size={24} />
              <span className="absolute -top-2 -right-2 bg-[#FF7629] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="relative">
              <FaShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-[#FF7629] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button className="mb-6" onClick={toggleMenu}>
            <FaTimes size={24} />
          </button>
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-[#FF7629] hover:text-[#FF7629]"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="hover:text-[#FF7629]"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="hover:text-[#FF7629]"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#FF7629]"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
