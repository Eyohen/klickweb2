import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { getCartId } from '../hooks/useGetLoginUser';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const cartId = getCartId()
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    const addToCart = async (product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex] = product;
            setCart(updatedCart);
        } else {
            const newCart = [...cart, product];
            setCart(newCart);
        }
        const data = {
            items: cart.map((item) => ({
                id: item.id,
                count: item.count,
            })),
        };

        const config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `https://klick-api.onrender.com/cart/update/${cartId || ''}`,
            headers: {},
            data: data,
        };

        try {
            const response = await axios(config);
            console.log(JSON.stringify(response.data));
        } catch (error) {
            console.log(error);
        }
    };

    const removeFromCart = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
    };

    const updateCartItemQuantity = (productId, quantity) => {
        if (quantity === 0) {
            const updatedCart = cart.filter((item) => item.id !== productId);
            setCart(updatedCart);
        } else {
            const updatedCart = cart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            );
            setCart(updatedCart);
        }
    };

    const clearCart = async () => {
        const config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `https://klick-api.onrender.com/cart/update/${cartId || ''}`,
            headers: {},
            data: {
                items: [],
            },
        };

        try {
            const response = await axios(config);
            console.log(JSON.stringify(response.data));
        } catch (error) {
            console.log(error);
        }
        setCart([]);
    };

    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalItemCount = () => {
        return cart.length || 0;
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateCartItemQuantity,
                clearCart,
                getCartItemCount,
                getTotalItemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
