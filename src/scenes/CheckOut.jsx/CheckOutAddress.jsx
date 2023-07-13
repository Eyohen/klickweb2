import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'

import FillButton from './FillButton';
import TextInput from '../../components/TextInput';

function CheckOutAddress({isOpen, onClose}) {

    if (!isOpen) {
        return null;
      }
  
  
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='block p-6 bg-white border border-gray-200 rounded-lg w-1/3 space-y-5'>
                <div className=' flex gap-3 items-center text-sm font-medium mb-8'>
                    <button onClick={onClose}>
                        <MdOutlineCancel size={20} />
                    </button>
                    <p>Add New Address</p>
                </div>

                {/* <form>
                    <div className=' grid gap-6 grid-cols-2'>
                        {[1, 2, 3, 4, 5, 6].map(() =>
                            <TextInput name={name} title={''} />
                        )}
                    </div>
                </form> */}

                <form className=' space-y-4'>
                    <div className='grid gap-6 grid-cols-2'>
                        <TextInput name="product_name" title={"Address"} />
                        <TextInput name="product_price"  title={"Phone number"} />
                    </div>

                    <div className='grid gap-6 grid-cols-2'>
                        <TextInput name="product_name" title={"Delivery Address"} />
                        <TextInput name="product_price"  title={"State"} />
                    </div>

                    <div className='grid gap-6 grid-cols-2'>
                        <TextInput name="product_name" title={"City"} />
                        <TextInput name="product_price"  title={"Address Type"} />
                    </div>
                </form>

                <div className=' flex gap-5 items-center mt-3'>
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <p>Use as default address</p>
                </div>

                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                <div className=' text-right'>
                    <FillButton name='Save' onClick={onClose} />
                </div>
            </div>
        </div>
    );
}

export default CheckOutAddress