import DollarIcon from '../../assets/icons/dollar.png'

const DashboardCard = () => {
    return (
        <div className="flex flex-col rounded-md shadow-sm border border-gray-300 p-5 space-y-12">
            <div className="flex items-center gap-2">
                <span>
                    <img src={DollarIcon} alt="Dollar Icon" />
                </span>
                <p className="text-gray-400">Total Income</p>
            </div>
            <p className="text-xl font-semibold">N1.31m</p>
        </div>
    )
}

export default DashboardCard