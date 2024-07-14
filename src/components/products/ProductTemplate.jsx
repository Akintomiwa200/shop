import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductModal from '../modal/ProductModal';

const ProductTemplate = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const organizationId = import.meta.env.VITE_REACT_APP_ORGANIZATION_ID;
    const appId = import.meta.env.VITE_REACT_APP_APPID;
    const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;

    useEffect(() => {
        const fetchAllProducts = async () => {
            setLoading(true);
            let allProducts = [];
            let currentPage = 1;
            let fetchMore = true;

            try {
                while (fetchMore) {
                    const response = await axios.get('/api/products', {
                        params: {
                            organization_id: organizationId,
                            Appid: appId,
                            Apikey: apiKey,
                            page: currentPage,
                            size: 10,
                        },
                    });

                    if (response.data && Array.isArray(response.data.items) && response.data.items.length > 0) {
                        const newProducts = response.data.items.map((item, index) => ({
                            ...item,
                            key: `${item.id}-${index}`, // Combine id and index to ensure unique keys
                        }));
                        allProducts = [...allProducts, ...newProducts];
                        currentPage += 1;
                    } else {
                        fetchMore = false;
                    }
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }

            setProducts(allProducts);
            setLoading(false);
        };

        fetchAllProducts();
    }, [organizationId, appId, apiKey]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    return (
        <div className="container flex flex-col justify-center items-center">
            <div className='flex items-start justify-start text-left w-[80em]'>
            
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
        </div>
    );
};

export default ProductTemplate;
