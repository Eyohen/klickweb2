import clsx from 'clsx';

const ReusableComponent = ({ classes, children }) => {
    const classNames = clsx('flex justify-between items-center gap-4 bg-red-800', classes);

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default ReusableComponent;
