
import React from 'react'
import img1 from '../assets/images/GridItem.png'
import { useCart } from '../hooks/useCart';


const CartHenry = () => {
    const { cart } = useCart();
    console.log("🚀 ~ file: CartHenry.jsx ~ line 5 ~ CartHenry ~ cart", cart)
    return (
        <div>
            <div className='w-[1252px]  bg-gray-200 rounded-lg mx-auto px-4 py-[20px] mt-10 '>
                <div className='flex justify-between items-center'>
                    <p className=''>View Buy Later</p>
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
            {/*  */}
            <div className='w-[1252px]  bg-gray-200 rounded-lg mx-auto mt-10 px-4 '>
                <div className='flex justify-between items-center py-5'>
                    <p className=''>Image</p>
                    <p className=''>Name</p>
                    <p className=''>Quantity</p>
                    <p className=''>Price</p>
                    <p className=''>Delete</p>

                </div>
                <div className='border border-gray-400 mt-2'></div>

                {/* product card */}
                <div className='flex justify-between items-center p-5'>
                    <img src={img1} className="rounded-xl w-[80px] h-[80px]" />
                    <p className=''>Camera</p>
                    <p className=''>1</p>
                    <p className='text-blue'>N64,000</p>
                    <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CartHenry
