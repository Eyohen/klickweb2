// import BabyImage from "../../assets/images/baby.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FeaturedCard = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const getStore = async () => {
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
  return (
    <div className="grid grid-cols-4 gap-4">
      {stores.map((store) => {
        return (
          <Link key={store.id} to={`/store/${store.id}`}>
            <div className="p-3 rounded-xl shadow-xl">
              <img
                src={store.logo}
                alt=""
                className=""
                style={{
                  display: "block",
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
              <div className="">
                <h1 className="font-bold pt-2">{store.name}</h1>
                <p className="text-gray-500">
                  {store.deliveryAddress.city +
                    ", " +
                    store.deliveryAddress.state}
                  <span className="" />{" "}
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
