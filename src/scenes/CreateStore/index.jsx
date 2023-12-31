import Logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";

//import { useState } from 'react';

const validationSchema = yup.object().shape({
  storeName: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  industry: yup.string().required("Industry is required"),
});

const CreateStore = () => {
  const navigate = useNavigate();

  const inputClasses =
    "border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary";
  const errorBorderClasses = "border-red-500";
  const activeButtonClasses =
    "bg-secondary py-4 text-black rounded-full mt-10 cursor-pointer";
  const disabledButtonClasses =
    "bg-gray-100 py-4 text-gray-500 rounded-full mt-10 cursor-not-allowed";

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange", // enable validation on change to update button state dynamically
  });

  const onSubmit = (data) => {
    navigate("/storeaddress", {
      state: {
        form1Data: data,
      },
    });
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center w-[80%] md:w-[30%] mb-10 mx-auto space-y-5 mt-20">
      <img src={Logo} alt="Logo" className="" />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">
          Let's Get to Know Your Business Better
        </h1>
      </div>

      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="storeName">
            Name of Store
          </label>
          <input
            type="text"
            name="storeName"
            id="storeName"
            placeholder="e.g. John Store"
            className={`${inputClasses} ${errors.storeName ? errorBorderClasses : ""
              }`}
            {...register("storeName")}
          />
          {errors.storeName && (
            <span className="text-red-500 text-xs">
              {errors.storeName.message}
            </span>
          )}
        </div>
        {/* ... */}
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. example@gmail.com"
            className={`${inputClasses} ${errors.email ? errorBorderClasses : ""
              }`}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>
        {/* ... */}
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="phone">
            Business Phone Number
          </label>
          <div className={`${inputClasses} flex gap-4 ${errors.email ? errorBorderClasses : ""
              }`} tabIndex="0">
            <div className="mr-2">
              <img className="w-7 h-7" src="https://www.svgrepo.com/show/405569/flag-for-flag-nigeria.svg" alt="Nigeria Flag" />
            </div>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="+2348152380723"
              className={`outline-none focus:ring-secondary focus:border-secondary bg-gray-50 ${errors.phone ? errorBorderClasses : ""}`}
              {...register("phone")}
            />
          </div>
          {errors.phone && (
            <span className="text-red-500 text-xs">{errors.phone.message}</span>
          )}
        </div>
        {/* ... */}
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="industry">
            Which industry will you be primarily operating in?
          </label>
          <select
            name="industry"
            id="industry"
            className={`${inputClasses} ${errors.industry ? errorBorderClasses : ""
              }`}
            {...register("industry")}
          >
            <option value="">Select an industry</option>
            <option value="electronics">Electronics</option>
            <option value="homewares">Homewares</option>
            <option value="fashion">Fashion</option>
            <option value="beauty">Beauty</option>
            <option value="health">Health</option>
            <option value="food">Food</option>
            <option value="kids">Kids</option>
          </select>
          {errors.industry && (
            <span className="text-red-500 text-xs">
              {errors.industry.message}
            </span>
          )}
        </div>
        {/* ... */}
        <button
          className={`${isValid ? activeButtonClasses : disabledButtonClasses}`}
          type="submit"
          disabled={!isValid}
        // onClick={changePage}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default CreateStore;

// import { useEffect, useState } from "react";
// import Logo from "../../assets/logo.png";
// import { useNavigate } from "react-router-dom";
// import { registerStore } from "../../api.jsx";

// const CreateStore = () => {
//   //   const navigate = useNavigate();

//   const getToken = () => {
//     return JSON.parse(localStorage.getItem("user").access_token);
//   };

//   console.log(getToken());

//   const [err, setErr] = useState("");
//   const [storeName, setStoreName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [industry, setIndustry] = useState("");
//   const [address, setAddress] = useState("");
//   const [storeState, setStoreState] = useState("");
//   const [city, setCity] = useState("");
//   const [country, setCountry] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!storeName || !email || !phone || !industry) {
//       setErr("Please fill all fields");
//       setTimeout(() => {
//         setErr("");
//       }, 3000);
//       return;
//     }

//     const form = {
//       storeName,
//       email,
//       phone,
//       industry,
//       address,
//       storeState,
//       city,
//       country,
//     };

//     registerStore(form);
//     console.log(form);

//     useEffect(() => {
//       registerStore(form);
//     }, []);
//   };

//   return (
//     <div className="flex flex-col items-center w-[80%] md:w-[30%] mb-10 mx-auto space-y-5 mt-20">
//       <img src={Logo} alt="Logo" className="" />
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-2">
//           Let's Get to Know Your Business Better
//         </h1>
//       </div>

//       <form className="flex flex-col w-full" onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm mb-2" htmlFor="storeName">
//             Name of Store
//           </label>
//           <input
//             type="text"
//             value={storeName}
//             onChange={(e) => setStoreName(e.target.value)}
//             style={{
//               width: "100%",
//               border: "1px solid gray",
//               padding: "5px",
//               outline: "none",
//             }}
//           />
//           {err && <div className="text-red-500 text-xs">{err}</div>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm mb-2" htmlFor="email">
//             Email Address
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{
//               width: "100%",
//               border: "1px solid gray",
//               padding: "5px",
//               outline: "none",
//             }}
//           />
//           {err && <div className="text-red-500 text-xs">{err}</div>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm mb-2" htmlFor="phone">
//             Business Phone Number
//           </label>
//           <input
//             type="number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             style={{
//               width: "100%",
//               border: "1px solid gray",
//               padding: "5px",
//               outline: "none",
//             }}
//           />
//           {err && <div className="text-red-500 text-xs">{err}</div>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm mb-2" htmlFor="industry">
//             Which industry will you be primarily operating in?
//           </label>
//           <select
//             // className="border p-2 w-100"
//             value={industry}
//             onChange={(e) => setIndustry(e.target.value)}
//             style={{
//               width: "100%",
//               border: "1px solid gray",
//               padding: "5px",
//               outline: "none",
//             }}
//           >
//             <option value="">Select an industry</option>
//             <option value="electronics">Electronics</option>
//             <option value="homewares">Homewares</option>
//             <option value="fashion">Fashion</option>
//             <option value="beauty">Beauty</option>
//             <option value="health">Health</option>
//             <option value="food">Food</option>
//             <option value="kids">Kids</option>
//           </select>
//           {err && <div className="text-red-500 text-xs">{err}</div>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm mb-2" htmlFor="address">
//             Address
//           </label>
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             style={{
//               width: "100%",
//               border: "1px solid gray",
//               padding: "5px",
//               outline: "none",
//             }}
//           />
//           {err && <div className="text-red-500 text-xs">{err}</div>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm mb-2" htmlFor="state">
//             State
//           </label>
//           <input
//             type="text"
//             value={storeState}
//             onChange={(e) => setStoreState(e.target.value)}
//             style={{
//               width: "100%",
//               border: "1px solid gray",
//               padding: "5px",
//               outline: "none",
//             }}
//           />
//           {err && <div className="text-red-500 text-xs">{err}</div>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm mb-2" htmlFor="city">
//             City
//           </label>
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             style={{
//               width: "100%",
//               border: "1px solid gray",
//               padding: "5px",
//               outline: "none",
//             }}
//           />
//           {err && <div className="text-red-500 text-xs">{err}</div>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm mb-2" htmlFor="country">
//             Country
//           </label>
//           <input
//             type="text"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             style={{
//               width: "100%",
//               border: "1px solid gray",
//               padding: "5px",
//               outline: "none",
//             }}
//           />
//           {err && <div className="text-red-500 text-xs">{err}</div>}
//         </div>

//         <button className="border border-sky-500 p-2 rounded">Continue</button>
//       </form>
//     </div>
//   );
// };

// export default CreateStore;
