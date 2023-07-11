import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

function BackArrow() {
    return (
        <div className=' mb-8 font-medium flex items-center gap-2 text-blue-600'>
            <BiArrowBack />
            <h1>Go Back</h1>
        </div>
    );
}

export default BackArrow