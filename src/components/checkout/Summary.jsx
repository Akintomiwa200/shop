// src/components/Summary.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoneModal from '../modal/DoneModal';

const Summary = ({ total }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlaceOrder = () => {
        setIsModalOpen(true); // Open the modal when "Place Order" is clicked
    };

    const handleModalClose = () => {
        setIsModalOpen(false); // Close the modal when user wants to close it
    };

    return (
        <div className='flex md:justify-end mt-4'>
            <div className="w-full md:w-[30vw] md:jusify-right bg-white p-4 my-4">
                <div className="mb-4">
                    <div className="text-right font-bold flex justify-between w-[80vw] md:w-[20vw]">
                        <h2>Total:</h2>
                        <h3 className='text-blue-500'>₦{total}</h3>
                    </div>
                </div>

                <button onClick={handlePlaceOrder} className="w-[80vw] bg-blue-600 text-white p-2 rounded mt-4 md:w-[20vw]">
                    Place Order
                </button>

                <DoneModal isOpen={isModalOpen} onRequestClose={handleModalClose} />
            </div>
        </div>
    );
};

export default Summary;
