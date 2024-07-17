import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductModal from '../modal/ProductModal';

const ProductDisplay = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const organizationId = 'cc1fd1c5b89f4d58a57f0696d6794c3d';
    const appId = '362YX3XEOKRR8TI';
    const apiKey = 'd9fde949791f45a99f75a2a68a97b97d20240712181346958569';
    const reverse_sort = false;
    const size = 10;

    const fetchProducts = async (page) => {
        setLoading(true);
        try {
            const url = new URL('https://api.timbu.cloud/');
            url.searchParams.append('organization_id', organizationId);
            url.searchParams.append('reverse_sort', reverse_sort);
            url.searchParams.append('page', page);
            url.searchParams.append('size', size);
            url.searchParams.append('Appid', appId);
            url.searchParams.append('Apikey', apiKey);

            const response = await fetch(url.toString());
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setProducts((prevProducts) => [...prevProducts, ...data.items]);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts(page);
    }, [page]);

    const incrementPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    return (
        <div className="container flex flex-col justify-center items-center">
            <div className='flex items-start justify-start text-left w-[80em]'>
                <h1 className="text-4xl font-bold my-8">Popular Products</h1>
            </div>

            <ProductList
                products={products}
                handleProductClick={handleProductClick}
            />

            {modalOpen && (
                <ProductModal
                    product={selectedProduct}
                    setModalOpen={setModalOpen}
                />
            )}

            <div className='flex w-[80vw] justify-end my-8 mb-32'>
                <button onClick={incrementPage} className='px-4 p-2 border border-blue-500 rounded-2xl'>
                    {loading ? 'Loading...' : 'See More'}
                </button>
            </div>
        </div>
    );
};

export default ProductDisplay;
