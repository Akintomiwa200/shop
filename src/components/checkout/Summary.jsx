// src/components/Summary.jsx
import React from 'react';

const Summary = ({ total }) => {
    return (
        <div className='flex md:justify-end mt-4'>
            <div className=" w-full md:w-[30vw] md:jusify-right bg-white p-4 my-4">
                <div className="mb-4">
                    <div className="text-right font-bold flex justify-between w-[80vw] md:w-[20vw]">
                        <h2>Total:</h2>
                        <h3 className='text-blue-500'>₦{total}</h3></div>
                </div>

                <button className=" w-[80vw] bg-blue-600 text-white p-2 rounded mt-4 md:w-[20vw]">Place Order</button>
            </div>
        </div>
        
    );
};

export default Summary;
