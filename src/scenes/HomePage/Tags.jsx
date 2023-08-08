import clsx from "clsx"

const Tags = ({ tag, active , onClick }) => {
    const classes = clsx(
        "rounded-full bg-gray-200 text-tsecondary px-6 py-3 hover:cursor-pointer hover:bg-gray-300",
        active ? "bg-blue-500 hover:bg-blue-400 text-white" : ""
    );

    return (
        <span className={classes} onClick={()=>onClick()}>
            {tag}
        </span>
    );
};

export default Tags