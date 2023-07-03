import Logo from '../../assets/logo.png'

const Register = () => {
    const inputClasses = "border border-gray-200 bg-gray-50 outline-none rounded-md px-4 py-2 w-full text-gray-600 focus:ring-secondary focus:border-secondary"
    return (
        <div className="flex flex-col items-center w-[25%] mx-auto space-y-5 mt-20">
            <img src={Logo} alt="Logo" className="" />
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-2'>Welcome to Klick</h1>
                <p className='text-gray-500 text-sm font-semibold'>Let's help you get started. Create an account to continue</p>
            </div>

            <form className='flex flex-col w-full'>
                <div className='mb-4'>
                    <label className='block text-sm' htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" className={inputClasses} />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm' htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className={inputClasses} />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm' htmlFor="phone">Whatsapp Phone Number</label>
                    <input type="number" name="phone" id="phone" className={inputClasses} />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm' htmlFor="address">Enter Delivery Address</label>
                    <input type="text" name="address" id="address" className={inputClasses} />
                </div>
                <div className=''>
                    <label className='block text-sm' htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className={inputClasses} />
                </div>
                <button className='bg-gray-50 py-4 text-gray-500 rounded-full mt-10' type='submit'>
                    Create Account
                </button>
            </form>
            <p className='text-gray-500'>Already have an account? <a href='/login' className='text-primary font-semibold'>Login</a></p>
        </div>
    )
}

export default Register