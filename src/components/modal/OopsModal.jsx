import React from 'react';

const OopsModal = ({ isOpen, onRequestClose }) => {
    if (!isOpen) return null;

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onRequestClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOutsideClick}>
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full mx-2" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col items-center justify-center">
                    <div className="error-icon mb-4"></div>
                    <h2 className="text-xl font-bold mb-2">Oops!</h2>
                    <p>Sorry, we couldn't process your payment.</p>
                    <div className="flex justify-center mt-4">
                        <button className="bg-black text-white p-2 rounded mr-2">Try Again</button>
                        <button className="bg-gray-300 text-black p-2 rounded ml-2" onClick={onRequestClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OopsModal;
