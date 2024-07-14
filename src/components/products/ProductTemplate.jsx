import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductModal from '../modal/ProductModal';

const ProductTemplate = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // Hardcoded API details
    const organizationId = '08795f9d14134eab91870836779a7bad';
    const appId = 'XOJ071P81OPLFDZ';
    const apiKey = 'e01db212643a4df8adcec84fc49ac69920240713090305722296';

    const fetchProducts = async (page) => {
        setLoading(true);
        try {
            const url = new URL('https://timbu-get-all-products.reavdev.workers.dev/');
            url.searchParams.append('organization_id', organizationId);
            url.searchParams.append('Appid', appId);
            url.searchParams.append('Apikey', apiKey);
            url.searchParams.append('page', page);
            url.searchParams.append('size', 10);

            const response = await fetch(url.toString());
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (data && Array.isArray(data.items) && data.items.length > 0) {
                const newProducts = data.items.map((item, index) => ({
                    ...item,
                    key: `${item.id}-${index}`, // Combine id and index to ensure unique keys
                }));
                setProducts((prevProducts) => [...prevProducts, ...newProducts]);
            }
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

            {loading ? (
                <div className="text-xl font-bold">Loading...</div>
            ) : (
                <ProductList
                    products={products}
                    handleProductClick={handleProductClick}
                />
            )}

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

export default ProductTemplate;
