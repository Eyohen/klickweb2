import React, { useEffect, useState } from "react";
import axios from "axios";
import BackArrow from "./BackArrow";
import FillButton from "./FillButton";
import OutlineButton from "./OutlineButton";
import img1 from "../../assets/images/GridItem.png";
import { AiFillStar } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Footer from "../../components/Footer";
import CheckOutAddress from "./CheckOutAddress";
import useGetLoggedInUser, {
    getCartId,
    getPrimaryAddress,
} from "../../hooks/useGetLoginUser";
import LoadingScreen from "../../components/LoadingScreen";
import DeliveryCard from "../../components/DeliveryCard";

function CheckOut() {
    const [showModal, setShowModal] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const cartId = getCartId();
    const [shippingOptions, setShippingOptions] = useState([]);

    const storeId = 0

    const [selectedShipmentMethod, setSelectedShipmentMethod] = useState(null);
    const [selectedCourier, setSelectedCourier] = useState(null);
    console.log("🚀 ~ file: index.jsx:28 ~ CheckOut ~ selectedCourier:", selectedCourier)

    const handleConfirmOrder = async () => {
        if (!selectedCourier) {
            alert("Please select a courier.");
            return;
        }
        if (!selectedShipmentMethod) {
            alert("Please select a shipment method")
        }

        try {
            // Your API request to confirm the order
            const token = localStorage.getItem("access_token");
            const response = await axios.post(
                `https://klick-api.onrender.com/order/?${storeId}`,
                {
                    cartId: cartId,
                    courier: selectedCourier,
                    // Add other relevant data for order confirmation
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            // Handle the response as needed, e.g., show success message
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(
                    `https://klick-api.onrender.com/cart/${cartId}`
                );
                const { data } = response.data;
                setCartItems(data.items);
            } catch (error) {
                console.log(error);
            }
        };

        const getShippingOptions = async () => {
            // Fetch shipping options
            const token = localStorage.getItem('access_token');
            const shippingOptionsResponse = await axios.get('https://klick-api.onrender.com/cart/checkout/rates', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const shippingOptionsData = shippingOptionsResponse.data;
            setShippingOptions(shippingOptionsData.data.shippingdetails.couriers);
            return shippingOptions
        }

        fetchCartItems();
        getShippingOptions();
    }, [cartId]);


    const { user, loading } = useGetLoggedInUser();
    const address = getPrimaryAddress();

    if (loading) {
        return <LoadingScreen />;
    }
    return (
        <div className="p-10 font-medium relative">
            <BackArrow />

            <h3 className=" mb-8 font-semibold text-2xl">Place Order</h3>

            <div className="w-full flex gap-5">
                {/* left */}
                <div className="w-4/6 space-y-5">
                    <div className="block p-6 bg-white border border-gray-200 rounded-lg">
                        <div className="mb-6">Delivery to</div>

                        <div className=" flex justify-between items-center">
                            <div className=" space-y-1">
                                <div className=" text-xl">
                                    {user.firstName} {user.lastName}
                                </div>
                                <div className=" text-sm text-gray-400 font-normal">
                                    {address || "No address"}
                                </div>
                            </div>

                            <div>
                                <OutlineButton
                                    onClick={() => {
                                        setShowModal(true);
                                    }}
                                    name="Change"
                                />
                            </div>
                        </div>
                        <CheckOutAddress
                            className="absolute"
                            isOpen={showModal}
                            onClose={() => {
                                setShowModal(false);
                            }}
                        ></CheckOutAddress>
                    </div>

                    <div className="block p-6 bg-white border border-gray-200 rounded-lg">
                        <div className="">
                            <div className=" mb-6">Shipping Method</div>

                            <div className="flex justify-between items-center">
                                <div className="mb-3">Ship with seller</div>

                                <div>
                                    <input
                                        type="radio"
                                        name="shippingMethod"
                                        value="seller"
                                        checked={selectedShipmentMethod === "seller"}
                                        onChange={() => setSelectedShipmentMethod("seller")}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className=" flex gap-3 items-center">
                                <AiFillStar />
                                <div className=" text-sm text-gray-400 font-normal">
                                    <p>
                                        Your order will be handled completely by the seller from payment to
                                        delivery. Contact seller for delivery information
                                    </p>
                                </div>
                            </div>

                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                            {/* ship with k-ship */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="mb-3">Ship with K-Ship</div>

                                    <div className=" flex gap-3 items-center">
                                        <AiFillStar />
                                        <div className=" text-sm text-gray-400 font-normal">
                                            <p>Delivered by K-verified shippers</p>
                                        </div>
                                    </div>
                                    <div className=" mb-2 flex gap-3 items-center">
                                        <AiFillStar />
                                        <div className=" text-sm text-gray-400 font-normal">
                                            <p>Real-Time package tracking</p>
                                        </div>
                                    </div>
                                    <div className=" mb-2 flex gap-3 items-center">
                                        <AiFillStar />
                                        <div className=" text-sm text-gray-400 font-normal">
                                            <p>Insurance on good in transit</p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                        onClick={() => setSelectedShipmentMethod("k-ship")}
                                    >
                                        1000
                                    </button>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="shippingMethod"
                                        value="seller"
                                        checked={selectedShipmentMethod === "k-ship"}
                                        onChange={() => setSelectedShipmentMethod("k-ship")}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                            {/* ship with option */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <div>
                                        <div className="mb-3">Ship with K-Secure</div>
                                    </div>
                                    <div className=" flex gap-3 items-center">
                                        <AiFillStar />
                                        <div className=" text-sm text-gray-400 font-normal">
                                            <p>Delivered by K-verified shippers</p>
                                        </div>
                                    </div>
                                    <div className=" mb-2 flex gap-3 items-center">
                                        <AiFillStar />
                                        <div className=" text-sm text-gray-400 font-normal">
                                            <p>Payment secured by Klick</p>
                                        </div>
                                    </div>
                                    <div className=" mb-2 flex gap-3 items-center">
                                        <AiFillStar />
                                        <div className=" text-sm text-gray-400 font-normal">
                                            <p>Real-Time package tracking</p>
                                        </div>
                                    </div>
                                    <div className=" mb-2 flex gap-3 items-center">
                                        <AiFillStar />
                                        <div className=" text-sm text-gray-400 font-normal">
                                            <p>Insurance on good in transit</p>
                                        </div>
                                    </div>
                                    <div className=" mb-2 flex gap-3 items-center">
                                        <AiFillStar />
                                        <div className=" text-sm text-gray-400 font-normal">
                                            <p>Insurance on good in transit</p>
                                        </div>
                                    </div>
                                    <div className=" mb-2 flex gap-3 items-center">
                                        <AiFillStar />
                                        <div className=" text-sm text-gray-400 font-normal">
                                            <p>3 days return</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="shippingMethod"
                                        value="seller"
                                        checked={selectedShipmentMethod === "k-secure"}
                                        onChange={() => setSelectedShipmentMethod("k-secure")}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                1500
                            </button>

                            {/* Rest of the existing code... */}
                        </div>
                    </div>

                    <div className="block p-6 bg-white border border-gray-200 rounded-lg">
                        <p className="mb-6">Payment Method</p>

                        <div className="flex gap-3 items-center">
                            <AiFillStar />
                            <div className=" text-sm text-gray-400 font-normal">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className="flex gap-3 items-center">
                            <AiFillStar />
                            <div className=" text-sm text-gray-400 font-normal">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className="flex gap-3 items-center">
                            <AiFillStar />
                            <div className=" text-sm text-gray-400 font-normal">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className=" w-2/6 space-y-5">
                    <div className="block p-6 bg-white border border-gray-200 rounded-lg">
                        <p className=" text-lg mb-6">Order Summary</p>

                        {cartItems.map((item) => (
                            <div key={item.id}>
                                <div className="flex gap-4">
                                    <img
                                        src={img1}
                                        className="w-24 h-24 rounded-xl"
                                        alt="Product"
                                    />

                                    <div className="space-y-10">
                                        <div className="flex justify-between items-center gap-4">
                                            <p>{item.info.name}</p>
                                            <RiDeleteBin2Fill />
                                        </div>
                                        <p className="my-3">{`N ${item.info.UnitPrice}`}</p>
                                    </div>
                                </div>
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            </div>
                        ))}

                        <DeliveryCard shippingOptions={shippingOptions} setSelectedCourier={setSelectedCourier}/>
                        <div className="">
                            <p className="mt-5">Discount Code</p>

                            <form className="flex items-center mt-2">
                                {/* <label for="voice-search" className="sr-only">Search</label> */}
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        id="voice-search"
                                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-gray-200 rounded-lg border  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Apply
                                </button>
                            </form>
                        </div>

                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className="space-y-5">
                            <div className="flex justify-between">
                                <p className=" text-gray-400">Discount</p>
                                <p>N209,000</p>
                            </div>
                            <div className="flex justify-between">
                                <p className=" text-gray-400">Shipping fee</p>
                                <p className="text-blue-500">- 9,000</p>
                            </div>
                            <div className="flex justify-between">
                                <p className=" text-gray-400">K-secure/K-ship fee</p>
                                <p className="text-blue-500">- 9,000</p>
                            </div>
                            <div className="flex justify-between">
                                <p className=" text-gray-400">Subtotal</p>
                                <p>N200,000</p>
                            </div>
                        </div>

                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className=" space-y-4">
                            <div className="flex justify-between">
                                <p className=" text-gray-400">Subtotal</p>
                                <p>N209,000</p>
                            </div>

                            <div className=" items-center">
                                <FillButton name="Confirm Order" onClick={handleConfirmOrder} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default CheckOut;
