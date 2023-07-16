import Logo from '../../assets/logo.png';
//import { useForm } from 'react-hook-form';
//import { yupResolver } from '@hookform/resolvers/yup';
//import * as yup from 'yup';
import { useEffect, useState } from 'react';
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
    const { form1Data } = locations.state;
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Location:", location);
    }, [location]);

    const handleSelect = async (selectedAddress) => {
        setAddress(selectedAddress);
        try {
            const results = await geocodeByAddress(selectedAddress);
            console.log("🚀 ~ handleSelect ~ results:", results);

            const addressComponents = results[0]?.address_components || [];
            let city = "";
            let state = "";
            let country = "";

            for (const component of addressComponents) {
                const types = component.types;
                if (types.includes("locality")) {
                    city = component.long_name;
                } else if (types.includes("administrative_area_level_1")) {
                    state = component.long_name;
                } else if (types.includes("country")) {
                    country = component.long_name;
                }
            }

            setLocation({
                address: selectedAddress,
                city,
                state,
                country,
            });

            console.log("City:", city);
            console.log("State:", state);
            console.log("Country:", country);
        } catch (error) {
            console.error("Error: ", error);
        }
    };


    const handleChangeLocation = (newAddress) => {
        setAddress(newAddress);
    };

    const onSubmit = (data) => {
        console.log(data);
        const newData = {
            ...form1Data,
            ...data,
            address: location.address,
            city: location.city,
            state: location.state,
            country: location.country
        };
        console.log(newData);
        navigate('/businesslogo', {
            state: {
                form2Data: newData
            }
        });
    };
    const inputClasses = "border border-gray-200 bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary";


    return (
        <div className="flex flex-col items-center w-[80%] md:w-[30%] mb-10 mx-auto space-y-5 mt-20">
            <img src={Logo} alt="Logo" className="" />
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Add an Address</h1>
            </div>

            <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
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
                        value={location.city}
                        className='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary'
                        {...register('city')}

                    />

                </div>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="state">
                        State
                    </label>

                    <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder='Lagos'
                        value={location.state}
                        className='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary'
                        {...register('state')}

                    />

                </div>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="name_of_country">
                        Country
                    </label>
                    <input
                        type="text"
                        name="name_of_country"
                        id="name_of_country"
                        placeholder='e.g Nigeria'
                        value={location.country}
                        className='border bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary'
                        {...register('country')}
                    />
                </div>
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
