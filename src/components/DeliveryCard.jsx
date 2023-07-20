import { useState } from "react";

const DeliveryTiles = ({ id, name, image, time, price, isCOD, code, selectedCourier, setSelectedCourier }) => {
    const [cashOnDeliverySelected, setCashOnDeliverySelected] = useState(false)
    const handleCourierSelection = () => {
        setSelectedCourier({
            courierName: name,
            courierId: id,
            serviceCode: code,
            cod: isCOD,
            total: price,
            cash: cashOnDeliverySelected
        }); // Set the selected courier when the radio button is clicked
    };

    return (
        <div
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
                        {/* <div className="flex gap-2">
                            <h3 className="font-bold">Cash</h3>
                            <input
                                type="radio"
                                name="mode"
                                id={name}
                                className="peer"
                                checked={selectedCourier?.courierId === id}
                                onChange={
                                    () => {
                                        handleCourierSelection
                                        setCashOnDeliverySelected(true)
                                    }
                                } // Call the handler when the radio button is clicked
                            />
                        </div> */}
                        <div className="flex gap-2">
                            <h3 className="font-bold">N {price}</h3>
                            <input
                                type="radio"
                                name="mode"
                                id={name}
                                className="peer"
                                checked={selectedCourier?.courierId === id}
                                onChange={handleCourierSelection} // Call the handler when the radio button is clicked
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <h3 className="font-bold">N {price}</h3>
                        <input
                            type="radio"
                            name="mode"
                            id={name}
                            className="peer"
                            checked={selectedCourier?.courierId === id}
                            onChange={handleCourierSelection} // Call the handler when the radio button is clicked
                        />
                    </div>
                )}
            </div>
        </div>
    );
};



const DeliveryCard = ({ shippingOptions, selectedCourier, setSelectedCourier }) => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="space-y-1">
                <div className="font-bold">Your Order</div>
                <div className="font-bold">Select a delivery option</div>
                <div className="flex flex-col space-y-2">
                    {shippingOptions.map((courier) => (
                        <DeliveryTiles
                            key={courier.courier_id}
                            id={courier.courier_id}
                            name={courier.courier_name}
                            image={courier.courier_image}
                            time={courier.delivery_eta}
                            price={courier.total}
                            code={courier.service_code}
                            isCOD={courier.is_cod_available}
                            setSelectedCourier={setSelectedCourier}
                            selectedCourier={selectedCourier}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeliveryCard;
