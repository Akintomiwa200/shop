// src/components/ShippingAddress.jsx
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import EditAddressModal from '../modal/EditAddressModal';

const ShippingAddress = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState("T2, Jimoh Lawal Street, Alimosho Lagos.");

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSaveAddress = (newAddress) => {
        setAddress(newAddress);
    };

    return (
        <div className="p-4 bg-blue-50 mb-4 w-full md:w-[30vw]">
            <h2 className="text-xl font-bold mb-4 flex justify-between">
                Shipping Address
                <FaEdit className="text-blue-500 cursor-pointer" onClick={handleEditClick} />
            </h2>
            <p>{address}</p>
            <EditAddressModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSave={handleSaveAddress}
                initialAddress={address}
            />
        </div>
    );
};

export default ShippingAddress;
