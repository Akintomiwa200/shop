// src/components/Footer.jsx
import React from 'react';
import logo from "../assets/landingimage/logo.png"
import fb from '../assets/landingimage/Vector2.png'
import ig from '../assets/landingimage/Vector.png'

const Footer = () => {
    return (
        <footer className="bg-blue-700 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img src={logo} alt="img" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Download App on IOS & Android
                    </button>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">CUSTOMER SERVICE</h3>
                    <ul>
                        <li>Orders & Delivery</li>
                        <li>Payment & Pricing</li>
                        <li>Returns & Refunds</li>
                        <li>FAQs</li>
                        <li>Locations</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">ABOUT</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Sitemap</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="text-center flex flex-col items-center mt-4">

                    <h3 className="text-lg font-bold mb-2">ABOUT</h3>
                    <ul>
                        <li className='my-1'>Contact Us</li>
                        <li>Follow Us</li>
                        <li className="flex gap-2 w-16 my-4">
                            <img src={ig} className='cursor-pointer' />
                            <img src={fb} className='cursor-pointer' />
                        </li>


                    </ul>

                </div>
            </div>

        </footer>
    );
};

export default Footer;
