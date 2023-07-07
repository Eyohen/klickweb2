//import React from 'react'
import TextInput from '../../components/TextInput';
//import img1 from '../../assets/images/baby.png'

import Stepper from '../../components/Stepper';
import useSignup from '../../hooks/useSignup';
import axios from 'axios';

function AddProducts() {
    const initialState = {
        email: "",
        password: "" 
  };
  const handleSubmitForm = async () => {
    try {
      const response = await axios.post('https://klick-api.onrender.com/auth/signin', values);
      console.log('API response:', response.data);
      if (response.data.success===true) {
        history('/');
      } else {
     throw new Error('Error posting data to API');}        } catch (error) {
      console.error('Error sending form data :', error);
    }
  };
  const { values, handleChange, handleSubmit, } = useSignup(initialState, handleSubmitForm);
    return (
        <div className='p-6 space-y-5'>

            {/* top section */}
            <div className=' flex justify-between'>
                <div className='text-xl font-semibold'>Add New Product</div>
                <div>
                    <button type="button" className=" hover:text-white border border-yellow-400 hover:bg-yellow-500 font-medium rounded-full text-sm px-10 py-3 text-center mr-2 mb-2 ">Cancel</button>
                    <button type="button" className="text-gray-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 font-medium rounded-full text-sm px-10 py-3 text-center mr-2 mb-2 ">Save</button>
                </div>
            </div>

            <div className='flex w-full'>
            {/* left side */}
            <div className=' w-2/12'>
                {/* Stepper */}
                <Stepper />
            </div>
                
            {/* right side */}
            <div className='space-y-5 w-10/12'>        
            {/* personal info card */}
            <div className='block w-full p-4 bg-white border border-gray-200 rounded-lg space-y-5 shadow'>
                <h4 className='text-xl font-semibold'>Personal Information</h4>

                <div className='grid gap-6 grid-cols-2'>
                    <TextInput name="name" title={"Name"} onChange={handleChange} />
                    <TextInput name="price"  title={"Price"} onChange={handleChange}/>
                </div>

                <div className='grid gap-6 grid-cols-2'>
                    <TextInput name="quantity[total]"  title={"Quantity [total]"}  onChange={handleChange} />
                    <TextInput name="quantity[instock]"  title={"Quantity [inStock]"} onChange={handleChange}/>
                </div>
                
                <TextInput name='description' title={"Description"} onChange={handleChange}/>

                <h3 className=' text-gray-400 font-light text-xs mt-4'>
                    0/2000
                </h3>
            </div>

            {/* Photo Card */}
            <div className='block w-full  p-4 bg-white border border-gray-200 rounded-lg space-y-5 shadow'>
                <h4 className='text-xl'>Product Image</h4>

                <div className=' grid grid-cols-2 gap-6'>
                    <div>
                        <div className="flex items-center justify-center w-full mb-5">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 font-semibold">Add Photo</p>
                                    <p className="text-sm text-gray-500">0/5</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                        <div className=' text-gray-500'>
                            Image format should be in .jpg or .png and the image size should be at least 300px x 300px.
                            Upload up to 5 images attract buyers to your product. Required to upload a minimum of 1 image
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-full mb-5">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 font-semibold">Add video</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                        <div className=' text-gray-500'>
                            <p>Format .MP4</p>
                            <p>Max resolution 1280 x 1280 and max size: 200MB</p>
                            <p>Duration 10-60 seconds</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inventory */}
            <div className='block w-full  p-4 bg-white border border-gray-200 rounded-lg space-y-5 shadow'>
                <h4 className='text-xl font-semibold'>Inventory</h4>

                <div className='grid gap-6 grid-cols-2'>
                    <TextInput name="stock" title={"Stock"} onChange={handleChange} />
                    <TextInput name="stock_quantity"  title={"Stock Quantity"} onChange={handleChange} />
                </div>

                <div className='grid gap-6 grid-cols-2'>
                    <TextInput name="unit_type" title={"Unit Type"} onChange={handleChange} />
                    <TextInput name="unit_price"  title={"Unit Price"} onChange={handleChange}/>
                </div>
            </div>

            {/* Specification */}
            <div className='block w-full  p-4 bg-white border border-gray-200 rounded-lg space-y-5 shadow'>
                <h4 className='text-xl font-semibold'>Specification</h4>

                <div className='grid gap-6 grid-cols-2'>
                    <div>
                                <TextInput name="category"  title={"Category"} onChange={handleChange}/>
                                 <p className=' text-gray-400 text-xs mt-2'>Seperate tags with comma</p>
                    </div>
                    <div>
                                <TextInput name="category_id"  title={"Category ID"} onChange={handleChange} />
                                 <p className=' text-gray-400 text-xs mt-2'>Seperate tags with comma</p>
                    </div>
                </div>

                <div className='grid gap-6 grid-cols-2'>
                    <div>
                        <TextInput name="select_unit" title={"Lenght"} onChange={handleChange}/>
                        <p className=' text-gray-400 text-xs mt-2'>Seperate tags with comma</p>
                    </div>
                            
                    <div>
                                <TextInput name="linked_liscount"  title={"Width"} onChange={handleChange}/>
                                 <p className=' text-gray-400 text-xs mt-2'>Seperate tags with comma</p>
                    </div>
                    
                </div>

                <div className='grid gap-6 grid-cols-2'>
                    <div>
                                <TextInput name="linked_liscount"  title={"Height"} onChange={handleChange} />
                                 <p className=' text-gray-400 text-xs mt-2'>Seperate tags with comma</p>
                    </div>
                    <div>
                                <TextInput name="linked_liscount"  title={"Weight"} onChange={handleChange} />
                                 <p className=' text-gray-400 text-xs mt-2'>Seperate tags with comma</p>
                    </div>
                </div>
            </div>
            
                {/* button */}
                <div className='mt-4'>
                    <button onClick={handleSubmit} type="button" className=" hover:text-white border border-yellow-400 hover:bg-yellow-500 font-medium rounded-full text-sm px-10 py-3 text-center mr-2 mb-2 ">+  Add Specification</button>
                </div>
            </div>    
            </div>
        </div>
    );
}

export default AddProducts

                                   
               