import DashboardCard from "./DashboardCard"

const Dashboard = () => {
    return (
        <div className="container flex gap-10">
            {/* left section */}
            <div className="grid grid-cols-2 gap-5 basis-[60%]">
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
            </div>

            {/* right section */}
            <div>
                <div className="flex justify-between items-center">
                    <h1>To-do (5)</h1>
                    <button>View all</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard