import BabyImage from "../../assets/images/baby.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FeaturedCard = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const getStore = async (storeId) => {
      try {
        const response = await axios.get(
          `https://klick-api.onrender.com/store/`
        );
        const data = response.data.data;
        setStores(data);
      } catch (error) {
        console.log(error);
      }
    };
    getStore();
  }, []);
  console.log(stores);
  return (
    <div>
      {stores.map((store) => {
        return (
          <Link to={`/store/${store.id}`}>
            <div className="rounded-xl border border-gray-200 shadow-sm">
              <img src={store.logo} alt="" className="rounded-xl" />
              <div className="flex flex-col px-4 py-2">
                <h1 className="font-semibold my-2">{store.name}</h1>
                <p className="text-gray-400 mb-2">
                  {store.deliveryAddress.city +
                    ", " +
                    store.deliveryAddress.state}
                  <span className="border border-r border-gray-300 mx-2" /> 4.8
                  (1.2k){" "}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FeaturedCard;
