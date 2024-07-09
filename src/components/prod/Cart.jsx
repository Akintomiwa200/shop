// src/components/Cart.jsx
import React, { useState } from 'react';
import products from './data'; // Your product data
import { FaMinus, FaPlus } from 'react-icons/fa'



const Cart = () => {
    const [quantities, setQuantities] = useState(products.map(() => 1));

    const incrementQuantity = (index) => {
        setQuantities(quantities.map((qty, i) => (i === index ? qty + 1 : qty)));
    };

    const decrementQuantity = (index) => {
        setQuantities(quantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty)));
    };

    return (
        <div className="w-[90%] md:w-[45em] mx-auto border-t-4">
            
            {products.map((product, index) => (
                <div key={product.id} className="W-full flex justify-between items-center mb-4 p-4 bg-white rounded w-full">
                    <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover rounded" />
                    <div className="ml-4 flex-1">
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p>Color: Pink, Blue</p>
                        <p>Size: M, L</p>
                        <a href="#" className="text-blue-500 underline">Edit</a>
                        <a href="#" className="text-red-500 underline ml-2">Remove</a>
                    </div>
                   
                    <div className="flex gap-32 items-center">
                        <span className="text-lg font-semibold">₦{product.price}</span>
                        <span className='border border-blue-500 rounded-2xl p-2'>
                            <button onClick={() => decrementQuantity(index)} className="p-2 bg-gray-200 rounded-2xl text-blue-500 hover:bg-gray-300">
                                <FaMinus />
                            </button>
                            <span className="px-4">{quantities[index]}</span>
                            <button onClick={() => incrementQuantity(index)} className="p-2 bg-gray-100 rounded-2xl text-blue-500 hover:bg-gray-300">
                                <FaPlus />
                            </button>
                        </span>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Cart;
