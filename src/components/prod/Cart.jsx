import React from 'react';
import { useCart } from '../../context/CartContext';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const incrementQuantity = (productId) => {
        const item = cartItems.find(item => item.id === productId);
        if (item) {
            updateQuantity(productId, item.quantity + 1);
        }
    };

    const decrementQuantity = (productId) => {
        const item = cartItems.find(item => item.id === productId);
        if (item && item.quantity > 1) {
            updateQuantity(productId, item.quantity - 1);
        }
    };

    return (
        <div className="w-[90%] md:w-[45em] border-t-4">
            {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4 p-4 bg-white rounded w-[70vw] md:w-full">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="ml-4 flex-1">
                        <h3 className="text-lg font-bold">{item.name}</h3>
                        <p>Color: {item.color.join(', ')}</p>
                        <p>Size: {item.size.join(', ')}</p>
                        <div className="flex gap-2 mt-2">
                            <button onClick={() => decrementQuantity(item.id)} className="p-2 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300">
                                <FaMinus />
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button onClick={() => incrementQuantity(item.id)} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 text-gray-800">
                                <FaPlus />
                            </button>
                        </div>
                        <p className="text-lg font-semibold mt-2">₦{item.price * item.quantity}</p>
                        <div className="mt-2">
                            <button onClick={() => removeFromCart(item.id)} className="px-4 py-2 bg-red-500 text-white rounded mr-2">Remove</button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded">Save for Later</button>
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
