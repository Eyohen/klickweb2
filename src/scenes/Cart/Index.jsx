/*import  { useState } from "react";

import BackArrow from "./BackArrow";
import FillButton from "./FillButton";
import OutlineButton from "./OutlineButton";
import img1 from "../../assets/images/GridItem.png";
// import img1 from '../images/img1.jpg'

import { AiFillStar } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Footer from "../../components/Footer";
import CheckOutAddress from "./CheckOutAddress";

function Cart() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="p-10 font-medium relative">
      <BackArrow />

      <h3 className=" mb-8 font-semibold text-2xl">Place Order</h3>

      <div className="w-full flex gap-5">
        {/* left }
        <div className="w-4/6 space-y-5">
          <div className="block p-6 bg-white border border-gray-200 rounded-lg">
            <div className="mb-6">Delivery to</div>

            <div className=" flex justify-between items-center">
              <div className=" space-y-1">
                <div className=" text-xl">Michael Steven</div>
                <div className=" text-sm text-gray-400 font-normal">
                  2 Block A, Ikoyi Link Road
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

              <div className=" flex justify-between">
                <div className="mb-3">Ship with seller</div>

                <div className="">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className=" flex gap-3 items-center">
                <AiFillStar />
                <div className=" text-sm text-gray-400 font-normal">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                    velit illum provident a, ipsa maiores deleniti consectetur
                    nobis et eaque.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <div className="">
              <div className=" mb-6">Shipping Method</div>

              <div className=" flex justify-between">
                <div className="mb-3">Ship with seller</div>

                <div className="">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-2 flex gap-3 items-center">
                <AiFillStar />
                <div className=" text-sm text-gray-400 font-normal">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className=" mb-2 flex gap-3 items-center">
                <AiFillStar />
                <div className=" text-sm text-gray-400 font-normal">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className=" mb-2 flex gap-3 items-center">
                <AiFillStar />
                <div className=" text-sm text-gray-400 font-normal">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                1000
              </button>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <div className="">
              <div className=" mb-6">Shipping Method</div>

              <div className=" flex justify-between">
                <div className="mb-3">Ship with seller</div>

                <div className="">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className=" flex gap-3 items-center">
                <AiFillStar />
                <div className=" text-sm text-gray-400 font-normal">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className=" mb-2 flex gap-3 items-center">
                <AiFillStar />
                <div className=" text-sm text-gray-400 font-normal">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className=" mb-2 flex gap-3 items-center">
                <AiFillStar />
                <div className=" text-sm text-gray-400 font-normal">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className=" mb-2 flex gap-3 items-center">
                <AiFillStar />
                <div className=" text-sm text-gray-400 font-normal">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className=" mb-2 flex gap-3 items-center">
                <AiFillStar />
                <div className=" text-sm text-gray-400 font-normal">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className=" mb-2 flex gap-3 items-center">
                <AiFillStar />
                <div className=" text-sm text-gray-400 font-normal">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                1500
              </button>
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

        {/* right }
      </div>

      <Footer />
    </div>
  );
}

export default Cart;*/