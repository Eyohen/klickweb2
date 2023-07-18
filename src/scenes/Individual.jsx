import React from 'react'

const Individual = ({ top, bottom }) => {
    return (
        <div className=' items-center'>
            
            <div className=' space-y-1'>
                <div className=' text-xl font-semibold'>
                    {top}
                </div>
                <div className=' text-xs text-gray-400 font-normal'>
                    {bottom}
                </div>
            </div>
        </div>         
  );
}

export default Individual