import React from 'react'
import search from '../../assets/search.svg';

const SearchInput = ({errormsg,
    className,
    title,
    name,
    required,
    noLabel , 
    ...props}) => {
  return (
    <div className={className}>
        {!noLabel && <label htmlFor={name} className="relative inline-flex">
        {title} {required && <span className="text-red-500 block ml-2">*</span>}
      </label>}
        <div className={`relative ${className ? className : 'mt-2'}`}>
            <div className="absolute inset-y-0 left-0 flex pl-3 items-center pointer-events-none">
                <img src={search}  className="w-4 h-4" />
            </div>
            <input {...props} type="search" id="search" className="block w-full p-2.5 pl-10 text-sm text-gray-900 rounded-lg bg-white border-[1px] border-[#E7E9EE] shadow-[#E8F5F4] focus:border-[#006566] focus:outline-none hover:border-[#50B6B6] focus:ring-2  focus:ring-[#50B6B6]"  required/>
        </div>
        {errormsg && <div className="text-red-500 text-sm mt-2">{errormsg}</div>}
    </div>
  )
}

export default SearchInput