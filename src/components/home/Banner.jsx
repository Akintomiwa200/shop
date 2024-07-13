

import React from 'react';
import arrive1 from '../../assets/landingimage/arrive1.jpeg';
import arrive2 from '../../assets/landingimage/arrive2.jpeg';
import arrive3 from '../../assets/landingimage/arrive3.png';
import arrive4 from '../../assets/landingimage/arrive4.png';

const Banner = () => {
    return (
        <div className='container flex justify-center mt-16 rounded'>
            <section className="bg-gray-100 w-[90vw] flex justify-center items-center lg:w-[80em] lg:h-auto h-full">
                <div className="container mx-auto text-center h-full lg:h-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 h-full lg:h-auto">
                        <div className="flex justify-center h-full lg:h-auto">
                            <img src={arrive1} alt="New Arrival 1" className="h-full lg:h-auto md:shrink w-full object-cover" />
                        </div>
                        <div className="flex flex-col items-center justify-between bg-white px-8 py-4 h-full lg:h-auto">
                            <img src={arrive3} alt="arrive4" className="mb-4" />
                            <h2 className="text-4xl font-bold mb-4">NEW</h2>
                            <h2 className="text-4xl font-bold mb-4">ARRIVAL</h2>
                            <a href="/shop" className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Shop Now</a>
                            <img src={arrive4} alt="arrive3" className="mt-4" />
                        </div>
                        <div className="hidden justify-center h-full lg:h-auto md:flex">
                            <img src={arrive2} alt="New Arrival 2" className="h-full lg:h-auto w-full md:auto object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
