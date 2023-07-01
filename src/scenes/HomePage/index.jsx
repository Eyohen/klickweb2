import CardSection from "../../components/CardSection"
import Categories from "../../components/Categories"
import Hero from "../../components/Hero"
import Recommended from "../../components/Recommended"

const HomePage = () => {
  return (
    <section>
      <Hero />
      <CardSection />
      <Categories />
      <Recommended />
    </section>
  )
}

export default HomePage