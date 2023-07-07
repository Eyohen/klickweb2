const TextInput = ({
  errormsg,
  className,
  title,
  name,
  value,
  onChange,
  id
  //noLabel= false,
  //required,
  //register = () => {},
  //...props
}) => {
  return (
    <div className={`flex flex-col  ${className ? className : 'w-full'}`}>
      <label htmlFor={name} className="relative inline-flex">
        {title}<span className="block ml-2">*</span>
      </label>
      <input
        //{...props}
        type="text"
        id={id}
        //{...register(name)}
        value={value}
        onChange={onChange}
        name={name}
        // className="appearance-none border-[1px] border-[#B0D1D0] rounded-md p-2.5 shadow-sm shadow-[#E8F5F4] mt-2 outline-none focus:border-[#006566]"
        className="block w-full mt-2 p-2.5 text-sm text-gray-900 rounded-lg bg-white border-[2px] border-[#cb4a1f] shadow-[#E8F5F4] focus:border-[#761007] focus:outline-none hover:border-[#c95c44] focus:ring-2  focus:ring-[#d11c1c]"
      />
      {errormsg && <div className="text-red-500 text-sm mt-2">{errormsg}</div>}
    </div>
  );
};

export default TextInput;