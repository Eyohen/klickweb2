import HomeCard from "./HomeCard"
import HeroCardImage from "../assets/images/hero-card-a.png"
import HeroCardImage2 from "../assets/images/hero-card-b.png"

const CardSection = () => {
  return (
    <div className="container mt-8 flex justify-center items-center gap-6">
        <HomeCard mainText="Become a Vendor" subtitle="Get started for free" linkText="Register Now" image={HeroCardImage}/>
        <HomeCard mainText="Free Shipping" subtitle="On Your First Order" cardClasses={"bg-[#EA1E61]"} linkText="Shop Now" image={HeroCardImage2} linkTextStyles="text-[#EA1E61]"/>
    </div>
  )
}

export default CardSection