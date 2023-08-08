import React from 'react'
import BackArrow from '../scenes/ProductDetails.jsx/BackArrow'
import { BsFilter } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'

import TextInput from './TextInput'
import ProductCard from '../scenes/ProductDetails.jsx/ProductCard'
import Footer from './Footer'
import { useState } from 'react'
import Filters from './Filters'
import { useSearchParams } from 'react-router-dom'

import { useGetProducts } from '../api/Product_api'

function SearchPage() {
    const [searchParams] = useSearchParams();
    const [searchObject, setSearchObject] = useState({ q : searchParams?.get('q')})

    const {isError , isFetching , isLoading , data} = useGetProducts(searchObject)

    

    return (
        <div className='p-10'>
            <div className=' flex justify-between'>
                <BackArrow />
                <div className='flex gap-4 items-center'>
                    <button type="button" class="text-gray-400 hover:bg-gray-100 border rounded-lg text-sm px-6 py-2 text-center inline-flex items-center mr-2">
                        <BsFilter className='mr-4' size={20} />
                        Filters
                    </button>
                    <div className='flex items-center gap-1'>
                        <p>Sort by: </p>
                        
                        <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" class="text-gray-400 text-sm px-6 py-2 text-center inline-flex items-center mr-2" type="button">
                            Popular
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>

                        {/*  Dropdown menu */}
                        <div id="dropdownBgHover" class="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
                            <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="checkbox-item-4" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="checkbox-item-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input checked id="checkbox-item-5" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="checkbox-item-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Checked state</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="checkbox-item-6" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="checkbox-item-6" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className='flex gap-2 text-3xl font-medium'>Search Results - <p>{searchParams?.get('q')}</p></div>

            <p className=' text-gray-400 text-sm my-4'>1 - 60 of 2000 results</p>

            {/* lower section */}
            <div className='w-full flex gap-10 mt-6'>
                {/* left */}
                <div className=' w-3/12'>
                    <Filters querySearch={searchParams?.get('q')} searchObject={searchObject} setSearchObject={setSearchObject} />
                </div>


                {/* right */}
                <div className=' w-9/12'>
                    <div className=' space-y-8'>
                        <div className='flex justify-between font-medium'>
                            <p className=' text-xl'>Stores</p>
                            <button className=' text-sm text-blue-500'>See all</button>
                        </div>    

                        {/* <div className='overflow-x-scroll scrollbar-hide'>
                            <div className=' flex gap-14'>
                                
                                <ProductCard product={data?.data?.products} searchObject={searchObject} />
                            
                        </div>
                        </div> */}

                        <div className=' flex gap-14'>
                                
                            <ProductCard product={data?.data?.products} searchObject={searchObject} />
                            
                        </div>

                        {/* <div className=' grid grid-cols-3 gap-6'>
                            <ProductCard product={data?.data?.products} searchObject={searchObject} />
                        </div> */}
                        
                        <div className='px-10'>
                        <div className=' flex justify-between'>
                            <div className=' items-center'>
                                <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" class="text-gray-400 text-sm px-6 py-2 text-center inline-flex items-center mr-2" type="button">
                                    Show results
                                    <RiArrowDropDownLine size={28} />
                                </button>

                        {/*  Dropdown menu */}
                                <div id="dropdownBgHover" class="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
                                    <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                                        <li>
                                            <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="checkbox-item-4" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label for="checkbox-item-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <input checked id="checkbox-item-5" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label for="checkbox-item-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Checked state</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="checkbox-item-6" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label for="checkbox-item-6" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div>
                                <ol className="flex justify-center gap-1 text-xs font-medium">
                                <li>
                                    <button
                                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                                    >
                                    <span className="sr-only">Prev Page</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                        />
                                    </svg>
                                    </button>
                                </li>

                                <li>
                                    <button
                                    className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                                    >
                                    1
                                    </button>
                                </li>

                                <li
                                    className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                                >
                                    <button
                                    className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                                    >
                                    2
                                    </button>
                                </li>

                                <li>
                                    <button
                                    className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                                    >
                                    3
                                    </button>
                                </li>

                                <li>
                                    <button
                                    className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                                    >
                                    4
                                    </button>
                                </li>

                                <li>
                                    <button
                                    href="#"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                                    >
                                    <span className="sr-only">Next Page</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                        />
                                    </svg>
                                    </button>
                                </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    </div>

                    
                    
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default SearchPage