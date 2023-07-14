import Logo from '../../assets/logo.png'
import { useState } from 'react'
//import {Link } from "react-router-dom"
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
//import { Activity}



const BusinessLogo = () => {
    const location = useLocation();
    const history = useNavigate()
    const { form2Data } = location.state;

    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileImage, setProfileImage]= useState('')
    const [imagePreview, setImagePreview] = useState(null)



    
  const handleImageChange = (e)=>{
    setProfileImage(e.target.files[0])
    setImagePreview(URL.createObjectURL(e.target.files[0]))

    console.log(e.target.result)
  }




    
    const token = localStorage.getItem('access_token');
    const handleSubmit = async () => {
      setIsLoading(true);
      const newData = {
        ...form2Data,
        file: profileImage
      };
        try {
          const response = await axios.post('https://klick-api.onrender.com/auth/registerstore', 

            newData,
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
          setError(error.response.data.msg);
          // Handle error or display appropriate message
        } finally {
          setIsLoading(false);
          console.log( newData)
        }
      
      };
      
//handleSubmit()
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
  <label className={imagePreview && 'hidden'} htmlFor="dropzone-file">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                   Click to Add Business Logo</label>
                                <input id="dropzone-file" type="file" accept='image/png, image/jpeg, image/jpg' name='image' className="hidden" onChange={handleImageChange} />
                                {
                                    imagePreview && (
                                        <img src={imagePreview?  imagePreview :'https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png'} alt='preview' className='w-64 h-64 rounded-full absolute'/> 
                                    )
                                }
  {/*<img className="w-64 h-64 rounded-full absolute" id='image-preview' src="https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png" alt="" />
  {/*<div className="w-64 h-64 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
    <img className="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
    </div>*/}
  <input type="file" onChange={handleImageChange} />
  {/*<img id="image-preview" alt="Preview" />*/}


</div>
</div>

<button style={{marginTop:350}}  className='bg-secondary py-4 text-black rounded-full mt-10' type='submit' onClick={handleSubmit}>
                   {isLoading ? '...Submitting': 'Continue'}
                </button>
           
         


<div>
  {error? <div className='text-red-500 text-base'> Oops, something went wrong:  {error}</div>: ''}
</div>
           
        </div>
    )
}

export default BusinessLogo