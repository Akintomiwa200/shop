// src/components/PaymentInProgressModal.jsx
import React from 'react';
import Modal from 'react-modal';

const PaymentInProgressModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded shadow-lg">
                <div className="loader mb-4"></div>
                <h2 className="text-xl font-bold mb-2">Payment in progress</h2>
                <p>Please, wait a few moments</p>
            </div>
        </Modal>
    );
};

export default PaymentInProgressModal;
