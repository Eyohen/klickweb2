import Rectangle from '../../assets/images/Rectangle.png'
import RecommendedCards from "./RecommendedCards"

const Recommended = () => {
  return (
    <section className="container mt-12">
        <h1 className="mb-4 font-semibold">Recommended for you</h1>
        <div className="flex items-center space-x-5 mt-4 overflow-x-auto scrollbar-hide">
        <RecommendedCards image={Rectangle} title={"Pink Dohar"}/>
        <RecommendedCards image={Rectangle} title={"Pink Dohar"}/>
        <RecommendedCards image={Rectangle} title={"Pink Dohar"}/>
        <RecommendedCards image={Rectangle} title={"Pink Dohar"}/>
        <RecommendedCards image={Rectangle} title={"Pink Dohar"}/>
        <RecommendedCards image={Rectangle} title={"Pink Dohar"}/>
        <RecommendedCards image={Rectangle} title={"Pink Dohar"}/>
    </div>
    </section>
  )
}

export default Recommended