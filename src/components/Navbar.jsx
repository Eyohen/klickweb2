import { GiHamburgerMenu } from "react-icons/gi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { BsBell, BsToggleOff, BsToggleOn } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import Logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useLogout } from "../hooks/useLogout";
import NavbarSearch from "./NavbarSearch";

const Navbar = ({ handleSidebarToggle }) => {
    const [isBuyer, setIsBuyer] = useState(true);

    const navigate = useNavigate();
    const handleLogout = useLogout();

    const token = localStorage.getItem('access_token');
    const loggedIn = token ? true : false;

    const toggleLogic = () => {
        setIsBuyer((prevState) => !prevState);
        if (isBuyer) {
            navigate("/dashboard");
        } else {
            navigate("/");
        }
    };

    const { getTotalItemCount } = useContext(CartContext);
    const navIconStyle = "w-6 h-6 text-gray-600 cursor-pointer";
    const toggleStyle = "w-7 h-7 text-primary cursor-pointer";

    return (
        <div className="container flex justify-between items-center h-[108px] bg-white">
            {/* hamburger and icon */}
            <div className="flex items-center gap-4" onClick={()=> navigate('/')}>
                <GiHamburgerMenu
                    onClick={handleSidebarToggle}
                    className="w-8 h-8 text-gray-600 hover:cursor-pointer"
                />
                <img src={Logo} alt="logo" className="hover:cursor-pointer" />
            </div>

           <NavbarSearch/>

            {/* others */}
            <div className="flex justify-between items-center space-x-6">
                {/* bell icon */}
                <div className="hidden 7xl:flex items-center justify-center h-10 w-10 bg-gray-100 rounded-full">
                    <BsBell className={navIconStyle} />
                </div>

                <div
                    onClick={toggleLogic}
                    className="flex items-center space-x-2 hover:cursor-pointer text-primary"
                >
                    {isBuyer ? (
                        <>
                            <BsToggleOff className={toggleStyle} />
                            <a>Buyer</a>
                        </>
                    ) : (
                        <>
                            <BsToggleOn className={toggleStyle} />
                            <a>Seller</a>
                        </>
                    )}
                </div>

                {/* help */}
                <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <RiQuestionnaireLine className={navIconStyle} />
                    <a href="#">Help</a>
                </div>

                {/* profile not logged in */}
                {!loggedIn ? (
                    <div className="flex items-center space-x-2 hover:cursor-pointer">
                        <BiUser className={navIconStyle} />
                        <Link to="/login">Login</Link>
                    </div>
                ) :
                    <div className="flex items-center space-x-2 hover:cursor-pointer">
                        <BiUser className={navIconStyle} />
                        <Link onClick={handleLogout}>Logout</Link>
                    </div>
                }

                {/* logged in user */}
                <div className="hidden 7xl:flex items-center space-x-2 hover:cursor-pointer">
                    <BiUser className={navIconStyle} />
                    <div className="flex items-center">
                        <p className="text-sm">Mike Dean</p>
                        <BiChevronDown className="w-8 h-8 text-gray-600" />
                    </div>
                </div>

                {/* cart */}
                <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <AiOutlineShoppingCart className={navIconStyle} />
                    <a href="/cart">Cart</a>
                    <div className="flex items-center justify-center rounded-full bg-primary text-white p-2.5 w-8 h-8">
                        <p className="text-center">{getTotalItemCount()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
