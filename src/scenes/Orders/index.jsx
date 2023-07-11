import React,{useState} from 'react'
import BackArrow from './BackArrow';

import { LiaSlidersHSolid } from 'react-icons/lia'
import Footer from '../../components/Footer';

import { useNavigate } from 'react-router-dom';

function Orders() {
    const [details, setDetails] = useState(true);

    const navigate = useNavigate();

    const detailsCheck = () => {
        setDetails(!details);
        if(details){
            navigate('/orderdetails')
        }
    }
    return (
        <div className=' font-medium p-10'>
            <BackArrow />

            <div className='mb-8 font-semibold text-2xl'>Orders</div>

            <div className='block pt-6 pl-6 bg-white border border-gray-200 rounded-t-lg'>
                <div className='flex gap-8 pb-4 font-normal'>
                    <button className=''>All Orders</button>
                    <button className=' text-gray-400'>Active</button>
                    <button className=' text-gray-400'>Completed</button>
                    <button className=' text-gray-400'>Cancelled</button>
                </div>
            </div>

            {/* table */}
            <div className='block p-6 bg-white border border-gray-200 rounded-b-lg'>
                <div class="relative overflow-x-auto rounded-lg">
                    <div class="flex items-center justify-between p-6">
                        <div>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                            </div>
                    
                            <div id="dropdownRadio" class="z-10 hidden w-24 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" /* style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);" */>
                                <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="filter-radio-example-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="filter-radio-example-2" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="filter-radio-example-3" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="filter-radio-example-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="filter-radio-example-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <label for="table-search" class="sr-only">Search</label>
                            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="inline-flex items-center text-gray-500 bg-white border gap-2 border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                                <LiaSlidersHSolid />    
                                Filters
                            </button>
                    </div>
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Customer
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                           
                             <tr onClick={detailsCheck} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className=' space-y-1'>
                                        <p>Bib and Bowl set</p>
                                        <p className=' text-xs font-normal text-gray-400'>#ID53536</p>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <div className=' space-y-1'>
                                        <p className=' text-sm font-normal text-gray-400'>May 25th, 2023</p>
                                        <p className=' text-sm font-normal text-gray-400'>05:43 PM</p>
                                    </div>
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    Mike Dean
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <button type="button" class="px-3 py-2 text-xs font-medium text-center text-orange-600 bg-orange-200 rounded-lg hover:bg-orange-300">New Order</button>
                                </td>
                            </tr>
                          
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className=' space-y-1'>
                                        <p>Bib and Bowl set</p>
                                        <p className=' text-xs font-normal text-gray-400'>#ID53536</p>
                                    </div>
                                </th>
                                <td class="px-6 py-4 ">
                                    <div className=' space-y-1'>
                                        <p className=' text-sm font-normal text-gray-400'>May 25th, 2023</p>
                                        <p className=' text-sm font-normal text-gray-400'>05:43 PM</p>
                                    </div>
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    Mike Dean
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    $1999
                                </td>
                                <td class="px-6 py-4">
                                    <button type="button" class="px-3 py-2 text-xs font-medium text-center text-green-800 bg-green-300 rounded-lg hover:bg-green-500">Order Accepted</button>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className=' space-y-1'>
                                        <p>Bib and Bowl set</p>
                                        <p className=' text-xs font-normal text-gray-400'>#ID53536</p>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <div className=' space-y-1'>
                                        <p className=' text-sm font-normal text-gray-400'>May 25th, 2023</p>
                                        <p className=' text-sm font-normal text-gray-400'>05:43 PM</p>
                                    </div>
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    Mike Dean
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    $99
                                </td>
                                <td class="px-6 py-4">
                                    <button type="button" class="px-3 py-2 text-xs font-medium text-center text-green-800 bg-green-300 rounded-lg hover:bg-green-500">Order Accepted</button>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className=' space-y-1'>
                                        <p>Bib and Bowl set</p>
                                        <p className=' text-xs font-normal text-gray-400'>#ID53536</p>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <div className=' space-y-1'>
                                        <p className=' text-sm font-normal text-gray-400'>May 25th, 2023</p>
                                        <p className=' text-sm font-normal text-gray-400'>05:43 PM</p>
                                    </div>
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    Mike Dean
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    $179
                                </td>
                                <td class="px-6 py-4">
                                    <button type="button" class="px-3 py-2 text-xs font-medium text-center text-green-800 bg-green-300 rounded-lg hover:bg-green-500">Order Accepted</button>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className=' space-y-1'>
                                        <p>Bib and Bowl set</p>
                                        <p className=' text-xs font-normal text-gray-400'>#ID53536</p>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <div className=' space-y-1'>
                                        <p className=' text-sm font-normal text-gray-400'>May 25th, 2023</p>
                                        <p className=' text-sm font-normal text-gray-400'>05:43 PM</p>
                                    </div>
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    Mike Dean
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    $699
                                </td>
                                <td class="px-6 py-4">
                                    <button type="button" class="px-3 py-2 text-xs font-medium text-center text-green-800 bg-green-300 rounded-lg hover:bg-green-500">Order Accepted</button>
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className=' space-y-1'>
                                        <p>Bib and Bowl set</p>
                                        <p className=' text-xs font-normal text-gray-400'>#ID53536</p>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <div className=' space-y-1'>
                                        <p className=' text-sm font-normal text-gray-400'>May 25th, 2023</p>
                                        <p className=' text-sm font-normal text-gray-400'>05:43 PM</p>
                                    </div>
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    Mike Dean
                                </td>
                                <td class="px-6 py-4 font-normal text-gray-400">
                                    $3999
                                </td>
                                <td class="px-6 py-4">
                                    <button type="button" class="px-3 py-2 text-xs font-medium text-center text-green-800 bg-green-300 rounded-lg hover:bg-green-500">Order Accepted</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}

export default Orders