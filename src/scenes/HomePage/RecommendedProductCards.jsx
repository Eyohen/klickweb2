import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecommendedPRoductCards = () => {
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

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/productdetails/${product.id}`}>
            <img
              src={product.images[0]}
              alt=""
              className="rounded-xl w-full"
              style={{ height: "300px", width: "100%", objectFit: "cover" }}
            />
            <div className="flex flex-col px-4 py-2">
              <h1 className="font-semibold my-2"></h1>
              <p className="text-gray-400 mb-2">4.8 (1.2k)</p>
              <p className="text-primary mb-2 font-semibold">N20,000</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecommendedPRoductCards;
