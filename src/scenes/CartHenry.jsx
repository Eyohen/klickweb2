import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img1 from '../assets/images/GridItem.png';
import useGetLoggedInUser from '../hooks/useGetLoginUser';
import { useNavigate } from 'react-router-dom';

const CartHenry = () => {
    const { user } = useGetLoggedInUser();
    const cartId = user?.cartId;
    
    const navigate = useNavigate();
    const navigateToCheckout = () => {
        navigate("/checkout");
    };
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0)

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
                    <p className=''>Quantity</p>
                    <p className=''>Price</p>
                    <p className=''>Delete</p>
                </div>
                <div className='border border-gray-400 mt-2'></div>

                {/* product card */}
                {cartItems.map((item) => (
                    <div className='flex justify-between items-center p-5' key={item.id}>
                        <img src={img1} className='rounded-xl w-[80px] h-[80px]' alt='Product' />
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
                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                            />
                        </svg>
                    </div>
                ))}
                <div className='text-right'>
                    <button
                        className='bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm py-5 mr-2 px-14 mb-2'
                        onClick={navigateToCheckout}
                    >
                        Checkout - N{totalAmount}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartHenry;
