import clsx from "clsx"

const Tags = ({ tag, active }) => {
    const classes = clsx("rounded-full bg-gray-200 text-tsecondary px-6 py-3 hover:cursor-pointer hover:bg-gray-300", {
        "bg-blue-600 hover:bg-blue-500 text-white": active
    })
    return (
        <span className={classes}>
            {tag}
        </span>
    )
}

export default Tags