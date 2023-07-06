import AddProductImage from "../../assets/icons/add_product.png"
import ViewMyStoreImage from "../../assets/icons/viewmystore.png"
import ApplyDiscountImage from "../../assets/icons/apply_discount.png"
import KlickSupportImage from "../../assets/icons/klick_support.png"
import SettingsImage from "../../assets/icons/settings.png"
import WhatsappImage from "../../assets/icons/whatsapp.png"
import {Link} from 'react-router-dom'

const QuickActions = () => {
    return (
        <div className="flex justify-between items-center border px-8 py-4 rounded-md">
            <h1 className="font-semibold text-xl">Quick Actions:</h1>
            <div className="grid grid-cols-3 gap-12 basis-[80%]">
            <Link to='/addproduct'> <div className="flex flex-col items-center">
                    <img src={AddProductImage} alt="add product" className=""/>
                    <p>Add product</p>
                </div>  </Link>
                <Link to='/register'>  <div className="flex flex-col items-center">
                    <img src={ApplyDiscountImage} alt="add product" className=""/>
                    <p>Apply Discount</p>
                </div>  </Link>
                <Link to='/viewmystore'> <div className="flex flex-col items-center">
                    <img src={ViewMyStoreImage} alt="view store" className=""/>
                    <p>View my store</p>
                </div>   </Link>
                <Link to='/register'>  <div className="flex flex-col items-center">
                    <img src={KlickSupportImage} alt="add product" className=""/>
                    <p>Klick Support</p>
                </div>   </Link>
                <Link to='/register'>  <div className="flex flex-col items-center">
                    <img src={SettingsImage} alt="add product" className=""/>
                    <p>Settings</p>
                </div>   </Link>
                <Link to='/register'> <div className="flex flex-col items-center">
                    <img src={WhatsappImage} alt="add product" className="" />
                    <p className="cursor-pointer">WhatsApp Klick Support</p>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default QuickActions