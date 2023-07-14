import MumImage from "../../assets/images/mum.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          `https://klick-api.onrender.com/category/getAll/`
        );
        const data = response.data.data;
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  console.log(categories);

  return (
    <>
      {categories.map((x) => {
        return (
          <div className="flex flex-col space-y-4" key={x.id}>
            <div className="w-[163px] h-[163px] rounded-lg">
              <img src={x.image} alt="mum" className="" />
            </div>
            <p className="font-semibold">{x.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Category;
