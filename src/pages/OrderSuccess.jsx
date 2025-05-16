
import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
                <p className="text-gray-600 mb-6">Thank you for your purchase.</p>
                <Link to="/" className="text-blue-500 hover:underline">
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;
