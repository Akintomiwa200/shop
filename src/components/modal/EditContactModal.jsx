// src/components/EditContactModal.jsx
import React, { useState } from 'react';

const EditContactModal = ({ isOpen, onClose, onSave, initialPhone, initialEmail }) => {
    const [phone, setPhone] = useState(initialPhone);
    const [email, setEmail] = useState(initialEmail);

    const handleSave = () => {
        onSave(phone, email);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg w-[90vw] md:w-[30vw]">
                <h2 className="text-xl font-bold mb-4">Edit Contact Information</h2>
                <label className="block mb-2">Phone:</label>
                <input
                    className="w-full border p-2 mb-4"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label className="block mb-2">Email:</label>
                <input
                    className="w-full border p-2 mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex justify-end mt-4">
                    <button className="mr-2 px-4 py-2 bg-gray-200 rounded" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditContactModal;
