import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Adjust the import path as needed

const ProductModal = ({ product, setModalOpen }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product); // Add product to cart
        setModalOpen(false); // Close the modal after adding to cart
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-1/2">
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <img src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`} alt={product.name} className="w-full h-64 object-cover mb-4" />
                <p className="mb-4">{product.description}</p>
                <p className="mb-4 font-semibold">₦{product.current_price[0].NGN[0]}</p>
                <button onClick={handleAddToCart} className="px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
                <button onClick={() => setModalOpen(false)} className="px-4 py-2 bg-red-500 text-white rounded ml-4">Close</button>
            </div>
        </div>
    );
};

export default ProductModal;
