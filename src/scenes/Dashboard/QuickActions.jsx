import AddProductImage from "../../assets/icons/add_product.png"

const QuickActions = () => {
    return (
        <div className="flex justify-between items-center border px-8 py-4 rounded-md">
            <h1 className="font-semibold text-xl">Quick Actions:</h1>
            <div className="grid grid-cols-3 gap-12 basis-[80%]">
                <div className="flex flex-col items-center">
                    <img src={AddProductImage} alt="add product" className=""/>
                    <p>Add product</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={AddProductImage} alt="add product" className=""/>
                    <p>Apply Discount</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={AddProductImage} alt="add product" className=""/>
                    <p>Add product</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={AddProductImage} alt="add product" className=""/>
                    <p>Add product</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={AddProductImage} alt="add product" className=""/>
                    <p>Add product</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={AddProductImage} alt="add product" className=""/>
                    <p>Add product</p>
                </div>
            </div>
        </div>
    )
}

export default QuickActions