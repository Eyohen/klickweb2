//import React from 'react'
import FillButton from './FillButton';
import OutlineButton from './OutlineButton';
import { MdCancel } from 'react-icons/md'

function CancelOrder({title, content, cancel, nevermind, isOpen, onClose}) {
    if (!isOpen) {
        return null;
      }
    return (
        <div className="flex items-center justify-center h-screen cursor-pointer">
            <div className='block p-6 bg-white border border-gray-200 rounded-lg'>
                <div className=' space-y-5 text-center'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center w-20 h-20 rounded-full bg-blue-500'>
                            <MdCancel className='text-white text-2xl' />
                        </div>
                    </div>
                    <p className=' font-bold text-2xl'>{title}</p>
                    {/* Cancel Order */}
                    <p className=' text-gray-400 text-xs'>{content}</p>
                    {/* Are you sure you want to cancel your order */}

                    <div className='flex gap-3'>
                        <OutlineButton name={nevermind} />
                        <FillButton name={cancel} onClick={onClose} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CancelOrder