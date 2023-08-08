// import Camera from "../../assets/images/Camera.png";
import RecommendedPRoductCards from "./RecommendedProductCards";
// import RecommendedCards from "./RecommendedCards";
import Tags from "./Tags";
import TodayDealTags from "./TodayDealTags";
import { useState } from "react";

const TodayDeals = () => {
  const [selectCat , setSelectCat] = useState(null)
  return (
    <section className="container mt-12">
      <h1 className="font-semibold my-4">Today's Deals For You</h1>
      <TodayDealTags setSelectCat={ setSelectCat} selectCat={selectCat}/>
      <div className="">
        <RecommendedPRoductCards setSelectCat={ setSelectCat} selectCat={selectCat} />
      </div>
    </section>
  );
};

export default TodayDeals;
