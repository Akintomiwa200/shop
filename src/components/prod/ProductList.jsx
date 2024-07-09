// src/components/ProductList.jsx
import React from 'react';
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
        <div className="grid w-[80vw] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
                <div key={product.id} className="p-4">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
                    <h2 className="text-xl font-bold mt-2">{product.name}</h2>
                    <p>{product.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                        {renderRating(product.rating)}
                        <span className='gap-2'>{product.rating}({product.reviews})</span>
                    </div>
                    <span className="text-lg font-semibold">₦{product.price}</span>
                    <div className="flex items-center mt-2">
                        <button
                            onClick={() => decrementQuantity(index)}
                            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            <FaMinus />
                        </button>
                        <span className="px-4">{quantities[index]}</span>
                        <button
                            onClick={() => incrementQuantity(index)}
                            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            <FaPlus />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
