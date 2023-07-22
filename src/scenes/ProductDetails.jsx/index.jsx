import { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import img1 from "../../assets/images/GridItem.png";
import { AiFillStar } from "react-icons/ai";
import Footer from "../../components/Footer";
import BackArrow from "./BackArrow";
import FillButton from "./FillButton";
import OutlineButton from "./OutlineButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../contexts/CartContext";

function ProductDetails() {
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);
    
    const cartContext = useContext(CartContext);
    const { addToCart } = cartContext;
    
    const params = useParams();
    const productId = params.id;
    const navigate = useNavigate();
    
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(
                    `https://klick-api.onrender.com/product/${productId}`
                );
                const data = response.data.data;
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, [productId]);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        const selectedQty = count;

        const { id } = product;
        const productToAdd = {
            id,
            count: selectedQty,
        };
        addToCart(productToAdd);
    };

    const handleAddToCartAndCheckout = () => {
        const selectedQty = count;

        const { id } = product;
        const productToAdd = {
            id,
            count: selectedQty,
        };
        addToCart(productToAdd);
        // navigate('/checkout')
    };
    const colors = product?.specifications?.colors.toLowerCase().split(", ");

    return (
        <div className="p-10">
            <BackArrow />

            <div className="w-full gap-20 flex">
                {/* left */}
                <div className="w-1/2">
                    <div>
                        {product.images ? (
                            <img
                                src={product.images[0]}
                                className="rounded-xl w-2/3 h-full"
                            />
                        ) : (
                            <img src={img1} className="rounded-xl" alt="Product" />
                        )}
                    </div>
                    <div className="flex gap-4 h-28 w-28 mt-5">
                        {product.images ? (
                            product.images.map((x) => (
                                <img src={x} className="rounded-2xl" key={x} alt="Product" />
                            ))
                        ) : (
                            <img src={img1} className="rounded-xl" alt="Product" />
                        )}
                    </div>

                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    <div className="font-semibold text-lg mb-5">Sellers Info:</div>

                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <div>
                                {product.images ? (
                                    <img
                                        src={product.images[0]}
                                        className="h-10 w-10 rounded-full"
                                        alt="Seller"
                                    />
                                ) : (
                                    <img
                                        src={img1}
                                        className="h-10 w-10 rounded-full"
                                        alt="Seller"
                                    />
                                )}
                            </div>
                            <div className="">
                                <h3 className="font-semibold">The Cuddle Club</h3>
                                <div className="text-gray-500 flex items-center gap-2">
                                    <AiFillStar />
                                    <h3 className="text-xs">Ikoyi, Lagos</h3>
                                </div>
                            </div>
                        </div>
                        <div className="text-blue-600">View Profile</div>
                    </div>
                </div>

                {/* right */}
                <div className="w-1/2">
                    <div className="text-3xl font-bold">{product.name}</div>

                    <div className="items-center flex gap-4 my-5">
                        <div className="flex">
                            <AiFillStar size={24} color="gold" />
                            <AiFillStar size={24} color="gold" />
                            <AiFillStar size={24} color="gold" />
                            <AiFillStar size={24} color="gold" />
                            <AiFillStar size={24} color="grey" />
                        </div>
                        <div>4.5 (215 reviews)</div>
                        <div className="text-blue-600 font-medium">Read reviews</div>
                    </div>
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                    <div className="text-2xl font-bold">₦ {product.price}</div>

                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                    <div>
                        <div>
                            <div className="text-sm text-gray-500 mb-5">
                                Available Colors
                            </div>
                            <div className="flex gap-4">
                                {colors && colors?.map((color, index) => (
                                    <label
                                        key={index}
                                        className={`block h-12 w-12 cursor-pointer rounded-full ${color === "black" ? 'bg-black' : ''} bg-${color}-500 transition`}
                                    />
                                ))}
                                {
                                    !colors && (
                                        <label
                                            className={`block h-12 w-12 cursor-pointer rounded-full bg-gray-500 transition`}
                                        />
                                    )
                                }
                            </div>
                        </div>

                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className="items-center flex gap-12">
                            <div className="p-4 border rounded-xl bg-slate-200">
                                <div className="text-xl flex gap-14">
                                    <button onClick={handleDecrement}>-</button>
                                    <h1>{count}</h1>
                                    <button onClick={handleIncrement}>+</button>
                                </div>
                            </div>
                            <div className="text-gray-500">
                                Only <span className="text-orange-500">9 items</span> left
                            </div>
                        </div>

                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className="my-8 flex w-full">
                            <FillButton
                                onClick={handleAddToCartAndCheckout}
                                name="Buy Now"
                                className="w-1/2"
                            />
                            <OutlineButton onClick={handleAddToCart} name="Buy Later" className="w-1/2" />
                        </div>

                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                        <div className="text-gray-500">{product.description}</div>
                    </div>
                </div>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* bottom half */}
            <div className="font-medium mb-4">Related Products:</div>

            <div className="">
                <ProductCard product={product} />
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}

export default ProductDetails;
