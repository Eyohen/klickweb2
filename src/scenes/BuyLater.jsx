import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { HiChevronRight } from 'react-icons/hi'
import BuyItem from './BuyItem';
import FillButton from './ProductDetails.jsx/FillButton';

function BuyLater() {

    // close modal
    const [isOpen, setIsOpen] = useState(true);

    function closeButton() {
        setIsOpen(false);
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className=''>
            <div className=' pt-20 px-20'>
                <div className=' flex gap-3 items-center text-sm font-medium mb-8'>
                    <button onClick={closeButton}>
                        <MdOutlineCancel size={20} />
                    </button>
                    <p>Buy later</p>
                </div>

                <div className='block p-6 mb-5 bg-gray-50'>
                    <div className=' flex justify-between'>
                        <div>View Buy Later</div>
                        <div className=' flex gap-3  items-center'>
                            <div className="w-4 h-4 bg-yellow-400 rounded-full p-3 flex items-center justify-center text-blue-400 text-xs">
                                1
                            </div>
                            <button className=' text-gray-400'>
                                <HiChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='block p-6 bg-gray-100 border'>
                        <div className=''>
                            <BuyItem head2='Description' head3='Quantity' head4='Price' head5='Delete' name='Nikon Camera' price='N64,000' />
                        </div>

                        <div className=' text-right mt-6'>
                            <FillButton name='Buynow - N64,000' />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='p-10'>
                <div className=' text-gray-400 flex justify-between text-sm'>
                    <p>Privacy Policy</p>
                    <p>All rights reserved &copy; 2023</p>
                </div>
            </div>
        </div>
    );
}

export default BuyLater