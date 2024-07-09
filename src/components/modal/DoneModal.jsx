// src/components/DoneModal.jsx
import React from 'react';
import Modal from 'react-modal';

const DoneModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded shadow-lg">
                <div className="checkmark mb-4"></div>
                <h2 className="text-xl font-bold mb-2">Done!</h2>
                <p>Your Card has been successfully charged.</p>
                <button className="bg-blue-600 text-white p-2 rounded mt-4">Track My Order</button>
            </div>
        </Modal>
    );
};

export default DoneModal;
