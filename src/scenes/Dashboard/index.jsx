import DashboardCard from "./DashboardCard"
import WebIcon from "../../assets/icons/web.png"
import { BsChevronRight } from "react-icons/bs"
import QuickActions from "./QuickActions"

const Dashboard = () => {
    return (
        <section className="container flex flex-col gap-10 mt-10">
            <div className="flex gap-10">
                {/* left section */}
                <div className="grid grid-cols-2 gap-5 basis-[70%]">
                    <DashboardCard />
                    <DashboardCard />
                    <DashboardCard />
                    <DashboardCard />
                </div>

                {/* right section */}
                <div className="basis-[30%] text-gray-500 mt-4">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="font-bold text-tsecondary">To-do (5)</h1>
                        <button className="text-primary">View all</button>
                    </div>
                    <div className="border my-6" />

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img src={WebIcon} alt="web icon" />
                            <p>Add social media links</p>
                        </div>
                        <BsChevronRight className="text-gray-400" />
                    </div>

                    <div className="border my-6" />

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img src={WebIcon} alt="web icon" />
                            <p>Add Bank Details</p>
                        </div>
                        <BsChevronRight className="text-gray-400" />
                    </div>
                    <div className="border my-6" />
                </div>
            </div>
            <div className="flex gap-10">
                {/* left side */}
                <div className="basis-[68%]">
                    <QuickActions />
                </div>

                {/* right section */}
                <div>

                </div>
            </div>
        </section>
    )
}

export default Dashboard