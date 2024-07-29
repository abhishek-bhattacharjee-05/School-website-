import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
      <Link to="/">
        <img
          src="/assets/images/school_logo.JPG"
          alt="School Logo"
          className="h-12 w-auto object-contain"
        />
      </Link>

      <div className="block lg:hidden">
        <button
          className="text-white focus:outline-none"
          id="menu-button"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex lg:items-center lg:space-x-4" id="menu">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about-us" className="hover:text-gray-300">About Us</Link>
        <Link to="/academics" className="hover:text-gray-300">Academics</Link>
        <Link to="/admissions" className="hover:text-gray-300">Admissions</Link>
        <Link to="/faculty" className="hover:text-gray-300">Faculty</Link>
        <Link to="/students" className="hover:text-gray-300">Students</Link>
        <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
        <Link to="/contact-us" className="hover:text-gray-300">Contact Us</Link>
      </div>
    </div>

    <div className="lg:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link to="/" className="block text-white py-2 px-3 rounded-md hover:bg-blue-700">Home</Link>
        <Link to="/about-us" className="block text-white py-2 px-3 rounded-md hover:bg-blue-700">About Us</Link>
        <Link to="/academics" className="block text-white py-2 px-3 rounded-md hover:bg-blue-700">Academics</Link>
        <Link to="/admissions" className="block text-white py-2 px-3 rounded-md hover:bg-blue-700">Admissions</Link>
        <Link to="/faculty" className="block text-white py-2 px-3 rounded-md hover:bg-blue-700">Faculty</Link>
        <Link to="/students" className="block text-white py-2 px-3 rounded-md hover:bg-blue-700">Students</Link>
        <Link to="/gallery" className="block text-white py-2 px-3 rounded-md hover:bg-blue-700">Gallery</Link>
        <Link to="/contact-us" className="block text-white py-2 px-3 rounded-md hover:bg-blue-700">Contact Us</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
