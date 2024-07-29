import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-blue-600 text-white py-8">
    <div className="container mx-auto px-4 flex flex-wrap justify-between">
      {/* Footer Logo */}
      <div className="flex-shrink-0 mb-6 md:mb-0 w-1/4 md:w-1/5">
        <img
          src="/assets/images/school_logo.JPG"
          alt="School Logo"
          className="h-16 w-auto mx-auto md:mx-0"
        />
      </div>

      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
        <ul className="space-y-1">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
          <li><Link to="/academics" className="hover:underline">Academics</Link></li>
          <li><Link to="/admissions" className="hover:underline">Admissions</Link></li>
          <li><Link to="/faculty" className="hover:underline">Faculty</Link></li>
          <li><Link to="/students" className="hover:underline">Students</Link></li>
          <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
          <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
        </ul>
      </div>

      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
        <p className="mb-1">123 School Road, City, State, 12345</p>
        <p className="mb-1">Phone: (123) 456-7890</p>
        <p className="mb-1">Email: info@school.com</p>
      </div>

      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="Facebook"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12.07c0 5.51-4.49 9.99-10 9.99s-10-4.48-10-10 4.49-10 10-10c2.07 0 4.02.62 5.63 1.68l-1.55 1.55c-1.24-.47-2.59-.73-4.08-.73-5.52 0-10 4.48-10 10s4.48 10 10 10c4.48 0 8.27-2.88 9.42-6.85l-2.05-1.2c-.87 2.44-3.24 4.05-6.37 4.05-3.49 0-6.33-2.84-6.33-6.33 0-.52.07-1.03.18-1.53l2.06-1.2c-.12.46-.18.94-.18 1.42 0 2.88 2.34 5.22 5.22 5.22 2.29 0 4.18-1.84 4.18-4.12s-1.89-4.12-4.18-4.12c-.74 0-1.47.08-2.16.24L14 8.47l.6-2.3c1.54-.36 3.12-.56 4.73-.56 5.51 0 10 4.49 10 10z"/>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="Twitter"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 3a10.8 10.8 0 01-3.07.84A5.7 5.7 0 0022.37 1a10.7 10.7 0 01-3.42 1.3A5.68 5.68 0 0016.75 0a5.69 5.69 0 00-5.7 5.7c0 .45.05.89.12 1.32A16.1 16.1 0 011.67 1.1a5.68 5.68 0 001.76 7.59A5.61 5.61 0 01.6 8.6v.07c0 2.78 1.99 5.1 4.63 5.62a5.67 5.67 0 01-2.56.1A5.69 5.69 0 005.7 16.1a11.5 11.5 0 01-7.05 2.43A11.47 11.47 0 010 18.64a16.17 16.17 0 008.78 2.57c10.55 0 16.31-8.73 16.31-16.31 0-.25-.01-.5-.02-.75A11.61 11.61 0 0023 3z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="bg-blue-700 py-4 text-center">
      <p>© 2024 Springdale Public School. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
