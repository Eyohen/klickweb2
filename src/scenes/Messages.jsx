import React from 'react'
import BackArrow from './ProductDetails.jsx/BackArrow';

import { CiSearch } from 'react-icons/ci'
import { FiSend } from 'react-icons/fi'
import Individual from './Individual';
// import img1 from '../assets/images/GridItem.png'
import img1 from "../assets/images/baby.png"
import Footer from '../components/Footer';

function Messages() {
    return (
        <div className='p-20'>
            <div>
                <BackArrow />
            </div>
            
            <p className=' text-2xl font-medium mb-8'>Messages</p>
            
            <div className='w-full flex '>
                {/* left */}
                <div className='block p-6 bg-white border rounded-l-lg border-gray-200 w-1/3'>
                    <div>
                        <form class="flex items-center">   
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-10/12">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <CiSearch size={24} />
                                </div>
                                <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3" placeholder="Search" required />
                            </div>
                        </form>
                    </div>
 
                    <div className='mt-6'>
                        {[1, 2, 3, 4, 5].map(() =>
                            <div>
                                <hr class="h-px my-3 bg-gray-200 border-0" />
                                <div className=' flex justify-between gap-5'>
                                    <div className='flex gap-5'>
                                        <img src={img1} className='w-12 h-12 rounded-full' />
                                        <Individual top='Oluwahenry Aina' bottom='Tayo' />
                                    </div>
                                    <div className=' items-end'>
                                        <p className='text-center text-xs text-gray-400'>12:30am</p>
                                    </div>
                                </div>
                                
                            </div>   
                        )}
                        <hr class="h-px my-3 bg-gray-200 border-0" />
                    </div>
                </div>

                {/* right */}
                <div className='block p-6 bg-white border rounded-r-lg border-gray-200 w-2/3'>
                    <div className=' flex justify-between gap-5'>
                        <div className='flex gap-5'>
                            <img src={img1} className='w-12 h-12 rounded-full' />
                            <Individual top='Henry' bottom='Eyo'  />
                        </div>
                    </div>
                    <hr class="h-px my-3 bg-gray-200 border-0" />

                    {/* messages will be sent here */}

                    <hr class="h-px my-3 bg-gray-200 border-0" />
                    <form>   
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <CiSearch size={24} />
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm rounded-lg bg-gray-100" placeholder="Type a message..." required />
                            <button type="submit" class="text-gray-500 absolute right-2.5 bottom-2.5"><FiSend size={24} /></button>
                        </div>
                    </form>


                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Messages