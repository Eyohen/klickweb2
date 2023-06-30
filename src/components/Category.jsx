import MumImage from "../assets/images/mum.png"

const Category = () => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="w-[163px] h-[163px] rounded-lg">
                <img src={MumImage} alt="mum" className="" />
            </div>
            <p className="font-semibold">Mum</p>
        </div>
    )
}

export default Category