
import React from 'react';
import Header from '../components/home/Header';
import ProductList from '../components/products/ProductList';

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Shop</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default Shop;
