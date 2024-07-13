import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        const existingIndex = cartItems.findIndex(item => item.id === product.id);
        if (existingIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingIndex].quantity += quantity;
            setCartItems(updatedCartItems);
        } else {
            const newItem = { ...product, quantity };
            setCartItems([...cartItems, newItem]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
    };

    const updateQuantity = (productId, quantity) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === productId ? { ...item, quantity } : item
        );
        setCartItems(updatedCartItems);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
