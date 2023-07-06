// import './App.css';
// import img1 from '../src/images/baby.png'
import img1 from '../../assets/images/baby.png'

function ViewMyStore() {
  return (
    <div className='p-3'>
      {/* first card */}
      <div className="block w-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h4 className='text-xl'>Show details</h4>

        <div className='mt-4 h-40'>
          <img class="h-full w-full rounded-lg object-cover contain" src={img1} alt="image description" />
        </div>

        <div className='mt-4'>
          <img class="h-36 w-36 border border-gray-700 rounded-full" src={img1} alt="image description"/>
        </div>

        <div className='space-y-4 mt-4'>
          <form>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>

            <div className='grid gap-6 grid-cols-2 mt-4'>
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
            </div>

            <div className='mt-4'>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
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
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            
            <div className='grid gap-6 grid-cols-2 mt-4'>
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="w-full z-10 py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border" type="button">
                  All categories
                </button>
              </div>
            </div>

            <div className='w-1/2 mt-4'>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
              <button id="dropdown-button" data-dropdown-toggle="dropdown" class="w-full z-10 py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border" type="button">
                  All categories
              </button>
            </div>
        </div>
        </form>
        
        <h3 className='mt-4'>Opening Hours</h3>

        <div className='mt-4 block w-full p-4 bg-white border border-gray-900 rounded-lg shadow space-y-10'>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Mon</div>
              
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-7 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
              </label>
            </div>

            <div className='flex justify-between gap-6'>
              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
              
              <h3>TO</h3>

              <button className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between px-5'>
            <div className='flex justify-between'>
              <div className='mr-10'>Sun</div>
              
              <label class="relative inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" disabled />
                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled toggle</span>
              </label>
            </div>

            {/* <div className='flex justify-between gap-6'>
              <div className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>
              </div>
              
              <h3>TO</h3>
              <div className='bg-white border border-gray-900 rounded-lg shadow p-1 text-xs flex justify-between'>
                <h3>09:00AM</h3>
                <div className=''>
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
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
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ig" required />
          </div>
          <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="bird" required />
          </div>
          <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Twitter</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="fc" required />
          </div>
          <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">TikTok</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5" placeholder="jb" required />
          </div>
        </form>
      </div>

      {/* fourth */}
      <div className='mt-4 block w-full p-4 bg-white border border-gray-200 rounded-lg'>
        <div className=' mb-4 text-xl'>
          Product
        </div>

        <div className='flex justify-between'>
          <div className='flex'>
            <div className='mr-4'>
              <img class="h-24 w-24 rounded-lg" src={img1} alt="image description"/>
            </div>
          <div className=' items-center space-y-2'>
            <h3>TMNT</h3>
            <h3 className=' text-gray-400 text-sm'>ID: 595580</h3>
            <div className='flex items-center gap-4'>
              <div className=' text-blue-700'>4999</div>
              <span class="bg-green-100 text-green-800 text-xs font-medium p-2 rounded-lg">
                Available Stock: 144
              </span>
            </div>
          </div>
          </div>

          <button>
            a
          </button>
        </div>

        <hr class="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className='flex justify-between'>
          <div className='flex'>
            <div className='mr-4'>
              <img class="h-24 w-24 rounded-lg" src={img1} alt="image description"/>
            </div>
          <div className=' items-center space-y-2'>
            <h3>TMNT</h3>
            <h3 className=' text-gray-400 text-sm'>ID: 595580</h3>
            <div className='flex items-center gap-4'>
              <div className=' text-blue-700'>4999</div>
              <span class="bg-red-100 text-red-800 text-xs font-medium p-2 rounded-lg">
                Available Stock: 144
              </span>
            </div>
          </div>
          </div>

          <button>
            a
          </button>
        </div>

        <hr class="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className='flex justify-between'>
          <div className='flex'>
            <div className='mr-4'>
              <img class="h-24 w-24 rounded-lg" src={img1} alt="image description"/>
            </div>
          <div className=' items-center space-y-2'>
            <h3>TMNT</h3>
            <h3 className=' text-gray-400 text-sm'>ID: 595580</h3>
            <div className='flex items-center gap-4'>
              <div className=' text-blue-700'>4999</div>
              <span class="bg-yellow-100 text-yellow-600 text-xs font-medium p-2 rounded-lg">
                Available Stock: 144
              </span>
            </div>
          </div>
          </div>

          <button>
            a
          </button>
        </div>

        <hr class="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className='flex justify-between'>
          <div className='flex'>
            <div className='mr-4'>
              <img class="h-24 w-24 rounded-lg" src={img1} alt="image description"/>
            </div>
          <div className=' items-center space-y-2'>
            <h3>TMNT</h3>
            <h3 className=' text-gray-400 text-sm'>ID: 595580</h3>
            <div className='flex items-center gap-4'>
              <div className=' text-blue-700'>4999</div>
              <span class="bg-yellow-100 text-yellow-600 text-xs font-medium p-2 rounded-lg">
                Available Stock: 144
              </span>
            </div>
          </div>
          </div>

          <button>
            a
          </button>
        </div>

        <hr class="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className='flex justify-between'>
          <div className='flex'>
            <div className='mr-4'>
              <img class="h-24 w-24 rounded-lg" src={img1} alt="image description"/>
            </div>
          <div className=' items-center space-y-2'>
            <h3>TMNT</h3>
            <h3 className=' text-gray-400 text-sm'>ID: 595580</h3>
            <div className='flex items-center gap-4'>
              <div className=' text-blue-700'>4999</div>
              <span class="bg-green-100 text-green-800 text-xs font-medium p-2 rounded-lg">
                Available Stock: 144
              </span>
            </div>
          </div>
          </div>

          <button>
            a
          </button>
        </div>

        <hr class="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className='flex justify-between'>
          <div className='flex'>
            <div className='mr-4'>
              <img class="h-24 w-24 rounded-lg" src={img1} alt="image description"/>
            </div>
          <div className=' items-center space-y-2'>
            <h3>TMNT</h3>
            <h3 className=' text-gray-400 text-sm'>ID: 595580</h3>
            <div className='flex items-center gap-4'>
              <div className=' text-blue-700'>4999</div>
              <span class="bg-green-100 text-green-800 text-xs font-medium p-2 rounded-lg">
                Available Stock: 144
              </span>
            </div>
          </div>
          </div>

          <button>
            a
          </button>
        </div>
        <hr class="h-px mb-8 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </div>
  );
}

export default ViewMyStore;