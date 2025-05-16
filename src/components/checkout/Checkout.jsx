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
import { PaystackButton } from 'react-paystack'; // Assuming this is installed and available
import { useNavigate } from 'react-router-dom'; // Assuming react-router-dom is used for navigation

const Checkout = () => {
    const [quantities, setQuantities] = useState(Array(products.length).fill(2));
    const navigate = useNavigate();

    const total = products.reduce((sum, item, index) => sum + item.price * quantities[index], 0);

    // Paystack public key (replace with your actual key)
    const publicKey = "YOUR_PAYSTACK_PUBLIC_KEY";

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com", // Replace with the user's email
        amount: total * 100, // Amount in kobo
        publicKey: publicKey,
    };

    const handlePaystackSuccessAction = (reference) => {
        console.log(reference);
        // Handle successful payment, e.g., navigate to success page
        navigate('/order-success');
    };

    const handlePaystackCloseAction = () => {
        console.log('Payment closed');
        // Handle payment closure, e.g., show a message
    };


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
                         {/* Paystack Button Integration */}
                         <PaystackButton
                            {...config}
                            text="Pay with Paystack"
                            onSuccess={handlePaystackSuccessAction}
                            onClose={handlePaystackCloseAction}
                        />
                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;