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

    const buyNow = async (product) => {
        const cartId = getCartId()
        console.log("[+] buy now called once");
        console.log(`cart id is ${cartId}`);
        const updatedCart = [{ id: product.id, count: product.count }];

        const data = {
            items: updatedCart
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

    const removeFromCart = async (product) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        const config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `https://klick-api.onrender.com/cart/update/${cartId || ''}`,
            headers: {},
            data: {
                items: newCart,
            },
        };

        try {
            const response = await axios(config);
            console.log(JSON.stringify(response.data));
        } catch (error) {
            console.log(error);
        }
        setCart(newCart);
        localStorage.removeItem("cart");
    };

    const updateCartItemQuantity = (productId, quantity) => {
        if (quantity === 0) {
            const updatedCart = cart.filter((item) => item.id !== productId);
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            const updatedCart = cart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            );
            setCart(updatedCart);
            localStorage.removeItem("cart");
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
        localStorage.removeItem("cart");

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
                buyNow,
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
