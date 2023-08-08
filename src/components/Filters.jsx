import React from 'react'
import BackArrow from '../scenes/ProductDetails.jsx/BackArrow'
import { BsFilter } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'
import TextInput from './TextInput'
import { useState } from 'react'
import { useEffect } from 'react'

const Filters = ({
    searchObject , setSearchObject , querySearch
    
}) => {
    const [initprice, setInitPrice] = useState(null)
    const [toPrice, setToPrice] = useState(null)
    const [rating, setRating] = useState(null)
    const [discount, setDiscount] = useState(null)

    useEffect(()=>{
        const updateValue = {
            q: querySearch
        }
        if(initprice) updateValue['price'] = initprice
        // if(initprice && toPrice) updateValue['price'] = [initprice, toPrice] 
        if(rating) updateValue["rating"] = rating
        if(discount) updateValue["discount"] = discount
        setSearchObject((prevState) => updateValue )

    },[initprice,toPrice,rating,discount])
   
  return (
    <>
        <div className='block p-4 bg-white border border-gray-200 rounded-lg '>
            <div className=' space-y-5'>

                {/* brand section */}
                <div className='flex justify-between items-center'>
                    <p className=' font-semibold'>Brand</p>
                    <button className=' font-medium'>
                        <RiArrowDropDownLine size={28} />
                    </button>
                </div>

                {/* {[1, 2, 3, 4, 5].map(() => 
                    <div>
                        <div className='flex justify-between items-center'>
                            <p className=' font-medium'>Angel</p>
                            <button className=''>
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            </button>
                        </div>
                    </div>
                )} */}

                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                {/* price section */}
                <p className=' font-semibold'>Price (N)</p>

                {/* <div className='grid gap-6 grid-cols-2'> */}
                <div className='grid gap-6'>
                    <TextInput name="from"  title={"Maximum price"} value={initprice} onChange={(e)=>setInitPrice(e.target.value)}/>
                    {/* <TextInput name="to"  title={"To N"} value={toPrice} onChange={(e)=>setToPrice(e.target.value)}/> */}
                </div>

                {/* <input id="medium-range" type="range" value="50" class="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input> */}

                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                

                {/* rating section */}
                <p className=' font-semibold'>Rating</p>

                {[4,3,2,1].map((item) => 
                    <div>
                        <div className='flex justify-between items-center'>
                            <input checked={(item === rating)} onChange={()=>setRating(item)} type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <div className='flex w-full ml-5 gap-2'>
                                {new Array(item).fill(0).map(() =><AiFillStar /* size={16} */ />)}    
                             </div>  
                        </div>
                    </div>
                )}

                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                {/* discount */}
                <p className=' font-semibold'>Discount Percentage</p>
                
                <div className=' space-y-4'>
                    {[10,20,30,40,50]?.map((item)=><div className=' flex gap-6 items-center'>
                        <input type="radio" checked={(item === discount)} onChange={()=>setDiscount(item)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <p>{item}%  or more</p>
                    </div>)}

                    
                </div>

                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                {/* shipping */}
                <p className=' font-semibold'>Shipping</p>

                <div className=' space-y-4'>
                    <div className=' flex gap-6 items-center'>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <p>Ship with K-Secure</p>
                    </div>

                    <div className=' flex gap-6 items-center'>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <p>Ship with K-Ship</p>
                    </div>
                </div>


            </div>
        </div>
    </>
  )
}

export default Filters