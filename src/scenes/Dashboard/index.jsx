import DashboardCard from "./DashboardCard"
import WebIcon from "../../assets/icons/web.png"
import PlusIcon from "../../assets/icons/plus.png"
import { BsChevronRight } from "react-icons/bs"
import QuickActions from "./QuickActions"
import { LineChart, Line, PieChart, Pie, ComposedChart, Area, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Dashboard = () => {


    const data01 = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];
    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
        {
            "name": "Group E",
            "value": 3908
        },
        {
            "name": "Group F",
            "value": 4800
        }
    ];



    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]



    return (
        <section className="container flex flex-col gap-10 mt-4">
            <div className="flex justify-center gap-2 items-center">
                <p className="font-semibold">Create Store</p><a href="/dashboard/store/create"><img src={PlusIcon} alt="add-icon" /></a>
            </div>
            <div className="flex gap-10">
                {/* left section */}
                <div className="grid grid-cols-2 gap-5 basis-[80%]">
                    <DashboardCard />
                    <DashboardCard />
                    <DashboardCard />
                    <DashboardCard />
                </div>

                {/* right section */}
                <div className="basis-[20%] text-gray-500 mt-4">
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
                    <div>

                    </div>

                </div>
            </div>
            <div className="flex gap-10 mb-20">
                {/* left side */}
                <div className="flex flex-col basis-[90%] gap-8">
                    <QuickActions />
                    <div className="border rounded-md">
                        <ComposedChart width={730} height={400} data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Area type="monotone" dataKey="amt" fill="#EEE8AA" stroke="#8884d8" />
                            <Bar dataKey="pv" barSize={20} fill="#FFD700" />
                            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                    </div>
                </div>

                {/* right section */}
                <div className="flex flex-col items-center gap-10 border rounded-md px-4 py-5">
                    <div className="flex justify-between items-center gap-20">
                        <p className="font-semibold">Sales Report</p>
                        <p>Month</p>
                    </div>
                    <PieChart width={280} height={250}>
                        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#EEE8AA" />
                        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#FFD700" label />
                    </PieChart>
                    <div>
                        <div className="flex justify-between items-center gap-20">
                            <p className="">In app sales</p>
                            <p>0.0%</p>
                        </div>
                        <div className="flex justify-between items-center gap-20">
                            <p className="">In app sales</p>
                            <p>0.0%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard