import GridImage from "../../assets/images/GridItem.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GridItem = () => {
  const [storeProducts, setStoreProducts] = useState([]);
  const params = useParams();
  const storeId = params.id;
  useEffect(() => {
    const getStoreProducts = async () => {
      try {
        const response = await axios.get(
          `https://klick-api.onrender.com/product`
        );
        const data = response.data.data.products;
        setStoreProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getStoreProducts();
  }, []);

  let specificStoreProduct = storeProducts.filter((x) => x.storeId === storeId);
  return (
    <div>
      {specificStoreProduct.map((product) => {
        return (
          <Link to="/productdetails">
            <div className="rounded-xl flex flex-col gap-4 mb-4">
              <img
                src={product.images[0]}
                alt="GridItem"
                className="rounded-xl"
              />
              <h1 className="text-xl font-semibold">{product.name}</h1>
              <p>
                Ikoyi, Lagos{" "}
                <span className="border border-r border-gray-200" /> 4.8 (1.2k)
              </p>
              <p className="font-semibold text-xl text-primary">N20,000</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default GridItem;
