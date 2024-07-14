// src/pages/Checkout.jsx
import React, { useContext } from 'react';
import Header2 from '../components/prod/Header2';
import CartItems from '../components/checkout/CartItems';
import ShippingAddress from '../components/checkout/ShippingAddress';
import ContactInformation from '../components/checkout/ContactInformation';
import PaymentMethod from '../components/checkout/PaymentMethod';
import Summary from '../components/checkout/Summary';
import Footer from '../components/home/Footer';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className='m-0 p-0 overflow-hidden flex flex-col jusify-center'>
            <Header2 />
            <div className="container flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold mb-4 text-center">Checkout</h1>
                <div className="flex flex-col justify-center">
                    <div className="container flex flex-col justify-center items-center">
                        <CartItems cartItems={cartItems} />

                        <div className='flex flex-col md:flex-row w-[80vw] gap-[4em] justify-between'>
                            <div className='w-full md:w-[40vw] h-[20vh] mb-16 flex flex-col items-center'>
                                <ShippingAddress />
                                <ContactInformation />
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
