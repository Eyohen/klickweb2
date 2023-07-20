import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCartId } from '../hooks/useGetLoginUser';
import { useNavigate } from 'react-router-dom';

function LoadingScreen() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );
}

const CartHenry = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0)

    const navigate = useNavigate();
    const cartId = getCartId();

    const navigateToCheckout = () => {
        navigate("/checkout");
    };

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(
                    `https://klick-api.onrender.com/cart/${cartId || ''}`
                );
                const { data } = response.data;
                setCartItems(data.items);
                setTotalAmount(data.totalAmount)
            } catch (error) {
                console.log(error);
            }
        };

        if (cartId) {
            fetchCartItems();
        }
    }, [cartId]);

    console.log(cartItems);

    if (cartItems.length === 0) {
        return <LoadingScreen />;
    }
    return (
        <div className='container'>
            <div className='w-[1252px] bg-gray-200 rounded-lg mx-auto px-4 py-[20px] mt-10 '>
                <div className='flex justify-between items-center'>
                    <p className=''>View Buy Later</p>
                    <svg
                        className='w-4 h-4 text-gray-700'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                    </svg>
                </div>
            </div>
            {/*  */}
            <div className='w-[1252px] bg-gray-200 rounded-lg mx-auto mt-10 px-4 '>
                <div className='flex justify-between items-center py-5'>
                    <p className=''>Image</p>
                    <p className=''>Name</p>
                    <p className=''>Count</p>
                    <p className=''>Price</p>
                    <p className=''></p>
                </div>
                {cartItems.map((item) => (
                    <div className='flex justify-between items-center p-5' key={item.id}>
                        <img src={item.info.image[0]} className='rounded-xl w-[80px] h-[80px]' alt='Product' />
                        <p className=''>{item.info.name}</p>
                        <p className=''>{item.count}</p>
                        <p className='text-blue'>{`N${item.info.Discountprice}`}</p>
                        <svg
                            className='w-6 h-6 text-red-700'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M14.74 ... 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 ... 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 ... 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 ... 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 ... hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm py-5 mr-2 px-14 mb-2'
                            >
                            </path>
                        </svg>
                    </div>
                ))}
                <button
                    className='inline-flex items-center py-5 px-14 mb-2 font-medium text-sm text-white bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300'
                    onClick={navigateToCheckout}
                >
                    Checkout - N {totalAmount}
                </button>
            </div>
        </div>

    );
};

export default CartHenry;
