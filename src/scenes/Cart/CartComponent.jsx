import React from "react";

const CartComponent = () => {
  return (
    <div className=" w-2/6 space-y-5">
      <div className="block p-6 bg-white border border-gray-200 rounded-lg">
        <p className=" text-lg mb-6">Your Cart</p>

        <div className="flex gap-4">
          <img src={img1} className="w-24 h-24 rounded-xl" />

          <div className="">
            <div className="flex justify-between items-center">
              <p>HD SLR CAMERA</p>
              <RiDeleteBin2Fill />
            </div>
            <p className=" my-3">N 20,000</p>
            <div className="flex gap-3 text-center">
              <button onClick={handleDecrement}>-</button>
              <h1>{count}</h1>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>
        </div>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="flex gap-4">
          <img src={img1} className="w-24 h-24 rounded-xl" />

          <div className="">
            <div className="flex justify-between items-center">
              <p>HD SLR CAMERA</p>
              <RiDeleteBin2Fill />
            </div>
            <p className=" my-3">N 20,000</p>
            <div className="flex gap-3 text-center">
              <button onClick={handleDecrement}>-</button>
              <h1>{count}</h1>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>
        </div>

        <div className="">
          <p className="mt-5">Discount Code</p>

          <form class="flex items-center mt-2">
            {/* <label for="voice-search" class="sr-only">Search</label> */}
            <div class="relative w-full">
              <input
                type="text"
                id="voice-search"
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-gray-200 rounded-lg border  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Apply
            </button>
          </form>
        </div>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

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

          <div className=" items-center">
            <FillButton name="Confirm Order" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
