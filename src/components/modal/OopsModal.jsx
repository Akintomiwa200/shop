
import React from 'react';
import Modal from 'react-modal';

const OopsModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded shadow-lg">
                <div className="error-icon mb-4"></div>
                <h2 className="text-xl font-bold mb-2">Oops!</h2>
                <p>Sorry, we couldn't process your payment.</p>
                <button className="bg-black text-white p-2 rounded mt-4 mr-2">Try Again</button>
                <button className="bg-gray-300 text-black p-2 rounded mt-4 ml-2" onClick={onRequestClose}>Cancel</button>
            </div>
        </Modal>
    );
};

export default OopsModal;
