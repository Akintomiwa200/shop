// src/components/Summary.jsx
import React from 'react';
import { Link } from 'react-router-dom'

const Summary = ({ subtotal, total, discount }) => {
    return (
        <div className="w-[23vw] mx-auto mt-8 lg:mt-0 lg:ml-8">

            <div className="bg-white p-4">
                <h2 className="text-xl font-bold mb-4">Summary</h2>

                <div className="mb-4 flex flex-col ">
                    <div className="flex justify-between w-[20vw] my-4">
                        <span>Subtotal</span>
                        <span>₦{subtotal}</span>
                    </div>
                    <div className="flex justify-between w-[20vw] my-4">
                        <span>Discount</span>
                        <span>₦{discount}</span>
                    </div>
                    <div className="flex justify-between w-[20vw] my-4">
                        <span className='text-2xl text-bold'>Total</span>
                        <span className='text-2xl text-bold'>₦{total}</span>
                    </div>
                </div>
                <div>
                    <h4 className='text-bold my-4'>Promo & Discount</h4>
                    <input type="text" placeholder="Enter Promo Code" className="w-full p-2 border rounded mb-4 bg-blue-50" />
                </div>
                <Link to='/checkout'><button className="w-full bg-blue-500 text-white p-2 rounded my-8">Checkout</button></Link>
                
            </div>

        </div>
    );
};

export default Summary;
