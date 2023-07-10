import Logo from '../../assets/logo.png'
//import { useState } from 'react'
//import {Link } from "react-router-dom"
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
//import { useState } from 'react';


const BusinessLogo = () => {
    const location = useLocation();
    const history = useNavigate()
    const { form2Data } = location.state;

    

    
    let resizedImageSrc;

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
    
      reader.onload = (e) => {
        const image = new Image();
        image.onload = () => {
          resizedImageSrc = resizeImage(image, 800); // Resize the image to a maximum width of 800 pixels
          displayImagePreview(resizedImageSrc); // Display the resized image preview
        };
        image.src = e.target.result;
      };
    
      reader.readAsDataURL(file);
    };
    
    const resizeImage = (image, maxWidth) => {
      const canvas = document.createElement('canvas');
      let width = image.width;
      let height = image.height;
    
      if (width > maxWidth) {
        height = (maxWidth / width) * height;
        width = maxWidth;
      }
    
      canvas.width = width;
      canvas.height = height;
    
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, width, height);
    
      return canvas.toDataURL('image/jpeg', 0.8); // Compress the image as a JPEG with 80% quality
    };
    
    const displayImagePreview = (imageSrc) => {
      const imgPreview = document.getElementById('image-preview');
      imgPreview.src = imageSrc;
    };
    
    
    /*const sendImageToAPI = (imageSrc) => {
      // Send the image to the API
      console.log('Sending image to API:', imageSrc);
      // Perform API call or further processing here
    };*/
    
    
    /*let imageSrc
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
    
      return new Promise((resolve, reject) => {
        reader.onload = (e) => {
         imageSrc = e.target.result;
          console.log(imageSrc);
          const imgPreview = document.getElementById('image-preview');
          imgPreview.src = imageSrc;
          resolve(imageSrc);
        };
    
        reader.onerror = (error) => {
          reject(error);
        };
    
        reader.readAsDataURL(file);
      }).then((imageSrc) => {
        // Access the imageSrc value here
        console.log('Received imageSrc:', imageSrc);
       handleSubmit(imageSrc)
      })
      .catch((error) => {
        // Handle any errors that occurred during image loading
        console.error('Error loading image:', error);
      });
    }

    console.log(`heeey ${imageSrc}`)*/


   
    
   

    
    const token = localStorage.getItem('access_token');
    const handleSubmit = async () => {

      const newData = {
        ...form2Data,
        file: resizedImageSrc
        //file:JSON.stringify({ imageSrc: imageSrc }),
        
       //file:JSON.stringify({...resizedImageSrc})
        //resizedImageSrc
        //file:imageSrc,
        //file:JSON.stringify({ file: imageSrc }),
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
          // Handle error or display appropriate message
        }
        console.log( newData)
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
  <img className="w-64 h-64 rounded-full absolute" id='image-preview' src="https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png" alt="" />
  {/*<div className="w-64 h-64 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
    <img className="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
    </div>*/}
  <input type="file" onChange={handleImageUpload} />
  {/*<img id="image-preview" alt="Preview" />*/}


</div>
</div>

<button style={{marginTop:350}}  className='bg-secondary py-4 text-black rounded-full mt-10' type='submit' onClick={handleSubmit}>
                    Continue
                </button>
           
         



           
        </div>
    )
}

export default BusinessLogo