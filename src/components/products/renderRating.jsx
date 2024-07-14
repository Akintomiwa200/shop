import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaPlus, FaMinus } from 'react-icons/fa';

const renderRating = (rating = 4.5) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <div className="flex items-center">
            {[...Array(fullStars)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
            ))}
            {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
            {[...Array(emptyStars)].map((_, index) => (
                <FaRegStar key={index} className="text-yellow-500" />
            ))}
        </div>
    );
};

export default renderRating;
