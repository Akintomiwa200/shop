import React, { useEffect, useState } from 'react';
import lady from '../../assets/landingimage/img11.png';

const Hero = () => {
    const countdownDate = new Date('2024-07-30T00:00:00Z');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +countdownDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <div className='container py-8 flex justify-center items-center'>
            <section className="bg-purple-600 py-8 text-white justify-between items-center space-x-4 rounded-xl flex px-4 lg:px-24 mx-4 lg:mx-16 w-full lg:w-[80em] h-auto lg:h-[40em] flex-col lg:flex-row text-center lg:text-left md:py-32">
                <div className="lg:w-1/2 w-full">
                    <h1 className="text-4xl lg:text-5xl mb-4">ULTIMATE</h1>
                    <h1 className="text-6xl lg:text-8xl border-white mb-4">SALES</h1>
                    <span className='flex flex-row lg:flex-row gap-2 lg:gap-8 justify-center lg:justify-start mb-6 text-xl'>
                        <p>Get 25% off</p>
                        <p>|</p>
                        <p>Free Shipping</p>
                    </span>
                    <a href="/shop" className="inline-block px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Shop Now</a>
                    <div className="mt-8">
                        <p className="text-lg">Hurry, Before It's Too Late!</p>
                        <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                            <div className="text-center">
                                <span className="block text-4xl font-bold p-2 rounded bg-white text-purple-600">{days}</span>
                                <span>Days</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-4xl font-bold p-2 rounded bg-white text-purple-600">{hours}</span>
                                <span>Hr</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-4xl font-bold p-2 rounded bg-white text-purple-600">{minutes}</span>
                                <span>Mins</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-4xl font-bold p-2 rounded bg-white text-purple-600">{seconds}</span>
                                <span>Sec</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex lg:w-1/2 w-full justify-center lg:justify-end">
                    <img className='h-[20em] lg:h-[42em]' src={lady} alt="Lady" />
                </div>
            </section>
        </div>
    );
};

export default Hero;
