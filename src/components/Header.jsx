import React from 'react';
import logo from "../assets/landingimage/logo.png"

const Header = () => {
  return (
    <div className='container flex items-center justify-center'>
      <header className="bg-white h-[9em] w-[80em]">
        <div className="mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              <img src={logo} alt="Arries Logo" className="h-16" />
            </a></div>
          <nav className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/shop" className="text-gray-700 hover:text-blue-600">Shop</a>
            <a href="/products" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</a>
          </nav>

          <div className="space-x-4">
            <a href="/login" className="text-gray-700 border border-blue-600 hover:text-blue-600 px-4 py-2 rounded">Log in</a>
            <a href="/get-started" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get started</a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
