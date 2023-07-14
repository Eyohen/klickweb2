// import Camera from "../../assets/images/Camera.png";
import RecommendedPRoductCards from "./RecommendedProductCards";
// import RecommendedCards from "./RecommendedCards";
import Tags from "./Tags";

const TodayDeals = () => {
  return (
    <section className="container mt-12">
      <h1 className="font-semibold my-4">Today's Deals For You</h1>
      <div className="flex flex-wrap items-center space-x-5 mb-8">
        <Tags tag="All" active />
        <Tags tag="Women" />
        <Tags tag="Electronics" />
        <Tags tag="Baby" />
        <Tags tag="Homeware" />
        <Tags tag="Health" />
        <Tags tag="Beauty" />
        <Tags tag="Fashion" />
      </div>
      <div className="">
        <RecommendedPRoductCards />
      </div>
    </section>
  );
};

export default TodayDeals;
