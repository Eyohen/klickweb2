import React, { useState } from 'react';
import ProductCard from './ProductCard';

import img1 from "../../assets/images/GridItem.png"
import { AiFillStar } from 'react-icons/ai'
import Footer from '../../components/Footer';
import BackArrow from './BackArrow';
import FillButton from './FillButton';
import OutlineButton from './OutlineButton';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
    const [check, setCheck] = useState(true);
    const [count, setCount] = useState(0);

    const navigate = useNavigate();

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

    const checkOut = () => {
        setCheck(!check);
        if(check){
            navigate('/checkout')
        }
    }


    return (
        <div className='p-10'>
            <BackArrow />

            <div className='w-full gap-20 flex'>
                {/* left */}
                <div className=' w-1/2'>
                    <div>
                        <img src={img1} className='rounded-xl' />        
                    </div>
                    <div className='flex gap-4 h-28 w-28 mt-5'>
                        <img src={img1} className='rounded-2xl' />      
                        <img src={img1} className='rounded-2xl' />
                        <img src={img1} className='rounded-2xl' />
                        <img src={img1} className='rounded-2xl' />
                    </div>
                        
                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        
                    <div className=' font-semibold text-lg mb-5'>
                            Sellers Info: 
                        </div>
                        
                    <div className=' flex justify-between'>
                        <div className='flex gap-4'>
                                <div>
                                <img src={img1} className='h-10 w-10 rounded-full' />
                            </div>
                            <div className=''>
                                <h3 className=' font-semibold'>The Cuddle Club</h3>
                                <div className=' text-gray-500 flex items-center gap-2'>
                                    <AiFillStar />
                                    <h3 className=' text-xs'>Ikoyi, Lagos</h3>
                                </div>
                            </div>
                        </div>    
                        <div className=' text-blue-600'>View Profile</div>    
                    </div>
                </div>

                {/* right */}
                <div className='w-1/2'>
                    <div className=' text-3xl font-bold'>
                        3 in 1 Baby Stroller
                    </div>

                    <div className=' items-center flex gap-4 my-5'>
                        <div className=' flex'>
                            <AiFillStar size={24} color='gold' />
                            <AiFillStar size={24} color='gold' />
                            <AiFillStar size={24} color='gold' />
                            <AiFillStar size={24} color='gold' />
                            <AiFillStar size={24} color='grey' />
                        </div>
                        <div>
                            4.5 (215 reviews)
                        </div>
                        <div className='text-blue-600 font-medium'>Read reviews</div>
                    </div>
                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                    <div className=' text-2xl font-bold'>
                        N687,000
                    </div>
                    
                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                    <div>
                        <div>
                            <div className=' text-sm text-gray-500 mb-5'>Available Colors</div>
                            <div className=' flex gap-4'>
                                <label class="block h-12 w-12 cursor-pointer rounded-full bg-[#d7f98c] transition hover:!opacity-100" />
                                <label class="block h-12 w-12 cursor-pointer rounded-full bg-[#348ee7] transition hover:!opacity-100" />
                                <label class="block h-12 w-12 cursor-pointer rounded-full bg-[#e345a6] transition hover:!opacity-100" />
                                <label class="block h-12 w-12 cursor-pointer rounded-full bg-[#230505] transition hover:!opacity-100" />
                            </div>
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className=' items-center flex gap-12'>
                            <div className='p-4 border rounded-xl bg-slate-200'>
                                <div className=' text-xl flex gap-14'>
                                    <button onClick={handleDecrement}>-</button>
                                    <h1>{count}</h1>
                                    <button onClick={handleIncrement}>+</button>
                                </div>
                            </div>
                            <div className='  text-gray-500'>
                                Only <span className=' text-orange-500'>9 items</span> left
                            </div>
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className='my-8 flex w-full'>
                          <FillButton onClick={()=>checkOut()} name='Buy Now' className='w-1/2' />
                       <OutlineButton name='Buy Later' className='w-1/2' />
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className=' text-gray-500'>
                            <ol className=' space-y-1'>
                                {[1,2,3,4,5,6,7,8,9].map(()=><li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.</li>
                                )}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* bottom half */}
            <div className=' font-medium mb-4'>
                Related Products: 
            </div>

            <div className='grid grid-cols-4 gap-4'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => <ProductCard />)}
            </div>


            {/* footer */}
            <Footer />
        </div>
    );
}

export default ProductDetails