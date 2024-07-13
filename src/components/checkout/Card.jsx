// src/components/Card.jsx
import React from 'react';

const Card = ({ number, name, expiry }) => {
    return (
        <div className="w-[300px] h-[180px] bg-gray-200 rounded-lg p-4 shadow-md relative text-gray-800">
            <div className="text-right text-sm">{expiry}</div>
            <div className="text-center text-xl mt-4">{number}</div>
            <div className="absolute bottom-4 left-4 text-sm">{name}</div>
        </div>
    );
};

export default Card;
