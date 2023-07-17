import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetLoggedInUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://klick-api.onrender.com/auth/user', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const data = response.data;

        // Extract the necessary information from the user object
        const { id: userId, Cart: { id: cartId } } = data.user;

        // Update the state with the user and cart IDs
        setUser({ userId, cartId });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

export default useGetLoggedInUser;
