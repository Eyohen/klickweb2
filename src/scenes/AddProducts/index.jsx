//import React from 'react'
import  TextInput from '../../components/TextInput';
//import img1 from '../../assets/images/baby.png'

import Stepper from '../../components/Stepper';
import useSignup from '../../hooks/useSignup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';






function AddProducts() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([])
    const [shippingCategories, setShippingCategories] = useState([])
    const [selectedId, setSelectedId] = useState('')
    const [selectedShippingId, setSelectedShippingId] = useState('')
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedShippingValue, setSelectedShippingValue] = useState('');
    const [profileImage, setProfileImage]= useState('')
    const [imagePreview, setImagePreview] = useState(null)

    const initialState = {
        name:'',
        price:'',
        description:'',
    };

    const [objectState, setObjectState] = useState({
        quantity:{
            total:'',
            instock:'',
        },
        specifications:{
            colors: '',
            weight:'',
            dimensions:{
                width:'',
                height:'',
                length:''
            }
        }
      });

    const handleQuantityChange = (e) => {
        const { name, value } = e.target;
        setObjectState(prevState => ({
          ...prevState,
          quantity: {
            ...prevState.quantity,
            [name]: value
          }
        }));
      };

      const handleSpecificationsChange = (e) => {
        const { name, value } = e.target;
        setObjectState(prevState => ({
          ...prevState,
          specifications: {
            ...prevState.specifications,
            [name]: value
          }
        }));
      };

      const handleSpecificationsDimensionsChange = (e) => {
        const { name, value } = e.target;
        setObjectState(prevState => ({
          ...prevState,
          specifications: {
            ...prevState.specifications,
            dimensions: {
              ...prevState.specifications.dimensions,
              [name]: value
            }
          }
        }));
      };
    

    const handleImageChange = (e)=>{
        setProfileImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))

        console.log(e.target.result)
        
    }
   
    //let imageURL;
   /* const uploadImage = async (e)=>{
        e.preventDefault()
        setIsLoading(true)

        try{
            
            if(
                profileImage && (
                    profileImage.type === 'image/png' ||
                    profileImage.type === 'image/jpg' ||
                    profileImage.type === 'image/jpeg'
                )
            ){
                const image = new FormData()
                image.append('file', profileImage )
                image.append('cloud_name', 'duncmf1df' )
                image.append('upload_preset', 'ml_default' )

                const response = await  fetch(
                    'https://api.cloudinary.com/v1_1/duncmf1df/image/upload',
                    {
                        method: 'post',
                        body: image
                    }
                )
                const imgData = await response.json()
                console.log(imgData)
                imageURL = imgData.secure_url.toString()
                setIsLoading(false)
                setImageUrl(imageURL)
               

                //imageURL = imgData.secure_url.toString()
                
                
            }
                //alert(imageURL)
        } catch(error){
            console.log(error)
            setIsLoading(false)
        }
        //console.log(`this is image url ${imageURL}`)
        //alert(imageURL)
        setImageUrl(imageURL)
    } 
    //alert(imageURL)
    console.log(`this is image url ${imageUrl}`)*/

    useEffect(()=>{
        const getCategories = async ()=>{
            try{
                const response = await axios.get('https://klick-api.onrender.com/category/getAll')
                setCategories(response.data.data)
            } catch(error){
                console.log(`this error was encounntered`)
            }
        }
        getCategories()
    },[])

    useEffect(()=>{
        const getShippingCategories = async ()=>{
            try{
                const response = await axios.get('https://klick-api.onrender.com/product/shipping/category')
                setShippingCategories(response.data.data)
            } catch(error){
                console.log(`this error was encounntered`)
            }
        }
        getShippingCategories()
    },[])

    const handleSelectChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOption = event.target.options[selectedIndex];
        setSelectedValue(selectedOption.value);
        setSelectedId(selectedOption.id);
        console.log(selectedValue)
      };
      const handleShippngSelectChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOption = event.target.options[selectedIndex];
        setSelectedShippingValue(selectedOption.value);
        setSelectedShippingId(selectedOption.id);
        console.log(selectedValue)
        //console.log(selectedOption.id )
      };

    //const history = useNavigate()
    const history = useNavigate();
   

  const handleSubmitForm = async () => {
   const storeId = localStorage.getItem('storeId')
   const token = localStorage.getItem('access_token');
   const newObjectState = {
    ...objectState,
    specifications: {
      ...objectState.specifications,
      type: selectedValue,
      shippingcategory_id:selectedShippingId,

    }
  }

    const newData = {
        ...values,
        ...newObjectState,
        images:profileImage,
        shippingcategory:selectedShippingValue,
      }
    //console.log(newData)
    
   // console.log(objectState.append('specifications[shippingcategory_id]', '57487393'))
    //console.log(newObjectState)
    setIsLoading(true)
    try {
      const response = await axios.post(`https://klick-api.onrender.com/product/?category=${selectedId}&storeId=${storeId}`, newData,{
        query: {
            category: `${selectedId}`,
            storeId: `${storeId}`,
        },
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
      });
      if (response.data.success===true) {
        history('/dashboard');
      } else {
     throw new Error('Error posting data to API');}
      //console.log('API response:', response.data);
    }catch (error) {
      console.error('Error sending form data :', error);
      setError(error.data.msg)
      
     
    }finally {
        setIsLoading(false);
      }
    //console.log(newData)
  };
  const { values, handleChange, handleSubmit, } = useSignup(initialState, handleSubmitForm);
    return (
        <div className='p-6 space-y-5'>

            {/* top section */}
            <form onSubmit={handleSubmit}>
            <div className=' flex justify-between'>
                <div className='text-xl font-semibold'>Add New Product</div>
                <div>
                    <button type="button" className=" hover:text-white border border-yellow-400 hover:bg-yellow-500 font-medium rounded-full text-sm px-10 py-3 text-center mr-2 mb-2 ">Cancel</button>
                    <button  type="submit" className="text-gray-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 font-medium rounded-full text-sm px-10 py-3 text-center mr-2 mb-2 "> {isLoading? '...Submitting': 'Save'}</button>
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
                    < TextInput value={values.name} id='name' name="name" title={"Name"} onChange={handleChange} />
                    < TextInput value={values.price} id='price' name="price"  title={"Price"} onChange={handleChange}/>
                </div>

                <div className='grid gap-6 grid-cols-2'>
                    < TextInput type='number' value={objectState.quantity.total} id='total' name="total"  title={"Quantity [total]"}  onChange={handleQuantityChange} />
                    < TextInput type='number' value={objectState.quantity.instock} id='instock' name="instock"  title={"Quantity [inStock]"} onChange={handleQuantityChange}/>
                </div>
                
                < TextInput value={values.description} id='description' name='description' title={"Description"} onChange={handleChange}/>

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
                            <div  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <label className={imagePreview && 'hidden'} htmlFor="dropzone-file">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                   Click to Add Product Photo</label>
                                <input id="dropzone-file" type="file" accept='image/png, image/jpeg, image/jpg' name='image' className="hidden" onChange={handleImageChange} />
                                {
                                    imagePreview && (
                                        <img src={imagePreview && imagePreview} alt='preview' className='w-full h-full'/> 
                                    )
                                }
                            </div>
                           

                        </div>


                        <div className=' text-gray-500'>
                            Image format should be in .jpg or .png and the image size should be at least 300px x 300px.
                        </div>
                    </div>
                </div>
            </div>

            {/* Inventory */}
            <div className='block w-full  p-4 bg-white border border-gray-200 rounded-lg space-y-5 shadow'>
                <h4 className='text-xl font-semibold'>Inventory</h4>
                <div className='flex flex-col'>
                <label>Product Category</label>
                <select className='className="block w-full mt-2 p-2.5 text-sm text-gray-900 rounded-lg bg-white border-[2px] border-[#cb4a1f] shadow-[#E8F5F4] focus:border-[#761007] focus:outline-none hover:border-[#c95c44] focus:ring-2  focus:ring-[#d11c1c]"' id='specificationsType' name="specifications[type]" onChange={handleSelectChange} value={selectedValue} >
                        <option >Select a product category</option>
                        {categories.map((e)=>{
                            return( 
                                <option key={e.id} value={e.name} id={e.id}>{ e.name }</option>
                            )
                        })}
                    </select>   
                </div>
                <div className='flex flex-col'>
                        <label>Shipping Category</label>
                                <select className='className="block w-full mt-2 p-2.5 text-sm text-gray-900 rounded-lg bg-white border-[2px] border-[#cb4a1f] shadow-[#E8F5F4] focus:border-[#761007] focus:outline-none hover:border-[#c95c44] focus:ring-2  focus:ring-[#d11c1c]"' value={selectedShippingValue}  onChange={handleShippngSelectChange}  >
                                     <option >Select a shipping category</option>
                                         {shippingCategories.map((e)=>{
                                         return(
                                            <option key={e.category_id} value={e.category} id={e.category_id}>{ e.category}</option>
                                         ) })}
                                </select>
    
                    </div>
            </div>

            {/* Specification */}
            <div className='block w-full  p-4 bg-white border border-gray-200 rounded-lg space-y-5 shadow'>
                <h4 className='text-xl font-semibold'>Specification</h4>

                <div className='grid gap-6 grid-cols-2'>


                <div>
                    < TextInput value={objectState.specifications.colors} id='colors' name="colors"  title={"Specification Colors"} onChange={handleSpecificationsChange }/>
                </div>
                    <div>
                                < TextInput value={objectState.specifications.weight} id='weight' name="weight"  title={"Specifications Weight"} onChange={handleSpecificationsChange} />
                                 <p className=' text-gray-400 text-xs mt-2'>Seperate tags with comma</p>
                    </div>
                </div>

                <div className='grid gap-6 grid-cols-2'>
                    <div>
                        < TextInput value={objectState.specifications.dimensions.length} id='length' name="length" title={"Length"} onChange={handleSpecificationsDimensionsChange}/>
                        <p className=' text-gray-400 text-xs mt-2'>Seperate tags with comma</p>
                    </div>
                            
                    <div>
                                < TextInput value={objectState.specifications.dimensions.width} id='width' name="width"  title={"Width"} onChange={handleSpecificationsDimensionsChange}/>
                                 <p className=' text-gray-400 text-xs mt-2'>Seperate tags with comma</p>
                    </div>
                    
                </div>

                <div className='grid gap-6 grid-cols-2'>
                    <div>
                                < TextInput value={objectState.specifications.dimensions.height} id='height' name="height"  title={"Height"} onChange={handleSpecificationsDimensionsChange} />
                                 <p className=' text-gray-400 text-xs mt-2'>Seperate tags with comma</p>
                    </div>
                    
                   
                </div>
            </div>
            {error? (<div className='text-red-500 text-base'> Oops, something went wrong:  {error} </div>): ''}
            
                {/* button */}
                {/*<div className='mt-4'>
                    <button  type="button" className=" hover:text-white border border-yellow-400 hover:bg-yellow-500 font-medium rounded-full text-sm px-10 py-3 text-center mr-2 mb-2 ">+  Add Specification</button>
                                         </div>*/}
            </div>    
            </div>
            </form>
        </div>
    );
}

export default AddProducts