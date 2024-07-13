import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaStarHalfAlt, FaRegStar, FaPlus, FaMinus } from 'react-icons/fa';
import renderRating from './renderRating'; // Adjust the import path as needed

const ProductList = ({ setSelectedProduct, setModalOpen }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/products', {
          params: {
            organization_id: 'cc1fd1c5b89f4d58a57f0696d6794c3d',
            Appid: '362YX3XEOKRR8TI',
            Apikey: 'd9fde949791f45a99f75a2a68a97b97d20240712181346958569',
            page,
            size: 10,
          },
        });

        if (response.data && Array.isArray(response.data.items)) {
          const newProducts = response.data.items.map((item, index) => ({
            ...item,
            key: `${item.id}-${index}`, // Combine id and index to ensure unique keys
          }));
          setProducts((prev) => [...prev, ...newProducts]);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [page]);

  const incrementPage = () => {
    setPage(page + 1);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

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
        <div key={product.key} className="p-4 w-[40vw] lg:w-[20vw]" onClick={() => handleProductClick(product)}>
          {product.product_image && product.product_image[0] && (
            <img src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt={product.name} className="w-full h-64 object-cover" />
          )}
          <h2 className="text-sm font-bold mt-2 text-justify">{product.name}</h2>
          <p className='text-xs lg:xl'>{product.description}</p>
          <div className="flex items-center gap-4 mt-2 text-xs lg:text-xl">
            {renderRating(4.5)}<span className='gap-2 text-xs'>{4.5} ({product.reviews})</span>
          </div>
          <span className='flex items-center justify-between'>
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
          </span>
        </div>
      ))}
      {loading && <div>Loading...</div>}
      {!loading && (
        <button onClick={incrementPage} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          See More
        </button>
      )}
    </div>
  );
};

export default ProductList;
