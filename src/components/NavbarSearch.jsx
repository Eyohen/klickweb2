import React from 'react'
import { useRef } from 'react'
import { useState , useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'


export const useDebounce = (value, milliSeconds) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
   
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, milliSeconds);
   
      return () => {
        clearTimeout(handler);
      };
    }, [value, milliSeconds]);
   
    return debouncedValue;
   };

const NavbarSearch = () => {
    const [searchWord , setSearchWord] = useState(null)
   
    const navigate = useNavigate()

    // const debounceSearchQuery = useDebounce(searchWord,2000)

    // useEffect(()=>{
    //     if(debounceSearchQuery){
            
    //     }
    // },[debounceSearchQuery])
  return <>
        
        <div className="flex items-center border border-gray-300 text-gray-500 bg-[#FAFAFA] rounded-md p-3 w-[35%]">
            <CiSearch className="w-6 h-6" />
            <input
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)} 
                className="outline-none bg-inherit px-2 text-sm w-full"
                type="text"
                placeholder="Search for products"
            />
            <buton onClick={()=> searchWord && navigate(`searchpage?q=${searchWord}`)} className="bg-secondary text-tsecondary text-sm rounded-full px-6 py-3 z-10 cursor-pointer ">Search</buton>
        </div>
    </>
  
}

export default NavbarSearch