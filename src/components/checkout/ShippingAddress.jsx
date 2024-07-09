// src/components/ShippingAddress.jsx
import React from 'react';
import {FaEdit} from 'react-icons/fa'

const ShippingAddress = () => {
    return (
        <div className=" p-4 bg-blue-50 mb-4 w-[30vw]">
            <h2 className="text-xl font-bold mb-4 flex justify-between">Shipping Address <FaEdit className='text-blue-500' /></h2>
            <p>T2, Jimoh Lawal Street, Alimosho Lagos.</p>
        </div>
    );
};

export default ShippingAddress;
