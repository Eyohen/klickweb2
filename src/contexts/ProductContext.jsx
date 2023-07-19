import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                searchQuery,
                setSearchQuery,
                sortOption,
                setSortOption,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
