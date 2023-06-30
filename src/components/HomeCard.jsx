/* eslint-disable react/prop-types */
import clsx from "clsx"

const HomeCard = ({ mainText, subtitle, cardClasses, linkText, linkTextStyles, image }) => {
    const cardWrapperClasses = clsx('flex justify-between rounded-3xl px-5 py-8 w-[648px] bg-[#6C5FBC]', cardClasses)
    const linkTextStyle = clsx("bg-white rounded-full px-6 py-3 text-[#6C5FBC] font-semibold", linkTextStyles)
    return (
        <div className={cardWrapperClasses}>
            <div className="flex flex-col justify-between space-y-4">
                <div className="text-white space-y-1">
                    <h1 className="text-2xl">{mainText}</h1>
                    <p className="text-sm">{subtitle}</p>
                </div>

                <div className="pb-4">
                    <button className={linkTextStyle}>
                        {linkText}
                    </button>
                </div>


            </div>

            {/* image section */}
            <img src={image} alt="hero-card-image" className="" />
        </div>
    )
}

export default HomeCard