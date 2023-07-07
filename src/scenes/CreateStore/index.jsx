import Logo from '../../assets/logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';


//import { useState } from 'react';

const validationSchema = yup.object().shape({
    storeName: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    industry: yup.string().required('Industry is required'),
});

const CreateStore = () => {

    //const [change, setChange] = useState(false)

    const navigate = useNavigate();
  

    /*const changePage = () => {
        setChange(!change);
        if(!change){
            navigate("/storeaddress")
        }

    }
*/

    const inputClasses =
        'border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary';
    const errorBorderClasses = 'border-red-500';
    const activeButtonClasses = 'bg-secondary py-4 text-black rounded-full mt-10 cursor-pointer';
    const disabledButtonClasses = 'bg-gray-100 py-4 text-gray-500 rounded-full mt-10 cursor-not-allowed';

    const { handleSubmit, register, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onChange', // enable validation on change to update button state dynamically
    });

    /*const onSubmit = (data) => {
        history.push({
          pathname: '/storeaddress',
          state: {
            form1Data: data,
          },
        });
      };
*/
      /*const onSubmit = (data) => {
        navigate('/storeaddress', {
          state: {
            //...navigate.location.state,
            form2Data: data,
          },
        });
      };*/

      const onSubmit = (data) => {
        navigate('/storeaddress', {
            state: {
              //...navigate.location.state,
              form1Data: data,
            },
          });
          console.log(data)
      };

    return (
        <div className="flex flex-col items-center w-[80%] md:w-[30%] mb-10 mx-auto space-y-5 mt-20">
            <img src={Logo} alt="Logo" className="" />
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Let's Get to Know Your Business Better</h1>
            </div>

            <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="storeName">
                        Name of Store
                    </label>
                    <input
                        type="text"
                        name="storeName"
                        id="storeName"
                        className={`${inputClasses} ${errors.storeName ? errorBorderClasses : ''}`}
                        {...register('storeName')}
                    />
                    {errors.storeName && (
                        <span className="text-red-500 text-xs">{errors.storeName.message}</span>
                    )}
                </div>
                {/* ... */}
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className={`${inputClasses} ${errors.email ? errorBorderClasses : ''}`}
                        {...register('email')}
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>
                {/* ... */}
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="phone">
                        Business Phone Number
                    </label>
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        className={`${inputClasses} ${errors.phone ? errorBorderClasses : ''}`}
                        {...register('phone')}
                    />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                </div>
                {/* ... */}
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="industry">
                        Which industry will you be primarily operating in?
                    </label>
                    <select
                        name="industry"
                        id="industry"
                        className={`${inputClasses} ${errors.industry ? errorBorderClasses : ''}`}
                        {...register('industry')}
                    >
                        <option value="">Select an industry</option>
                        <option value="electronics">Electronics</option>
                        <option value="homewares">Homewares</option>
                        <option value="fashion">Fashion</option>
                        <option value="beauty">Beauty</option>
                        <option value="health">Health</option>
                        <option value="food">Food</option>
                        <option value="kids">Kids</option>
                    </select>
                    {errors.industry && (
                        <span className="text-red-500 text-xs">{errors.industry.message}</span>
                    )}
                </div>
                {/* ... */}
                <button
                    className={`${isValid ? activeButtonClasses : disabledButtonClasses}`}
                    type="submit"
                    disabled={!isValid}
                   // onClick={changePage}
                >
                    Continue
                </button>
            </form>
        </div>
    );
};

export default CreateStore;
