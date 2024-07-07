import React, { useState } from 'react';
import testimonials from './data2';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="bg-blue-50 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">Our Customers Review</h2>
            <div className="flex flex-col justify-center items-center space-x-4">

                <div className="bg-white p-4 rounded shadow-md flex items-center w-[33.4625em] h-[15em] mb-8 gap-4">
                    <img
                        src={currentTestimonial.imageUrl}
                        alt={currentTestimonial.name}
                        className="w-24 h-24 mx-auto"
                    />
                    <div className="flex flex-col items-start">
                        <p className="text-left text-gray-600 mt-2 w-72">{currentTestimonial.comment}</p>
                        <div className="flex justify-center mt-4">
                            {[...Array(currentTestimonial.rating)].map((_, index) => (
                                <FaStar key={index} className="text-yellow-500" />
                            ))}
                        </div>
                        <h3 className="text-lg font-bold text-center mt-4">{currentTestimonial.name}</h3>

                    </div>
                </div>
                <div className='flex gap-2'>
                    <button onClick={handlePrevClick} className="p-2 bg-white rounded-full hover:bg-gray-300 shadow-md">
                        <FaChevronLeft />
                    </button>
                    <button onClick={handleNextClick} className="p-2 bg-white shadow-md rounded-full hover:bg-gray-300 text-blue-700">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
