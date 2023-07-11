import React, { useState } from 'react'


import BackArrow from './BackArrow';
import FillButton from './FillButton';
import OutlineButton from './OutlineButton';
import img1 from "../../assets/images/GridItem.png"
// import img1 from '../images/img1.jpg'

import { AiFillStar } from 'react-icons/ai'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import Footer from '../../components/Footer';

function CheckOut() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

    return (
        <div className='p-10 font-medium'>
            <BackArrow />

            <h3 className=' mb-8 font-semibold text-2xl'>Place Order</h3>

            <div className='w-full flex gap-5'>
                {/* left */}
                <div className='w-4/6 space-y-5'>
                    <div className='block p-6 bg-white border border-gray-200 rounded-lg'>
                        <div className='mb-6'>Delivery to</div>

                        <div className=' flex justify-between items-center'>
                            <div className=' space-y-1'>
                                <div className=' text-xl'>Michael Steven</div>
                                <div className=' text-sm text-gray-400 font-normal'>2 Block A, Ikoyi Link Road</div>
                            </div>

                            <div>
                                <OutlineButton name='Change' />
                            </div>
                        </div>
                    </div>

                    <div className='block p-6 bg-white border border-gray-200 rounded-lg'>
                        <div className=''>
                        <div className=' mb-6'>Shipping Method</div>

                        <div className=' flex justify-between'>
                                <div className='mb-3'>
                                    Ship with seller
                                </div>

                                <div class="">
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500" />
                                </div>
                        </div>

                        <div className=' flex gap-3 items-center'>
                                    <AiFillStar />
                                    <div className=' text-sm text-gray-400 font-normal'>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                        </div>
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        
                            <div className=''>
                        <div className=' mb-6'>Shipping Method</div>

                        <div className=' flex justify-between'>
                                <div className='mb-3'>
                                    Ship with seller
                                </div>

                                <div class="">
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500" />
                                </div>
                        </div>

                        <div className='mb-2 flex gap-3 items-center'>
                                    <AiFillStar />
                                    <div className=' text-sm text-gray-400 font-normal'>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                        </div>
                        <div className=' mb-2 flex gap-3 items-center'>
                                    <AiFillStar />
                                    <div className=' text-sm text-gray-400 font-normal'>
                                        
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                        </div>
                        <div className=' mb-2 flex gap-3 items-center'>
                                    <AiFillStar />
                                    <div className=' text-sm text-gray-400 font-normal'>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                        </div>

                        <button type="button" class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        1000
                        </button>
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        
                        <div className=''>
                        <div className=' mb-6'>Shipping Method</div>

                        <div className=' flex justify-between'>
                                <div className='mb-3'>
                                    Ship with seller
                                </div>

                                <div class="">
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500" />
                                </div>
                        </div>

                        <div className=' flex gap-3 items-center'>
                                    <AiFillStar />
                                    <div className=' text-sm text-gray-400 font-normal'>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                        </div>
                        <div className=' mb-2 flex gap-3 items-center'>
                                    <AiFillStar />
                                    <div className=' text-sm text-gray-400 font-normal'>
                                        
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                        </div>
                        <div className=' mb-2 flex gap-3 items-center'>
                                    <AiFillStar />
                                    <div className=' text-sm text-gray-400 font-normal'>
                                        
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                        </div>
                        <div className=' mb-2 flex gap-3 items-center'>
                                    <AiFillStar />
                                    <div className=' text-sm text-gray-400 font-normal'>
                                        
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                        </div>
                        <div className=' mb-2 flex gap-3 items-center'>
                                    <AiFillStar />
                                    <div className=' text-sm text-gray-400 font-normal'>
                                        
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                        </div>
                        <div className=' mb-2 flex gap-3 items-center'>
                                    <AiFillStar />
                                    <div className=' text-sm text-gray-400 font-normal'>
                                        
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                        </div>

                        <button type="button" class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        1500
                        </button>

                    </div>
                    </div>

                    <div className='block p-6 bg-white border border-gray-200 rounded-lg'>
                        <p className='mb-6'>Payment Method</p>
                        
                        <div className='flex gap-3 items-center'>
                            <AiFillStar />
                            <div className=' text-sm text-gray-400 font-normal'>            
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className='flex gap-3 items-center'>
                            <AiFillStar />
                            <div className=' text-sm text-gray-400 font-normal'>            
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className='flex gap-3 items-center'>
                            <AiFillStar />
                            <div className=' text-sm text-gray-400 font-normal'>            
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className=' w-2/6 space-y-5'>
                    <div className='block p-6 bg-white border border-gray-200 rounded-lg'>
                        <p className=' text-lg mb-6'>Order Summary</p>

                        <div className='flex gap-4'>
                            <img src={img1} className='w-24 h-24 rounded-xl' />
                            
                            <div className=''>
                                <div className='flex justify-between items-center'>
                                    <p>HD SLR CAMERA</p>
                                    <RiDeleteBin2Fill />
                                </div>
                                <p className=' my-3'>N 20,000</p>
                                    <div className='flex gap-3 text-center'>
                                        <button onClick={handleDecrement}>-</button>
                                        <h1>{count}</h1>
                                        <button onClick={handleIncrement}>+</button>
                                    </div>
                            </div>
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className='flex gap-4'>
                            <img src={img1} className='w-24 h-24 rounded-xl' />
                            
                            <div className=''>
                                <div className='flex justify-between items-center'>
                                    <p>HD SLR CAMERA</p>
                                    <RiDeleteBin2Fill />
                                </div>
                                <p className=' my-3'>N 20,000</p>
                                    <div className='flex gap-3 text-center'>
                                        <button onClick={handleDecrement}>-</button>
                                        <h1>{count}</h1>
                                        <button onClick={handleIncrement}>+</button>
                                    </div>
                            </div>
                        </div>

                        <div className=''>
                            <p className='mt-5'>Discount Code</p>

                            <form class="flex items-center mt-2">   
                                {/* <label for="voice-search" class="sr-only">Search</label> */}
                                <div class="relative w-full">
                                    <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-gray-200 rounded-lg border  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Apply
                                </button>
                            </form>
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className='space-y-5'>
                            <div className='flex justify-between'>
                                <p className=' text-gray-400'>Subtotal</p>
                                <p>N209,000</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className=' text-gray-400'>Subtotal</p>
                                <p className='text-blue-500'>- 9,000</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className=' text-gray-400'>Subtotal</p>
                                <p>N200,000</p>
                            </div>
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className=' space-y-4'>
                            <div className='flex justify-between'>
                                <p className=' text-gray-400'>Subtotal</p>
                                <p>N209,000</p>
                            </div>
                            
                            <div className=' items-center'>
                                <FillButton name='Confirm Order' />
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default CheckOut