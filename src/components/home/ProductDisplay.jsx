
response 1   import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        const response = await axios.get('/api/products', {
          params: {
            organization_id: organizationId,
            Appid: appId,
            Apikey: apiKey,
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
  }, [organizationId, appId, apiKey, page]);

  const incrementPage = () => {
    setPage(page + 1);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="container flex flex-col justify-center items-center">
      <div