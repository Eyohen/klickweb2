import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const PaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const status = urlParams.get("status");
        const tx_ref = urlParams.get("tx_ref");
        const transaction_id = urlParams.get("transaction_id");

        // Get the token from localStorage
        const token = localStorage.getItem("access_token");

        // Make a GET request to validate the payment
        const validatePayment = async () => {
            try {
                await axios.get(`https://klick-api.onrender.com/order/validate/order?status=${status}&tx_ref=${tx_ref}&transaction_id=${transaction_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // Redirect to the home page on successful validation
                navigate("/");
            } catch (error) {
                console.error(error);
                toast.error("An error occurred while validating your payment");
            }
        };

        // Call the validatePayment function
        validatePayment();
    }, [location, navigate]);
    return (
        <div className='flex flex-col justify-center items-center p-8 bg-white rounded-lg shadow-md'>
            <div className='bg-green-500 rounded-full p-4'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path
                        fillRule='evenodd'
                        d='M10 2C5.03 2 1 6.03 1 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 1.625a7.375 7.375 0 100 14.75 7.375 7.375 0 000-14.75zm.625 2.031a1 1 0 01.781.375l3.5 4.5a1 1 0 01-1.562 1.25L10 8.711l-2.844 3.719a1 1 0 01-1.562-1.25l3.5-4.5a1 1 0 01.78-.375z'
                        clipRule='evenodd'
                    />
                </svg>
            </div>
            <h1 className='text-2xl font-bold mt-4'>Payment Successful</h1>
            <p className='text-gray-500 mt-2'>
                Your payment has been processed successfully.
            </p>
            <p className='text-gray-500'>
                Thank you for your purchase. Your order is on its way!
            </p>

            <button className='bg-yellow-400 rounded-lg px-4 py-2 mt-6 text-black font-bold'
                onClick={() => navigate('/')}
            >
                Continue Shopping
            </button>
        </div>
    );
};

export default PaymentSuccess;
