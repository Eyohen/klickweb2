import ProfileImage from "../../assets/images/babyEat.png";
import MapImage from "../../assets/images/map.png";
import ProfileIcon from "../../assets/icons/ProfileIcon.png";
import LocationIcon from "./LocationIcon";
import FBIcon from "./FBIcon";
import InstagramIcon from "./InstagramIcon";
import SettingsIcon from "./SettingsIcon";
import RatingIcon from "./RatingIcon";
import ProgressIcon from "./ProgressIcon";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [storeData, setStoreData] = useState({});

  const params = useParams();

  //   const getToken = () => {
  //     return JSON.parse(localStorage.getItem("user").access_token);
  //   };

  const storeId = params.id;

  useEffect(() => {
    const getStore = async (storeId) => {
      try {
        const response = await axios.get(
          `https://klick-api.onrender.com/store/${storeId}`
        );
        const data = response.data.data;
        setStoreData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getStore(storeId);
  }, []);

  return (
    <div className=" mx-auto border-2 border-gray-200 rounded-xl flex flex-col space-y-5 max-w-md">
      <img
        src={storeData.logo}
        alt="Profile"
        className="rounded-t-xl max-w-md"
      />
      <div className="flex justify-between items-center px-4 bg-gray-50 py-4">
        <div className="flex justify-between items-center gap-4">
          <img src={storeData.log} alt="Profile" className="w-12" />
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">{storeData.name}</h1>
            <h1 className="text-gray-500 flex items-center gap-2">
              <LocationIcon />
              {storeData.location}
            </h1>
          </div>
        </div>
        <button className="text-black rounded-full bg-secondary px-3 py-2">
          Contact
        </button>
      </div>
      <div className="py-4 flex flex-col gap-4 px-4">
        <p className="font-semibold">Overview</p>
        <p className="text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque illo
          tenetur architecto voluptatem error? laudantium, quidem odit voluptas,
          labore in voluptatum et voluptate nesciunt ducimus. Cum.{" "}
          <span className="text-primary">Read more</span>
        </p>
        <p className="font-semibold">
          Monday - Friday:{" "}
          <span className="text-primary font-normal">10:00 - 22:00</span>
        </p>
        <p className="font-semibold">
          Monday - Friday:{" "}
          <span className="text-primary font-normal">10:00 - 22:00</span>
        </p>
      </div>
      <div className="p-4 flex justify-around">
        <div>
          <p className="text-gray-500">Reviews</p>
          <p className="font-semibold">4.8 (1.2k)</p>
        </div>

        <div className="border-r border-gray-200" />

        <div className="flex flex-col">
          <p className="text-gray-500">Response time</p>
          <p className="font-semibold">2 Hours</p>
        </div>
      </div>

      <div className="flex gap-5 px-8 py-2">
        <p>Social media</p>
        <FBIcon />
        <InstagramIcon />
      </div>

      <div className="py-2 mx-auto">
        <button className="rounded-full border-2 border-secondary font-semibold text-xl px-10 py-5 flex gap-2 items-center">
          <SettingsIcon />
          View available Discounts
        </button>
      </div>

      {/* review section */}
      <div className="py-2 px-4 flex justify-between">
        <div>
          <h1 className="font-semibold mb-4">Reviews</h1>
          <div className="flex flex-col gap-5 px-8 py-4 items-center border-r border-gray-400">
            <h1 className="font-bold text-4xl mt-4">4.8</h1>
            <div className="flex">
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
            </div>
            <p className="text-gray-400">(4.8k reviews)</p>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-right mb-4">See All</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p>5</p>
              <ProgressIcon />
            </div>
            <div className="flex items-center gap-2">
              <p>4</p>
              <ProgressIcon />
            </div>
            <div className="flex items-center gap-2">
              <p>3</p>
              <ProgressIcon />
            </div>
            <div className="flex items-center gap-2">
              <p>2</p>
              <ProgressIcon />
            </div>
            <div className="flex items-center gap-2">
              <p>1</p>
              <ProgressIcon />
            </div>
          </div>
        </div>
      </div>

      {/* address section */}
      <div className="py-2 px-4 space-y-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Address</p>
          <div className="text-right flex items-center gap-2">
            <LocationIcon />
            <p className="text-gray-400">Ikoyi, Lagos, Nigeria.</p>
          </div>
        </div>
        <div className="">
          <img src={MapImage} alt="Map" className="w-full" />
        </div>
        <div className="my-8" />
      </div>
    </div>
  );
};

export default Profile;
