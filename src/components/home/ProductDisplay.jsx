import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductModal from '../modal/ProductModal';

const ProductDisplay = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="container flex flex-col justify-center items-center">
            <div className='flex items-start justify-start text-left w-[80em]'>
                <h1 className="text-4xl font-bold my-8">Popular Products</h1>
            </div>

            <ProductList setSelectedProduct={setSelectedProduct} setModalOpen={setModalOpen} />
            {modalOpen && (
                <ProductModal product={selectedProduct} setModalOpen={setModalOpen} />
            )}
            <div className='flex w-[80vw] justify-end my-8 mb-32'>
                <button onClick={() => setPage(page + 1)} className='px-4 p-2 border border-blue-500 rounded-2xl'>See More</button>
            </div>
        </div>
    );
};

export default ProductDisplay;
