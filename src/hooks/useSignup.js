import { useState } from 'react';
//import PlacesAutocomplete from 'react-google-autocomplete';
import PlacesAutocomplete from 'react-google-autocomplete';

const useSignup = (initialState, callback) => {
  const [values, setValues] = useState(initialState);
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handlePlaceSelect = (place) => {
    //const { name, value } = event.target;
    const location = place.formatted_address;
    setValues({ ...values, location});
console.log(location)
  };
 
  

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    values,
    //address,
    handleChange,
    handleSubmit,
    handlePlaceSelect,
    PlacesAutocomplete,
  };
};

export default useSignup;

