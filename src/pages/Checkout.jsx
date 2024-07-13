
import React, { useState } from 'react';
import Header2 from '../components/prod/Header2.jsx';
import CartItems from '../components/checkout/CartItems.jsx';
import ShippingAddress from '../components/checkout/ShippingAddress.jsx';
import ContactInformation from '../components/checkout/ContactInformation.jsx';
import PaymentMethod from '../components/checkout/PaymentMethod.jsx';
import Summary from '../components/checkout/Summary.jsx';
import products from '../components/checkout/data.jsx';
import Footer from '../components/home/Footer.jsx'

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

                        <div className='flex flex-col md:flex-row w-[80vw] gap-[4em] justify-between'>
                            <div className='w-full md:w-[40vw] h-[20vh] mb-16 flex flex-col items-center'>
                                <ShippingAddress />
                                <ContactInformation />
                                <div>
                                    {/* <h3>
                                        shipping fee
                                        <span></span>
                                    </h3> */}

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
