const DeliveryTiles = ({ name, image, time, price, isCOD }) => {
    return (
        <div
            htmlFor="user1"
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
                    <span className="text-sm opacity-">{time} </span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {isCOD ? (
                    <h3 className="font-bold">Cash on Delivery</h3>
                ) : (
                    <h3 className="font-bold">N {price}</h3>
                )}
                <input type="radio" name="mode" id="mode" className="peer" />
            </div>
        </div>
    );
};


const DeliveryCard = ({ shippingOptions }) => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="space-y-1">
                <div className="font-bold">Your Order</div>
                <div className="bg-red-300 rounded-lg text-white">
                    Get Delivery Prices
                </div>
                <div className="font-bold">Select a delivery option</div>
                <div className="flex flex-col space-y-2">
                    {shippingOptions.map((courier) => (
                        <DeliveryTiles
                            key={courier.courier_id}
                            name={courier.courier_name}
                            image={courier.courier_image}
                            time={courier.delivery_eta}
                            price={courier.is_cod_available ? "Cash on Delivery" : courier.total}
                            isCOD={courier.is_cod_available}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeliveryCard;
