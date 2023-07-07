import Logo from '../../assets/logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useState} from 'react';
import { useNavigate } from 'react-router';



const StoreAddress = () => {

    const [change, setChange] = useState(false)

    const navigate = useNavigate();

    const changePage = () => {
        setChange(!change);
        if(!change){
            navigate("/businesslogo")
        }

    }


    const inputClasses =
        'border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary';
    const errorBorderClasses = 'border-red-500';
    const activeButtonClasses = 'bg-secondary py-4 text-black rounded-full mt-10 cursor-pointer';
    const disabledButtonClasses = 'bg-gray-100 py-4 text-gray-500 rounded-full mt-10 cursor-not-allowed';

    // const { handleSubmit, register, formState: { errors, isValid } } = useForm({
    //     resolver: yupResolver(validationSchema),
    //     mode: 'onChange', // enable validation on change to update button state dynamically
    // });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col items-center w-[80%] md:w-[30%] mb-10 mx-auto space-y-5 mt-20">
            <img src={Logo} alt="Logo" className="" />
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Add an Address</h1>
            </div>

            <form className="flex flex-col w-full" onSubmit={onSubmit}>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="name_of_country">
                       Country
                    </label>
                    <input
                        type="text"
                        name="name_of_country"
                        id="name_of_country"
                        placeholder='e.g Nigeria'
                        className='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary'
                        />
                      
                   
                </div>
                {/* ... */}
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="address">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder='e.g 7 Gbenga Adeyinka lane'
                        className='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary'
                       
                    />
                 
                </div>
                {/* ... */}
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="state">
                        State
                    </label>
                    <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder='Lagos'
                        className='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary'
                       
                    />
                   
                </div>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="city">
                        City
                    </label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder='Epe'
                        className='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary'
                        
                    />
                
                </div>
                {/* ... */}
             
                {/* ... */}
                <button
                    className='bg-secondary py-4 text-black rounded-full mt-10 cursor-pointer'
                    type="submit"
                    onClick={changePage}
                    
                >
                    Continue
                </button>
            </form>
        </div>
    );
};

export default StoreAddress;
