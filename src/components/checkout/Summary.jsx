// src/components/Summary.jsx
import React from 'react';

const Summary = ({ total }) => {
    return (
        <div className='flex justify-end mt-4'>
            <div className="w-[30vw] jusify-right bg-white p-4 my-4">
                <div className="mb-4">
                    <div className="text-right font-bold flex justify-between w-[20vw]"><h2>Total:</h2>
                        <h3 className='text-blue-500'>₦{total}</h3></div>
                </div>

                <button className=" bg-blue-600 text-white p-2 rounded mt-4 w-[20vw]">Place Order</button>
            </div>
        </div>
        
    );
};

export default Summary;
