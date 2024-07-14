// // src/pages/CartPage.jsx
// import React from 'react';
// import Header2 from '../components/prod/Header2';
// import Cart from '../components/prod/Cart';
// import Summary from '../components/prod/Summary';
// import Testimonial from '../components/home/Testimonial'
// import Footer from '../components/home/Footer'
// import Banner from '../components/prod/Banner'
// import {CartContext} from '../context/CartContext'


// const CartPage = () => {
//     const { cartItems, handleQuantityChange, handleRemoveItem } = useContext(CartContext);
//     const subtotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
//     const discount = 10000;
//     const total = subtotal - discount;

//     return (
//         <div className='m-0 p-0 overflow-hidden flex flex-col justify-center items-center'>
//             <Header2 />
//             <div className='flex flex-col w-[90vw] justify-center items-center m-0 p-0'>
//                 <h2 className="text-2xl font-bold my-6">Carts (2)</h2>
//                 <div className="flex flex-col  justify-center p-4 lg:p-8">
//                     <div className='w-[80%] grid m-0 p-0 place-items-center md:flex md:gap-[5em]'>
//                         <Cart />
//                         <Summary subtotal={subtotal} discount={discount} total={total} />
//                     </div>
//                 </div>
//             </div>
//             <div className='w-[80vw] border-t-4'></div>
//             <Banner />
//             <Testimonial />
//             <Footer />
//         </div>
//     );
// };

// export default CartPage;







import React, { useContext } from 'react';
import Header2 from '../components/prod/Header2';
import Cart from '../components/prod/Cart';
import Summary from '../components/prod/Summary';
import Testimonial from '../components/home/Testimonial';
import Footer from '../components/home/Footer';
import Banner from '../components/prod/Banner';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const { cartItems } = useContext(CartContext);
    const subtotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    const discount = 10000;
    const total = subtotal - discount;

    return (
        <div className='m-0 p-0 overflow-hidden flex flex-col justify-center items-center'>
            <Header2 />
            <div className='flex flex-col w-[90vw] justify-center items-center m-0 p-0'>
                <h2 className="text-2xl font-bold my-6">Carts ({cartItems.length})</h2>
                <div className="flex flex-col  justify-center p-4 lg:p-8">
                    <div className='w-[80%] grid m-0 p-0 place-items-center md:flex md:gap-[5em]'>
                        <Cart />
                        <Summary subtotal={subtotal} discount={discount} total={total} />
                    </div>
                </div>
            </div>
            <div className='w-[80vw] border-t-4'></div>
            <Banner />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default CartPage;
