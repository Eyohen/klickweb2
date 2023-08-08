import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useGetProducts } from "../../api/Product_api";
const IsKSecureRibbon =
  "https://az31609.vo.msecnd.net/assets/images/widgetImages/113324ba7b5b-cdc3-4b38-8a5f-5af08290009d.jpg";
const RecommendedProductCards = ({setSelectCat , selectCat}) => {
  const [products, setProducts] = useState([]);

  

  const {isError , isFetching , isLoading , data} = useGetProducts((selectCat ? {category : selectCat?.id} : selectCat))

  if(isLoading || isFetching){
    return <div>
       ...Loading
    </div>
  }

  

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.data?.products?.map((product) => {
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
            <div className="relative border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-lg shadow-xl">
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