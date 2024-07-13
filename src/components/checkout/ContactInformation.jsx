// src/components/ContactInformation.jsx
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import EditContactModal from '../modal/EditContactModal';

const ContactInformation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phone, setPhone] = useState("+000054546075685");
    const [email, setEmail] = useState("kfdhffdsgb@gmail.com");

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSaveContact = (newPhone, newEmail) => {
        setPhone(newPhone);
        setEmail(newEmail);
    };

    return (
        <div className="bg-blue-50 p-4 mb-4 w-full md:w-[30vw]">
            <h2 className="text-xl flex justify-between text-bold mb-4">
                Contact Information
                <FaEdit className="text-blue-500 cursor-pointer" onClick={handleEditClick} />
            </h2>
            <p className="m-0 p-0">{phone}</p>
            <p className="m-0">{email}</p>
            <EditContactModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSave={handleSaveContact}
                initialPhone={phone}
                initialEmail={email}
            />
        </div>
    );
};

export default ContactInformation;
