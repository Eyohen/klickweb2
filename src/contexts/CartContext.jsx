import { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex] = product;
            setCart(updatedCart);
        } else {
            setCart([...cart, product]);
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

    const clearCart = () => {
        setCart([]);
    };

    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateCartItemQuantity,
                clearCart,
                getCartItemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
