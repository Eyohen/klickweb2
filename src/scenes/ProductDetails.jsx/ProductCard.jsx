import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/GridItem.png";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

function ProductCard({ product }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `https://klick-api.onrender.com/product/`
        );
        const data = response.data.data.products;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  let similarProduct = products.filter(
    (x) => x.categoryId === product.categoryId
  );

  return (
    <div className="grid grid-cols-5 gap-4">
      {similarProduct.map((product) => {
        return (
          <div className="" key={product.id}>
            <img className="h-auto max-w-full rounded-lg" src={img1} />
            <div className=" text-lg font-medium">{product.name}</div>
            <div className="flex space-x-3 items-center text-sm">
              <h3>Ikoyi, Nigeria</h3>
              <hr className="border-l-2 border-gray-300 h-5" />
              <div className="flex space-x-2 items-center">
                <AiFillStar color="gold" className=" h-5 w-5" />
                <div> 4.8 (1.2k) </div>
              </div>
            </div>
            <div className=" text-blue-600 font-medium">{product.price}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
