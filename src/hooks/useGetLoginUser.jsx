import { useEffect, useState } from "react";
import axios from "axios";

const useGetLoggedInUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    // Check if the user data already exists in localStorage
    const existingUserData = JSON.parse(localStorage.getItem("user"));

    if (existingUserData) {
      setUser(existingUserData);
      setLoading(false);
    } else {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            "https://klick-api.onrender.com/auth/user",
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const data = response.data;

          // Conditionally check if items in data.user are null or empty
          const {
            id: userId,
            firstName,
            lastName,
            email,
            phone,
            role,
            status,
            vendorMode,
            Cart: { id: cartId = null } = {}, // Default to null if Cart is null
            Wallet: { id: walletId = null } = {}, // Default to null if Wallet is null
            DeliveryAddresses = [], // Default to an empty array if DeliveryAddresses is null
          } = data.user;

          // Save the extracted data
          setUser({
            userId,
            firstName,
            lastName,
            email,
            phone,
            role,
            status,
            vendorMode,
          });
          setLoading(false);

          // Save cartId to localStorage if it is not null or empty
          if (cartId) {
            localStorage.setItem("cartId", cartId);
          }

          // Save walletId to localStorage if it is not null or empty
          if (walletId) {
            localStorage.setItem("walletId", walletId);
          }

          // Save delivery addresses to localStorage
          localStorage.setItem(
            "deliveryAddresses",
            JSON.stringify(DeliveryAddresses)
          );

          // Save user data to localStorage
          localStorage.setItem(
            "user",
            JSON.stringify({
              userId,
              firstName,
              lastName,
              email,
              phone,
              role,
              status,
              vendorMode,
            })
          );
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchUser();
    }
  }, []);

  return { user, loading, error };
};

export default useGetLoggedInUser;

export const getCartId = () => localStorage.getItem("cartId");
export const getWalletId = () => localStorage.getItem("walletId");
export const getDeliveryAddresses = () =>
  JSON.parse(localStorage.getItem("deliveryAddresses"));

export const getPrimaryAddress = () => {
  const deliveryAddresses = JSON.parse(
    localStorage.getItem("deliveryAddresses")
  );
  if (Array.isArray(deliveryAddresses) && deliveryAddresses.length > 0) {
    return deliveryAddresses[0].address;
  }
  return null;
};
