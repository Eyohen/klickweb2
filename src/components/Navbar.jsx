import { GiHamburgerMenu } from 'react-icons/gi'
import { RiQuestionnaireLine } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { BsBell } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import Logo from "../assets/logo.png"

const Navbar = ({handleSidebarToggle}) => {
	const navIconStyle = 'w-6 h-6 text-gray-600 cursor-pointer'
	return (
		<div className="container flex justify-between items-center h-[108px] bg-white">
			{/* hamburger and icon */}
			<div className='flex items-center gap-4'>
				<GiHamburgerMenu onClick={handleSidebarToggle} className='w-8 h-8 text-gray-600 hover:cursor-pointer'/>
				<img src={Logo} alt="logo" className="hover:cursor-pointer" />
			</div>

			{/* search bar */}
			<div className='flex items-center border border-gray-300 text-gray-500 bg-[#FAFAFA] rounded-md p-3 w-[35%]'>
				<CiSearch className='w-6 h-6' />
				<input className='outline-none bg-inherit px-2 text-sm w-full' type="text" placeholder='Search for products' />
			</div>

			{/* others */}
			<div className='flex justify-between items-center space-x-6'>
				{/* bell icon */}
				<div className="hidden 7xl:flex items-center justify-center h-10 w-10 bg-gray-100 rounded-full">
					<BsBell className={navIconStyle} />
				</div>

				{/* help */}
				<div className='flex items-center space-x-2 hover:cursor-pointer'>
					<RiQuestionnaireLine className={navIconStyle} />
					<a href="#">Help</a>
				</div>

				{/* profile not logged in */}
				<div className='flex items-center space-x-2 hover:cursor-pointer'>
					<BiUser className={navIconStyle} />
					<a href="/register">Login</a>
				</div>

				{/* logged in user */}
				<div className='hidden 7xl:flex items-center space-x-2 hover:cursor-pointer'>
					<BiUser className={navIconStyle} />
					<div className='flex items-center'>
						<p className="text-sm">Mike Dean</p>
						<BiChevronDown className="w-8 h-8 text-gray-600" />
					</div>
				</div>

				{/* cart */}
				<div className='flex items-center space-x-2 hover:cursor-pointer'>
					<AiOutlineShoppingCart className={navIconStyle} />
					<a href="#">Cart</a>
					<div className="flex items-center justify-center rounded-full bg-primary text-white p-2.5 w-8 h-8">
						<p className="text-center">0</p>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Navbar