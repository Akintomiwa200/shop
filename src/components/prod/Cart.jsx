import React, { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cartItems, handleQuantityChange, handleRemoveItem } = useContext(CartContext);

    return (
        <div className="w-[90%] flex flex-col items-center md:w-[45em] border-t-4">
            {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4 p-4 bg-white rounded w-[70vw] md:w-full">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="ml-4 flex-1">
                        <h3 className="text-lg font-bold">{item.name}</h3>
                     
                        <p className="text-lg font-semibold mt-2">₦{item.price * item.quantity}</p>
                        <div className="mt-2">
                            <button onClick={() => handleRemoveItem(index)} className="px-4 py-2 bg-red-500 text-white rounded mr-2">Remove</button>
                        </div>
                        
                           <div className="flex gap-2 mt-2">
                            <button onClick={() => handleQuantityChange(index, -1)} className="p-2 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300">
                                <FaMinus />
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(index, 1)} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 text-gray-800">
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {cartItems.length === 0 && (
                <p className="text-center mt-4">Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
