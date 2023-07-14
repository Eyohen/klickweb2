import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/GridItem.png";
// import img1 from '../images/img1.jpg'
import { AiFillStar } from "react-icons/ai";

function ProductCard() {
  return (
    <div className=" text-gray-500 space-y-2">
      <img className="h-auto max-w-full rounded-lg" src={img1} />
      <div className=" text-lg font-medium">HD SLR CAMERA</div>
      <div className="flex space-x-3 items-center text-sm">
        <h3>Ikoyi, Nigeria</h3>
        <hr className="border-l-2 border-gray-300 h-5" />
        <div className="flex space-x-2 items-center">
          <AiFillStar color="gold" className=" h-5 w-5" />
          <div> 4.8 (1.2k) </div>
        </div>
      </div>
      <div className=" text-blue-600 font-medium">N20,000</div>
    </div>
  );
}

export default ProductCard;
