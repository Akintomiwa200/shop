
import React from 'react';
import ProductList from './ProductList';

const ProductDisplay = () => {
    return (
        <div className="container flex flex-col justify-center items-center">
            <div className='flex items-start justify-start text-left w-[80em] '>
                <h1 className="text-4xl font-bold my-8 ">Popular Products</h1>
            </div>

            <ProductList />
            <div>
                <button>view more</button>
            </div>
        </div>
    );
};

export default ProductDisplay;
