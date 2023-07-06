/*import { useEffect } from 'react';
import axios from 'axios';

function useVerify(url, data, token) {
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post(url, data, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        // Handle response
        console.log(response.data);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    postData();
  }, [url, data, token]);
}

export default useVerify;*/

//import { useEffect } from 'react';
/*import axios from 'axios';

function useVerify(url, data) {
    const token = localStorage.getItem('token');

    const postData = async () => {
      try {
        const response = await axios.post(url, data, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        // Handle response
        console.log(response.data);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };

    if (token) {
      postData();
    }
  }

export default useVerify;*/

