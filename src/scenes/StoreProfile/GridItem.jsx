//import GridImage from "../../assets/images/GridItem.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";

const GridItem = () => {
    const [storeProducts, setStoreProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const storeId = params.id;
    useEffect(() => {
        const getStoreProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://klick-api.onrender.com/product`
                );
                const data = response.data.data.products;
                setStoreProducts(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        getStoreProducts();
    }, []);

    let specificStoreProduct = storeProducts.filter((x) => x.storeId === storeId);
    if (loading) {
        return <LoadingScreen />;
    }
    return (
        <div className="grid grid-cols-3 gap-4">
            {specificStoreProduct.map((product) => {
                return (
                    <Link key={product.id} to={`/productdetails/${product.id}`}>
                        <div className="rounded-xl">
                            <img
                                src={product.images[0]}
                                alt="GridItem"
                                className="rounded-xl"
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <h1 className="text-xl font-semibold">{product.name}</h1>
                            <p>
                                Ikoyi, Lagos{" "}
                                <span className="border border-r border-gray-200" /> 4.8 (1.2k)
                            </p>
                            <p className="font-semibold text-xl text-primary">N20,000</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default GridItem;
