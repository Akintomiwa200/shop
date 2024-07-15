import React, { useState } from 'react';
import logo from "../../assets/landingimage/logo.png";
import { Link } from 'react-router-dom';
import { FaCartShopping, FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa'


const Header2 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='container flex items-center justify-center'>
            <header className="bg-white w-full lg:w-[80em] h-[9em]">
                <div className="mx-auto flex items-center justify-between py-4 px-6">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-blue-600">
                            <img src={logo} alt="Arries Logo" className="h-16" />
                        </Link>
                    </div>
                    <nav className="hidden lg:flex space-x-4">
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Shop</Link>
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Products</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
                        <Link to='/cart' className="text-gray-700 hover:text-blue-600">
                            <FaCartShopping className='text-black' />
                        </Link>
                    </nav>
                    <div className="hidden lg:flex space-x-4">
                        <Link to="/" className="text-gray-700 border border-blue-600 hover:text-blue-600 px-4 py-2 rounded">Log Out</Link>

                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white w-full py-4 px-6 absolute h-full">
                        <nav className="space-y-4">
                            <Link to="/" className="text-gray-700 block hover:text-blue-600">Home</Link>
                            <Link to="/" className="text-gray-700 block hover:text-blue-600">Shop</Link>
                            <Link to="/" className="text-gray-700 block hover:text-blue-600">Products</Link>
                            <Link to="/contact" className="text-gray-700 block hover:text-blue-600">Contact Us</Link>
                            <Link to='/cart' className="text-gray-700 block hover:text-blue-600">
                                <FaCartShopping className='text-black' />
                            </Link>
                            <Link to="/" className="text-gray-700 border border-blue-600 hover:text-blue-600 px-4 py-2 rounded block text-center">Log Out</Link>

                        </nav>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header2;
