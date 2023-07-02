import CardSection from "../../components/CardSection"
import Categories from "../../components/Categories"
import Featured from "../../components/Featured"
import Hero from "../../components/Hero"
import Recommended from "../../components/Recommended"


const HomePage = () => {
  return (
    <section>
      <Hero />
      <CardSection />
      <Categories />
      <Recommended />
      <Featured />
    </section>
  )
}

export default HomePage