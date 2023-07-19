const DeliveryTiles = ({ name, image, time, price, isCOD, onSelectShippingOption }) => {
    const handleSelectShippingOption = () => {
        onSelectShippingOption({ name, price });
    };

    return (
        <div
            htmlFor={name} // Use a unique identifier for the radio button
            className="flex justify-between items-center gap-4 p-4 rounded-xl bg-white bg-opacity-90 backdrop-blur-2xl shadow-xl hover:bg-opacity-75 cursor-pointer transition"
        >
            <div className="flex gap-4 items-center justify-end">
                <img
                    src={image}
                    alt="user photo"
                    className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                    <h6 className="text-base">{name}</h6>
                    <span className="text-[11px] opacity-">{time} </span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {isCOD ? (
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <h3 className="font-bold">Cash</h3>
                            <input
                                type="radio"
                                name="mode"
                                id={name} // Use the same unique identifier for the radio button
                                className="peer"
                                onClick={handleSelectShippingOption} // Call the handler when clicked
                            />
                        </div>
                        <div className="flex gap-2">
                            <h3 className="font-bold">N {price}</h3>
                            <input
                                type="radio"
                                name="mode"
                                id={name} // Use the same unique identifier for the radio button
                                className="peer"
                                onClick={handleSelectShippingOption} // Call the handler when clicked
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <h3 className="font-bold">N {price}</h3>
                        <input
                            type="radio"
                            name="mode"
                            id={name} // Use the same unique identifier for the radio button
                            className="peer"
                            onClick={handleSelectShippingOption} // Call the handler when clicked
                        />
                    </div>
                )}
            </div>
        </div>
    );
};


const DeliveryCard = ({ shippingOptions, setSelectedShippingOption, setSubtotal, setSelectedCourier }) => {
    const handleSelectShippingOption = (option) => {
        setSelectedShippingOption(option);
        setSelectedCourier(option.name);
        setSubtotal(option.price);
    };
    return (
        <div className="flex flex-col space-y-4">
            <div className="space-y-1">
                <div className="font-bold">Your Order</div>
                <div className="font-bold">Select a delivery option</div>
                <div className="flex flex-col space-y-2">
                    {shippingOptions.map((courier) => (
                        <DeliveryTiles
                            key={courier.courier_id}
                            name={courier.courier_name}
                            image={courier.courier_image}
                            time={courier.delivery_eta}
                            price={courier.total}
                            isCOD={courier.is_cod_available}
                            onSelectShippingOption={handleSelectShippingOption}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeliveryCard;
