import Rectangle from '../assets/images/Rectangle.png'

const RecommendedCards = () => {
  return (
    <div className="rounded-3xl border-2 border-gray-300">
        <img src={Rectangle} alt="" className="rounded-3xl"/>
        <div className='flex flex-col px-4 py-2'>
            <h1 className='font-semibold my-2'>Pink Dohar</h1>
            <p className='text-gray-400'>4.8 (1.2k)</p>
            <p className='text-primary'>N20,000</p>
        </div>
    </div>
  )
}

export default RecommendedCards