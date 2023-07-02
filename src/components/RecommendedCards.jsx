import Rectangle from '../assets/images/Rectangle.png'

const RecommendedCards = () => {
  return (
    <div className="rounded-xl border border-gray-200 shadow-sm">
        <img src={Rectangle} alt="" className="rounded-xl"/>
        <div className='flex flex-col px-4 py-2'>
            <h1 className='font-semibold my-2'>Pink Dohar</h1>
            <p className='text-gray-400 mb-2'>4.8 (1.2k)</p>
            <p className='text-primary mb-2 font-semibold'>N20,000</p>
        </div>
    </div>
  )
}

export default RecommendedCards