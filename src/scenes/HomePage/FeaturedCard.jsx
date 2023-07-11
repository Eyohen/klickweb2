import BabyImage from "../../assets/images/baby.png"
import {Link} from 'react-router-dom'

const FeaturedCard = () => {
    return (
        <div>
             <Link to='/store'> 
        <div className="rounded-xl border border-gray-200 shadow-sm">
            <img src={BabyImage} alt="" className="rounded-xl" />
            <div className='flex flex-col px-4 py-2'>
                <h1 className='font-semibold my-2'>The Cuddle Club</h1>
                <p className='text-gray-400 mb-2'>Ikoyi Lagos <span className="border border-r border-gray-300 mx-2" /> 4.8 (1.2k) </p>
            </div>
        </div>
        </Link>
        </div>
    )
}

export default FeaturedCard