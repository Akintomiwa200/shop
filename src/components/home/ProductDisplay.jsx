import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductModal from '../modal/ProductModal';

const ProductDisplay = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const organizationId = import.meta.env.VITE_REACT_APP_ORGANIZATION_ID;
    const appId = import.meta.env.VITE_REACT_APP_APPID;
    const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const url = new URL('https://your-api-base-url.com/api/products'); // Replace with your actual base URL
                url.searchParams.append('organization_id', organizationId);
                url.searchParams.append('Appid', appId);
                url.searchParams.append('Apikey', apiKey);
                url.searchParams.append('page', page);
                url.searchParams.append('size', 10);

                const response = await fetch(url.toString());
                const data = await response.json();
                
                console.log('API response:', data); // Log the API response for debugging
                
                if (data && Array.isArray(data.items)) {
                    const newProducts = data.items.map((item, index) => ({
                        ...item,
                        key: `${item.id}-${index}`, // Combine id and index to ensure unique keys
                    }));
                    setProducts((prev) => [...prev, ...newProducts]);
                } else {
                    console.error("Unexpected response structure:", data);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
            setLoading(false);
        };

        fetchProducts();
    }, [organizationId, appId, apiKey, page]);

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
