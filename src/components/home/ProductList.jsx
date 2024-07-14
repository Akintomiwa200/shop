import React, { useState, useContext } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaPlus, FaMinus } from 'react-icons/fa';
import renderRating from './renderRating';
import { CartContext } from '../../context/CartContext'; // Adjust the import path as needed

const ProductList = ({ products, handleProductClick }) => {
  const { addToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  const incrementQuantity = (index) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: (prevQuantities[index] || 1) + 1,
    }));
  };

  const decrementQuantity = (index) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: Math.max((prevQuantities[index] || 1) - 1, 1),
    }));
  };

  return (
    <div className="grid w-[90vw] lg:w-[80vw] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
      {products.map((product, index) => (
        <div key={product.key} className="p-4 w-[40vw] lg:w-[20vw] h-[25rem] overflow-hidden">
          <div className="relative h-full flex flex-col justify-between">
            <div onClick={() => handleProductClick(product)}>
              {product.photos && product.photos[0] && (
                <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.name} className="w-full h-64 object-cover" />
              )}
              <h2 className="text-sm font-bold mt-2 text-justify overflow-hidden whitespace-nowrap overflow-ellipsis">{product.name}</h2>
              <p className='text-xs lg:xl overflow-hidden whitespace-nowrap overflow-ellipsis'>{product.description}</p>
              <div className="flex items-center gap-4 mt-2 text-xs lg:text-xl">
                {renderRating(4.5)}<span className='gap-2 text-xs'>{4.5} ({product.reviews})</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              {product.current_price && product.current_price[0] && product.current_price[0].NGN && (
                <span className="text-xs lg:text-lg font-semibold">₦{product.current_price[0].NGN[0]}</span>
              )}
              <div className="flex items-center mt-2 text-xs text-xs md:text-xl">
                <button
                  onClick={(e) => { e.stopPropagation(); decrementQuantity(index); }}
                  className="pl-1 bg-gray-200 rounded-full text-gray-800 text-xs md:text-xl hover:bg-gray-300 md:p-2">
                  <FaMinus />
                </button>
                <span className="px-2 text-xs md:text-xl">{quantities[index] || 1}</span>
                <button
                  onClick={(e) => { e.stopPropagation(); incrementQuantity(index); }}
                  className="pl-1 bg-gray-200 rounded-full hover:bg-gray-300 text-gray-800 text-xs md:text-xl md:p-2">
                  <FaPlus />
                </button>
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;