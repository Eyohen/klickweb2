import Logo from '../../assets/logo.png';
//import { useForm } from 'react-hook-form';
//import { yupResolver } from '@hookform/resolvers/yup';
//import * as yup from 'yup';
import {useState} from 'react';
import { useNavigate } from 'react-router';
//import { useNavigation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from "react-places-autocomplete";



const StoreAddress = () => {
    const { handleSubmit, register } = useForm();
    const locations = useLocation();
    const { form1Data} = locations.state
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState("");
   // const [change, setChange] = useState(false)

    const navigate = useNavigate();
   // const navigation = useNavigation()
    /*const changePage = () => {
        setChange(!change);
        if(!change){
            navigate("/businesslogo")
        }

    }*/
     const handleSelect = async (selectedAddress) => {
    setAddress(selectedAddress);
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      console.log("Latitude: ", latLng.lat);
      console.log("Longitude: ", latLng.lng);
      console.log(results);
      console.log(results[0].formatted_address);
      setLocation(results[0].formatted_address);
      const location = results[0].formatted_address;
      return location;
    } catch (error) {
      console.error("Error: ", error);
    }
    console.log(address);
  };
  

  const handleChangeLocation = (newAddress) => {
    setAddress(newAddress);
  };

    const onSubmit = (data) => {
        console.log(data)
        const newData = {
            ...form1Data,
            ...data,
            address: location,
          };
          console.log(newData)
        navigate('/businesslogo', {
          state: {
               form2Data: newData
            //...form1Data,data
            
            //form2Data:data
          }
        });
        //console.log()
      };


    /*const inputClasses =
        'border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary';
    const errorBorderClasses = 'border-red-500';
    const activeButtonClasses = 'bg-secondary py-4 text-black rounded-full mt-10 cursor-pointer';
    const disabledButtonClasses = 'bg-gray-100 py-4 text-gray-500 rounded-full mt-10 cursor-not-allowed';*/

    // const { handleSubmit, register, formState: { errors, isValid } } = useForm({
    //     resolver: yupResolver(validationSchema),
    //     mode: 'onChange', // enable validation on change to update button state dynamically
    // });

    /*const onSubmit = (data) => {
        console.log(data);
    };*/
    const inputClasses = "border border-gray-200 bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary";


    return (
        <div className="flex flex-col items-center w-[80%] md:w-[30%] mb-10 mx-auto space-y-5 mt-20">
            <img src={Logo} alt="Logo" className="" />
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Add an Address</h1>
            </div>

            <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="name_of_country">
                       Country
                    </label>
                    <input
                        type="text"
                        name="name_of_country"
                        id="name_of_country"
                        placeholder='e.g Nigeria'
                        className='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary'
                        {...register('country')}
                        />
                      
                   
                </div>
                {/* ... */}
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="address">
                        Address
                    </label>
                    <PlacesAutocomplete
            value={address}
            onChange={handleChangeLocation}
            onSelect={handleSelect}
            placeholder='e.g 7 Gbenga Adeyinka lane'
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({ placeholder: "Enter address e.g 7 Gbenga Adeyinka lane" })}
                  className={inputClasses}
                />
                <div>
                  {loading ? <div>Loading...</div> : null}
                  {suggestions.map((suggestion, index) => {
                    const style = {
                      backgroundColor: suggestion.active
                        ? "#fafafa"
                        : "#ffffff",
                    };
                    return (
                      <div
                        key={index}
                        {...getSuggestionItemProps(suggestion, { style })}
                      >
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
                    {/*<input
                        type="text"
                        name="address"
                        id="address"
                        placeholder='e.g 7 Gbenga Adeyinka lane'
                        className='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary'
                        {...register('address')}
                />*/}
                 
                </div>
                {/* ... */}
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="state">
                        State
                    </label>

                    <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder='Lagos'
                        className='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary'
                        {...register('state')}
                       
                    />
                   
                </div>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="city">
                        City
                    </label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder='Epe'
                        className='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary'
                        {...register('city')}
                        
                    />
                
                </div>
                {/* ... */}
             
                {/* ... */}
                <button
                    className='bg-secondary py-4 text-black rounded-full mt-10 cursor-pointer'
                    type="submit"
                    //onClick={changePage}
                    
                >
                    Continue
                </button>
            </form>
        </div>
    );
};

export default StoreAddress;
