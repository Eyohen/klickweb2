import Logo from '../../assets/logo.png'
//import { useState } from 'react'
//import {Link } from "react-router-dom"
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';


const BusinessLogo = () => {
    const location = useLocation();
    const history = useNavigate()
    const { form2Data } = location.state;

    const token = localStorage.getItem('access_token');
    const handleSubmit = async () => {
        try {
          const response = await axios.post('https://klick-api.onrender.com/auth/registerstore', 

            form2Data,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            }
          );
          if (response.data.success===true) {
            localStorage.setItem('storeId', response.data.store.id)
            // Navigate to another page
            history('/dashboard');
        //setLoggedIn(response.data.success)
        // Perform any necessary actions after successful login
      }
          console.log('API response:', response.data);
          // Handle success or perform any necessary actions
        } catch (error) {
          console.error('Error sending form data:', error);
          // Handle error or display appropriate message
        }
        console.log( form2Data)
      };


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

<button style={{marginTop:350}}  className='bg-secondary py-4 text-black rounded-full mt-10' type='submit' onClick={handleSubmit}>
                    Continue
                </button>
           
         



           
        </div>
    )
}

export default BusinessLogo