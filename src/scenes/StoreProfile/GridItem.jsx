import GridImage from "../../assets/images/GridItem.png"
import { Link } from "react-router-dom"

const GridItem = () => {
  return (
    <div>
          <Link to='/productdetails'> 
    <div className="rounded-xl flex flex-col gap-4 mb-4">
      <img src={GridImage} alt="GridItem" className="rounded-xl" />
      <h1 className="text-xl font-semibold">HD camera</h1>
      <p>Ikoyi, Lagos <span className="border border-r border-gray-200" /> 4.8 (1.2k)</p>
      <p className="font-semibold text-xl text-primary">N20,000</p>
    </div>
    </Link>
    </div>
  )
}

export default GridItem