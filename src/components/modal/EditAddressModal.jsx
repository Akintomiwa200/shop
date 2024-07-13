// src/components/EditAddressModal.jsx
import React, { useState } from 'react';

const EditAddressModal = ({ isOpen, onClose, onSave, initialAddress }) => {
    const [address, setAddress] = useState(initialAddress);

    const handleSave = () => {
        onSave(address);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg w-[90vw] md:w-[30vw]">
                <h2 className="text-xl font-bold mb-4">Edit Shipping Address</h2>
                <textarea
                    className="w-full border p-2"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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

export default EditAddressModal;
