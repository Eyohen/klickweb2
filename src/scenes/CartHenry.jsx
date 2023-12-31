import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCartId } from '../hooks/useGetLoginUser';
import { useNavigate } from 'react-router-dom';
import { useGetCart, useUpdateCart } from '../api/Cart_api';


function LoadingScreen() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );
}


const useReconcileCart = () => {
    // api calls 
    const cartId = localStorage.getItem('cartId') ? localStorage.getItem('cartId') : ""
    const {data , isLoading , isError , isSuccess } = useGetCart(cartId)
    const {mutate , isLoading: mutateLoading , isError : mutateError, isSuccess: mutateIsSuccess} = useUpdateCart()

    const reconile = async () => {
        const reconileLocalCart =  localCart.reduce((prev,curr)=>{
            // prev[curr.id]= curr.count
            const _prev = prev
            _prev.push({id:curr.id , count: curr.count})
            return _prev
        },[])
    
        console.log(reconileLocalCart)
        
        await mutate({
                id: cartId, 
                items: reconileLocalCart
            })
    }

    // use local cache
    const localCartRaw = localStorage.getItem('cart');
    const localCart = JSON.parse(localCartRaw)

    // try and mutate once api

   

    useEffect(()=>{
         reconile()
    },[])

    

    return {Cart : isSuccess ? data?.data?.items : localCart , isLoading: (isLoading ||  mutateLoading), isError: true, completeRoncile: mutateIsSuccess  , reconile: reconile }


}

const CartHenry = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();
    const cartId = getCartId();

    const {Cart , isLoading, isError, completeRoncile} = useReconcileCart()
    console.log(Cart)

    const navigateToCheckout = () => {

        const token = localStorage.getItem('access_token');
        const loggedIn = token ? true : false;
        console.log(loggedIn)
        if (loggedIn) navigate("/checkout")
        else  navigate("/login")
    };


    
   

    console.log("moving on with cart 1",cartItems)

    if (isLoading) {
        return <LoadingScreen />;
    }
    if (!Cart || Cart?.length === 0) {
        return <div className="container">
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl">No items in the cart.</p>
            </div>
        </div>
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
                {Cart?.map((item) => {
                    return <div className='flex justify-between items-center p-5' key={item.id}>
                        <img src={completeRoncile ? item?.info?.images[0] : item?.info?.images[0] } className='rounded-xl w-[80px] h-[80px]' alt='Product' />
                        <p className=''>{item.info.name}</p>
                        <p className=''>{item.count}</p>
                        <p className='text-blue'>{`N${ completeRoncile ? item?.info?.discountedPrice : item?.info?.discountedPrice}`}</p>
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
                })}
                <button
                    className='inline-flex items-center py-5 px-14 mb-2 font-medium text-sm text-white bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300'
                    onClick={navigateToCheckout}
                >
                    Checkout - N {Cart?.reduce((prev, curr)=> prev + (( completeRoncile ? curr?.info?.discountedPrice : curr?.info?.discountedPrice) * curr.count),0)}
                </button>
            </div>
        </div>

    );
};

export default CartHenry;
