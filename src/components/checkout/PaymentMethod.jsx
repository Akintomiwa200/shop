// src/components/PaymentMethod.jsx
import React from 'react';
import {FaEdit} from 'react-icons/fa'

const PaymentMethod = () => {
    return (
        <div className="bg-blue-50 p-4 rounded shadow-md mb-4 mr-16">
<h2 className="text-xl font-bold mb-4 flex justify-between">Payment Method <FaEdit className='text-blue-500' /></h2>
            <div className="flex flex-col justify-between items-center">
                <p>Card</p>
                <img src="https://e7.pngegg.com/pngimages/147/434/png-clipart-bank-of-montreal-mastercard-debit-card-credit-card-atm-card-mastercard-bank-debit-card.png" alt="Card" className="w-[20vw] h-[20vh] rounded" />
            </div>
        </div>
    );
};

export default PaymentMethod;
