// src/components/Checkout.jsx
import React, { useState } from 'react';
import Header2 from '../prod/Header2';
import CartItems from './CartItems';
import ShippingAddress from './ShippingAddress';
import ContactInformation from './ContactInformation';
import PaymentMethod from './PaymentMethod';
import Summary from './Summary';
import products from './data';
import Footer from '../Footer.jsx'

const Checkout = () => {
    const [quantities, setQuantities] = useState(Array(products.length).fill(2));

    const total = products.reduce((sum, item, index) => sum + item.price * quantities[index], 0);

    return (
        <div className='m-0 p-0 overflow-hidden flex flex-col jusify-center'>
            <Header2 />
            <div className="container flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold mb-4 text-center">Checkout</h1>
                <div className="flex flex-col justify-center">
                    <div className="container flex flex-col justify-center items-center">
                        <CartItems quantities={quantities} />

                        <div className='flex w-[80vw] gap-[4em] justify-between'>
                            <div className='w-[40vw] h-[20vh] flex flex-col items-center'>
                                <ShippingAddress />
                                <ContactInformation />
                                <div>
                                    <h3>
                                        shipping fee
                                        <span></span>
                                    </h3>

                                </div>
                            </div>
                            <PaymentMethod />
                        </div>
                        <div className='flex w-[80vw] justify-end border-t-4 mt-8'>
                            <Summary total={total} />
                        </div>
                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;
