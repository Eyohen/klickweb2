import Hero from "./Hero"
import CardSection from "./CardSection"
import Categories from "./Categories"
import Recommended from "./Recommended"
import Featured from "./Featured"
import TodayDeals from "./TodayDeals"


const HomePage = () => {
  return (
    <section>
      <Hero />
      <CardSection />
      <Categories />
      <Recommended />
      <Featured />
      <TodayDeals />
    </section>
  )
}

export default HomePage