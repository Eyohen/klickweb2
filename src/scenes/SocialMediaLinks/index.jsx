import Logo from '../../assets/logo.png';
//import { useForm } from 'react-hook-form';
//import { yupResolver } from '@hookform/resolvers/yup';
//import * as yup from 'yup';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useState } from 'react';



const SocialMediaLinks = () => {

   // const [change, setChange] = useState(false)

    const navigate = useNavigate();

   


    const inputClasses ='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary';
    //const errorBorderClasses ='border-red-500';
    const activeButtonClasses ='bg-secondary py-4 text-black rounded-full mt-10 cursor-pointer';
   // const disabledButtonClasses ='bg-gray-100 py-4 text-gray-500 rounded-full mt-10 cursor-not-allowed';

   const [objectState, setObjectState] = useState({
    socials:{
        instagram: '',
        twitter:'',
        tiktok:''
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e)=>{
    const { name, value} = e.target;
    setObjectState( prevState => ({
        ...prevState,
        socials:{
            ...prevState.socials,
            [name]: value
        }
    })

    )

  }

  
   

    const socialSubmit = async (e) => {
        e.preventDefault()
        const id = localStorage.getItem('storeId')
        const token = localStorage.getItem('login_token');
        setIsLoading(true)
        try{
            const response = await axios.put(`https://klick-api.onrender.com/store/update/${id}`, objectState,{
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                  }
            })
            if (response.success===true){
                console.log(`successfully added social media :${response}`)
                navigate('/dashboard')
            }
           console.log('API response:', response);
        } catch (error){
            console.log(`there was an error ${error}`)
            setError(error.response.data.msg)
        }finally {
            setIsLoading(false);
          }
          console.log(objectState)
    };

    return (
        <div className="flex flex-col items-center w-[80%] md:w-[30%] mb-10 mx-auto space-y-5 mt-20">
            <img src={Logo} alt="Logo" className="" />
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Add your Social media links</h1>
            </div>

            <form className="flex flex-col w-full" onSubmit={socialSubmit}>
                
                {/* ... */}
{/*               
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="industry">
                       Bank Name
                    </label>
                    <select
                        name="industry"
                        id="industry"
                        className={`${inputClasses} ${errors.industry ? errorBorderClasses : ''}`}
                        {...register('industry')}
                    >
                        <option value="">Select a bank</option>
                        <option value="Zenith">Zenith</option>
                        <option value="United Bank of Nigeria">United Bank of Nigeria</option>
                        <option value="Heritage">Heritage</option>
                        <option value="Kuda">Kuda</option>
                        <option value="Opay">Opay</option>
                        <option value="First Bank">First Bank</option>
                        <option value="Access Diamond">Access Diamond</option>
                    </select>
                    {errors.industry && (
                        <span className="text-red-500 text-xs">{errors.industry.message}</span>
                    )}
                </div> */}
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="instagram">
                       Instagram
                    </label>
                    <input
                        type="url"
                        name="instagram"
                        id="instagram"
                        value={objectState.socials.instagram}
                        placeholder='https://instagram.com/the_cuddleclub'
                        className={`${inputClasses} `}
                        onChange={handleChange}
                       
                    />
                
                </div>
                {/* ... 
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="facebook">
                       Facebook
                    </label>
                    <input
                        type="url"
                        name="facebook"
                        id="facebook"
                        placeholder='https://facebook.com/the_cuddleclub'
                        className={`${inputClasses} `}

                        
                    />
                    
                </div>
                {/* ... */}
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="twitter">
                       Twitter
                    </label>
                    <input
                        type="url"
                        name="twitter"
                        id="twitter"
                       placeholder='https://twitter.com/'
                        className={`${inputClasses}`}
                        value={objectState.socials.twitter}
                        onChange={handleChange}
                        
                    />
                
                </div>
                {/* ... */}
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="tiktok">
                       TikTok
                    </label>
                    <input
                        type="url"
                        name="tiktok"
                        id="tiktok"
                        placeholder='https://tiktok.com/'
                        className={`${inputClasses} `}
                        value={objectState.socials.tiktok}
                        onChange={handleChange}
                    />
                
                </div>
                {/* ... */}
                <button
                    className={`${activeButtonClasses}  `}
                    type="submit"
                    //disabled={!isValid}
                    //onClick={changePage}
                >
                    {isLoading? '...Submitting': 'Continue'}
                </button>
                {error? (<div className='text-red-500 text-base'> Oops, something went wrong:  {error} </div>): ''}
            </form>
        </div>
    );
};

export default SocialMediaLinks;
