/* eslint-disable react/prop-types */
import Logo from '../assets/logo.png';
import { GrClose } from 'react-icons/gr';
import { IoHomeOutline } from 'react-icons/io5';
import { BiMessageDots } from "react-icons/bi";
import { DiNetbeans } from "react-icons/di";
import { GrGroup } from "react-icons/gr";
import { HiShoppingBag } from "react-icons/hi2";
import { TbPresentationAnalytics,TbHelpSquare } from "react-icons/tb";
import {PiGearSix } from "react-icons/pi";
import { Link } from 'react-router-dom';








const Sidebar = ({ handleSidebarToggle }) => {
    return (
        <div className="flex gap-4 fixed left-o top-0 z-50 h-screen">
            <div className="flex flex-col items-center bg-white space-y-5 w-[372px]">
                <img src={Logo} alt="logo" className="my-10" />
                <div className="flex flex-col items-center gap-3 w-[65%]">
                    <div className="bg-secondary hover:bg-secondary rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4">
                        <IoHomeOutline className="h-5 w-5" />
                        <a href="">Home</a>
                    </div>
                    <Link to={'/orders'}>
                    <div className="hover:bg-slate-100 rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4">
                        <DiNetbeans className="h-5 w-5" />
                        <Link to={'/orders'}>orders</Link>
                    </div>
                    </Link>
                    <div className="hover:bg-slate-100 rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4">
                        <BiMessageDots className="h-5 w-5" />
                        <a href="">Messages</a>
                    </div>
                    <div className="hover:bg-slate-100 rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4">
                        <GrGroup className="h-5 w-5" />
                        <a href="">KSocial</a>
                    </div>
                    <div className="hover:bg-slate-100 rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4">
                        <HiShoppingBag className="h-5 w-5" />
                        <a href="">Products</a>
                    </div>
                </div>
                <div className="border-b border-gray-300 h-1 w-[65%]" />
                <div className="flex flex-col items-center gap-3 w-[65%]">
                    <div className="hover:bg-slate-100 rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4">
                        <TbPresentationAnalytics className="h-5 w-5" />
                        <a href="">Analytics</a>
                    </div>
                    <div className="hover:bg-slate-100 rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4">
                        <TbHelpSquare className="h-5 w-5" />
                        <a href="">Help</a>
                    </div>
                    <div className="hover:bg-slate-100 rounded-lg flex space-x-4 text-tsecondary w-full px-8 py-4">
                        <PiGearSix className="h-5 w-5" />
                        <a href="">Settings</a>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <p className="bg-white rounded-full p-3">
                    <GrClose onClick={handleSidebarToggle} className='hover:cursor-pointer' />
                </p>
            </div>
        </div>
    );
};

export default Sidebar