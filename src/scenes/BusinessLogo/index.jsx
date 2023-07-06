import Logo from '../../assets/logo.png'
import { useState } from 'react'
import {Link } from "react-router-dom"


const BusinessLogo = () => {
   


    return (
        <div className="flex flex-col items-center w-[25%] mx-auto space-y-5 mt-20">
            <img src={Logo} alt="Logo" className="" />
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-2'>Add your Business Logo</h1>
                <p className='text-gray-500 text-sm font-semibold'>This will represent your profile photo. It will help users on Klick to easily discover you and connect with you.</p>
            </div>

            {/* Create to new component */}

            <div className="mx-auto w-64 text-center ">
  <div className="relative w-64">
  <img className="w-64 h-64 rounded-full absolute" src="https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png" alt="" />
  <div className="w-64 h-64 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
    <img className="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
  </div>
</div>
</div>

<button style={{marginTop:350}}  className='bg-secondary py-4 text-black rounded-full mt-10' type='submit'>
                    Continue
                </button>
           
         



           
        </div>
    )
}

export default BusinessLogo