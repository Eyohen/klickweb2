import axios from "axios";

const URL = import.meta.env.REACT_APP_URL;

export const http = axios.create({ baseURL: URL });


export const BASE_URL = 'https://klick-api.onrender.com'


export function convertObjectToStringWithArrays(obj) {
    let queryString = '';
    const keysToDelete = [];
  
    for (const [key, value] of Object.entries(obj)) {
      if (Array.isArray(value)) {
        queryString += `${key}=[${value.toString()}]?`;
        keysToDelete.push(key);
      }
    }
  
    queryString = queryString.slice(0, -1); // Remove the trailing '?' from the string
  
    // Delete each entry from the original object
    for (const keyToDelete of keysToDelete) {
      delete obj[keyToDelete];
    }
  
    return queryString;
  }