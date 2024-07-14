// src/components/checkout/CartItems.jsx
import React, { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';

const CartItems = ({ cartItems }) => {
    const { handleQuantityChange } = useContext(CartContext);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return `${text.substring(0, maxLength)}...`;
    };

    return (
        <div className="bg-white p-4 border-b-4 mb-4 w-[80vw]">
            <div className="w-[76vw] text-xl font-bold flex justify-between items-center pb-4 mb-4 border-b-4">
                <h3>Product</h3>
                <h3 className='hidden md:flex'>Price</h3>
                <h3 className='hidden md:flex'>Quantity</h3>
                <h3>Total</h3>
            </div>
            <div className='flex flex-col justify-center'>
                {cartItems.map((item, index) => (
                    <div key={index} className="flex w-[75vw] justify-between items-center mb-4">
                        <div className='flex items-center w-[12vw] gap-2'>
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                            <div className='w-[60vw] md:auto flex flex-col'>
                                <h3 className="text-xl font-bold w-[60vw]">{truncateText(item.name, 20)}</h3>
                                <p>Color: Pink, Blue</p>
                                <p>Size: M, L</p>
                            </div>
                        </div>
                        <p className='hidden md:flex'>₦{item.price}</p>
                        <span className='hidden md:flex border border-blue-500 rounded-2xl p-2'>
                            <button onClick={() => handleQuantityChange(index, -1)} className="p-2 bg-gray-200 rounded-2xl text-blue-500 hover:bg-gray-300">
                                <FaMinus />
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(index, 1)} className="p-2 bg-gray-100 rounded-2xl text-blue-500 hover:bg-gray-300">
                                <FaPlus />
                            </button>
                        </span>
                        <span className="text-lg font-semibold">₦{item.price * item.quantity}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartItems;
