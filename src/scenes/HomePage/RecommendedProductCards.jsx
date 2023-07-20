import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const IsKSecureRibbon =
  "https://w7.pngwing.com/pngs/221/974/png-transparent-green-and-gold-ribbon-graphy-green-rosette-computer-network-ribbon-photography.png";
const RecommendedProductCards = () => {
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
        const discountedPrice = product.discountedPrice || product.price;
        const discountDisplay =
          product.discountedPrice !== null &&
          product.discountedPrice < product.price
            ? `-${(
                100 -
                (product.discountedPrice / product.price) * 100
              ).toFixed(0)}%`
            : "";

        return (
          <Link key={product.id} to={`/productdetails/${product.id}`}>
            <div className="relative border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-lg">
              {product.isKSecure && (
                <img
                  src={IsKSecureRibbon}
                  alt="IsKSecure Ribbon"
                  className="absolute top-0 right-0 w-12 h-12"
                />
              )}
              <img
                src={product.images[0]}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <img
                    src={product.store.logo}
                    alt="Store Logo"
                    className="w-6 h-6 mr-2 rounded-full"
                  />
                  <span className="text-sm font-medium">
                    {product.store.name}
                  </span>
                </div>
                <h1 className="text-lg font-semibold mb-2">{product.name}</h1>
                <p className="text-gray-400 mb-2">4.8 (1.2k)</p>
                {discountDisplay ? (
                  <p className="text-primary mb-2 font-semibold">
                    <span className="line-through">N{product.price}</span> N
                    {discountedPrice}
                  </p>
                ) : (
                  <p className="text-primary mb-2 font-semibold">
                    N{discountedPrice}
                  </p>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecommendedProductCards;