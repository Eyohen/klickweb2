//import React from 'react'
import { useCallback } from 'react';
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

function BackArrow() {
    const navigate = useNavigate();
    // wrap it around a useCallback hook
    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <div className='hover:cursor-pointer mb-8 font-medium flex items-center gap-2 text-blue-600' onClick={goBack}>
            <BiArrowBack />
            <h1>Go Back</h1>
        </div>
    );
}

export default BackArrow