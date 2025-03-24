import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import Modal from '../modal/Modal';
import Card from './Card';

const PaymentMethod = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [paymentType, setPaymentType] = useState('Card');
    const [tempPaymentType, setTempPaymentType] = useState(paymentType); // Temporary state for modal

    useEffect(() => {
        setTempPaymentType(paymentType); // Sync temp state with main state when modal opens
    }, [isModalOpen]);

    const handleEditClick = () => {
        setModalOpen(true);
    };

    const handleSave = () => {
        setPaymentType(tempPaymentType); // Update main payment type
        setModalOpen(false);
    };

    return (
        <div className="bg-blue-50 p-4 rounded shadow-md mb-4 mr-16 w-full md:w-auto">
            <h2 className="text-xl font-bold mb-4 flex justify-between">
                Payment Method
                <FaEdit className="text-blue-500 cursor-pointer" onClick={handleEditClick} />
            </h2>
            <div className="flex flex-col justify-between items-center">
                <p className="text-lg font-semibold">{paymentType === 'Card' ? 'Card Payment' : 'Bank Transfer'}</p>
                {paymentType === 'Card' ? (
                    <Card number="1234 5678 9012 3456" name="John Doe" expiry="12/24" />
                ) : (
                    <div>
                        <p>Account Number: <strong>1234567890</strong></p>
                        <p>Bank Name: <strong>Heaven Bank</strong></p>
                        <p>Account Name: <strong>Adedokun Peter Akintomiwa</strong></p>
                    </div>
                )}
            </div>
            
            {/* Modal for editing payment method */}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <div>
                    <h2 className="text-xl font-bold mb-4">Edit Payment Method</h2>
                    <select
                        value={tempPaymentType}
                        onChange={(e) => setTempPaymentType(e.target.value)}
                        className="mb-4 p-2 border rounded w-full"
                    >
                        <option value="Card">Card</option>
                        <option value="Bank">Bank</option>
                    </select>
                    <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Save
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default PaymentMethod;
