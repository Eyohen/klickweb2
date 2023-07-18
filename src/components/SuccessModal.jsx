import React,{useState} from 'react'
import img from '@/assets/success.png'

const  SuccessModal = ({isOpen, onClose, title, content, buttontext}) => {
   
    if(!isOpen){
        return null;
    }
  return (
    <div className='rounded-lg bg-white p-10 drop-shadow-md'>
        <div className='flex justify-center'>
             <img src={img} className=' h-[50px] w-[50px] rounded-lg '  />
           </div>
           <div className='flex justify-center'>
           <h1 className='font-bold'>{title}</h1>
       
           </div>
           <div className='flex justify-center'>
           <p className='text-gray-400'>{content}</p>
           </div>
        
        
        <button className='bg-yellow-300 rounded-lg w-[200px] h-[40px] mt-4' onClick={onClose}>{buttontext}</button>
    </div>
  )}

export default SuccessModal