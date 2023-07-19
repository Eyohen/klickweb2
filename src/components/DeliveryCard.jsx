import React from 'react'
import img1 from '@/assets/success.png'

const DeliveryTiles = ({name,time,price}) => {
    return(
        <div>
             <div className='relative'>
                    <input type='radio' name="user" id="user1" className='hidden peer'/>
                        <label for="user1" className='flex gap-4 p-4 rounded-xl bg-white bg-opacity-90 backdrop-blur-2xl shadow-xl hover:bg-opacity-75  cursor-pointer transition'>
                            <img src={img1} alt="user photo" className='w-10 h-10 object-cover rounded-full' />
                               <div className='flex gap-[450px] items-center justify-end '>
                                <div>
                                    <h6 className='text-base'>{name}</h6>
                                    <span className='text-sm opacity-'>{time} </span>
                                </div>
                               
                               
                                <h3 className='font-bold'>{price}</h3>
                                </div>
                         

                        </label>
                       
                        <div className='flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-  peer-checked:scale-100 transition delay-100'>
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                        </div>
                  

                </div>
        </div>
    )
}

const DeliveryCard = () => {
  return (
    <div> 
       
        <div className='w-screen h-screen p-12 flex justify-center items-center '>
      
            <div className='w-full md:w-6/12 lg:w-5/12 space-y-1'>
            <div className='font-bold pt-[20px]'>Your Order</div>
        <div>
            <div  className='bg-red-300 rounded-lg w-[200px] h-[40px] mt-[30px] pl-7 text-white pt-2' >Get Delivery Prices</div>
        </div>
        <div className='font-bold pt-[25px] '>Select a delivery option</div>
                {/* <div className='relative'>
                    <input type='radio' name="user" id="user1" className='hidden peer'/>
                        <label for="user1" className='flex gap-4 p-4 rounded-xl bg-white bg-opacity-90 backdrop-blur-2xl shadow-xl hover:bg-opacity-75  cursor-pointer transition'>
                            <img src={img1} alt="user photo" className='w-10 h-10 object-cover rounded-full' />
                               <div className='flex gap-[450px] items-center justify-end '>
                                <div>
                                    <h6 className='text-base'>GIG Logistics</h6>
                                    <span className='text-sm opacity-'>Between 12 - 48 hours </span>
                                </div>
                               
                               
                                <h3 className='font-bold'>N4,835</h3>
                                </div>
                         

                        </label>
                       
                        <div className='flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-  peer-checked:scale-100 transition delay-100'>
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                        </div>
                  

                </div> */}
                <DeliveryTiles name={'GIG Logistics'} time={'Between 12 - 48 hours'} price={'N4,835'} />
                <DeliveryTiles  name={'Kwik'} time={'Same day delivery'} price={'N4,835'} />
                <DeliveryTiles  name={'Sendbox'} time={'Within 2 days'} price={'N4,835'}/>

             

            </div>

        </div>
    </div>
  )
}

export default DeliveryCard