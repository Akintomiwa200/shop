import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Summary = ({ subtotal }) => {
    const [discount, setDiscount] = useState(0);
    const [promoCode, setPromoCode] = useState("");
    const [message, setMessage] = useState("");

    // Predefined promo codes for discount validation
    const validPromoCodes = {
        "SAVE10": 10, // ₦10 discount
        "DISCOUNT20": 20, // ₦20 discount
    };

    // Function to apply discount when promo code is entered
    const applyDiscount = () => {
        if (validPromoCodes[promoCode]) {
            setDiscount(validPromoCodes[promoCode]);
            setMessage("Promo code applied successfully!");
        } else {
            setDiscount(0);
            setMessage("Invalid promo code!");
        }
    };

    const total = subtotal - discount; // Real-time calculation

    return (
        <div className="w-[90vw] lg:w-[20vw] mx-auto mt-8 lg:mt-0">
            <div className="bg-white p-4 rounded-md shadow-md">
                <h2 className="text-xl font-bold mb-4">Summary</h2>

                <div className="mb-4 flex flex-col">
                    <div className="flex justify-between w-full my-4">
                        <span>Subtotal</span>
                        <span>₦{subtotal}</span>
                    </div>
                    <div className="flex justify-between w-full my-4">
                        <span>Discount</span>
                        <span className="text-green-500">₦{discount}</span>
                    </div>
                    <div className="flex justify-between w-full my-4">
                        <span className='text-2xl font-bold'>Total</span>
                        <span className='text-2xl font-bold'>₦{total}</span>
                    </div>
                </div>

                {/* Promo Code Input */}
                <div>
                    <h4 className='font-bold my-4'>Promo & Discount</h4>
                    <input
                        type="text"
                        placeholder="Enter Promo Code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                        className="w-full p-2 border rounded mb-2 bg-blue-50"
                    />
                    <button
                        onClick={applyDiscount}
                        className="w-full bg-blue-500 text-white p-2 rounded"
                    >
                        Apply
                    </button>
                    {message && <p className="text-sm mt-2 text-gray-700">{message}</p>}
                </div>

                <Link to='/checkout'>
                    <button className="w-full bg-green-600 text-white p-2 rounded my-4">
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Summary;
