import React, { useState, useRef, useMemo, useEffect } from "react";
import search from "../../assets/search.svg";
import useOutsideClick from "../../hooks/useOutsideClick.jsx";
import { BiX } from "react-icons/bi";

const SearchTagInput = ({
  className,
  title,
  name,
  noLabel,
  options = [],
  errormsg,
  maxDisplayLength = 5,
  onChange,
  value,
  icon,
  noIcon,
  required = true,
  maxLengthInput,
  blacklist = [],
  ...props
}) => {
  const [selectedTags, setSelectedTags] = useState(value ?? []);
  const [searchParam, setSeachParam] = useState("");
  const FilteredOptions = useMemo(() => {
    let _blacklist = [...selectedTags, ...blacklist];
    return filterObjectsByLabel(options, searchParam, _blacklist);
  }, [searchParam, selectedTags]);
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => {
    setShow(false);
  });

  const onInputKeyDown = () => setShow(true);

  function filterObjectsByLabel(objects, seed, blacklist) {
    const blacklistMap = {};

    blacklist.forEach((item) => (blacklistMap[item.label] = true));

    return objects.filter((item) => {
      const label = item.label;
      // const label = item.label.toLowerCase();
      return (
        label.toLowerCase().includes(seed.toLowerCase()) &&
        !blacklistMap.hasOwnProperty(label)
      );
    });
  }

  const removeTag = (index) => {
    //console.log(index);
    const updatedItems = [...selectedTags];
    updatedItems.splice(index, 1);
    if (onChange && value) {
      onChange(updatedItems);
    } else {
      setSelectedTags(updatedItems);
    }
  };

  // useEffect(()=>{
  //   if(onChange){
  //     onChange(selectedTags);
  //   }
  // },[selectedTags])

  useEffect(() => {
    if (value) {
      setSelectedTags(value);
    }
  }, [value]);

  const addTag = (item) => {
    //console.log(maxLengthInput)
    if (maxLengthInput) {
      if (selectedTags.length < maxLengthInput) {
        if (onChange && value) {
          onChange([...value, item]);
        } else {
          setSelectedTags([...selectedTags, item]);
        }
      }
    } else {
      if (onChange && value) {
        onChange([...value, item]);
      } else {
        setSelectedTags([...selectedTags, item]);
      }
    }
    setSeachParam("");
  };

  return (
    <div className={`relative ${className}`}>
      {!noLabel && (
        <label htmlFor={name} className="relative inline-flex">
          {title}{" "}
          <span className="text-red-500 block ml-2">{required && "*"}</span>
        </label>
      )}
      <div ref={dropdownRef}>
        <div className="relative mt-2">
          {!noIcon && (
            <div className="absolute inset-y-0 left-0 flex pl-3 items-center pointer-events-none">
              <img src={icon || search} className="w-4 h-4" />
            </div>
          )}
          <div
            className={`flex flex-wrap ${
              value?.length > 0 || selectedTags?.length > 0 ? "p-2" : "p-2.5"
            } ${
              !noIcon ? "pl-10" : ""
            } text-sm text-gray-900 box-border rounded-lg bg-white gap-x-2 border-[1px] border-[#E7E9EE] shadow-[#E8F5F4] focus:border-[#006566] focus:outline-none hover:border-[#50B6B6] focus:ring-2  focus:ring-[#50B6B6]`}
          >
            {selectedTags?.map((element, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white bg-green-700  font-medium rounded-full px-2 py-1 text-center text-xs"
              >
                {element?.label}
                <button type="button" onClick={() => removeTag(index)}>
                  <BiX />
                </button>
              </div>
            ))}
            <input
              {...props}
              onKeyDown={() => onInputKeyDown()}
              onChange={(e) => setSeachParam(e.target.value)}
              value={searchParam}
              type="search"
              id="search"
              className="grow min-w-[40px] w-[60px] appearance-none border-none bg-transparent text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
        </div>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdown"
          className={`z-10 w-full  absolute inset-y-auto inset-x-0 ${
            show ? "block" : "hidden"
          } show bg-white divide-y divide-gray-100 rounded-lg shadow `}
        >
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
            {FilteredOptions?.slice(0, maxDisplayLength)?.map(
              (option, index) => (
                <li key={index}>
                  <span
                    onClick={() => addTag(option)}
                    className="block px-4 py-2 cursor-pointer hover:bg-gray-100 "
                  >
                    {option.label}
                  </span>
                </li>
              )
            )}
            {/* Showing [number of displayed items] of [total number of items]. */}
            {FilteredOptions.length > maxDisplayLength ? (
              <li className="block px-4 py-2 italic text-xs">
                Showing {maxDisplayLength} results Use the search bar to find
                more options.
              </li>
            ) : (
              ""
            )}
            {FilteredOptions.length === 0 ? (
              <li className="block px-4 py-2 text-sm italic">
                No results found. Try a different search term.
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>

      {maxLengthInput && (
        <div className="mt-1 text-xs italic text-gray-600">
          maximum of {maxLengthInput} item(s) selectable
        </div>
      )}
      {errormsg && <div className="text-red-500 text-sm mt-2">{errormsg}</div>}
    </div>
  );
};

export default SearchTagInput;
