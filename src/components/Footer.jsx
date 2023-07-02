import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="container text-tertiary mt-20">
        <div className="flex justify-between">
            <div className="basis-1/3 space-y-8">
                <img src={Logo} alt="logo" className="" />
                <p className="">Klick - Multi-Vendor Marketplace. Shop from top level sellers, shops, and stores in Nigeria</p>
            </div>
            
            <div className="flex basis-1/2 justify-start items-start gap-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-tsecondary font-semibold text-xl">Company</h1>
                    <a href="" className="hover:cursor-pointer">About us</a>
                    <a href="" className="hover:cursor-pointer">Careers</a>
                    <a href="" className="hover:cursor-pointer">Blog</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-tsecondary font-semibold text-xl">Terms and Policies</h1>
                    <a href="" className="hover:cursor-pointer">Personal data</a>
                    <a href="" className="hover:cursor-pointer">Terms of service</a>
                    <a href="" className="hover:cursor-pointer">Privacy policy</a>
                    <a href="" className="hover:cursor-pointer">Cookies policy</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-tsecondary font-semibold text-xl">Contact</h1>
                    <a href="" className="hover:cursor-pointer">FAQs</a>
                    <a href="" className="hover:cursor-pointer">Contact Us</a>
                </div>

                <div></div>
            </div>
        </div>
        <div className="my-20">
            <p className="text-gray-500 text-center">Klick (c) 2023. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer