import CardSection from "../../components/CardSection"
import Categories from "../../components/Categories"
import Featured from "../../components/Featured"
import Hero from "../../components/Hero"
import Recommended from "../../components/Recommended"
import TodayDeals from "../../components/TodayDeals"


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