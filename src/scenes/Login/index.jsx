import Logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import { toast } from "react-toastify";

const Login = () => {
    const history = useNavigate();

    const [isAuthChange, setIsAuthChange] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const initialState = {
        email: "",
        password: "",
    };
    const handleSubmitForm = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://klick-api.onrender.com/auth/signin",
                values
            );
            if (response.data.success === true) {
                localStorage.setItem("access_token", response.data.access_token);
                toast.success("Logged in!");
                // history("/");
                window.location.href = "/"
            } else {
                throw new Error("Error posting data to API");
            }
        } catch (error) {
            setError(error.response.data.msg);
            console.error("Error sending form data : ", error);
        } finally {
            setIsLoading(false);
        }
    };

    const { values, handleChange, handleSubmit } = useSignup(
        initialState,
        handleSubmitForm
    );
    return (
        <div className="flex flex-col items-center w-[25%] mx-auto space-y-5 mt-20">
            <img src={Logo} alt="Logo" className="" />
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Welcome to Klick</h1>
                <p className="text-gray-500 text-sm font-semibold">
                    {" "}
                    Login to your account to continue
                </p>
            </div>

            {/* Create to new component */}

            <div className="rounded-full capital cursor-pointer bg-sky-50 flex w-full p-1.5">
                <button
                    onClick={() => setIsAuthChange((prevState) => !prevState)}
                    className={`rounded-full w-1/2  px-3 py-2.5 ${isAuthChange
                        ? " bg-[#0485E8] text-center text-white"
                        : "text-center text-gray-600"
                        }`}
                >
                    Email
                </button>
                <button
                    onClick={() => setIsAuthChange((prevState) => !prevState)}
                    className={`rounded-full w-1/2  px-3 py-2.5 ${!isAuthChange
                        ? " bg-[#0485E8] text-center text-white"
                        : "text-center text-gray-600"
                        }`}
                >
                    Phone Number
                </button>
            </div>

            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                {isAuthChange ? (
                    <div className="mb-4">
                        <label className="block text-sm" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            className="border border-gray-200 bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600"
                        />
                    </div>
                ) : (
                    <div className="mb-4 relative items-center">
                        <img
                            className="absolute ml-3 mt-7 w-7 h-7 "
                            src="https://www.svgrepo.com/show/405569/flag-for-flag-nigeria.svg"
                        />

                        <label className="block text-sm" htmlFor="email">
                            Phone Number
                        </label>

                        <input
                            type="phone_number"
                            name="phone_number"
                            id="phone_number"
                            className="border border-gray-200 bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600"
                        />
                    </div>
                )}

                <div className="">
                    <label className="block text-sm" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        className="border border-gray-200 bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600"
                    />
                </div>
                <button
                    className="bg-gray-50 py-4 text-gray-500 rounded-full mt-10"
                    type="submit"
                >
                    {isLoading ? "...Logging In" : "Login"}
                </button>
                <div>
                    {error ? (
                        <div className="text-red-500 text-base">
                            {" "}
                            Oops, something went wrong: {error}{" "}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </form>
            <p className="text-gray-500">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary font-semibold">
                    Create Account
                </Link>
            </p>

            <p className="text-gray-700">Or continue with</p>
        </div>
    );
};

export default Login;
