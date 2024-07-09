


import React, { useState } from 'react';
import products from './data';
import { FaStar, FaStarHalfAlt, FaRegStar, FaPlus, FaMinus } from 'react-icons/fa';

const renderRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className="text-yellow-500" />
      ))}
    </div>
  );
};

const ProductList = () => {
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const incrementQuantity = (index) => {
    setQuantities(quantities.map((qty, i) => (i === index ? qty + 1 : qty)));
  };

  const decrementQuantity = (index) => {
    setQuantities(quantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty)));
  };

  return (
    <div className="grid w-[80vw] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div key={product.id} className="p-4">
          <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
          <h2 className="text-xl font-bold mt-2">{product.name}</h2>
          <p>{product.description}</p>
          <div className="flex items-center gap-4 mt-2">
            {renderRating(product.rating)}<span className='gap-2'>{product.rating}({product.reviews})</span>
          </div>
          <span className='flex items-center justify-between'>
            <span className="text-lg font-semibold">₦{product.price}</span>
            <div className="flex items-center mt-2 text-xs md:text-xl">
              <button
                onClick={() => decrementQuantity(index)}
                className="pl-1 bg-gray-200 rounded-full text-gray-800 text-xs md:text-xl hover:bg-gray-300">
                <FaMinus />
              </button>
              <span className="px-4 text-xs md:text-xl">{quantities[index]}</span>
              <button
                onClick={() => incrementQuantity(index)}
                className="pl-1 bg-gray-200 rounded-full hover:bg-gray-300 text-gray-800 text-xs md:text-xl">
                <FaPlus />
              </button>
            </div></span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
