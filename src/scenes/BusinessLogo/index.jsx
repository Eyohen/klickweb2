import Logo from '../../assets/logo.png'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import ImageIcon from './ImageIcon';
import ChevronRightIcon from './ChevronRightIcon';



const BusinessLogo = () => {
  const location = useLocation();
  const history = useNavigate()
  const { form2Data } = location.state;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileImage, setProfileImage] = useState('')
  const [imagePreview, setImagePreview] = useState(null)


  const handleImageChange = (e) => {
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
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      if (response.data.success === true) {
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
      console.log(newData)
    }

  };

  return (
    <div className="flex flex-col items-center w-[25%] mx-auto space-y-5 mt-20">
      <img src={Logo} alt="Logo" className="" />
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-2'>Add your Business Logo</h1>
        <p className='text-gray-500 text-sm font-semibold'>This will represent your profile photo. It will help users on Klick to easily discover you and connect with you.</p>
      </div>

      {/* Create to new component */}

      <div className="mx-auto flex flex-col items-center gap-8 w-64 text-center ">
        <div className="w-64 flex flex-col items-center">
          <label className={imagePreview && 'hidden'} htmlFor="dropzone-file">
            <ImageIcon />
          </label>
          <input id="dropzone-file" type="file" accept='image/png, image/jpeg, image/jpg' name='image' className="hidden" onChange={handleImageChange} />
          {
            imagePreview && (
              <img src={imagePreview ? imagePreview : <ImageIcon />} alt='preview' className='w-64 h-64 rounded-full' />
            )
          }
        </div>
      </div>

      <button className='px-5 py-3 w-full rounded-[80px] font-semibold text-black bg-secondary' type='submit' onClick={handleSubmit}>
        {isLoading ? '...Submitting' : 'Add a photo'}
      </button>

      <div className="text-right flex items-center justify-end w-full font-semibold">
        <p className="mr-2">skip</p>
        <ChevronRightIcon className="h-5 w-5" />
      </div>

      <div>
        {error ? <div className='text-red-500 text-base'> Oops, something went wrong:  {error}</div> : ''}
      </div>

    </div>
  )
}

export default BusinessLogo