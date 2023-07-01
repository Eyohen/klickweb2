import Logo from '../assets/logo.png'
import { GrClose } from 'react-icons/gr'
import { IoHomeOutline } from 'react-icons/io5'

const Sidebar = () => {
    return (
        <div className="flex gap-4 fixed left-o top-0 z-50 h-screen">
            <div className="flex flex-col items-center bg-white space-y-10 w-[372px]">
                <img src={Logo} alt="logo" className="mt-10" />
                <div className='flex flex-col items-center gap-3 w-[65%]'>
                    <div className='bg-secondary rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4'>
                        <IoHomeOutline className='h-5 w-5' />
                        <a href="">Home</a>
                    </div>
                    <div className=' rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4'>
                        <IoHomeOutline className='h-5 w-5' />
                        <a href="">Home</a>
                    </div>
                    <div className=' rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4'>
                        <IoHomeOutline className='h-5 w-5' />
                        <a href="">Home</a>
                    </div>
                    <div className=' rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4'>
                        <IoHomeOutline className='h-5 w-5' />
                        <a href="">Home</a>
                    </div>
                    <div className=' rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4'>
                        <IoHomeOutline className='h-5 w-5' />
                        <a href="">Home</a>
                    </div>
                </div>
                <div className='border-b border-gray-300' />
                <div>
                    <div className=' rounded-lg'>
                        <a href="">Help</a>
                    </div>
                    <div>
                        <a href="">Help</a>
                    </div>
                    <div>
                        <a href="">Help</a>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <p className='bg-white rounded-full p-3'>
                    <GrClose />
                </p>
            </div>
        </div>

    )
}

export default Sidebar