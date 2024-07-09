// Banner.jsx
import React from 'react';
import mode from '../../assets/landingimage/trustbag.png'

const Banner = () => {
    return (
        <div className="w-[100vw] flex justify-center items-center my-16">
            <div className="flex flex-col text-sm w-[80vw]">
                <div className="flex items-center my-4">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1l2 9h12l2-9h1M3 10h18M10 10V5a3 3 0 116 0v5"></path>
                    </svg>
                    <span>Estimated Delivery: Jul 30 - Aug 03</span>
                </div>
                <div className="flex items-center my-4">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Free Shipping & Returns: On all orders over ₦500,000</span>
                </div>
                <div className="flex justify-center items-center my-4">

                    <span className='container bg-blue-50 flex flex-col justify-center items-center h-[20vh]'>
                        <span className='mb-4'>Guarantee safe & secure checkout</span>
                        <img src={mode} alt="" />
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Banner;
