// src/components/CartItems.jsx
import React, { useState } from 'react';
import products from './data';
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartItems = ({ quantities }) => {

    // const [quantities, setQuantities] = useState(products.map(() => 1));

    // const incrementQuantity = (index) => {
    //     setQuantities(quantities.map((qty, i) => (i === index ? qty + 1 : qty)));
    // };

    // const decrementQuantity = (index) => {
    //     setQuantities(quantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty)));
    // };

    return (
        <div className="bg-white p-4 border-b-4 mb-4 w-[80vw]">

            <div className="w-[76vw] text-xl text-bold flex justify-between items-center pb-4 mb-4 border-b-4">
                <h3>Product</h3>
                <h3>price</h3>
                <h3>quantity</h3>
                <h3>total</h3>
            </div>
            <div className='flex flex-col justify-center'>
                {products.map((product, index) => (
                    <div key={product.id} className="flex w-[75vw] justify-between items-center mb-4">
                        <div className='flex items-center w-[12vw] gap-2'>
                            <img src={product.imageUrl} alt={product.name} className="w-16 h-16 rounded" />
                            <div>
                                <h3 className="text-xl font-bold">{product.name}</h3>
                                <p>Color: Pink, Blue</p>
                                <p>Size: M, L</p>
                            </div>

                        </div>


                        <p>₦{product.price} </p>
                        <span className='border border-blue-500 rounded-2xl p-2'>
                            <button onClick={() => decrementQuantity(index)} className="p-2 bg-gray-200 rounded-2xl text-blue-500 hover:bg-gray-300">
                                <FaMinus />
                            </button>
                            <span className="px-4">{quantities[index]}</span>
                            <button onClick={() => incrementQuantity(index)} className="p-2 bg-gray-100 rounded-2xl text-blue-500 hover:bg-gray-300">
                                <FaPlus />
                            </button>
                        </span>
                        {/* <p>{product.color}</p>
                        <p>{product.size}</p> */}
                        <span className="text-lg font-semibold">₦{product.price * quantities[index]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartItems;
