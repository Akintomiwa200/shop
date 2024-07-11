// src/components/PaymentMethod.jsx
import React from 'react';
import {FaEdit} from 'react-icons/fa'

const PaymentMethod = () => {
    return (
        <div className="bg-blue-50 p-4 rounded shadow-md mb-4 mr-16 w-full md:w-auto">
<h2 className="text-xl font-bold mb-4 flex justify-between">Payment Method <FaEdit className='text-blue-500' /></h2>
            <div className="flex flex-col justify-between items-center">
                <p>Card</p>
                <img src="https://pngtree.com/freepng/a-bank-card_4464864.html" alt="Card" className=" w-[70vw] lg:w-[20vw] h-[20vh] rounded" />
            </div>
        </div>
    );
};

export default PaymentMethod;
