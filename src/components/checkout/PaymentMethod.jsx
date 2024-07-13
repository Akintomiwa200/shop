// src/components/PaymentMethod.jsx
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Modal from '../modal/Modal';
import Card from './Card';

const PaymentMethod = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [paymentType, setPaymentType] = useState('Card');

    const handleEditClick = () => {
        setModalOpen(true);
    };

    const handlePaymentTypeChange = (e) => {
        setPaymentType(e.target.value);
    };

    return (
        <div className="bg-blue-50 p-4 rounded shadow-md mb-4 mr-16 w-full md:w-auto">
            <h2 className="text-xl font-bold mb-4 flex justify-between">
                Payment Method
                <FaEdit className='text-blue-500' onClick={handleEditClick} />
            </h2>
            <div className="flex flex-col justify-between items-center">
                <select
                    value={paymentType}
                    onChange={handlePaymentTypeChange}
                    className="mb-4 p-2 border rounded"
                >
                    <option value="Card">Card</option>
                    <option value="Bank">Bank</option>
                </select>
                {paymentType === 'Card' ? (
                    <Card number="1234 5678 9012 3456" name="John Doe" expiry="12/24" />
                ) : (
                    <p>Bank account information here</p>
                )}
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                {/* Modal content for editing payment method */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Edit Payment Method</h2>
                    <select
                        value={paymentType}
                        onChange={handlePaymentTypeChange}
                        className="mb-4 p-2 border rounded w-full"
                    >
                        <option value="Card">Card</option>
                        <option value="Bank">Bank</option>
                    </select>
                    <button
                        onClick={() => setModalOpen(false)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default PaymentMethod;
