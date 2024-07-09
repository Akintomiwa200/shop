
import React from 'react';
import { Link } from 'react-router-dom'
import logo from "../../assets/landingimage/logo.png"
import { FaCartShopping } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
const Header2 = () => {
    return (
        <div className='container flex items-center justify-center'>
            <header className="bg-white h-[9em] w-[80em]">
                <div className="mx-auto flex items-center justify-between py-4 px-6">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            <img src={logo} alt="Arries Logo" className="h-16" />
                        </Link></div>
                    <nav className="space-x-5 flex">
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Shop</Link>
                        <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
                        <Link to='/cart'><FaCartShopping /></Link>
                    </nav>

                    <div className="space-x-4">
                        <Link to="/" className="text-gray-700 border border-blue-600 hover:text-blue-600 px-4 py-2 rounded">Log Out</Link>

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header2;
