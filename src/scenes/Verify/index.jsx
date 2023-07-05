import Logo from '../../assets/logo.png'
import { useState } from 'react'
import {Link } from "react-router-dom"
import Dialog from '../../components/Dialog'


const Verify = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    }


    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
            <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <img src={Logo} alt="Logo" className="" />
                        <div className="font-semibold text-3xl">
                            <p>Verify OTP</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>Kindly Input the 4-digit verification code sent to your email or phone number</p>
                        </div>
                    </div>

                    <div>
                        <form action="" method="post">
                            
                            <div className="flex flex-col space-y-16">
                                {/* <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-yellow-300" type="text" name="" id="" maxLength='1'/>
                </div>
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-yellow-300" type="text" name="" id="" maxLength='1'/>
                </div>
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-yellow-300" type="text" name="" id="" maxLength='1'/>
                </div>
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-yellow-300" type="text" name="" id="" maxLength='1'/>
                </div>
              </div> */}

                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    {
                                        otp.map((data, index) => {
                                            return <input className="w-16 h-16 flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-yellow-300"
                                                type="text" name=""
                                                id="" maxLength='1'
                                                key={index}
                                                value={data}
                                                onChange={e => handleChange(e.target, index)}
                                                onFocus={e => e.target.select()}
                                            />

                                        })
                                    }
                                </div>
                               

                                <div className="flex flex-col space-y-5">
                                    <div>
                                        <button onClick={e => alert("Enterd OTP is " + otp.join(""))} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-yellow-300 border-none text-white text-sm shadow-sm">
                                            Verify Account
                                        </button>
                                    </div>

                                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                        <p>Didn't receive code?</p> <a className="flex flex-row items-center text-yellow-300" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verify