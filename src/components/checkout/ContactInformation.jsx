// src/components/ShippingAddress.jsx
import React from 'react';
import {FaEdit} from 'react-icons/fa'

const ContactInformation = () => {
    return (
        <div className="bg-blue-50 p-4 mb-4 w-full md:w-[30vw]">
            <h2 className="text-xl flex justify-between text-bold mb-4">Contact information <FaEdit className='text-blue-500'/></h2>
            <p className='m-0 p-0'>+000054546075685</p>
            <p className='m-0'>kfdhffdsgb@gmail.com</p>
        </div>
    );
};

export default ContactInformation;
