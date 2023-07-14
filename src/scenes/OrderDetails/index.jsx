import React, { useState } from "react";
import BackArrow from "./BackArrow";
// import FillButton from './FillButton';
import CancelOrder from "./CancelOrder";

import { BsExclamationCircleFill } from "react-icons/bs";

import img1 from "../../assets/images/GridItem.png";
import { BiCopy } from "react-icons/bi";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function OrdersDetails() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setOpenCancel(true);
  };

  const closeModal = () => {
    setOpenCancel(false);
  };

  return (
    <div className="p-10 font-medium">
      <div className="flex justify-between mb-8">
        <div>
          <BackArrow />

          <div className="mb-8 font-semibold text-2xl">Order Details</div>
        </div>

        {/* cancel button */}
        <div className=" align-bottom cursor-pointer">
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="bg-red-600 hover:bg-red-300 font-medium text-center rounded-full py-5 mr-2 px-14 mb-2"
          >
            Cancel Order
          </button>
        </div>
      </div>
      <CancelOrder
        className="absolute"
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        title={"Cancel Order"}
        content={"Are you sure you want to cancel your order"}
        nevermind={"nevermind"}
        cancel={"yes, cancel"}
      ></CancelOrder>

      {/* lower section */}
      <div className="flex gap-6 w-full">
        {/* left */}
        <div className=" w-7/12">
          <div className="mb-6">
            {/* first div */}
            <div className="block p-3 pl-6 bg-white border border-gray-200 rounded-t-lg">
              Products
            </div>

            <div className="block p-6 bg-white border border-gray-200">
              <div className="flex gap-3">
                <div>
                  <img src={img1} className=" rounded-lg h-24 w-24" />
                </div>
                <div className=" space-y-3">
                  <p>HD SLR CAMERA</p>
                  <p className=" text-blue-500">N 20,000</p>
                  <p className=" text-gray-400">QTY: 2</p>
                </div>
              </div>
            </div>

            <div className="block p-6 bg-white border border-gray-200 rounded-b-lg">
              <div className="flex gap-3">
                <div>
                  <img src={img1} className=" rounded-lg h-24 w-24" />
                </div>
                <div className=" space-y-3">
                  <p>NIKON</p>
                  <p className=" text-blue-500">N 64,000</p>
                  <p className=" text-gray-400">QTY: 1</p>
                </div>
              </div>
            </div>
          </div>

          {/* second div */}
          <div className="block p-3 pl-6 bg-white border border-gray-200 rounded-t-lg">
            Shipping Method
          </div>

          <div className="block p-6 bg-white border border-gray-200">
            <div className="flex justify-between items-center">
              <div className="gap-3 flex items-center">
                <img src={img1} className=" rounded-full h-10 w-10" />
                <p>Ship with K secure</p>
              </div>
              <div>
                <button>
                  <BsExclamationCircleFill
                    className=" text-gray-500"
                    size={24}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="block p-6 bg-white border border-gray-200 rounded-b-lg">
            <div className="space-y-5">
              <div className="flex justify-between">
                <p className=" text-gray-400">Subtotal</p>
                <p>N209,000</p>
              </div>
              <div className="flex justify-between">
                <p className=" text-gray-400">Subtotal</p>
                <p className="text-blue-500">- 9,000</p>
              </div>
              <div className="flex justify-between">
                <p className=" text-gray-400">Subtotal</p>
                <p>N200,000</p>
              </div>
            </div>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <div className=" space-y-4">
              <div className="flex justify-between">
                <p className=" text-gray-400">Subtotal</p>
                <p>N209,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-5/12">
          <div className="mb-6">
            {/* first div */}
            <div className="block p-3 pl-6 bg-white border border-gray-200 rounded-t-lg">
              <div className=" flex justify-between">
                <div className=" text-gray-400 text-sm">
                  ORDER ID: 4636478282838236
                </div>

                <div className="flex gap-2 items-center text-gray-400">
                  <BiCopy />
                  <div>
                    <p className=" text-sm">Copy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="block p-6 bg-white border border-gray-200">
              <div className=" flex justify-between">
                <div className="flex gap-4 items-center">
                  <img src={img1} className="rounded-full h-20 w-20" />
                  <div>
                    <p className=" text-xs text-gray-400">Seller</p>
                    <p className=" text-lg">The Cuddle Club</p>
                  </div>
                </div>

                <button className=" text-blue-500 text-sm">
                  Contact seller
                </button>
              </div>
            </div>

            <div className="block p-6 bg-white border border-gray-200 rounded-b-lg">
              <div className="mb-6">Delivery to</div>

              <div className=" flex justify-between items-center">
                <div className=" space-y-1">
                  <div className=" text-xl">Michael Steven</div>
                  <div className=" text-sm text-gray-400 font-normal">
                    2 Block A, Ikoyi Link Road
                  </div>
                </div>

                <span
                  type="button"
                  class="px-2 py-1 text-xs font-medium text-center text-gray-500 bg-gray-200 rounded-lg "
                >
                  Ongoing
                </span>
              </div>
            </div>
          </div>

          <div className="block p-3 pl-6 bg-white border border-gray-200 rounded-t-lg">
            {/* second order */}
            <p className="mb-8 text-lg">Track Order</p>

            <div className=" flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <div className=" space-y-1">
                  <p className="">Order Confirmed</p>
                  <p className=" text-xs text-gray-400">
                    Your order has been confirmed
                  </p>
                </div>
              </div>

              <div className=" space-y-1 text-center">
                <p className=" text-xs text-gray-400">10/10/10</p>
                <p className=" text-xs text-gray-400">04:00</p>
              </div>
            </div>
          </div>

          <div className="block p-6 bg-white border border-gray-200">
            <div className=" flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <div className=" space-y-1">
                  <p className="">Order Confirmed</p>
                  <p className=" text-xs text-gray-400">
                    Track your order{" "}
                    <span className=" text-blue-500">
                      - shipbubble.com/tracking
                    </span>
                  </p>
                </div>
              </div>

              <div className=" space-y-1 text-center">
                <p className=" text-xs text-gray-400">10/10/10</p>
                <p className=" text-xs text-gray-400">04:00</p>
              </div>
            </div>
          </div>

          <div className="block p-6 bg-white border border-gray-200 rounded-b-lg">
            <div className=" flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <div className=" space-y-1">
                  <p className="">Order Confirmed</p>
                  <p className=" text-xs text-gray-400">Product OTW...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default OrdersDetails;
