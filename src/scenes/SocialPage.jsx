import React from 'react'
import img1 from "../assets/images/GridItem.png";
import { RiMessage2Fill, RiSendPlaneFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import Footer from '../components/Footer';
// import ProductCard from './ProductDetails.jsx/ProductCard';

function SocialPage() {
    return (
        <div className=' py-6 px-20'>
            <div className='block p-6 bg-white border border-gray-200 rounded-xl'>

                {/* story */}

                {/* i think should be a horizontal scroll for practicality 
                i would do that if necessary */}
                <div className=' items-center justify-center flex gap-6'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() =>
                        <div className=' space-y-3 text-center'>
                            <img src={img1} className=' ring-4 p-1 ring-gray-300 rounded-full h-20 w-20' />
                            <p className=' font-mono text-sm font-medium'>My First Story</p>
                        </div>
                    )}
                </div>

                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                {/* Social post 1 */}
                <div className=' space-y-5'>
                    <div className=' flex justify-center'>
                        <div className='w-2/3'>
                            <div className=' space-y-4 items-center'>
                                <div className='flex gap-3 items-center'>
                                    <img src={img1} className=' w-20 h-20 rounded-full' />
                                    <div className=' space-y-1'>
                                        <p className=' font-medium text-lg'>Zen Yoga</p>
                                        <p className=' text-sm text-gray-400'>Yaba, Lagos</p>
                                    </div>
                                </div>

                                <p className=' text-gray-500'>We are offering free yoga classes tuesdays from 8AM - 9PM</p>

                                <img className=' h-full w-full rounded-lg' src={img1} />
                            </div>

                            <div className=' flex justify-between pt-5 text-gray-500'>
                                <div className=' flex gap-10'>
                                    <div className='gap-3 flex items-center'>
                                        <AiFillHeart />
                                        <p className=' text-md'>234</p>
                                    </div>

                                    <div className='gap-3 flex items-center'>
                                        <RiMessage2Fill />
                                        <p className=' text-md'>14</p>
                                    </div>
                                </div>
                                <div>
                                    <RiSendPlaneFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* social post 2 */}
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <div className=' space-y-5'>
                    <div className=' flex justify-center'>
                        <div className='w-2/3'>
                            <div className=' space-y-4 items-center'>
                                <div className='flex gap-3 items-center'>
                                    <img src={img1} className=' w-20 h-20 rounded-full' />
                                    <div className=' space-y-1'>
                                        <p className=' font-medium text-lg'>Zen Yoga</p>
                                        <p className=' text-sm text-gray-400'>Yaba, Lagos</p>
                                    </div>
                                </div>

                                <p className=' text-gray-500'>We are offering free yoga classes tuesdays from 8AM - 9PM</p>

                                <img className=' h-full w-full rounded-lg' src={img1} />
                            </div>

                            <div className=' flex justify-between pt-5 text-gray-500'>
                                <div className=' flex gap-10'>
                                    <div className='gap-3 flex items-center'>
                                        <AiFillHeart />
                                        <p className=' text-md'>234</p>
                                    </div>

                                    <div className='gap-3 flex items-center'>
                                        <RiMessage2Fill />
                                        <p className=' text-md'>14</p>
                                    </div>
                                </div>
                                <div>
                                    <RiSendPlaneFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}

export default SocialPage