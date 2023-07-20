import Hero from "./Hero";
import CardSection from "./CardSection";
import Categories from "./Categories";
import Recommended from "./Recommended";
import Featured from "./Featured";
import TodayDeals from "./TodayDeals";
import useGetLoggedInUser from "../../hooks/useGetLoginUser";

const HomePage = () => {
  const { user } = useGetLoggedInUser()
  return (
    <section>
      <Hero />
      <CardSection />
      <Categories />
      {/* <Recommended /> */}
      <Featured />
      <TodayDeals />
    </section>
  );
};

export default HomePage;
