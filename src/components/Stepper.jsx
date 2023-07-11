import React from 'react'

function Stepper() {
    return (
    <div className='ml-4'>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
        <li className="mb-10 ml-6">            
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <div className='text-white'>
                    01        
                </div>
            </span>
            <h3 class="font-medium leading-tight text-gray-500">Product Information</h3>
        </li>
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <div className='text-white'>
                    02        
                </div>
            </span>
            <h3 className="font-medium leading-tight text-gray-500">Product Image</h3>
        </li>
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <div className='text-white'>
                    03        
                </div>
            </span>
            <h3 className="font-medium leading-tight text-gray-500">Inventory</h3>
        </li>
        <li className="ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <div className='text-white'>
                    04        
                </div>
            </span>
            <h3 className="font-medium leading-tight text-gray-500">Specification</h3>
        </li>
        </ol>        
    </div>
    );
}

export default Stepper