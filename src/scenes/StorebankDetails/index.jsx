import Logo from '../../assets/logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const validationSchema = yup.object().shape({
    name_of_bank: yup.string().required('Bank Name is required'),
    account: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    industry: yup.string().required('Industry is required'),
});

const StoreBankDetails = () => {

    const [change, setChange] = useState(false)

    const navigate = useNavigate();

    const changePage = () => {
        setChange(!change);
        if(!change){
            navigate("/storebankdetails")
        }

    }


    const inputClasses ='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary';
    const errorBorderClasses ='border-red-500';
    const activeButtonClasses ='bg-secondary py-4 text-black rounded-full mt-10 cursor-pointer';
    const disabledButtonClasses ='bg-gray-100 py-4 text-gray-500 rounded-full mt-10 cursor-not-allowed';

    const { handleSubmit, register, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onChange', // enable validation on change to update button state dynamically
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col items-center w-[80%] md:w-[30%] mb-10 mx-auto space-y-5 mt-20">
            <img src={Logo} alt="Logo" className="" />
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Add Bank Details</h1>
            </div>

            <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
                
                {/* ... */}
              
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
                </div>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="name_of_store">
                       Account Number
                    </label>
                    <input
                        type="text"
                        name="name_of_store"
                        id="name_of_store"
                        className={`${inputClasses} ${errors.name_of_store ? errorBorderClasses : ''}`}
                        {...register('name_of_store')}
                    />
                    {errors.name_of_store && (
                        <span className="text-red-500 text-xs">{errors.name_of_store.message}</span>
                    )}
                </div>
                {/* ... */}
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="email">
                       Account Name
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
                <button
                    className={`${isValid ? activeButtonClasses : disabledButtonClasses}`}
                    type="submit"
                    disabled={!isValid}
                    onClick={changePage}
                >
                    Continue
                </button>
            </form>
        </div>
    );
};

export default StoreBankDetails;
