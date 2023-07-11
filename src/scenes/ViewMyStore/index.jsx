// import './App.css';
// import img1 from '../src/images/baby.png'
import { useEffect, useState } from 'react';
import img1 from '../../assets/images/baby.png'
import axios from 'axios';
//import [useEffect]

function ViewMyStore() {
  /*const [store, setStore] = useState(null);
  const [product, setProduct] = useState(null);
  //const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint1 = 'https://api.example.com/endpoint1';
        const endpoint2 = 'https://api.example.com/endpoint2';

        const request1 = axios.get(endpoint1);
        const request2 = axios.get(endpoint2);

        const [response1, response2] = await axios.all([request1, request2]);

        // Access response data from endpoint 1
        setStore(response1.data);

        // Access response data from endpoint 2
        setProduct(response2.data);

       // setLoading(false);
        console.log(store, product)
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [product,store]);*/

  //const [user, setUser]= useState(null)
  //const [store, setStore] = useState(null)
  const [product, setProduct] = useState([])
  
  
  useEffect(()=>{
    const fetchData = async () => {
      const token = localStorage.getItem('access_token');
      try {
        axios.get('https://klick-api.onrender.com/auth/user', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            // Handle the response
            //setUser(response.data.user)
            //setStore(response.data.stores)
            console.log(response.data);

            if (response.data.success===true) {
                // Navigate to another page
               // history('/');
            //setLoggedIn(response.data.success)
            // Perform any necessary actions after successful login
          }})
          .catch(error => {
            // Handle any errors or display appropriate message
            console.error(error);
          });
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  },[]
  )
  useEffect(()=>{
    const fetchData = async () => {
      const token = localStorage.getItem('access_token');
      const storeId = localStorage.getItem('storeId')
      try {
        axios.get(`https://klick-api.onrender.com/product/store/product?storeId=${storeId}`,
        { query:{
          //category: 'd6af82fb-ae29-45c6-afb1-4ea6ec915b10',
          storeId: `${storeId}`,
      },
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            // Handle the response
            setProduct(response.data.data)
            console.log(response.data.data)
            //setStore(response.data.stores)
            console.log(product);

            if (response.data.success===true) {
                // Navigate to another page
               // history('/');
            //setLoggedIn(response.data.success)
            // Perform any necessary actions after successful login
          }})
          .catch(error => {
            // Handle any errors or display appropriate message
            console.error(error);
          });
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  },[]
  )

  return (
    <div className='p-3'>
      {/* first card */}
      <div className="block w-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h4 className='text-xl'>Show details</h4>

        <div className='mt-4 h-40'>
          <img className="h-full w-full rounded-lg object-cover contain" src={img1} alt="image description" />
        </div>

        <div className='mt-4'>
          <img className="h-36 w-36 border border-gray-700 rounded-full" src={img1} alt="image description"/>
        </div>

        <div className='space-y-4 mt-4'>
          <form>
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Store name</label>
              <input  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>

            <div className='grid gap-6 grid-cols-2 mt-4'>
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
              </div>
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input type="text" id="first_name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required />
              </div>
            </div>

            <div className='mt-4'>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Store Bio</label>
              <textarea type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Store Bio" required />
            </div>
          </form>

          {/* dynamic */}
          <h3 className=' text-gray-400 font-light text-xs mt-4'>
            0/2000
          </h3>
        </div>
      </div>

      {/* second card */}
      <div className="mt-4 block w-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <form>
        <div>
        <h4 className='mb-4 text-xl'>Show address</h4>

        <div className=' space-y-4'>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
            </div>
            
            <div className='grid gap-6 grid-cols-2 mt-4'>
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
              </div>
              <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
              </div>
            </div>

            <div className='w-1/2 mt-4'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City/L.G.A</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City/L.G.A" required />
            </div>
        </div>
        </form>
        
        <h3 className='mt-4'>Opening Hours</h3>

        <div className='mt-4 block w-full p-4 bg-white border border-gray-900 rounded-lg shadow space-y-10'>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Sun</div>
              
              <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" disabled />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled toggle</span>
              </label>
            </div>

            {/* <div className='flex justify-between gap-6'>
              <div className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </div>
              
              <h3>TO</h3>
              <div className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* third */}
      <div className='mt-4 block w-full p-4 bg-white border border-gray-200 rounded-lg'>
        <h3 className='text-xl'>Social Media Account</h3>

        <form className='space-y-5 mt-4'>
          <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ig" required />
          </div>
          <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="bird" required />
          </div>
          <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Twitter</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="fc" required />
          </div>
          <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">TikTok</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5" placeholder="jb" required />
          </div>
        </form>
      </div>

      {/* fourth */}
      <div className='mt-4 block w-full p-4 bg-white border border-gray-200 rounded-lg'>
        <div className=' mb-4 text-xl'>
          Product
        </div>
        {product.map((e)=>{
          return(
            <>
            <div key={e.id}>
              
            <hr className="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className='flex justify-between'>
          <div className='flex'>
            <div className='mr-4'>
              <img className="h-24 w-24 rounded-lg" src={img1} alt="image description"/>
            </div>
          <div className=' items-center space-y-2'>
            <h3>{e.name}</h3>
            <h3 className=' text-gray-400 text-sm'>ID: 595580</h3>
            <div className='flex items-center gap-4'>
              <div className=' text-blue-700'>{e.quantity.total}</div>
              <span className="bg-yellow-100 text-yellow-600 text-xs font-medium p-2 rounded-lg">
                Available Stock: {e.quantity.instock}
              </span>
            </div>
          </div>
          </div>

          <button>
            a
          </button>
        </div> </div></>
          )
        })}

        {/*<hr className="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className='flex justify-between'>
          <div className='flex'>
            <div className='mr-4'>
              <img className="h-24 w-24 rounded-lg" src={img1} alt="image description"/>
            </div>
          <div className=' items-center space-y-2'>
            <h3>TMNT</h3>
            <h3 className=' text-gray-400 text-sm'>ID: 595580</h3>
            <div className='flex items-center gap-4'>
              <div className=' text-blue-700'>4999</div>
              <span className="bg-yellow-100 text-yellow-600 text-xs font-medium p-2 rounded-lg">
                Available Stock: 144
              </span>
            </div>
          </div>
          </div>

          <button>
            a
          </button>
        </div>

        <hr className="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className='flex justify-between'>
          <div className='flex'>
            <div className='mr-4'>
              <img className="h-24 w-24 rounded-lg" src={img1} alt="image description"/>
            </div>
          <div className=' items-center space-y-2'>
            <h3>TMNT</h3>
            <h3 className=' text-gray-400 text-sm'>ID: 595580</h3>
            <div className='flex items-center gap-4'>
              <div className=' text-blue-700'>4999</div>
              <span className="bg-yellow-100 text-yellow-600 text-xs font-medium p-2 rounded-lg">
                Available Stock: 144
              </span>
            </div>
          </div>
          </div>

          <button>
            a
          </button>
        </div>

        <hr className="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className='flex justify-between'>
          <div className='flex'>
            <div className='mr-4'>
              <img className="h-24 w-24 rounded-lg" src={img1} alt="image description"/>
            </div>
          <div className=' items-center space-y-2'>
            <h3>TMNT</h3>
            <h3 className=' text-gray-400 text-sm'>ID: 595580</h3>
            <div className='flex items-center gap-4'>
              <div className=' text-blue-700'>4999</div>
              <span className="bg-green-100 text-green-800 text-xs font-medium p-2 rounded-lg">
                Available Stock: 144
              </span>
            </div>
          </div>
          </div>

          <button>
            a
          </button>
        </div>

        <hr className="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className='flex justify-between'>
          <div className='flex'>
            <div className='mr-4'>
              <img className="h-24 w-24 rounded-lg" src={img1} alt="image description"/>
            </div>
          <div className=' items-center space-y-2'>
            <h3>TMNT</h3>
            <h3 className=' text-gray-400 text-sm'>ID: 595580</h3>
            <div className='flex items-center gap-4'>
              <div className=' text-blue-700'>4999</div>
              <span className="bg-green-100 text-green-800 text-xs font-medium p-2 rounded-lg">
                Available Stock: 144
              </span>
            </div>
          </div>
          </div>

          <button>
            a
          </button>
        </div>
          <hr className="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />*/}
      </div>
    </div>
  );
}

export default ViewMyStore;
