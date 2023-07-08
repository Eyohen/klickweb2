import { useRef, useEffect } from 'react';

const usePlacesAutocomplete = () => {
  const address1Ref = useRef(null);
  const address2Ref = useRef(null);
  const postalRef = useRef(null);

  useEffect(() => {
    let autocomplete;

    const initAutocomplete = () => {
      address1Ref.current = document.querySelector("#ship-address");
      address2Ref.current = document.querySelector("#address2");
      postalRef.current = document.querySelector("#postcode");
      // Create the autocomplete object, restricting the search predictions to
      // addresses in the US and Canada.
      autocomplete = new window.google.maps.places.Autocomplete(address1Ref.current, {
        componentRestrictions: { country: ["us", "ca"] },
        fields: ["address_components", "geometry"],
        types: ["address"],
      });
      address1Ref.current.focus();
      // When the user selects an address from the drop-down, populate the
      // address fields in the form.
      autocomplete.addListener("place_changed", fillInAddress);
    };

    const fillInAddress = () => {
      // Get the place details from the autocomplete object.
      const place = autocomplete.getPlace();
      let address1 = "";
      let postcode = "";

      // Get each component of the address from the place details,
      // and then fill-in the corresponding field on the form.
      for (const component of place.address_components) {
        const componentType = component.types[0];

        switch (componentType) {
          case "street_number": {
            address1 = `${component.long_name} ${address1}`;
            break;
          }
          case "route": {
            address1 += component.short_name;
            break;
          }
          case "postal_code": {
            postcode = `${component.long_name}${postcode}`;
            break;
          }
          case "postal_code_suffix": {
            postcode = `${postcode}-${component.long_name}`;
            break;
          }
          case "locality":
            document.querySelector("#locality").value = component.long_name;
            break;
          case "administrative_area_level_1": {
            document.querySelector("#state").value = component.short_name;
            break;
          }
          case "country":
            document.querySelector("#country").value = component.long_name;
            break;
        }
      }

      address1Ref.current.value = address1;
      postalRef.current.value = postcode;
      address2Ref.current.focus();
    };

    initAutocomplete();

    return () => {
      delete window.initAutocomplete;
      // Clean up any necessary resources when the component unmounts
    };
  }, []);

  return { address1Ref, address2Ref, postalRef };
};

export default usePlacesAutocomplete;
