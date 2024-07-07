import React from 'react';
import lady from '../assets/landingimage/img11.png'

const Hero = () => {
    return (
        <div className='container flex justify-center items-center'>
            <section className="bg-purple-600 text-white justify-between items-center space-x-4 rounded-xl flex px-24 mx-16 w-[80em] h-[40em]">
                <div className=" text-center ">
                    <h1 className="text-5xl mb-4">ULTIMATE </h1>
                    <h1 className="text-8xl border-white mb-4">SALES</h1>
                    <span className='flex gap-8  mb-6 '> <p className="text-xl ">Get 25% off </p> | <p className="text-xl">Free Shipping</p></span>
                    <a href="/shop" className="inline-block px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Shop Now</a>
                    <div className="mt-8">
                        <p className="text-lg">Hurry, Before It's Too Late!</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <div className="text-center ">
                                <span className="block text-4xl font-bold p-2 rounded bg-white text-purple-600">02</span>
                                <span>Days</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-4xl font-bold p-2 rounded bg-white text-purple-600">06</span>
                                <span>Hr</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-4xl font-bold p-2 rounded bg-white text-purple-600">35</span>
                                <span>Mins</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-4xl font-bold p-2 rounded bg-white text-purple-600">30</span>
                                <span>Sec</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='h-[42em]' src={lady} alt="" />
            </section>
        </div>
    );
};

export default Hero;
