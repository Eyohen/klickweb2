import Logo from '../../assets/logo.png'
import useSignup from '../../hooks/useSignup';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const history = useNavigate();
    const initialState = {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            password: "",
            location: "",
            city: "" ,
            state: "",
            country: "" 
      };
 
      const handleSubmitForm = async () => {
        try {
          const response = await axios.post('https://klick-api.onrender.com/auth/signup', values);
          console.log('API response:', response.data);
          if (response.data.success===true) {
            localStorage.setItem('access_token', response.data.access_token)
            // Data was posted successfully
            // Navigate to another page
            history('/verify');
          } else {
         throw new Error('Error posting data to API');}        } catch (error) {
          console.error('Error sending form data :', error);
        }
      };
    
      const { values, handleChange, handleSubmit, } = useSignup(initialState, handleSubmitForm);
    
    const inputClasses = "border border-gray-200 bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary"
    return (
        <div className="flex flex-col items-center w-[25%] mx-auto space-y-5 mt-20">
            <img src={Logo} alt="Logo" className="" />
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-2'>Welcome to Klick</h1>
                <p className='text-gray-500 text-sm font-semibold'>Let's help you get started. Create an account to continue</p>
            </div>

            <form className='flex flex-col w-full'  onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block text-sm' htmlFor="first_name">First Name</label>
                    <input type="text" name="firstName" id="firstName" className={inputClasses} value={values.firstName} onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm' htmlFor="last_name">Last Name</label>
                    <input type="text" name="lastName" id="lastName" className={inputClasses} value={values.lastName} onChange={handleChange}  />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm' htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className={inputClasses} value={values.email} onChange={handleChange} />
                </div>
                <div className='mb-4 relative items-center'>
                    <label className='block text-sm' htmlFor="phone">Phone Number(preferably whatsapp)</label>
                    <img className='absolute ml-3 mt-2 w-7 h-7 ' src='https://www.svgrepo.com/show/405569/flag-for-flag-nigeria.svg'/>
                    <input type="text" name="phone" id="phone" className={inputClasses} value={values.phone} onChange={handleChange}/>
                </div>

               
                <div className='mb-4'>
                    <label className='block text-sm' htmlFor="location">Enter Delivery Address</label>
                     <input type="text" name="location" id="location" placeholder='e.g 7 Gbenga Adeyinka lane' className={inputClasses} value={values.location} onChange={handleChange} /> 
    </div>

        {/*<div className='mb-4'>
        <label className='block text-sm' htmlFor="location">Enter Delivery Address</label>
                <PlacesAutocomplete
                 apiKey={'AIzaSyBE4ACh2aPQYNYWYADEe6FPUfQ6B37FX24'}
                 options={{
                    types: ['geocode'],
                  }}
                  fields={['formatted_address', 'geometry.location']}
                name="location" id="location" placeholder='e.g 7 Gbenga Adeyinka lane' className={inputClasses}
        onChange={handlePlaceSelect}
        //onSelect={handlePlaceSelect}
        value={values.location} 
      />
             
                </div>*/}

                <div className='mb-4'>
                    <label className='block text-sm' htmlFor="city">City</label>
                    <input type="text" name="city" id="city" placeholder='e.g Your City' className={inputClasses} value={values.city} onChange={handleChange}/>
                </div>

                

   <div className='mb-4'>
                    <label className='block text-sm' htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" placeholder='e.g Nigeria' className={inputClasses} value={values.country} onChange={handleChange}/>
                </div>
                <div className='mb-4'>
                    <label className='block text-sm' htmlFor="state">State</label>
                    <input type="text" name="state" id="state" placeholder='e.g Lagos' className={inputClasses} value={values.state} onChange={handleChange} />
                </div>

                {/*<div className='mb-4'>
                    <label className='block text-sm' htmlFor="lga">Local Government Area</label>
                    <input type="text" name="lga" id="lga" placeholder='e.g Epe' className={inputClasses} value={values.lga} onChange={handleChange} />
    </div>*/}
                <div className=''>
                    <label className='block text-sm' htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className={inputClasses} value={values.password} onChange={handleChange} />
                </div>
                <button className='bg-gray-50 py-4 text-gray-500 rounded-full mt-10' type='submit'>
                    Create Account
                </button>
            </form>
            <p className='text-gray-500'>Already have an account? <a href='/login' className='text-primary font-semibold'>Login</a></p>
        </div>
    )
}

export default Register