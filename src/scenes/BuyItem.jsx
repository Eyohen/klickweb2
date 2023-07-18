import React, { useState } from "react";

import img1 from "../assets/images/Camera.png"
import { BiTrash } from 'react-icons/bi'

const BuyItem = ({ head1, head2, head3, head4, head5, name, price }) => {

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
        
<div class="relative overflow-x-auto">
    <table class="w-full text-left ">
        <thead class="">
            <tr>
                <th scope="col" class="px-6 py-3">
                            {head1}
                </th>
                
                <th scope="col" class="px-6 py-3">
                            {head2}
                </th>
                <th scope="col" class="px-6 py-3">
                            {head3}
                </th>
                <th scope="col" class="px-6 py-3">
                            {head4}
                </th>
                <th scope="col" class="px-6 py-3">
                            {head5}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src={img1} className=' h-24 w-24 rounded-lg' />
                </td>
                <td scope="row" class="px-6 py-4 text-lg font-medium">
                    {name}
                </td>
                <td class="px-6 py-4">
                    <div className=' text-xl flex items-center gap-6'>
                                            <button onClick={handleDecrement}>-</button>
                                            <h1 className=' text-base'>{count}</h1>
                                            <button onClick={handleIncrement}>+</button>
                                        </div>
                </td>
                <td class="px-6 py-4 text-blue-500">
                    {price}
                </td>
                <td class="px-6 py-4 text-red-500">
                    <button>
                        <BiTrash />
                    </button>
                </td>
            </tr>   
        </tbody>
    </table>
</div>
    );
}

export default BuyItem